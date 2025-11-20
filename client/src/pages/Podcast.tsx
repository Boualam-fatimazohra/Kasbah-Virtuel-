import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';

const episodesAr = [
  {
    title: 'كنوز درّاع تافيلالت - الحلقة الأولى',
    description: 'حوار عن الكنوز الثقافية والتاريخية للمنطقة',
    duration: '28:45',
    date: '2024-11-10',
  },
  {
    title: 'العادات والتقاليد الشعبية',
    description: 'استكشاف العادات والتقاليد المحلية وأصولها',
    duration: '35:20',
    date: '2024-11-03',
  },
  {
    title: 'الحرف اليدوية والحرفيون',
    description: 'حديث مع الحرفيين عن تجاربهم وحياتهم',
    duration: '31:15',
    date: '2024-10-27',
  },
];

const episodesFr = [
  {
    title: 'Trésors de Drâa-Tafilalet - Épisode 1',
    description: 'Dialogue sur les trésors culturels et historiques de la région',
    duration: '28:45',
    date: '10/11/2024',
  },
  {
    title: 'Coutumes et Traditions Populaires',
    description: 'Exploration des coutumes et traditions locales et leurs origines',
    duration: '35:20',
    date: '03/11/2024',
  },
  {
    title: 'Artisanat et Artisans',
    description: 'Conversation avec les artisans sur leurs expériences et leur vie',
    duration: '31:15',
    date: '27/10/2024',
  },
];

const translations = {
  ar: {
    title: 'البودكاست الثقافي',
    subtitle: 'حلقات صوتية من إعداد التلاميذ تحت عنوان كنوز درّاع تافيلالت',
    listenNow: 'استمع الآن',
    aboutPodcast: 'عن البودكاست',
    aboutText1: 'برنامج بودكاست تعليمي من إعداد التلاميذ يهدف إلى توثيق وحفظ الذاكرة الشفهية للمنطقة. يتضمن حوارات حول التراث والعادات والحرف اليدوية.',
    aboutText2: 'يمكنك الاستماع إلى الحلقات مباشرة أو تحميلها للاستماع لاحقاً. شارك آرائك وتعليقاتك على كل حلقة!',
  },
  fr: {
    title: 'Podcast Culturel',
    subtitle: 'Épisodes audio préparés par les élèves sous le titre : Trésors de Drâa-Tafilalet',
    listenNow: 'Écouter maintenant',
    aboutPodcast: 'À propos du Podcast',
    aboutText1: 'Un programme de podcast éducatif préparé par les élèves visant à documenter et préserver la mémoire orale de la région. Il comprend des dialogues sur le patrimoine, les coutumes et l\'artisanat.',
    aboutText2: 'Vous pouvez écouter les épisodes directement ou les télécharger pour une écoute ultérieure. Partagez vos opinions et commentaires sur chaque épisode !',
  },
};

export default function Podcast() {
  const { language } = useLanguage();
  const t = translations[language];
  const episodes = language === 'ar' ? episodesAr : episodesFr;

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

        <div className="space-y-4">
          {episodes.map((episode) => (
            <Card key={episode.title} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <div className="text-5xl flex-shrink-0">🎙️</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{episode.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{episode.description}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span>⏱️ {episode.duration}</span>
                    <span>📅 {episode.date}</span>
                  </div>
                  <Button className="bg-accent hover:bg-accent/90">
                    {t.listenNow}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">{t.aboutPodcast}</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {t.aboutText1}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {t.aboutText2}
          </p>
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