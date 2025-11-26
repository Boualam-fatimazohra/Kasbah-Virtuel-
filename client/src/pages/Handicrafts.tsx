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