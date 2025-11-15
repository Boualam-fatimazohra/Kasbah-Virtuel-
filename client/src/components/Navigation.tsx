import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const spaces = [
  { id: 'virtual-tours', label: 'الزيارات الافتراضية',  },
  { id: 'intangible-heritage', label: 'التراث اللامادي', },
  { id: 'handicrafts', label: 'الحرف اليدوية',  },
  { id: 'games', label: 'الألعاب التعليمية',  },
  { id: 'videos', label: 'الفيديوهات التربوية',  },
  { id: 'podcast', label: 'البودكاست الثقافي',  },
  { id: 'tourism', label: 'السياحة الثقافية',  },
  { id: 'activities', label: 'الأنشطة المدرسية',  },
];

export default function Navigation({ onNavigate }: { onNavigate: (id: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-right">
              <h1 className="text-xl font-bold text-accent">KasbahVR</h1>
              <p className="text-xs text-muted-foreground">منصة التراث الثقافي</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {spaces.map((space) => (
              <Button
                key={space.id}
                variant="ghost"
                size="sm"
                onClick={() => onNavigate(space.id)}
                className="text-sm whitespace-nowrap hover:bg-accent/10"
              >
                <span className="ml-1">{space.icon}</span>
                {space.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
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
                    onNavigate(space.id);
                    setIsOpen(false);
                  }}
                  className="text-sm justify-start"
                >
                  <span className="ml-1">{space.icon}</span>
                  {space.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
