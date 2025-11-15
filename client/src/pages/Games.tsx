import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const games = [
  {
    name: 'اختبر معلوماتك',
    description: 'اختبر معرفتك بالتراث المحلي من خلال أسئلة متنوعة',
    icon: '❓',
    type: 'Quiz',
  },
  {
    name: 'لعبة الألغاز',
    description: 'اجمع قطع الصور التاريخية لاكتشاف معالم درّاع تافيلالت',
    icon: '🧩',
    type: 'Puzzle',
  },
  {
    name: 'لعبة الذاكرة',
    description: 'تذكر الصور والمعلومات الثقافية في لعبة تفاعلية مشوقة',
    icon: '🧠',
    type: 'Memory Game',
  },
  {
    name: 'رحلة عبر الزمن',
    description: 'استكشف تاريخ درّاع تافيلالت من خلال رحلة تفاعلية عبر العصور',
    icon: '⏰',
    type: 'Adventure',
  },
];

export default function Games() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">الألعاب التعليمية التفاعلية</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            تعلم بالمرح واللعب! استكشف التراث المحلي من خلال ألعاب تفاعلية وتحديات تعليمية
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {games.map((game) => (
            <Card key={game.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 p-8">
                <div className="text-6xl mb-4">{game.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{game.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{game.description}</p>
                <div className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  {game.type}
                </div>
              </div>
              <div className="p-6">
                <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                  العب الآن
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Challenges Section */}
        <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">التحديات التعليمية</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            شارك في تحديات تعليمية مشوقة تحفزك على التعلم واكتشاف المزيد عن التراث الثقافي. اجمع النقاط والجوائز وتنافس مع زملائك!
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'تحدي الأسبوع', desc: 'اجب على 5 أسئلة صعبة', reward: '100 نقطة' },
              { title: 'ماراثون المعرفة', desc: 'اجب على 20 سؤال متتالي', reward: '500 نقطة' },
              { title: 'الخبير الثقافي', desc: 'اجمع 1000 نقطة', reward: 'شهادة' },
            ].map((challenge) => (
              <Card key={challenge.title} className="p-4 bg-muted/50">
                <h4 className="font-bold text-foreground mb-2">{challenge.title}</h4>
                <p className="text-xs text-muted-foreground mb-3">{challenge.desc}</p>
                <div className="bg-accent/20 text-accent text-xs font-bold px-2 py-1 rounded inline-block">
                  {challenge.reward}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">لوحة الصدارة</h3>
          <div className="space-y-3">
            {[
              { rank: 1, name: 'أحمد محمد', score: 2500, medal: '🥇' },
              { rank: 2, name: 'فاطمة علي', score: 2300, medal: '🥈' },
              { rank: 3, name: 'محمود حسن', score: 2100, medal: '🥉' },
              { rank: 4, name: 'ليلى عمر', score: 1900, medal: '4️⃣' },
              { rank: 5, name: 'سارة إبراهيم', score: 1800, medal: '5️⃣' },
            ].map((player) => (
              <div key={player.rank} className="bg-white rounded p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{player.medal}</span>
                  <div>
                    <h4 className="font-bold text-foreground">{player.name}</h4>
                    <p className="text-xs text-muted-foreground">الترتيب #{player.rank}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-accent">{player.score}</p>
                  <p className="text-xs text-muted-foreground">نقطة</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
