import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  ar: {
    title: 'KasbahVR',
    subtitle: 'منصة تفاعلية للذكاء الاصطناعي والواقع الافتراضي',
    description: 'في خدمة التراث الثقافي',
    button: 'اكتشف الآن',
  },
  fr: {
    title: 'KasbahVR',
    subtitle: "Plateforme interactive d'IA et de réalité virtuelle",
    description: 'Au service du patrimoine culturel',
    button: 'Découvrir maintenant',
  },
};

const images = [
  '/images/k1gMlrP7RfVn.jpeg',
  '/images/taourirt.jpg',
  '/images/titrit.jpg',
];

export default function Hero({ onExplore }: { onExplore: () => void }) {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Changer l'image toutes les 2 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Background Slider */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div
        className={`relative h-full flex items-center justify-center px-8 md:px-16 ${
          language === 'ar' ? 'text-right' : 'text-left'
        }`}
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            {t.title}
          </h1>
          <p className="text-2xl md:text-3xl text-amber-100 mb-6 font-semibold">
            {t.subtitle}
          </p>
          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            {t.description}
          </p>

          <Button
            onClick={onExplore}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6"
          >
            {t.button}
          </Button>
        </div>
      </div>
    </section>
  );
}
