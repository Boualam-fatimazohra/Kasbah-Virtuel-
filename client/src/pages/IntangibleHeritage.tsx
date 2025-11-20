import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';

const heritageItemsAr = [
  {
    title: 'الأزياء الأمازيغية التقليدية',
    image: '/images/tradition.jpg',
    description: 'عرض تفاعلي للأزياء التقليدية بدرعة تافيلالت مع شرح الرموز الثقافية',
    icon: '👘',
    details: [
      'الجلابة التقليدية',
      'الملحفة والتجار',
      'الحناء والزينة',
      'أغطية الرأس التقليدية',
    ],
  },
  {
    title: 'الحلي والمجوهرات التقليدية',
    image: '/images/bijoux.png',
    description: 'اكتشف الحلي الفضية والذهبية وتفسير دلالاتها الثقافية والرمزية',
    icon: '💎',
    details: [
      'الخلاخل الفضية',
      'الأساور والقلائد',
      'الدبابيس والإبر',
      'الخواتم التقليدية',
    ],
  },
  {
    title: 'الأفاتار الافتراضي',
    image: '/images/avatar.jpg',
    description: 'خاصية تفاعلية تتيح لك ارتداء الأزياء التقليدية بشكل افتراضي',
    icon: '🎭',
    details: [
      'تخصيص الأفاتار',
      'تجربة الأزياء المختلفة',
      'التقاط الصور',
      'مشاركة الصور',
    ],
  },
];

const heritageItemsFr = [
  {
    title: 'Costumes Amazighs Traditionnels',
    image: '/images/tradition.jpg',
    description: 'Exposition interactive des costumes traditionnels de Drâa-Tafilalet avec explication des symboles culturels',
    icon: '👘',
    details: [
      'La djellaba traditionnelle',
      'La melhafa et les habits',
      'Le henné et les ornements',
      'Les couvre-chefs traditionnels',
    ],
  },
  {
    title: 'Bijoux et Parures Traditionnels',
    image: '/images/bijoux.png',
    description: 'Découvrez les bijoux en argent et en or et l\'interprétation de leurs significations culturelles et symboliques',
    icon: '💎',
    details: [
      'Les khalkhal en argent',
      'Les bracelets et colliers',
      'Les épingles et aiguilles',
      'Les bagues traditionnelles',
    ],
  },
  {
    title: 'Avatar Virtuel',
    image: '/images/avatar.jpg',
    description: 'Fonctionnalité interactive vous permettant de porter virtuellement des costumes traditionnels',
    icon: '🎭',
    details: [
      'Personnaliser l\'avatar',
      'Essayer différents costumes',
      'Prendre des photos',
      'Partager les photos',
    ],
  },
];

const translations = {
  ar: {
    title: 'التراث اللامادي',
    subtitle: 'اكتشف الأزياء التقليدية والحلي والعادات الثقافية لمنطقة درّاع تافيلالت',
    discoverMore: 'اكتشف المزيد',
    culturalSignificance: 'الأهمية الثقافية',
    symbolsTitle: 'الرموز والمعاني',
    symbolsText: 'تحمل الأزياء والحلي التقليدية رموزاً عميقة تعكس هوية المجتمع وقيمه. كل لون وشكل وزينة لها معنى خاص يرتبط بالعادات والتقاليد المحلية.',
    preservationTitle: 'الحفاظ على التراث',
    preservationText: 'من خلال هذه المنصة، نسعى للحفاظ على هذا التراث اللامادي الغني ونقله للأجيال القادمة، مما يساهم في تعزيز الهوية الثقافية والاعتزاز بالجذور.',
  },
  fr: {
    title: 'Patrimoine Immatériel',
    subtitle: 'Découvrez les costumes traditionnels, les bijoux et les coutumes culturelles de la région de Drâa-Tafilalet',
    discoverMore: 'Découvrir plus',
    culturalSignificance: 'Signification Culturelle',
    symbolsTitle: 'Symboles et Significations',
    symbolsText: 'Les costumes et bijoux traditionnels portent des symboles profonds qui reflètent l\'identité et les valeurs de la communauté. Chaque couleur, forme et ornement a une signification particulière liée aux coutumes et traditions locales.',
    preservationTitle: 'Préservation du Patrimoine',
    preservationText: 'À travers cette plateforme, nous cherchons à préserver ce riche patrimoine immatériel et à le transmettre aux générations futures, contribuant ainsi à renforcer l\'identité culturelle et la fierté des racines.',
  },
};

export default function IntangibleHeritage() {
  const { language } = useLanguage();
  const t = translations[language];
  const heritageItems = language === 'ar' ? heritageItemsAr : heritageItemsFr;

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

        {/* Heritage Items */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {heritageItems.map((item) => (
            <Card
              key={item.title}
              className="relative overflow-hidden rounded-xl shadow-lg group"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
            
              {/* Overlay noir transparent */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div>
            
              {/* Content */}
              <div className="relative p-8 text-center text-white">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm mb-6">{item.description}</p>
            
                <Button className="bg-accent hover:bg-accent/90 text-white w-full">
                  {t.discoverMore}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Cultural Significance */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-foreground mb-6">{t.culturalSignificance}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-foreground mb-3">{t.symbolsTitle}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {t.symbolsText}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground mb-3">{t.preservationTitle}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {t.preservationText}
              </p>
            </div>
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