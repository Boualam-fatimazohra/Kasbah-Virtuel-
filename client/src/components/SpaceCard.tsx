import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface SpaceCardProps {
  icon: string;
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

export default function SpaceCard({
  icon,
  title,
  description,
  image,
  onClick,
}: SpaceCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 right-4 text-4xl">{icon}</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <Button
          onClick={onClick}
          variant="default"
          className="w-full bg-accent hover:bg-accent/90"
        >
          اكتشف المزيد
        </Button>
      </div>
    </Card>
  );
}
