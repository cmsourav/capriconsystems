import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
             <div className="bg-gray-900 p-1 rounded-full">
                <Image src="https://res.cloudinary.com/da82lkb5h/image/upload/v1753802837/soura_logo_WI_vuts58.png" alt="Capricon Systems Logo" width={24} height={24} className="rounded-full" />
              </div>
            <span className="font-bold">Capricon Systems</span>
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
