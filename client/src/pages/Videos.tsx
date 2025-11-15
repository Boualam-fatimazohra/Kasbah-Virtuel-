import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const videos = [
  {
    title: 'رحلة في قلب التراث',
    description: 'جولة افتراضية بواقع 360 من قناة PatriCode – Préserver le passé, coder le futur',
    duration: '17:57',
    thumbnail: '/images/draa.jpg', // change si tu as la vignette
    url: 'https://www.youtube.com/watch?v=Je0FHXgwSOQ', // من chaîne PatriCode :contentReference[oaicite:3]{index=3}
  },
  {
    title: 'الذكاء الاصطناعي في خدمة التراث الثقافي',
    description: 'شرح كيف يمكن للذكاء الاصطناعي أن يساهم في الحفاظ على التراث من قناة PatriCode',
    duration: '8:12',
    thumbnail: '/images/Ai.jpeg', // exemple de vignette
    url: 'https://www.youtube.com/watch?v=YTBxMIHBKSM', // من chaîne PatriCode :contentReference[oaicite:4]{index=4}
  },
  {
    title: 'رحلة في عالم التراث المغربي (VR)',
    description: 'استكشاف التراث المغربي بتقنية الواقع الافتراضي من PatriCode',
    duration: '11:00', // (je mets 11:00 comme estimation, vérifie la durée exacte)
    thumbnail: '/images/VR.jpg',
    url: 'https://www.youtube.com/watch?v=reaS9cckxto', // من chaîne PatriCode :contentReference[oaicite:5]{index=5}
  },
];

export default function Videos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            الفيديوهات التربوية والتوعوية
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            مجموعة من الفيديوهات التعليمية والتوثيقية عن التراث الثقافي
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card
              key={video.title}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden bg-muted group">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-5xl text-white"
                  >
                    ▶️
                  </a>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-bold">
                  {video.duration}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {video.description}
                </p>
                <Button
                  as="a"
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-accent hover:bg-accent/90"
                >
                  شاهد الفيديو
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
