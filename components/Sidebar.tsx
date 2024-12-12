"use client";

import { Building2, Users, FileText, Settings, HelpCircle, LogOut, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: Building2, label: 'My unit', href: '/my-unit' },
  { icon: Building2, label: 'Properties', href: '/properties' },
  { icon: Users, label: 'Clients', href: '/clients' },
  { icon: FileText, label: 'Transaction', href: '/transaction' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

const bottomItems = [
  { icon: HelpCircle, label: 'Help Center' },
  { icon: LogOut, label: 'Log out' },
];

export function Sidebar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <div className="w-60 border-r bg-card flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <Building2 className="h-6 w-6" />
          <span className="font-semibold text-lg">Homely</span>
        </div>
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <Button
                variant={isActive(item.href) ? "secondary" : "ghost"}
                className="w-full justify-start gap-2"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto p-6 border-t">
        <div className="space-y-1">
          {bottomItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="w-full justify-start gap-2"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </div>
        <div className="mt-6 bg-muted rounded-lg p-4">
          <p className="font-semibold mb-1">Upgrade to Premium</p>
          <p className="text-sm text-muted-foreground mb-3">Get 7 days free trial</p>
          <Button className="w-full">Upgrade</Button>
        </div>
      </div>
    </div>
  );
}