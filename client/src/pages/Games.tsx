import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { X, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';

// Types
interface Game {
  id: string;
  name: string;
  nameFr: string;
  description: string;
  descriptionFr: string;
  type: string;
  embedUrl: string;
  bgImage: string;
}

interface GamesData {
  scratch: Game[];
  kahoot: Game[];
}

// Données par défaut (fallback si le storage est vide)
const defaultGames: GamesData = {
  scratch: [
    {
      id: '1',
      name: 'اختبر معلوماتك',
      nameFr: 'Testez vos connaissances',
      description: 'اختبر معرفتك بالتراث المحلي من خلال أسئلة متنوعة',
      descriptionFr: 'Testez votre connaissance du patrimoine local à travers des questions variées',
      type: 'Quiz',
      embedUrl: 'https://scratch.mit.edu/projects/1142611041/embed',
      bgImage: '/images/smart.jpg',
    },
    {
      id: '2',
      name: 'لعبة الألغاز',
      nameFr: 'Jeu de Puzzle',
      description: 'اجمع قطع الصور التاريخية لاكتشاف معالم درّاع تافيلالت',
      descriptionFr: 'Assemblez les pièces d\'images historiques pour découvrir les monuments de Drâa-Tafilalet',
      type: 'Puzzle',
      embedUrl: 'https://scratch.mit.edu/projects/1158387618/embed',
      bgImage: '/images/sihr.jpg',
    },
    {
      id: '3',
      name: 'لعبة الذاكرة',
      nameFr: 'Jeu de Mémoire',
      description: 'تذكر الصور والمعلومات الثقافية في لعبة تفاعلية مشوقة',
      descriptionFr: 'Mémorisez les images et informations culturelles dans un jeu interactif passionnant',
      type: 'Memory Game',
      embedUrl: 'https://scratch.mit.edu/projects/1160930841/embed',
      bgImage: '/images/over.jpg',
    },
    {
      id: '4',
      name: 'رحلة عبر الزمن',
      nameFr: 'Voyage dans le temps',
      description: 'استكشف تاريخ درّاع تافيلالت من خلال رحلة تفاعلية عبر العصور',
      descriptionFr: 'Explorez l\'histoire de Drâa-Tafilalet à travers un voyage interactif à travers les âges',
      type: 'Adventure',
      embedUrl: 'https://scratch.mit.edu/projects/1158363224/embed',
      bgImage: '/images/calcule.jpg',
    },
    {
      id: '5',
      name: 'لعبة الألغاز (ذكاء اصطناعي)',
      nameFr: 'Puzzle IA',
      description: 'لعبة ألغاز تعتمد على الذكاء الاصطناعي',
      descriptionFr: 'Un jeu de puzzle basé sur l\'intelligence artificielle',
      type: 'AI Game',
      embedUrl: 'https://scratch.mit.edu/projects/1133095262/embed',
      bgImage: '/images/protect.jpg',
    },
  ],
  kahoot: [
    {
      id: '6',
      name: 'كاهوت – تحدي التراث الثقافي',
      nameFr: 'Kahoot – Quiz Patrimoine',
      description: 'برمجة كويز تفاعلي حول التراث الثقافي',
      descriptionFr: 'Un quiz interactif sur le patrimoine culturel via Kahoot',
      type: 'Kahoot',
      embedUrl: 'https://kahoot.it/challenge/04192395?challenge-id=9e99e16a-2d73-4196-8c73-b21ff798ebab_1763289896902',
      bgImage: '/images/kahot.jpg',
    },
    {
      id: '7',
      name: 'كاهوت – التاريخ المغربي',
      nameFr: 'Kahoot – Histoire Marocaine',
      description: 'اختبر معرفتك بالتاريخ المغربي العريق',
      descriptionFr: 'Testez vos connaissances sur l\'histoire marocaine',
      type: 'Kahoot',
      embedUrl: 'https://kahoot.it/challenge/12345678',
      bgImage: '/images/kahot.jpg',
    },
    {
      id: '8',
      name: 'كاهوت – المعالم الأثرية',
      nameFr: 'Kahoot – Monuments',
      description: 'تعرف على أهم المعالم الأثرية في المنطقة',
      descriptionFr: 'Découvrez les monuments historiques de la région',
      type: 'Kahoot',
      embedUrl: 'https://kahoot.it/challenge/87654321',
      bgImage: '/images/kahot.jpg',
    },
  ]
};

const translations = {
  ar: {
    title: 'الألعاب التعليمية التفاعلية',
    scratchTitle: 'ألعاب سكراتش',
    scratchDesc: 'ألعاب تفاعلية مبرمجة بلغة سكراتش',
    kahootTitle: 'ألعاب كاهوت',
    kahootDesc: 'اختبارات تفاعلية عبر منصة كاهوت',
    playNow: 'العب الآن',
    close: 'إغلاق',
    back: 'رجوع',
    explore: 'استكشف الألعاب',
    loading: 'جاري التحميل...',
  },
  fr: {
    title: 'Jeux Éducatifs Interactifs',
    scratchTitle: 'Jeux Scratch',
    scratchDesc: 'Jeux interactifs programmés en Scratch',
    kahootTitle: 'Jeux Kahoot',
    kahootDesc: 'Quiz interactifs via la plateforme Kahoot',
    playNow: 'Jouer maintenant',
    close: 'Fermer',
    back: 'Retour',
    explore: 'Explorer les jeux',
    loading: 'Chargement...',
  },
};

export default function Games() {
  // Hook pour la langue (vous pouvez le remplacer par votre hook personnalisé)
  const [language, setLanguage] = useState<'ar' | 'fr'>('ar');
  const t = translations[language];
  
  const [games, setGames] = useState<GamesData>({ scratch: [], kahoot: [] });
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<'scratch' | 'kahoot' | null>(null);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  // Charger les jeux depuis le storage au montage du composant
  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = async () => {
    try {
      const result = await window.storage.get('games-data');
      
      if (result && result.value) {
        const data = JSON.parse(result.value);
        setGames(data);
      } else {
        // Si le storage est vide, initialiser avec les données par défaut
        await window.storage.set('games-data', JSON.stringify(defaultGames));
        setGames(defaultGames);
      }
    } catch (error) {
      console.log('Initialisation avec les jeux par défaut');
      // En cas d'erreur, utiliser les données par défaut
      setGames(defaultGames);
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour changer de langue (optionnel)
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'fr' : 'ar');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">{t.loading}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gray-50 ${language === 'ar' ? 'text-right' : 'text-left'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
              <Navigation />

      {/* Hero Section with Background Image */}
      <div 
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url(/images/jeuxx.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        
        {/* Bouton de changement de langue */}
        <button
          onClick={toggleLanguage}
          className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all"
        >
          {language === 'ar' ? 'FR' : 'عربي'}
        </button>
        
        {/* Titre */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-2">{t.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        
        {/* Categories View */}
        {!selectedCategory && (
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Scratch Category */}
            <Card 
              className="group relative overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 h-80"
              onClick={() => setSelectedCategory('scratch')}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{backgroundImage: 'url(/images/scratch-bg.jpg)'}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-800/70 to-transparent"></div>
              
              <div className="relative h-full flex flex-col justify-end p-8">
                <div className="text-6xl mb-4">🎮</div>
                <h3 className="text-3xl font-bold text-white mb-2">{t.scratchTitle}</h3>
                <p className="text-white/90 mb-4">{t.scratchDesc}</p>
                <div className="flex items-center justify-between">
                  <Button className="bg-white text-purple-900 hover:bg-purple-50 font-bold shadow-lg">
                    {t.explore} →
                  </Button>
                  <span className="text-white/80 text-sm font-semibold">
                    {games.scratch.length} {language === 'ar' ? 'لعبة' : 'jeux'}
                  </span>
                </div>
              </div>
            </Card>

            {/* Kahoot Category */}
            <Card 
              className="group relative overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 h-80"
              onClick={() => setSelectedCategory('kahoot')}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{backgroundImage: 'url(/images/kahoot-bg.jpg)'}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-800/70 to-transparent"></div>
              
              <div className="relative h-full flex flex-col justify-end p-8">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-3xl font-bold text-white mb-2">{t.kahootTitle}</h3>
                <p className="text-white/90 mb-4">{t.kahootDesc}</p>
                <div className="flex items-center justify-between">
                  <Button className="bg-white text-indigo-900 hover:bg-indigo-50 font-bold shadow-lg">
                    {t.explore} →
                  </Button>
                  <span className="text-white/80 text-sm font-semibold">
                    {games.kahoot.length} {language === 'ar' ? 'لعبة' : 'jeux'}
                  </span>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Games List View */}
        {selectedCategory && !selectedGame && (
          <div>
            <Button 
              onClick={() => setSelectedCategory(null)}
              className="mb-6 bg-indigo-600 hover:bg-indigo-700"
            >
              <ArrowLeft className={`${language === 'ar' ? 'ml-2 rotate-180' : 'mr-2'}`} size={20} />
              {t.back}
            </Button>

            {games[selectedCategory].length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-500">
                  {language === 'ar' ? 'لا توجدألعاب متاحة حالياً' : 'Aucun jeu disponible pour le moment'}
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-6">
                {games[selectedCategory].map((game) => (
                  <Card key={game.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
                    <div 
                      className="relative h-64 bg-cover bg-center"
                      style={{backgroundImage: `url(${game.bgImage})`}}
                    >
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all"></div>
                    </div>
                    
                    <div className="p-6 bg-white flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {language === 'ar' ? game.name : game.nameFr}
                        </h3>
                        <div className="bg-indigo-100 text-indigo-900 px-3 py-1 rounded-lg text-xs font-bold shadow-sm border border-indigo-200">
                          {game.type}
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 mb-4 flex-1">
                        {language === 'ar' ? game.description : game.descriptionFr}
                      </p>

                      <Button 
                        onClick={() => setSelectedGame(game)}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg"
                      >
                        {t.playNow}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Game Modal */}
      {selectedGame && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl w-[90vw] h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-xl font-bold text-gray-900">
                {language === 'ar' ? selectedGame.name : selectedGame.nameFr}
              </h3>
              <button
                onClick={() => setSelectedGame(null)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe
                src={selectedGame.embedUrl}
                allowTransparency={true}
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}