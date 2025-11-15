import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const episodes = [
  {
    title: 'كنوز درّاع تافيلالت - الحلقة الأولى',
    description: 'حوار عن الكنوز الثقافية والتاريخية للمنطقة',
    duration: '28:45',
    date: '2024-11-10',
  },
  {
    title: 'العادات والتقاليس الشعبية',
    description: 'استكشاف العادات والتقاليس المحلية وأصولها',
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

export default function Podcast() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">البودكاست الثقافي</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            حلقات صوتية من إعداد التلاميذ تحت عنوان كنوز درّاع تافيلالت
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
                    استمع الآن
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">عن البودكاست</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            برنامج بودكاست تعليمي من إعداد التلاميذ يهدف إلى توثيق وحفظ الذاكرة الشفهية للمنطقة. يتضمن حوارات حول التراث والعادات والحرف اليدوية.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            يمكنك الاستماع إلى الحلقات مباشرة أو تحميلها للاستماع لاحقاً. شارك آرائك وتعليقاتك على كل حلقة!
          </p>
        </div>
      </div>
    </div>
  );
}
