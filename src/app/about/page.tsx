'use client';

import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useGlow } from '@/hooks/use-glow';
import React, { useRef } from 'react';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';

const teamMembers = [
  { name: 'Alex Johnson', role: 'Founder & Lead Engineer', avatar: 'https://placehold.co/100x100.png', aiHint: 'man portrait' },
  { name: 'Maria Garcia', role: 'Hardware Specialist', avatar: 'https://placehold.co/100x100.png', aiHint: 'woman portrait' },
  { name: 'Sam Chen', role: 'Customer Support Lead', avatar: 'https://placehold.co/100x100.png', aiHint: 'person portrait' },
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
            <Image 
              src="https://placehold.co/600x400.png"
              alt="Our workshop"
              width={600}
              height={400}
              data-ai-hint="computer workshop"
              className="rounded-lg shadow-lg"
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section>
        <AnimateOnScroll as="h2" className="font-headline text-3xl font-bold text-center mb-12">Meet the Team</AnimateOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
             <AnimateOnScroll key={member.name} delay={0.1 + index * 0.1}>
              <GlowCard 
                className={cn(
                  "text-center transition-all duration-300 hover:shadow-[0_0_35px_5px_rgba(125,249,255,0.2)] hover:-translate-y-1 h-full",
                )}
              >
                <Card className="bg-transparent h-full">
                  <CardContent className="p-6 flex flex-col items-center">
                    <Avatar className="w-24 h-24 mb-4 border-2 border-primary">
                      <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.aiHint}/>
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-headline text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
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
