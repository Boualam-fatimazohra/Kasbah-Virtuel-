import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';

const handicraftsData = {
  ar: [
    {
      name: 'الزربية التنغيرية',
      description: 'فن نسج الزرابي التقليدية بألوان وأنماط فريدة',
      icon: '🧵',
      image: '/images/Ljy03wRIGgdB.jpg',
      techniques: [
        'النسج اليدوي',
        'الأصباغ الطبيعية',
        'الأنماط التقليدية',
        'الخيوط الصوفية',
      ],
    },
    {
      name: 'التطريز (تحرويت)',
      description: 'فن التطريز التقليدي بالخيوط الملونة والذهبية',
      icon: '🪡',
      image: '/images/tahroyt.jpg',
      techniques: [
        'التطريز اليدوي',
        'الخيوط الذهبية',
        'الأنماط الهندسية',
        'الزخارف الإسلامية',
      ],
    },
    {
      name: 'الفخار والخزف',
      description: 'صناعة الفخار التقليدي بأشكال وألوان متنوعة',
      icon: '🏺',
      image: '/images/fkhar.jpeg',
      techniques: [
        'تشكيل الطين',
        'الحرق التقليدي',
        'الزخرفة اليدوية',
        'الألوان الطبيعية',
      ],
    },
  ],
  fr: [
    {
      name: 'Tapis de Tinghir',
      description: 'Art du tissage traditionnel de tapis aux couleurs et motifs uniques',
      icon: '🧵',
      image: '/images/Ljy03wRIGgdB.jpg',
      techniques: [
        'Tissage à la main',
        'Teintures naturelles',
        'Motifs traditionnels',
        'Fils de laine',
      ],
    },
    {
      name: 'Broderie (Tahrouit)',
      description: 'Art de la broderie traditionnelle aux fils colorés et dorés',
      icon: '🪡',
      image: '/images/tahroyt.jpg',
      techniques: [
        'Broderie manuelle',
        'Fils dorés',
        'Motifs géométriques',
        'Ornements islamiques',
      ],
    },
    {
      name: 'Poterie et céramique',
      description: 'Fabrication de poterie traditionnelle aux formes et couleurs variées',
      icon: '🏺',
      image: '/images/fkhar.jpeg',
      techniques: [
        'Modelage d\'argile',
        'Cuisson traditionnelle',
        'Décoration manuelle',
        'Couleurs naturelles',
      ],
    },
  ],
};

const translations = {
  ar: {
    title: 'الحرف اليدوية',
    subtitle: 'اكتشف الحرف اليدوية التقليدية وشاهد الحرفيين وهم يعملون في ورشاتهم',
    techniques: 'التقنيات:',
    viewWorkshops: 'شاهد الورشات',
    workshopsTitle: 'الورشات المصورة',
    workshopsDescription: 'نقدم مجموعة من الفيديوهات التعليمية التي تعرض الحرفيين وهم يمارسون حرفتهم التقليدية. شاهد كيف يتم صنع الزربية والتطريز والفخار من البداية إلى النهاية.',
    workshop1: 'الزربية التنغيرية',
    workshop2: 'التطريز التقليدي',
    workshop3: 'صناعة الفخار',
    workshopSubtitle: 'ورشة عملية مدرسية مسجلة',
    watchNow: 'شاهد الآن',
    artisansTitle: 'الحرفيون المحليون',
    artisansDescription: 'هذه المنصة تعطي الضوء على الحرفيين المحليين الذين يحافظون على هذه التقاليد العريقة. تعرف على قصصهم وخبراتهم وكيفية حفاظهم على هذا التراث الثمين.',
    artisan1: 'أم الحرف الزربية',
    artisan2: 'معلم التطريز',
    artisan3: 'صانع الفخار التقليدي',
    experience: 'خبرة أكثر من 20 سنة',
  },
  fr: {
    title: 'Artisanat',
    subtitle: 'Découvrez l\'artisanat traditionnel et regardez les artisans travailler dans leurs ateliers',
    techniques: 'Techniques :',
    viewWorkshops: 'Voir les ateliers',
    workshopsTitle: 'Ateliers filmés',
    workshopsDescription: 'Nous proposons une collection de vidéos éducatives montrant les artisans pratiquant leur métier traditionnel. Voyez comment sont fabriqués les tapis, la broderie et la poterie du début à la fin.',
    workshop1: 'Tapis de Tinghir',
    workshop2: 'Broderie traditionnelle',
    workshop3: 'Fabrication de poterie',
    workshopSubtitle: 'Atelier pratique scolaire enregistré',
    watchNow: 'Regarder maintenant',
    artisansTitle: 'Artisans locaux',
    artisansDescription: 'Cette plateforme met en lumière les artisans locaux qui préservent ces traditions ancestrales. Découvrez leurs histoires, leur expertise et comment ils maintiennent ce précieux patrimoine.',
    artisan1: 'Maître tisserande de tapis',
    artisan2: 'Maître brodeur',
    artisan3: 'Potier traditionnel',
    experience: 'Plus de 20 ans d\'expérience',
  },
};

export default function Handicrafts() {
  const { language } = useLanguage();
  const t = translations[language];
  const handicrafts = handicraftsData[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
              <Navigation />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className={`text-center mb-12 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
          <h2 className="text-4xl font-bold text-foreground mb-4">{t.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Handicrafts Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {handicrafts.map((craft) => (
            <Card key={craft.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={craft.image}
                  alt={craft.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className={`p-6 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
                <div className="text-4xl mb-2">{craft.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{craft.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{craft.description}</p>
                <div className="mb-4">
                  <h4 className="font-bold text-foreground mb-2 text-sm">{t.techniques}</h4>
                  <ul className="space-y-1">
                    {craft.techniques.map((tech) => (
                      <li key={tech} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90">
                  {t.viewWorkshops}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Workshops Section */}
        <div className={`bg-white rounded-lg p-8 shadow-sm mb-8 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
          <h3 className="text-2xl font-bold text-foreground mb-6">{t.workshopsTitle}</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {t.workshopsDescription}
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[t.workshop1, t.workshop2, t.workshop3].map((workshop) => (
              <Card key={workshop} className="p-4 bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
                <div className="text-3xl mb-2">🎬</div>
                <h4 className="font-bold text-foreground mb-2">{workshop}</h4>
                <p className="text-xs text-muted-foreground mb-3">{t.workshopSubtitle}</p>
                <Button size="sm" variant="outline" className="w-full">
                  {t.watchNow}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Artisans Section */}
        <div className={`bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-8 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
          <h3 className="text-2xl font-bold text-foreground mb-6">{t.artisansTitle}</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {t.artisansDescription}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[t.artisan1, t.artisan2, t.artisan3].map((artisan) => (
              <div key={artisan} className="bg-white rounded p-4 flex items-center gap-4">
                <div className="text-4xl">👨‍🎨</div>
                <div>
                  <h4 className="font-bold text-foreground">{artisan}</h4>
                  <p className="text-xs text-muted-foreground">{t.experience}</p>
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