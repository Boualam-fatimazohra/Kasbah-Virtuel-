import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';

const routesAr = [
  {
    name: 'الطريق التاريخي',
    description: 'جولة تاريخية عبر أهم المعالم الأثرية والقصبات',
    duration: '3 أيام',
    difficulty: 'متوسط',
  },
  {
    name: 'طريق الحرف اليدوية',
    description: 'زيارة ورشات الحرفيين والتعرف على الصناعات التقليدية',
    duration: '2 يوم',
    difficulty: 'سهل',
  },
  {
    name: 'الطريق الثقافي الشامل',
    description: 'رحلة شاملة تجمع بين التاريخ والحرف والطبيعة',
    duration: '5 أيام',
    difficulty: 'صعب',
  },
];

const routesFr = [
  {
    name: 'Circuit Historique',
    description: 'Visite historique à travers les plus importants sites archéologiques et kasbahs',
    duration: '3 jours',
    difficulty: 'Moyen',
  },
  {
    name: 'Route de l\'Artisanat',
    description: 'Visite des ateliers d\'artisans et découverte des industries traditionnelles',
    duration: '2 jours',
    difficulty: 'Facile',
  },
  {
    name: 'Circuit Culturel Complet',
    description: 'Voyage complet combinant histoire, artisanat et nature',
    duration: '5 jours',
    difficulty: 'Difficile',
  },
];

const attractionsAr = [
  { name: 'قصبة أيت بن حدو', type: 'موقع تراث عالمي' },
  { name: 'وادي درعة', type: 'طبيعة وجمال' },
  { name: 'سوق الخميس', type: 'تسوق تقليدي' },
  { name: 'مضايق توذغى', type: 'حرف يدوية' },
];

const attractionsFr = [
  { name: 'Ksar Aït Ben Haddou', type: 'Patrimoine mondial' },
  { name: 'Vallée du Drâa', type: 'Nature et beauté' },
  { name: 'Souk El Khemis', type: 'Shopping traditionnel' },
  { name: 'Gorges du Todgha', type: 'Artisanat' },
];

const translations = {
  ar: {
    title: 'السياحة الثقافية الذكية',
    subtitle: 'خريطة تفاعلية ومسارات سياحية ذكية لاستكشاف درّاع تافيلالت',
    suggestedRoutes: 'المسارات السياحية المقترحة',
    duration: 'المدة:',
    level: 'المستوى:',
    planTrip: 'خطط رحلتك',
    mainAttractions: 'المعالم السياحية الرئيسية',
    info: 'معلومات',
    touristInfo: 'معلومات سياحية مهمة',
    festivalsTitle: 'المهرجانات',
    festivals: [
      '• مهرجان الواحات بتافيلالت (الراشيدية)',
      '• مهرجان السينما بورزازات',
      '• موسم الخطوبة بإملشيل (تنغير)',
      '• مهرجان تمور زاكورة',
      '• مهرجان التفاح بمتليلي (ميدلت)',
    ],
    dishesTitle: 'الأطباق التقليدية',
    dishes: [
      '• الطاجين الأمازيغي',
      '• الكسكس بالسبع خضر',
      '• بركوكس',
    ],
    tipsTitle: 'نصائح السفر',
    tips: [
      '• أفضل وقت للزيارة: أكتوبر – أبريل',
      '• احترم العادات المحلية والتقاليد',
      '• جرب الأطباق المحلية في الأسواق الشعبية',
    ],
  },
  fr: {
    title: 'Tourisme Culturel Intelligent',
    subtitle: 'Carte interactive et circuits touristiques intelligents pour découvrir Drâa-Tafilalet',
    suggestedRoutes: 'Circuits Touristiques Suggérés',
    duration: 'Durée :',
    level: 'Niveau :',
    planTrip: 'Planifier votre voyage',
    mainAttractions: 'Attractions Touristiques Principales',
    info: 'Informations',
    touristInfo: 'Informations Touristiques Importantes',
    festivalsTitle: 'Festivals',
    festivals: [
      '• Festival des Oasis de Tafilalet (Errachidia)',
      '• Festival du Cinéma de Ouarzazate',
      '• Moussem des fiançailles d\'Imilchil (Tinghir)',
      '• Festival des Dattes de Zagora',
      '• Festival des Pommes de Midelt',
    ],
    dishesTitle: 'Plats Traditionnels',
    dishes: [
      '• Tajine Amazigh',
      '• Couscous aux sept légumes',
      '• Berkoukech',
    ],
    tipsTitle: 'Conseils de Voyage',
    tips: [
      '• Meilleure période : octobre – avril',
      '• Respectez les coutumes et traditions locales',
      '• Essayez les plats locaux dans les marchés populaires',
    ],
  },
};

export default function Tourism() {
  const { language } = useLanguage();
  const t = translations[language];
  const routes = language === 'ar' ? routesAr : routesFr;
  const attractions = language === 'ar' ? attractionsAr : attractionsFr;

  return (
    <div className={`min-h-screen bg-gradient-to-b from-background to-muted/20 ${language === 'ar' ? 'text-right' : 'text-left'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
              <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Interactive Map */}
        <Card className="mb-12 overflow-hidden h-96 bg-muted relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d344293.649845028!2d-6.0183!3d31.0888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9cda1db2c4b4d7%3A0x41e6087e9c00f2db!2sDr%C3%A2a-Tafilalet!5e0!3m2!1sfr!2sma!4v1700000000000!5m2!1sfr!2sma"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Card>

        {/* Routes */}
        <h3 className="text-2xl font-bold text-foreground mb-6">{t.suggestedRoutes}</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {routes.map((route) => (
            <Card key={route.name} className="p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-foreground mb-2">{route.name}</h4>
              <p className="text-sm text-muted-foreground mb-4">{route.description}</p>
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.duration}</span>
                  <span className="font-semibold text-foreground">{route.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.level}</span>
                  <span className="font-semibold text-foreground">{route.difficulty}</span>
                </div>
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90">
                {t.planTrip}
              </Button>
            </Card>
          ))}
        </div>

        {/* Attractions */}
        <h3 className="text-2xl font-bold text-foreground mb-6">{t.mainAttractions}</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {attractions.map((attraction) => (
            <Card key={attraction.name} className="p-4 flex items-center justify-between hover:shadow-lg transition-shadow">
              <div>
                <h4 className="font-bold text-foreground">{attraction.name}</h4>
                <p className="text-xs text-muted-foreground">{attraction.type}</p>
              </div>
              <Button size="sm" variant="outline">
                {t.info}
              </Button>
            </Card>
          ))}
        </div>

        {/* Tourist Info */}
        <div className="bg-white rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">{t.touristInfo}</h3>
          <div className="grid md:grid-cols-3 gap-6">

            {/* Festivals */}
            <div>
              <h4 className="font-bold text-foreground mb-3">{t.festivalsTitle}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {t.festivals.map((festival, index) => (
                  <li key={index}>{festival}</li>
                ))}
              </ul>
            </div>

            {/* Dishes */}
            <div>
              <h4 className="font-bold text-foreground mb-3">{t.dishesTitle}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {t.dishes.map((dish, index) => (
                  <li key={index}>{dish}</li>
                ))}
              </ul>
            </div>

            {/* Tips */}
            <div>
              <h4 className="font-bold text-foreground mb-3">{t.tipsTitle}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {t.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
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
      </div>
    </div>
  );
}