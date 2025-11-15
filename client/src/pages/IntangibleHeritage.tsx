import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const heritageItems = [
  {
    title: 'الأزياء الأمازيغية التقليدية',
    image: '/images/tradition.jpg',
    description: 'عرض تفاعلي للأزياء التقليدية بدرعة تافيلالت مع شرح الرموز الثقافية',
    icon: '',
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
    icon: '',
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
    icon: '',
    details: [
      'تخصيص الأفاتار',
      'تجربة الأزياء المختلفة',
      'التقاط الصور',
      'مشاركة الصور',
    ],
  },
];

export default function IntangibleHeritage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4"> التراث اللامادي</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اكتشف الأزياء التقليدية والحلي والعادات الثقافية لمنطقة درّاع تافيلالت
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
                اكتشف المزيد
              </Button>
            </div>
          </Card>
          
          ))}
        </div>

        {/* Cultural Significance */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-foreground mb-6">الأهمية الثقافية</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-foreground mb-3">الرموز والمعاني</h4>
              <p className="text-muted-foreground leading-relaxed">
                تحمل الأزياء والحلي التقليدية رموزاً عميقة تعكس هوية المجتمع وقيمه. كل لون وشكل وزينة لها معنى خاص يرتبط بالعادات والتقاليد المحلية.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground mb-3">الحفاظ على التراث</h4>
              <p className="text-muted-foreground leading-relaxed">
                من خلال هذه المنصة، نسعى للحفاظ على هذا التراث اللامادي الغني ونقله للأجيال القادمة، مما يساهم في تعزيز الهوية الثقافية والاعتزاز بالجذور.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
