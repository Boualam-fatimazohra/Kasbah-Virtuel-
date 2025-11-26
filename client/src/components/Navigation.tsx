import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation } from 'wouter';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const [, setLocation] = useLocation();
  const [active, setActive] = useState('');

  const spaces = language === 'ar' ? [
    { id: 'virtual-tours', label: 'الزيارات الافتراضية' },
    { id: 'intangible-heritage', label: 'التراث اللامادي' },
    { id: 'handicrafts', label: 'الحرف اليدوية' },
    { id: 'games', label: 'الألعاب التعليمية' },
    { id: 'videos', label: 'الفيديوهات التربوية' },
    { id: 'podcast', label: 'البودكاست الثقافي' },
    { id: 'tourism', label: 'السياحة الثقافية' },
    { id: 'Activities', label: 'الأنشطة المدرسية' },
  ] : [
    { id: 'virtual-tours', label: 'Visites Virtuelles' },
    { id: 'intangible-heritage', label: 'Patrimoine Immatériel' },
    { id: 'handicrafts', label: 'Artisanat' },
    { id: 'games', label: 'Jeux Éducatifs' },
    { id: 'videos', label: 'Vidéos Éducatives' },
    { id: 'podcast', label: 'Podcast Culturel' },
    { id: 'tourism', label: 'Tourisme Culturel' },
    { id: 'Activities', label: 'Activités Scolaires' },
  ];

  const handleNavigate = (id: string) => {
    setLocation(`/${id}`);
    setActive(id);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'ar' : 'fr');
  };

  return (
    <nav className={`sticky top-0 z-50 bg-white shadow-md border-b border-border ${language === 'ar' ? 'text-right' : 'text-left'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        
        {/* HEADER */}
        <div className="flex items-center justify-between h-20">

          {/* LOGO complètement à gauche (FR) ou à droite (AR) */}
          <div className={`${language === 'ar' ? 'order-3' : 'order-1'}`}>
            <div className="cursor-pointer" onClick={() => setLocation('/')}>
              <h1 className="text-xl font-bold text-accent">
                KasbahVR
              </h1>
              <p className="text-xs text-muted-foreground">
                {language === 'ar' ? 'منصة التراث الثقافي' : 'Plateforme du patrimoine culturel'}
              </p>
            </div>
          </div>

          {/* MENU au centre */}
          <div className={`hidden lg:flex items-center gap-2 ${language === 'ar' ? 'order-2' : 'order-2'}`}>
            {spaces.map((space) => (
              <Button
                key={space.id}
                variant="ghost"
                size="sm"
                onClick={() => handleNavigate(space.id)}
                className={`text-xl whitespace-nowrap px-4 py-2 rounded-full transition-all duration-300
                  ${active === space.id ? 'bg-orange-500 text-white font-bold' : 'hover:bg-orange-200 hover:text-orange-600'}
                `}
              >
                {space.label}
              </Button>
            ))}
          </div>

          {/* BOUTON LANGUE complètement à droite (FR) ou à gauche (AR) */}
          <div className={`${language === 'ar' ? 'order-1' : 'order-3'}`}>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="text-sm"
            >
              {language === 'fr' ? '🇲🇦 AR' : '🇫🇷 FR'}
            </Button>
          </div>

          {/* BOUTON MENU MOBILE */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* MENU MOBILE */}
        {isOpen && (
          <div className="lg:hidden border-t border-border pb-4">
            <div className="grid grid-cols-2 gap-2 pt-4">
              {spaces.map((space) => (
                <Button
                  key={space.id}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    handleNavigate(space.id);
                    setIsOpen(false);
                  }}
                  className={`text-sm justify-start ${active === space.id ? 'bg-orange-400 text-white font-bold' : ''}`}
                >
                  {space.label}
                </Button>
              ))}

              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="text-sm justify-start col-span-2"
              >
                {language === 'fr' ? '🇲🇦 AR' : '🇫🇷 FR'}
              </Button>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}