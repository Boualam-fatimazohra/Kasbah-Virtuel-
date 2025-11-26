import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import SpaceCard from '@/components/SpaceCard';
import VirtualTours from './VirtualTours';
import IntangibleHeritage from './IntangibleHeritage';
import Handicrafts from './Handicrafts';
import Games from './Games';
import Videos from './Videos';
import Podcast from './Podcast';
import Tourism from './Tourism';
import Activities from './Activities';
import AIChat from '@/pages/AgentAI'; // Assurez-vous du bon chemin

// Définir les traductions
const translations = {
  ar: {
    mainTitle: 'الفضاءات الأساسية',
    subtitle: 'اكتشف الثمانية فضاءات التفاعلية التي تقدمها منصة KasbahVR',
    aboutTitle: 'عن منصة KasbahVR',
    aboutP1: 'منصة KasbahVR هي منصة تفاعلية مبتكرة تجمع بين الذكاء الاصطناعي والواقع الافتراضي في خدمة التراث الثقافي لمنطقة درّاع تافيلالت. تهدف المنصة إلى الحفاظ على التراث الثقافي غير المادي وتعزيز الوعي به لدى الأجيال الجديدة.',
    aboutP2: 'من خلال ثمانية فضاءات تفاعلية، توفر المنصة تجارب غامرة تتيح للزوار استكشاف التاريخ والعمارة والحرف اليدوية والعادات الثقافية بطرق مبتكرة وجذابة.',
    aboutP3: 'نحن نؤمن بأن التراث الثقافي هو ثروة حقيقية يجب الحفاظ عليها ونقلها للأجيال القادمة. من خلال هذه المنصة، نسعى لجعل التراث حياً وتفاعلياً، وإلهام الشباب للاعتزاز بجذورهم وهويتهم الثقافية.',
    contactTitle: 'تواصل معنا',
    contactText: 'هل لديك أسئلة أو اقتراحات؟ نود أن نسمع منك. تواصل معنا لمزيد من المعلومات.',
    contactButton: 'تواصل معنا',
    backButton: '← العودة إلى الرئيسية',
    spaces: [
      { id: 'virtual-tours', label: 'الزيارات الافتراضية', description: 'جولات ثلاثية الأبعاد داخل القصبات والمعالم التاريخية'  , image: '/images/ziyara.jpeg'},
      { id: 'intangible-heritage', label: 'التراث اللامادي', description: 'الأزياء التقليدية والحلي والعادات الثقافية' },
      { id: 'handicrafts', label: 'الحرف اليدوية', description: 'الزربية والتطريز والفخار التقليدي' },
      { id: 'games', label: 'الألعاب التعليمية', description: 'ألعاب تفاعلية وتحديات تعليمية' },
      { id: 'videos', label: 'الفيديوهات التربوية', description: 'فيديوهات تعليمية وشهادات حية' },
      { id: 'podcast', label: 'البودكاست الثقافي', description: 'حلقات صوتية عن التراث والعادات' },
      { id: 'tourism', label: 'السياحة الثقافية', description: 'خريطة تفاعلية ومسارات سياحية' },
      { id: 'activities', label: 'الأنشطة المدرسية', description: 'مشاريع وإبداعات طلابية' },
    ],
  },
  fr: {
    mainTitle: 'Espaces interactifs',
    subtitle: 'Découvrez les huit espaces interactifs proposés par la plateforme KasbahVR',
    aboutTitle: 'À propos de KasbahVR',
    aboutP1: 'KasbahVR est une plateforme interactive innovante qui combine l\'intelligence artificielle et la réalité virtuelle au service du patrimoine culturel de la région Drâa-Tafilalet. Elle vise à préserver le patrimoine immatériel et à en renforcer la connaissance auprès des jeunes générations.',
    aboutP2: 'À travers huit espaces interactifs, la plateforme offre des expériences immersives permettant aux visiteurs d\'explorer l\'histoire, l\'architecture, l\'artisanat et les pratiques culturelles de manière moderne et captivante.',
    aboutP3: 'Nous croyons que le patrimoine culturel est une véritable richesse qu\'il faut préserver et transmettre. Grâce à cette plateforme, nous souhaitons rendre le patrimoine vivant et interactif, et inspirer les jeunes à valoriser leurs racines et leur identité culturelle.',
    contactTitle: 'Contactez-nous',
    contactText: 'Vous avez des questions ou des suggestions ? Nous serions ravis d\'échanger avec vous. Contactez-nous pour plus d\'informations.',
    contactButton: 'Contactez-nous',
    backButton: '← Retour à l\'accueil',
    spaces: [
      { id: 'virtual-tours', label: 'Visites virtuelles', description: 'Visites 3D à l\'intérieur des kasbahs et monuments historiques' },
      { id: 'intangible-heritage', label: 'Patrimoine immatériel', description: 'Costumes traditionnels, bijoux et pratiques culturelles' },
      { id: 'handicrafts', label: 'Artisanat', description: 'Tapis, broderie et poterie traditionnelle' },
      { id: 'games', label: 'Jeux éducatifs', description: 'Jeux interactifs et défis pédagogiques' },
      { id: 'videos', label: 'Vidéos éducatives', description: 'Vidéos d\'apprentissage et témoignages réels' },
      { id: 'podcast', label: 'Podcast culturel', description: 'Épisodes audio sur le patrimoine et les traditions' },
      { id: 'tourism', label: 'Tourisme culturel', description: 'Carte interactive et circuits touristiques' },
      { id: 'activities', label: 'Activités scolaires', description: 'Projets et créations des élèves' },
    ],
  },
  en: {
    mainTitle: 'Interactive Spaces',
    subtitle: 'Discover the eight interactive spaces offered by the KasbahVR platform',
    aboutTitle: 'About KasbahVR',
    aboutP1: 'KasbahVR is an innovative interactive platform that combines artificial intelligence and virtual reality to serve the cultural heritage of the Drâa-Tafilalet region. It aims to preserve intangible heritage and strengthen awareness among younger generations.',
    aboutP2: 'Through eight interactive spaces, the platform offers immersive experiences allowing visitors to explore history, architecture, crafts and cultural practices in modern and captivating ways.',
    aboutP3: 'We believe that cultural heritage is a true treasure that must be preserved and transmitted. Through this platform, we aim to make heritage alive and interactive, and inspire young people to value their roots and cultural identity.',
    contactTitle: 'Contact Us',
    contactText: 'Do you have questions or suggestions? We would love to hear from you. Contact us for more information.',
    contactButton: 'Contact Us',
    backButton: '← Back to Home',
    spaces: [
      { id: 'virtual-tours', label: 'Virtual Tours', description: '3D tours inside kasbahs and historical monuments' },
      { id: 'intangible-heritage', label: 'Intangible Heritage', description: 'Traditional costumes, jewelry and cultural practices' },
      { id: 'handicrafts', label: 'Handicrafts', description: 'Carpets, embroidery and traditional pottery' },
      { id: 'games', label: 'Educational Games', description: 'Interactive games and educational challenges' },
      { id: 'videos', label: 'Educational Videos', description: 'Learning videos and real testimonials' },
      { id: 'podcast', label: 'Cultural Podcast', description: 'Audio episodes about heritage and traditions' },
      { id: 'tourism', label: 'Cultural Tourism', description: 'Interactive map and tourist routes' },
      { id: 'activities', label: 'School Activities', description: 'Student projects and creations' },
    ],
  },
};

