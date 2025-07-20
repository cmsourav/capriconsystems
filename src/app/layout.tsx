// @/app/layout.tsx
'use client'

import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn('dark', inter.variable, spaceGrotesk.variable)}>
      <head>
        <title>LuminTech Solutions</title>
        <meta name="description" content="Your premier destination for custom PCs, repairs, and tech solutions." />
      </head>
      <body className="font-body antialiased">
          <div className="flex flex-col min-h-screen animated-background">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
      </body>
    </html>
  );
}
