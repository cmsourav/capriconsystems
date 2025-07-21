import Link from 'next/link';
import { Cpu } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Cpu className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">Capricon Systems</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Capricon Systems. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Twitter</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">LinkedIn</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
