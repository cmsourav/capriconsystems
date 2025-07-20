// @/app/layout.tsx
'use client'

import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from "@/components/ui/toaster"
import { useParallax } from '@/hooks/use-parallax';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

// Metadata cannot be exported from a client component.
// We will keep the layout as a client component and move metadata to a template or page file if needed.
// For now, we can comment it out or handle it differently if it causes issues.
// export const metadata: Metadata = {
//   title: 'LuminTech Solutions',
//   description: 'Your premier destination for custom PCs, repairs, and tech solutions.',
// };

function ParallaxBackground({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  useParallax(containerRef);

  return (
    <div ref={containerRef} className="perspective-1 h-full">
      {children}
    </div>
  )
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, spaceGrotesk.variable)}>
      <head>
        <title>LuminTech Solutions</title>
        <meta name="description" content="Your premier destination for custom PCs, repairs, and tech solutions." />
      </head>
      <body className="font-body antialiased">
        <ParallaxBackground>
          <div className="flex flex-col min-h-screen animated-background">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ParallaxBackground>
      </body>
    </html>
  );
}