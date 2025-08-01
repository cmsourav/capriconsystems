// @/app/layout.tsx
'use client'

import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils';
import { UIProvider } from '@/contexts/ui-context';
import { LoadingIndicator } from '@/components/ui/loading-indicator';
import { MessageBox } from '@/components/ui/message-box';

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
        <title>Capricon Systems</title>
        <meta name="description" content="Your premier destination for custom PCs, repairs, and tech solutions." />
        <link rel="icon" href="https://res.cloudinary.com/da82lkb5h/image/upload/v1753802837/soura_logo_WI_vuts58.png" type="image/png" />
      </head>
      <body className="font-body antialiased">
        <UIProvider>
          <div className="flex flex-col min-h-screen animated-background">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
          <LoadingIndicator />
          <MessageBox />
        </UIProvider>
      </body>
    </html>
  );
}
