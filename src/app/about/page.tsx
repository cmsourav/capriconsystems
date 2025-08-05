
'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useGlow } from '@/hooks/use-glow';
import React, { useRef } from 'react';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { ShieldCheck, Handshake, Gem } from 'lucide-react';

const commitments = [
  { 
    icon: <Gem className="w-10 h-10 text-primary" />,
    title: 'Uncompromising Quality', 
    description: 'We believe in excellence from the ground up. That means sourcing only the highest-quality, industry-trusted components for every build and repair, ensuring reliability and peak performance.' 
  },
  { 
    icon: <Handshake className="w-10 h-10 text-primary" />,
    title: 'Transparent Process', 
    description: 'We foster trust through clarity. From initial consultation to final handover, you\'ll receive clear, honest communication about pricing, options, and every step of your journey with us.' 
  },
  { 
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: 'Dedicated Support', 
    description: 'Our relationship doesn’t end at the point of sale. We stand by our work with robust warranties and dedicated, accessible support, ensuring your investment is protected for the long run.' 
  },
];

const GlowCard = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const ref = useRef<HTMLDivElement>(null);
  useGlow(ref);
  return (
    <div ref={ref} className={cn("glow-card", className)} {...props}>
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Hero Section */}
      <AnimateOnScroll as="section" className="text-center mb-16">
        <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">About Capricon Systems</h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
          We are a team of passionate tech enthusiasts dedicated to building high-performance computers and providing top-tier tech support.
        </p>
      </AnimateOnScroll>

      {/* Our Mission Section */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll as="div" className="order-2 md:order-1" delay={0.1}>
            <h2 className="font-headline text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              Our mission is to empower gamers, creators, and professionals with technology that unleashes their full potential. We believe in quality craftsmanship, transparent pricing, and building lasting relationships with our clients. Every machine we build and every problem we solve is a testament to our commitment to excellence.
            </p>
            <p className="text-muted-foreground">
              Founded in 2020, Capricon Systems was born from a desire to create a computer shop that prioritizes customer needs and pushes the boundaries of performance and design.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll as="div" className="order-1 md:order-2" delay={0.2}>
            <div className="p-4 rounded-lg bg-card/50 border border-white/20 shadow-lg backdrop-blur-lg glow-card">
              <Image 
                src="https://res.cloudinary.com/da82lkb5h/image/upload/v1754409534/capricon_logo_600x400_xcdh31.png"
                alt="Capricon Systems Logo"
                width={600}
                height={400}
                data-ai-hint="company logo"
                className="rounded-lg"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section>
        <AnimateOnScroll as="h2" className="font-headline text-3xl font-bold text-center mb-12">Our Commitment to Excellence</AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {commitments.map((commitment, index) => (
             <AnimateOnScroll key={commitment.title} delay={0.1 + index * 0.1}>
              <GlowCard 
                className="text-center transition-all duration-300 hover:shadow-[0_0_35px_5px_rgba(125,249,255,0.2)] hover:-translate-y-1 h-full"
              >
                <Card className="bg-transparent h-full">
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="mb-4">{commitment.icon}</div>
                    <h3 className="font-headline text-xl font-semibold mb-2">{commitment.title}</h3>
                    <p className="text-muted-foreground">{commitment.description}</p>
                  </CardContent>
                </Card>
              </GlowCard>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </div>
  );
}
