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
      { id: 'virtual-tours', label: 'الزيارات الافتراضية', description: 'جولات ثلاثية الأبعاد داخل القصبات والمعالم التاريخية' },
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
const spaceImages = {
  'virtual-tours': '/images/k1gMlrP7RfVn.jpeg',
  'intangible-heritage': '/images/aceuil2.jpg',
  'handicrafts': '/images/Ljy03wRIGgdB.jpg',
  'games': '/images/jeux.jpg',
  'videos': '/images/video.jpg',
  'podcast': '/images/podcast.jpg',
  'tourism': '/images/visite.jpg',
  'activities': '/images/ecole.jpg',
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
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-6 text-center">{t.aboutTitle}</h2>
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
            <div className="fixed bottom-24 right-6 w-80 z-50">
              <div className="relative bg-white rounded-lg shadow-2xl border p-4">
                <button className="absolute top-2 right-2 text-gray-600 hover:text-black" onClick={() => setShowChat(false)}>✖</button>
                <AIChat />
              </div>
            </div>
          )}

          {/* Contact Section */}
          <section className="py-16 bg-white">
  <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
    
    <h2 className="text-2xl font-semibold mb-2">Contactez-nous</h2>
    <hr className="mb-6" />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Gauche */}
      <div className="space-y-4">

        {/* Prénom */}
        <div>
          <label className="block text-gray-700 mb-1">Votre Prénom</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              👤
            </span>
            <input
              type="text"
              className="w-full border-2 border-indigo-200 rounded-md pl-10 py-2 focus:border-indigo-400 outline-none"
              placeholder=" "
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 mb-1">Votre adresse e-mail</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              📧
            </span>
            <input
              type="email"
              className="w-full border-2 border-indigo-200 rounded-md pl-10 py-2 focus:border-indigo-400 outline-none"
              placeholder="about@gmail.com"
            />
          </div>
        </div>

        {/* Téléphone */}
        <div>
          <label className="block text-gray-700 mb-1">Votre téléphone</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              📱
            </span>
            <input
              type="text"
              className="w-full border-2 border-indigo-200 rounded-md pl-10 py-2 focus:border-indigo-400 outline-none"
              placeholder=" "
            />
          </div>
        </div>

      </div>

      {/* Droite */}
      <div>
        <label className="block text-gray-700 mb-1">Message</label>
        <textarea
          className="w-full h-48 border-2 border-indigo-200 rounded-md p-3 focus:border-indigo-400 outline-none"
          placeholder="Saisissez ici..."
        ></textarea>
      </div>

    </div>

    <div className="mt-6 text-center">
      <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-md font-medium shadow-sm">
        Envoyer le message
      </button>
    </div>

    {/* Section Contact direct */}
    <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-around items-center gap-6 text-gray-700">
      
      {/* Téléphone */}
      <div className="flex items-center gap-2">
        <span className="text-2xl">📞</span>
        <span>+212 6 12 34 56 78</span>
      </div>

      {/* Email */}
      <div className="flex items-center gap-2">
        <span className="text-2xl">✉️</span>
        <span>contact@kasbahvr.com</span>
      </div>

      {/* YouTube */}
      <div className="flex items-center gap-2">
        <span className="text-2xl">📺</span>
        <a
          href="https://www.youtube.com/channel/UCXXXXXXXXX" 
          target="_blank"
          className="underline hover:text-indigo-600"
        >
          Chaîne YouTube
        </a>
      </div>

    </div>

  </div>
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
