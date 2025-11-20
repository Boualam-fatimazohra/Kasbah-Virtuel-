import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';

const kasbahToursAr = [
  {
    name: 'قصبة أيت بن حدو',
    description: 'جولة ثلاثية الأبعاد في أشهر قصبة بالمغرب، موقع تراث عالمي',
    image: '/images/k1gMlrP7RfVn.jpeg',
    url: 'https://www.360cities.net/image/ait-benhaddou',
  },
  {
    name: 'قصبة تاوريرت',
    description: 'استكشف العمارة التقليدية والحياة اليومية في القصبة التاريخية',
    image: '/images/taourirt.jpg',
    url: 'https://www.360cities.net/image/kasbah-taourirt',
  },
  {
    name: 'قصبة تيتريت',
    description: 'جولة افتراضية في مدينة درّاع التاريخية المحاطة بأسوار حمراء',
    image: '/images/titrit.jpg',
    url: null,
  },
];

const kasbahToursFr = [
  {
    name: 'Ksar Aït Ben Haddou',
    description: 'Visite 3D de la plus célèbre kasbah du Maroc, site du patrimoine mondial',
    image: '/images/k1gMlrP7RfVn.jpeg',
    url: 'https://www.360cities.net/image/ait-benhaddou',
  },
  {
    name: 'Kasbah Taourirt',
    description: 'Explorez l\'architecture traditionnelle et la vie quotidienne dans cette kasbah historique',
    image: '/images/taourirt.jpg',
    url: 'https://www.360cities.net/image/kasbah-taourirt',
  },
  {
    name: 'Kasbah Titrit',
    description: 'Visite virtuelle de la ville historique de Drâa entourée de murs rouges',
    image: '/images/titrit.jpg',
    url: null,
  },
];

const translations = {
  ar: {
    title: 'الزيارات الافتراضية',
    subtitle: 'جولات ثلاثية الأبعاد داخل القصبات والمعالم التاريخية باستخدام تقنيات الواقع الافتراضي',
    startTour: 'ابدأ الجولة الافتراضية',
    featuresTitle: 'المميزات',
    features: [
      {
        icon: '🥽',
        title: 'تجربة واقع افتراضي غامرة',
        description: 'استمتع بتجربة ثلاثية الأبعاد عالية الجودة تنقلك إلى قلب التراث المعماري',
      },
      {
        icon: '🎧',
        title: 'تعليقات صوتية تفاعلية',
        description: 'اسمع شرح تفصيلي لتاريخ كل معلمة من خبراء في التراث الثقافي',
      },
      {
        icon: '🧭',
        title: 'ملاحة سهلة',
        description: 'تنقل بحرية داخل المعالم واستكشف كل زاوية بسهولة',
      },
      {
        icon: '📱',
        title: 'متوافق مع جميع الأجهزة',
        description: 'استمتع بالجولات على الهاتف أو الحاسوب أو نظارات الواقع الافتراضي',
      },
    ],
  },
  fr: {
    title: 'Visites Virtuelles',
    subtitle: 'Visites 3D des kasbahs et monuments historiques utilisant les technologies de réalité virtuelle',
    startTour: 'Commencer la visite virtuelle',
    featuresTitle: 'Fonctionnalités',
    features: [
      {
        icon: '🥽',
        title: 'Expérience VR immersive',
        description: 'Profitez d\'une expérience 3D haute qualité qui vous transporte au cœur du patrimoine architectural',
      },
      {
        icon: '🎧',
        title: 'Commentaires audio interactifs',
        description: 'Écoutez des explications détaillées sur l\'histoire de chaque monument par des experts du patrimoine culturel',
      },
      {
        icon: '🧭',
        title: 'Navigation facile',
        description: 'Déplacez-vous librement dans les monuments et explorez chaque recoin facilement',
      },
      {
        icon: '📱',
        title: 'Compatible tous appareils',
        description: 'Profitez des visites sur téléphone, ordinateur ou casque de réalité virtuelle',
      },
    ],
  },
};

export default function VirtualTours() {
  const { language } = useLanguage();
  const t = translations[language];
  const kasbahTours = language === 'ar' ? kasbahToursAr : kasbahToursFr;

  return (
    <div className={`min-h-screen bg-gradient-to-b from-background to-muted/20 ${language === 'ar' ? 'text-right' : 'text-left'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <Navigation />
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {kasbahTours.map((tour) => (
            <Card key={tour.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => tour.url && window.open(tour.url, '_blank')}
              >
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {tour.url && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-5xl">
                    
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{tour.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tour.description}</p>
                <Button
                  className="w-full bg-accent hover:bg-accent/90"
                  onClick={() => tour.url && window.open(tour.url, '_blank')}
                  disabled={!tour.url}
                >
                  {t.startTour}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-foreground mb-6">{t.featuresTitle}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {t.features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-3xl">{feature.icon}</span>
                <div>
                  <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
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

      </div>
    </div>
  );
}