// Images communes pour tous les espaces
const spaceImages: Record<
  | 'virtual-tours'
  | 'intangible-heritage'
  | 'handicrafts'
  | 'games'
  | 'videos'
  | 'podcast'
  | 'tourism'
  | 'activities',
  string
> = {
  'virtual-tours': '/images/ziyara.jpg',
  'intangible-heritage': '/images/toratt.jpg',
  'handicrafts': '/images/hiraf.jpg',
  'games': '/images/game.jpg',
  'videos': '/images/videoo.jpg',
  'podcast': '/images/podcastt.jpg',
  'tourism': '/images/siyaha.jpg',
  'activities': '/images/anchitaa.jpg',
};


// Mapping des composants
const componentMap = {
  'virtual-tours': VirtualTours,
  'intangible-heritage': IntangibleHeritage,
  'handicrafts': Handicrafts,
  'games': Games,
  'videos': Videos,
  'podcast': Podcast,
  'tourism': Tourism,
  'activities': Activities,
};

export default function Home() {
  const [currentSpace, setCurrentSpace] = useState<string | null>(null);
  const { language } = useLanguage();
  const [showChat, setShowChat] = useState(false);

  const t = translations[language];

  const handleNavigate = (id: string) => {
    setCurrentSpace(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div className="min-h-screen bg-background">
      <Navigation  />

      {!currentSpace ? (
        <>
          {/* Hero Section */}
          <Hero onExplore={() => handleNavigate('virtual-tours')} />

          {/* Spaces Grid */}
          <section className="py-16 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">{t.mainTitle}</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.spaces.map((space) => (
                  <SpaceCard
                    key={space.id}
                    icon=""
                    title={space.label}
                    description={space.description}
                    image={spaceImages[space.id]}
                    onClick={() => handleNavigate(space.id)}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="py-16 bg-white">
            <div
             className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-6xl playfair bg-gradient-to-br from-green-400 to-blue-600 bg-clip-text text-transparent font-bold text-foreground mb-6 text-center">{t.aboutTitle}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{t.aboutP1}</p>
                <p className="text-muted-foreground leading-relaxed mb-4">{t.aboutP2}</p>
                <p className="text-muted-foreground leading-relaxed">{t.aboutP3}</p>
              </div>
            </div>
          </section>

          {/* Chat Button */}
          <button
            onClick={() => setShowChat(true)}
            className="fixed bottom-6 right-6 bg-gradient-to-br from-purple-600 to-indigo-600 hover:opacity-90 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25c1.242 0 2.25-1.008 2.25-2.25S13.242 6.75 12 6.75 9.75 7.758 9.75 9s1.008 2.25 2.25 2.25zm0 0c2.485 0 4.5 2.015 4.5 4.5v.75H7.5v-.75c0-2.485 2.015-4.5 4.5-4.5z" />
            </svg>
          </button>

          {/* Chat Window */}
          {showChat && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="relative w-[60vw] h-[60vh] bg-white rounded-2xl shadow-2xl border ">
              
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
                onClick={() => setShowChat(false)}
              >
                ✖
              </button>
          
              <AIChat />
            </div>
          </div>
          
          )}

          {/* Contact Section */}
{/* Contact Section - Professional & Transparent */}
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


        </>
      ) : (
        <>
          <button
            onClick={() => setCurrentSpace(null)}
            className="sticky top-20 z-40 m-4 px-4 py-2 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold transition-colors"
          >
            {t.backButton}
          </button>
        </>
      )}
    </div>
  );
}