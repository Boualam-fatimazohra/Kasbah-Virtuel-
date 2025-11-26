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
 

      </div>
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