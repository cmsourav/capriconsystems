
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu } from 'lucide-react';
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
          'relative text-sm font-medium transition-colors hover:text-primary',
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
        <div className="flex items-center gap-2">
          <Link href="/" aria-label="Capricon Systems Home" className="flex items-center gap-2 font-bold">
              <div className="bg-gray-900 p-1 rounded-full">
                <Image src="https://res.cloudinary.com/da82lkb5h/image/upload/v1753802837/soura_logo_WI_vuts58.png" alt="Capricon Systems Logo" width={32} height={32} className="rounded-full" />
              </div>
              <span>Capricon Systems</span>
          </Link>
        </div>


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
                 <div className="flex items-center gap-2 mb-8">
                    <Link href="/" aria-label="Capricon Systems Home" onClick={() => setSheetOpen(false)} className="flex items-center gap-2 font-bold">
                      <div className="bg-gray-900 p-1 rounded-full">
                        <Image src="https://res.cloudinary.com/da82lkb5h/image/upload/v1753802837/soura_logo_WI_vuts58.png" alt="Capricon Systems Logo" width={32} height={32} className="rounded-full" />
                      </div>
                      <span>Capricon Systems</span>
                    </Link>
                </div>
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
