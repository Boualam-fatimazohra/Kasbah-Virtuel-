import { useState } from 'react';
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

const spaces = [
  {
    id: 'virtual-tours',
    label: 'الزيارات الافتراضية',
    icon: '',
    description: 'جولات ثلاثية الأبعاد داخل القصبات والمعالم التاريخية',
    image: '/images/k1gMlrP7RfVn.jpeg',
    component: VirtualTours,
  },
  {
    id: 'intangible-heritage',
    label: 'التراث اللامادي',
    icon: '',
    description: 'الأزياء التقليدية والحلي والعادات الثقافية',
    image: '/images/aceuil2.jpg',
    component: IntangibleHeritage,
  },
  {
    id: 'handicrafts',
    label: 'الحرف اليدوية',
    icon: '',
    description: 'الزربية والتطريز والفخار التقليدي',
    image: '/images/Ljy03wRIGgdB.jpg',
    component: Handicrafts,
  },
  {
    id: 'games',
    label: 'الألعاب التعليمية',
    icon: '',
    description: 'ألعاب تفاعلية وتحديات تعليمية',
    image: '/images/jeux.jpg',
    component: Games,
  },
  {
    id: 'videos',
    label: 'الفيديوهات التربوية',
    icon: '',
    description: 'فيديوهات تعليمية وشهادات حية',
    image: '/images/video.jpg',
    component: Videos,
  },
  {
    id: 'podcast',
    label: 'البودكاست الثقافي',
    icon: '',
    description: 'حلقات صوتية عن التراث والعادات',
    image: '/images/podcast.jpg',
    component: Podcast,
  },
  {
    id: 'tourism',
    label: 'السياحة الثقافية',
    icon: '',
    description: 'خريطة تفاعلية ومسارات سياحية',
    image: '/images/visite.jpg',
    component: Tourism,
  },
  {
    id: 'activities',
    label: 'الأنشطة المدرسية',
    icon: '',
    description: 'مشاريع وإبداعات طلابية',
    image: '/images/ecole.jpg',
    component: Activities,
  },
];

export default function Home() {
  const [currentSpace, setCurrentSpace] = useState<string | null>(null);

  const currentSpaceData = spaces.find((s) => s.id === currentSpace);
  const CurrentComponent = currentSpaceData?.component;

  const handleNavigate = (id: string) => {
    setCurrentSpace(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigate={handleNavigate} />

      {!currentSpace ? (
        <>
          {/* Hero Section */}
          <Hero onExplore={() => handleNavigate('virtual-tours')} />

          {/* Spaces Grid */}
          <section className="py-16 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">الفضاءات الأساسية</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  اكتشف الثمانية فضاءات التفاعلية التي تقدمها منصة KasbahVR
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {spaces.map((space) => (
                  <SpaceCard
                    key={space.id}
                    icon={space.icon}
                    title={space.label}
                    description={space.description}
                    image={space.image}
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
                <h2 className="text-3xl font-bold text-foreground mb-6 text-center">عن منصة KasbahVR</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  منصة KasbahVR هي منصة تفاعلية مبتكرة تجمع بين الذكاء الاصطناعي والواقع الافتراضي في خدمة التراث الثقافي لمنطقة درّاع تافيلالت. تهدف المنصة إلى الحفاظ على التراث الثقافي غير المادي وتعزيز الوعي به لدى الأجيال الجديدة.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  من خلال ثمانية فضاءات تفاعلية، توفر المنصة تجارب غامرة تتيح للزوار استكشاف التاريخ والعمارة والحرف اليدوية والعادات الثقافية بطرق مبتكرة وجذابة.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  نحن نؤمن بأن التراث الثقافي هو ثروة حقيقية يجب الحفاظ عليها ونقلها للأجيال القادمة. من خلال هذه المنصة، نسعى لجعل التراث حياً وتفاعلياً، وإلهام الشباب للاعتزاز بجذورهم وهويتهم الثقافية.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16 bg-gradient-to-br from-accent/10 to-accent/5">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">تواصل معنا</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                هل لديك أسئلة أو اقتراحات؟ نود أن نسمع منك. تواصل معنا لمزيد من المعلومات.
              </p>
              <button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                تواصل معنا
              </button>
            </div>
          </section>
        </>
      ) : (
        <>
          <button
            onClick={() => setCurrentSpace(null)}
            className="sticky top-20 z-40 m-4 px-4 py-2 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold transition-colors"
          >
            ← العودة إلى الرئيسية
          </button>
          {CurrentComponent && <CurrentComponent />}
        </>
      )}
    </div>
  );
}
