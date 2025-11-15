import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const routes = [
  {
    name: 'الطريق التاريخي',
    description: 'جولة تاريخية عبر أهم المعالم الأثرية والقصبات',
    duration: '3 أيام',
    difficulty: 'متوسط',
  },
  {
    name: 'طريق الحرف اليدوية',
    description: 'زيارة ورشات الحرفيين والتعرف على الصناعات التقليدية',
    duration: '2 يوم',
    difficulty: 'سهل',
  },
  {
    name: 'الطريق الثقافي الشامل',
    description: 'رحلة شاملة تجمع بين التاريخ والحرف والطبيعة',
    duration: '5 أيام',
    difficulty: 'صعب',
  },
];

const attractions = [
  { name: 'قصبة أيت بن حدو', type: 'موقع تراث عالمي' },
  { name: 'وادي درعة', type: 'طبيعة وجمال' },
  { name: 'سوق الخميس', type: 'تسوق تقليدي' },
  { name: 'مضايق توذغى', type: 'حرف يدوية' },
];

export default function Tourism() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">السياحة الثقافية الذكية</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            خريطة تفاعلية ومسارات سياحية ذكية لاستكشاف درّاع تافيلالت
          </p>
        </div>

        {/* Interactive Map */}
        <Card className="mb-12 overflow-hidden h-96 bg-muted relative">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d344293.649845028!2d-6.0183!3d31.0888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9cda1db2c4b4d7%3A0x41e6087e9c00f2db!2sDr%C3%A2a-Tafilalet!5e0!3m2!1sfr!2sma!4v1700000000000!5m2!1sfr!2sma"
    className="absolute inset-0 w-full h-full border-0"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</Card>


        {/* Routes */}
        <h3 className="text-2xl font-bold text-foreground mb-6">المسارات السياحية المقترحة</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {routes.map((route) => (
            <Card key={route.name} className="p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-foreground mb-2">{route.name}</h4>
              <p className="text-sm text-muted-foreground mb-4">{route.description}</p>
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">المدة:</span>
                  <span className="font-semibold text-foreground">{route.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">المستوى:</span>
                  <span className="font-semibold text-foreground">{route.difficulty}</span>
                </div>
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90">
                خطط رحلتك
              </Button>
            </Card>
          ))}
        </div>

        {/* Attractions */}
        <h3 className="text-2xl font-bold text-foreground mb-6">المعالم السياحية الرئيسية</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {attractions.map((attraction) => (
            <Card key={attraction.name} className="p-4 flex items-center justify-between hover:shadow-lg transition-shadow">
              <div>
                <h4 className="font-bold text-foreground">{attraction.name}</h4>
                <p className="text-xs text-muted-foreground">{attraction.type}</p>
              </div>
              <Button size="sm" variant="outline">
                معلومات
              </Button>
            </Card>
          ))}
        </div>

        {/* Tourist Info */}
        <div className="bg-white rounded-lg p-8">
  <h3 className="text-2xl font-bold text-foreground mb-6">معلومات سياحية مهمة</h3>
  <div className="grid md:grid-cols-3 gap-6">

    {/* المهرجانات */}
    <div>
      <h4 className="font-bold text-foreground mb-3">المهرجانات</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        <li>• مهرجان الواحات بتافيلالت (الراشيدية)</li>
        <li>• مهرجان السينما بورزازات</li>
        <li>• موسم الخطوبة بإملشيل (تنغير)</li>
        <li>• مهرجان تمور زاكورة</li>
        <li>• مهرجان التفاح بمتليلي (ميدلت)</li>
      </ul>
    </div>

    {/* الأطباق */}
    <div>
      <h4 className="font-bold text-foreground mb-3">الأطباق التقليدية</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        <li>• الطاجين الأمازيغي</li>
        <li>• الكسكس بالسبع خضر</li>
        <li>• بركوكس</li>
      </ul>
    </div>

    {/* نصائح */}
    <div>
      <h4 className="font-bold text-foreground mb-3">نصائح السفر</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        <li>• أفضل وقت للزيارة: أكتوبر – أبريل</li>
        <li>• احترم العادات المحلية والتقاليد</li>
        <li>• جرب الأطباق المحلية في الأسواق الشعبية</li>
      </ul>
    </div>

  </div>
</div>

      </div>
    </div>
  );
}
