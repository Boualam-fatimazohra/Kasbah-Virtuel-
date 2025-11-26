import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
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
  const { language } = useLanguage();
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
        className="relative h-150 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url(/images/jeuxx.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        
        {/* Bouton de changement de langue */}
       
        
        {/* Titre */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-2">{t.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        
        {/* Categories View */}
        {!selectedCategory && (
        <div className=" flex items-center justify-center">
        <div className="grid md:grid-cols-2 gap-8 w-[990px] md:w-[10000px] h-[600px]">
      
          {/* Scratch Category */}
          <Card 
            className="group relative overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 h-full"
            onClick={() => setSelectedCategory('scratch')}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{backgroundImage: 'url(/images/scratch-bg.jpg)'}}
            ></div>
            <div className="absolute inset-0  "></div>
        
            <div className="w-full h-full flex flex-col rounded-xl ">
              {/* Partie haute : image de fond 80% */}
              <div className="flex-[8] bg-[url('/images/jeux1.jpg')] bg-cover bg-center relative p-8 flex flex-col justify-end">
                {/* Ici tu peux garder emoji, titre et bouton si nécessaire */}
              </div>
        
              {/* Partie basse : fond blanc 20% */}
              <div className="flex-[2] bg-white p-8 flex flex-col justify-center">
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{t.scratchTitle}</h3>
                <p className="text-gray-700 text-2xl">{t.scratchDesc}</p>
              </div>
            </div>
          </Card>
        
          {/* Kahoot Category */}
          <Card 
            className="group relative overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 h-full"
            onClick={() => setSelectedCategory('kahoot')}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{backgroundImage: 'url(/images/kahoot-bg.jpg)'}}
            ></div>
            <div className="absolute inset-0 "></div>
        
            <div className="w-full h-full flex flex-col rounded-xl ">
              {/* Partie haute : image de fond 80% */}
              <div className="flex-[8] bg-[url('/images/jeux2kahot.jpg')] bg-cover bg-center"></div>
        
              {/* Partie basse : fond blanc 20% */}
              <div className="flex-[2] bg-white p-8 flex flex-col justify-center">
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{t.kahootTitle}</h3>
                <p className="text-gray-700 text-2xl">{t.kahootDesc}</p>
              </div>
            </div>
          </Card>
      
        </div>
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
       <section className="py-16 mt-12 relative overflow-hidden">
          {/* Smoke/Fog Background Effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-3">Contactez-nous</h2>
              <p className="text-lg text-muted-foreground">Nous sommes à votre écoute pour toute question ou demande d'information</p>
            </div>

            {/* Contact Form - Transparent with Glass Effect */}
            <div className="bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden mb-12">
              <div className="p-8 md:p-12">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Nom complet */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">Nom complet *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-white/60 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition bg-white/60 backdrop-blur-sm shadow-sm"
                        placeholder="Votre nom"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">Adresse e-mail *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-white/60 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition bg-white/60 backdrop-blur-sm shadow-sm"
                        placeholder="votre.email@exemple.com"
                      />
                    </div>

                    {/* Téléphone */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">Téléphone</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border-2 border-white/60 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition bg-white/60 backdrop-blur-sm shadow-sm"
                        placeholder="+212 6XX XX XX XX"
                      />
                    </div>

                    {/* Sujet */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">Sujet *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-white/60 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition bg-white/60 backdrop-blur-sm shadow-sm"
                        placeholder="Objet de votre message"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Message *</label>
                    <textarea
                      required
                      rows="6"
                      className="w-full px-4 py-3 rounded-xl border-2 border-white/60 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition resize-none bg-white/60 backdrop-blur-sm shadow-sm"
                      placeholder="Décrivez votre demande en détail..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Envoyer le message
                    </button>
                  </div>

                  <p className="text-center text-sm text-gray-600 font-medium">* Champs obligatoires</p>
                </form>
              </div>
            </div>

            {/* Contact Info Cards - EN DESSOUS DU FORMULAIRE */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* YouTube Card */}
              <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-gray-800">YouTube</h3>
                <a href="https://www.youtube.com/@PatriCodePr%C3%A9serverlepass%C3%A9coder" target="_blank" rel="noopener noreferrer" className="text-center text-blue-600 hover:text-blue-700 block font-medium">
                  Visitez notre chaîne
                </a>
              </div>

              {/* Email Card */}
              <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-gray-800">Email</h3>
                <p className="text-center text-gray-700 font-medium">kasbahvr@outlook.fr</p>
              </div>

              {/* Phone Card */}
              <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-gray-800">Téléphone</h3>
                <p className="text-center text-gray-700 font-medium">+212 714-687489</p>
              </div>
            </div>

          </div>

          {/* CSS for animations */}
          <style>{`
            @keyframes blob {
              0%, 100% { transform: translate(0, 0) scale(1); }
              25% { transform: translate(20px, -50px) scale(1.1); }
              50% { transform: translate(-20px, 20px) scale(0.9); }
              75% { transform: translate(50px, 50px) scale(1.05); }
            }
            .animate-blob {
              animation: blob 7s infinite;
            }
            .animation-delay-2000 {
              animation-delay: 2s;
            }
            .animation-delay-4000 {
              animation-delay: 4s;
            }
          `}</style>
        </section>
    </div>
  );
}