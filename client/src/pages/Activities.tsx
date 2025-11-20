import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';

const translations = {
  ar: {
    title: 'الأنشطة المدرسية',
    subtitle: 'عرض المشاريع والإبداعات الطلابية المستوحاة من التراث الثقافي',
    activities: [
      {
        title: 'المشاريع الصفية',
        description: 'عرض المشاريع والبحوث التي أنجزها التلاميذ حول التراث',
        icon: '📋',
      },
      {
        title: 'الرسومات والفنون',
        description: 'أعمال فنية وتشكيلية مستوحاة من التراث الثقافي',
        icon: '🎨',
      },
      {
        title: 'المشاركات الرقمية',
        description: 'إبداعات رقمية من التلاميذ حول التراث والثقافة',
        icon: '💻',
      },
      {
        title: 'العروض التقديمية',
        description: 'عروض تقديمية وحوارات حول مواضيع ثقافية',
        icon: '🎤',
      },
    ],
    discoverBtn: 'اكتشف الأعمال',
    featuredTitle: 'المشاريع المميزة',
    projects: [
      { title: 'بحث عن قصبة أيت بن حدو', author: 'فريق الصف الثالث', date: '2024-11-05' },
      { title: 'رسومات تقليدية معاصرة', author: 'سارة أحمد', date: '2024-11-03' },
      { title: 'فيديو توثيقي للحرف اليدوية', author: 'فريق الإنتاج', date: '2024-10-28' },
    ],
    byLabel: 'بقلم:',
    viewBtn: 'اعرض المشروع',
    participationTitle: 'كيفية المشاركة',
    forStudents: 'للتلاميذ',
    studentSteps: [
      'اختر موضوع يتعلق بالتراث الثقافي',
      'أنجز مشروعك (رسم، بحث، فيديو، إلخ)',
      'اطلب من معلمك تحميل عملك',
      'شاهد عملك معروضاً على المنصة!',
    ],
    forTeachers: 'للمعلمين',
    teacherSteps: [
      'انضم إلى المنصة كمعلم',
      'أنشئ فصلاً دراسياً',
      'أضف تلاميذك وأسندهم المشاريع',
      'راجع وحمّل أفضل الأعمال',
    ],
    ctaTitle: 'شارك إبداعك!',
    ctaText: 'هل لديك مشروع أو عمل فني تود مشاركته؟ نحن نرحب بجميع الإبداعات الطلابية المستوحاة من التراث الثقافي.',
    uploadBtn: 'احمل مشروعك الآن',
  },
  fr: {
    title: 'Activités scolaires',
    subtitle: 'Présentation des projets et créations des élèves inspirés du patrimoine culturel',
    activities: [
      {
        title: 'Projets de classe',
        description: 'Présentation des projets et recherches réalisés par les élèves sur le patrimoine',
        icon: '📋',
      },
      {
        title: 'Dessins et arts',
        description: 'Œuvres artistiques et plastiques inspirées du patrimoine culturel',
        icon: '🎨',
      },
      {
        title: 'Participations numériques',
        description: 'Créations numériques des élèves sur le patrimoine et la culture',
        icon: '💻',
      },
      {
        title: 'Présentations',
        description: 'Présentations et discussions sur des sujets culturels',
        icon: '🎤',
      },
    ],
    discoverBtn: 'Découvrir les œuvres',
    featuredTitle: 'Projets en vedette',
    projects: [
      { title: 'Recherche sur la kasbah d\'Ait Ben Haddou', author: 'Équipe de 3ème', date: '2024-11-05' },
      { title: 'Dessins traditionnels contemporains', author: 'Sarah Ahmed', date: '2024-11-03' },
      { title: 'Vidéo documentaire sur l\'artisanat', author: 'Équipe de production', date: '2024-10-28' },
    ],
    byLabel: 'Par :',
    viewBtn: 'Voir le projet',
    participationTitle: 'Comment participer',
    forStudents: 'Pour les élèves',
    studentSteps: [
      'Choisissez un sujet lié au patrimoine culturel',
      'Réalisez votre projet (dessin, recherche, vidéo, etc.)',
      'Demandez à votre enseignant de télécharger votre travail',
      'Voyez votre œuvre affichée sur la plateforme !',
    ],
    forTeachers: 'Pour les enseignants',
    teacherSteps: [
      'Rejoignez la plateforme en tant qu\'enseignant',
      'Créez une classe',
      'Ajoutez vos élèves et assignez-leur des projets',
      'Examinez et téléchargez les meilleures œuvres',
    ],
    ctaTitle: 'Partagez votre créativité !',
    ctaText: 'Vous avez un projet ou une œuvre artistique à partager ? Nous accueillons toutes les créations des élèves inspirées du patrimoine culturel.',
    uploadBtn: 'Téléchargez votre projet maintenant',
  },
  en: {
    title: 'School Activities',
    subtitle: 'Showcase of student projects and creations inspired by cultural heritage',
    activities: [
      {
        title: 'Classroom Projects',
        description: 'Display of projects and research conducted by students on heritage',
        icon: '📋',
      },
      {
        title: 'Drawings and Arts',
        description: 'Artistic and visual works inspired by cultural heritage',
        icon: '🎨',
      },
      {
        title: 'Digital Contributions',
        description: 'Students\' digital creations on heritage and culture',
        icon: '💻',
      },
      {
        title: 'Presentations',
        description: 'Presentations and discussions on cultural topics',
        icon: '🎤',
      },
    ],
    discoverBtn: 'Discover Works',
    featuredTitle: 'Featured Projects',
    projects: [
      { title: 'Research on Ait Ben Haddou Kasbah', author: '3rd Grade Team', date: '2024-11-05' },
      { title: 'Contemporary Traditional Drawings', author: 'Sarah Ahmed', date: '2024-11-03' },
      { title: 'Documentary Video on Handicrafts', author: 'Production Team', date: '2024-10-28' },
    ],
    byLabel: 'By:',
    viewBtn: 'View Project',
    participationTitle: 'How to Participate',
    forStudents: 'For Students',
    studentSteps: [
      'Choose a topic related to cultural heritage',
      'Complete your project (drawing, research, video, etc.)',
      'Ask your teacher to upload your work',
      'See your work displayed on the platform!',
    ],
    forTeachers: 'For Teachers',
    teacherSteps: [
      'Join the platform as a teacher',
      'Create a classroom',
      'Add your students and assign them projects',
      'Review and upload the best works',
    ],
    ctaTitle: 'Share Your Creativity!',
    ctaText: 'Do you have a project or artwork to share? We welcome all student creations inspired by cultural heritage.',
    uploadBtn: 'Upload Your Project Now',
  },
};

