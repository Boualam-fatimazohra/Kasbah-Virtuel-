import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const activities = [
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
];

export default function Activities() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">الأنشطة المدرسية</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            عرض المشاريع والإبداعات الطلابية المستوحاة من التراث الثقافي
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-4  gap-6 mb-12">
          {activities.map((activity) => (
            <Card key={activity.title} className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4">{activity.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{activity.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{activity.description}</p>
              <Button className="bg-accent hover:bg-accent/90">
                اكتشف الأعمال
              </Button>
            </Card>
          ))}
        </div>

        {/* Featured Projects */}
        <h3 className="text-2xl font-bold text-foreground mb-6">المشاريع المميزة</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { title: 'بحث عن قصبة أيت بن حدو', author: 'فريق الصف الثالث', date: '2024-11-05' },
            { title: 'رسومات تقليدية معاصرة', author: 'سارة أحمد', date: '2024-11-03' },
            { title: 'فيديو توثيقي للحرف اليدوية', author: 'فريق الإنتاج', date: '2024-10-28' },
          ].map((project) => (
            <Card key={project.title} className="p-4 bg-muted/50 hover:bg-muted transition-colors">
              <div className="text-4xl mb-3">⭐</div>
              <h4 className="font-bold text-foreground mb-2">{project.title}</h4>
              <p className="text-xs text-muted-foreground mb-3">
                بقلم: {project.author}
              </p>
              <p className="text-xs text-muted-foreground mb-3">
                {project.date}
              </p>
              <Button size="sm" className="w-full bg-accent hover:bg-accent/90">
                اعرض المشروع
              </Button>
            </Card>
          ))}
        </div>

        {/* Participation Info */}
        <div className="bg-white rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">كيفية المشاركة</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4">للتلاميذ</h4>
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-bold text-accent">1.</span>
                  <span>اختر موضوع يتعلق بالتراث الثقافي</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">2.</span>
                  <span>أنجز مشروعك (رسم، بحث، فيديو، إلخ)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">3.</span>
                  <span>اطلب من معلمك تحميل عملك</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">4.</span>
                  <span>شاهد عملك معروضاً على المنصة!</span>
                </li>
              </ol>
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4">للمعلمين</h4>
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-bold text-accent">1.</span>
                  <span>انضم إلى المنصة كمعلم</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">2.</span>
                  <span>أنشئ فصلاً دراسياً</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">3.</span>
                  <span>أضف تلاميذك وأسندهم المشاريع</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">4.</span>
                  <span>راجع وحمّل أفضل الأعمال</span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-accent/20 to-accent/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">شارك إبداعك!</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            هل لديك مشروع أو عمل فني تود مشاركته؟ نحن نرحب بجميع الإبداعات الطلابية المستوحاة من التراث الثقافي.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            احمل مشروعك الآن
          </Button>
        </div>
      </div>
    </div>
  );
}
