import { Bell, ChevronDown, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { IMAGES } from '@/config/images';

export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4 gap-4">
        <div className="flex-1">
          <h2 className="text-lg font-semibold">Good Morning, Ahsan</h2>
          <p className="text-sm text-muted-foreground">414 E, Clark street, Vermillion</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-60">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search" className="pl-8" />
          </div>
          <Button size="icon" variant="ghost">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" className="gap-2">
            <img
              alt="Avatar"
              className="rounded-full"
              height="32"
              src={IMAGES.avatar}
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span>Ahsan</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="border-t">
        <div className="flex h-12 items-center px-4 gap-4">
          <Button variant="ghost" className="gap-2">
            Up to $98k <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="ghost" className="gap-2">
            Amenities <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="ghost" className="gap-2">
            Type <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="ghost" className="gap-2">
            More <ChevronDown className="h-4 w-4" />
          </Button>
          <div className="flex-1" />
          <Button variant="ghost" className="gap-2">
            Last added <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}