export default function Activities() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
              <Navigation />

      <div className="container mx-auto px-4 py-12">
         {/* ← Bouton retour */}
         
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {t.activities.map((activity) => (
            <Card key={activity.title} className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4">{activity.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{activity.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{activity.description}</p>
              <Button className="bg-accent hover:bg-accent/90">
                {t.discoverBtn}
              </Button>
            </Card>
          ))}
        </div>

        {/* Featured Projects */}
        <h3 className="text-2xl font-bold text-foreground mb-6">{t.featuredTitle}</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {t.projects.map((project) => (
            <Card key={project.title} className="p-4 bg-muted/50 hover:bg-muted transition-colors">
              <div className="text-4xl mb-3">⭐</div>
              <h4 className="font-bold text-foreground mb-2">{project.title}</h4>
              <p className="text-xs text-muted-foreground mb-3">
                {t.byLabel} {project.author}
              </p>
              <p className="text-xs text-muted-foreground mb-3">
                {project.date}
              </p>
              <Button size="sm" className="w-full bg-accent hover:bg-accent/90">
                {t.viewBtn}
              </Button>
            </Card>
          ))}
        </div>

        {/* Participation Info */}
        <div className="bg-white rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">{t.participationTitle}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4">{t.forStudents}</h4>
              <ol className="space-y-3 text-muted-foreground">
                {t.studentSteps.map((step, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="font-bold text-accent">{index + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4">{t.forTeachers}</h4>
              <ol className="space-y-3 text-muted-foreground">
                {t.teacherSteps.map((step, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="font-bold text-accent">{index + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-accent/20 to-accent/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">{t.ctaTitle}</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t.ctaText}
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            {t.uploadBtn}
          </Button>
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