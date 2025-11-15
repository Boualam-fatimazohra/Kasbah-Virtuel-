import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const handicrafts = [
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
];

export default function Handicrafts() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">الحرف اليدوية</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اكتشف الحرف اليدوية التقليدية وشاهد الحرفيين وهم يعملون في ورشاتهم
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
              <div className="p-6">
                <div className="text-4xl mb-2">{craft.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{craft.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{craft.description}</p>
                <div className="mb-4">
                  <h4 className="font-bold text-foreground mb-2 text-sm">التقنيات:</h4>
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
                  شاهد الورشات
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Workshops Section */}
        <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">الورشات المصورة</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            نقدم مجموعة من الفيديوهات التعليمية التي تعرض الحرفيين وهم يمارسون حرفتهم التقليدية. شاهد كيف يتم صنع الزربية والتطريز والفخار من البداية إلى النهاية.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {['الزربية التنغيرية', 'التطريز التقليدي', 'صناعة الفخار'].map((workshop) => (
              <Card key={workshop} className="p-4 bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
                <div className="text-3xl mb-2">🎬</div>
                <h4 className="font-bold text-foreground mb-2">{workshop}</h4>
                <p className="text-xs text-muted-foreground mb-3">ورشة عملية مدرسية مسجلة</p>
                <Button size="sm" variant="outline" className="w-full">
                  شاهد الآن
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Artisans Section */}
        <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">الحرفيون المحليون</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            هذه المنصة تعطي الضوء على الحرفيين المحليين الذين يحافظون على هذه التقاليس العريقة. تعرف على قصصهم وخبراتهم وكيفية حفاظهم على هذا التراث الثمين.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {['أم الحرف الزربية', 'معلم التطريز', 'صانع الفخار التقليدي'].map((artisan) => (
              <div key={artisan} className="bg-white rounded p-4 flex items-center gap-4">
                <div className="text-4xl">👨‍🎨</div>
                <div>
                  <h4 className="font-bold text-foreground">{artisan}</h4>
                  <p className="text-xs text-muted-foreground">خبرة أكثر من 20 سنة</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
