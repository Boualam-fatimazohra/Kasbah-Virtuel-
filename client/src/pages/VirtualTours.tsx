import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const kasbahTours = [
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
    url: null, // Pas de visite 3D disponible
  },
];

export default function VirtualTours() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4"> الزيارات الافتراضية</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            جولات ثلاثية الأبعاد داخل القصبات والمعالم التاريخية باستخدام تقنيات الواقع الافتراضي
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
                  ابدأ الجولة الافتراضية
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-foreground mb-6">المميزات</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <span className="text-3xl"></span>
              <div>
                <h4 className="font-bold text-foreground mb-2">تجربة واقع افتراضي غامرة</h4>
                <p className="text-muted-foreground">
                  استمتع بتجربة ثلاثية الأبعاد عالية الجودة تنقلك إلى قلب التراث المعماري
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl"></span>
              <div>
                <h4 className="font-bold text-foreground mb-2">تعليقات صوتية تفاعلية</h4>
                <p className="text-muted-foreground">
                  اسمع شرح تفصيلي لتاريخ كل معلمة من خبراء في التراث الثقافي
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl"></span>
              <div>
                <h4 className="font-bold text-foreground mb-2">ملاحة سهلة</h4>
                <p className="text-muted-foreground">
                  تنقل بحرية داخل المعالم واستكشف كل زاوية بسهولة
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl"></span>
              <div>
                <h4 className="font-bold text-foreground mb-2">متوافق مع جميع الأجهزة</h4>
                <p className="text-muted-foreground">
                  استمتع بالجولات على الهاتف أو الحاسوب أو نظارات الواقع الافتراضي
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
