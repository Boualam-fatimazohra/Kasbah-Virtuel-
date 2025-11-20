import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation } from 'wouter'; // ✅ Ajout important

const spacesAr = [
  { id: 'virtual-tours', label: 'الزيارات الافتراضية' },
  { id: 'intangible-heritage', label: 'التراث اللامادي' },
  { id: 'handicrafts', label: 'الحرف اليدوية' },
  { id: 'games', label: 'الألعاب التعليمية' },
  { id: 'videos', label: 'الفيديوهات التربوية' },
  { id: 'podcast', label: 'البودكاست الثقافي' },
  { id: 'tourism', label: 'السياحة الثقافية' },
  { id: 'Activities', label: 'الأنشطة المدرسية' },
];

const spacesFr = [
  { id: 'virtual-tours', label: 'Visites Virtuelles' },
  { id: 'intangible-heritage', label: 'Patrimoine Immatériel' },
  { id: 'handicrafts', label: 'Artisanat' },
  { id: 'games', label: 'Jeux Éducatifs' },
  { id: 'videos', label: 'Vidéos Éducatives' },
  { id: 'podcast', label: 'Podcast Culturel' },
  { id: 'tourism', label: 'Tourisme Culturel' },
  { id: 'Activities', label: 'Activités Scolaires' },
];

const translations = {
  ar: {
    subtitle: 'منصة التراث الثقافي',
  },
  fr: {
    subtitle: 'Plateforme du patrimoine culturel',
  },
};

// ✅ Supprimer onNavigate des props
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const [, setLocation] = useLocation(); // ✅ Utiliser wouter
  const spaces = language === 'ar' ? spacesAr : spacesFr;
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'ar' : 'fr');
  };

  // ✅ Nouvelle fonction de navigation
  const handleNavigate = (id: string) => {
    setLocation(`/${id}`);
  };

  return (
    <nav className={`sticky top-0 z-50 bg-white shadow-md border-b border-border ${language === 'ar' ? 'text-right' : 'text-left'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className={language === 'ar' ? 'text-right' : 'text-left'}>
              <h1 className="text-xl font-bold text-accent cursor-pointer" onClick={() => setLocation('/')}>
                KasbahVR
              </h1>
              <p className="text-xs text-muted-foreground">{t.subtitle}</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2">
            {spaces.map((space) => (
              <Button
                key={space.id}
                variant="ghost"
                size="sm"
                onClick={() => handleNavigate(space.id)} // ✅ Utiliser handleNavigate
                className="text-sm whitespace-nowrap hover:bg-blue-300"
              >
                {space.label}
              </Button>
            ))}

            {/* Bouton changement de langue */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className={`${language === 'ar' ? 'mr-4' : 'ml-4'} text-sm`}
            >
              {language === 'fr' ? '🇲🇦 AR' : '🇫🇷 FR'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-border pb-4">
            <div className="grid grid-cols-2 gap-2 pt-4">
              {spaces.map((space) => (
                <Button
                  key={space.id}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    handleNavigate(space.id); // ✅ Utiliser handleNavigate
                    setIsOpen(false);
                  }}
                  className="text-sm justify-start"
                >
                  {space.label}
                </Button>
              ))}

              {/* Bouton langue mobile */}
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