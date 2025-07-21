'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Cpu, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);

  const NavLink = ({ href, label, isMobile = false }: { href: string; label: string; isMobile?: boolean }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        onClick={() => setSheetOpen(false)}
        className={cn(
          'relative text-sm font-medium transition-colors hover:text-primary nav-link',
          isActive ? 'text-primary' : 'text-muted-foreground',
          isMobile && 'text-lg'
        )}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/70 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Cpu className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">Capricon Systems</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map(item => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/70 backdrop-blur-lg w-[80vw]">
              <div className="flex flex-col p-6">
                <Link href="/" className="flex items-center gap-2 mb-8" onClick={() => setSheetOpen(false)}>
                  <Cpu className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline">Capricon Systems</span>
                </Link>
                <nav className="flex flex-col gap-6">
                  {navItems.map(item => (
                    <NavLink key={item.href} {...item} isMobile />
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
