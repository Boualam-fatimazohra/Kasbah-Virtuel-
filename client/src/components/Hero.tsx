import { Button } from '@/components/ui/button';

export default function Hero({ onExplore }: { onExplore: () => void }) {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/k1gMlrP7RfVn.jpeg)',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-8 md:px-16">
  <div className="text-center max-w-2xl">
    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
      KasbahVR
    </h1>
    <p className="text-2xl md:text-3xl text-amber-100 mb-6 font-semibold">
      منصة تفاعلية للذكاء الاصطناعي والواقع الافتراضي
    </p>
    <p className="text-lg text-gray-200 mb-8 leading-relaxed">
     في خدمة التراث الثقافي 
    </p>

    <Button
      onClick={onExplore}
      size="lg"
      className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6"
    >
      اكتشف الآن
    </Button>
  </div>
</div>

    </section>
  );
}
