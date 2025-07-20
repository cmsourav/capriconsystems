'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Wrench, Zap } from 'lucide-react';

const services = ['Builds', 'Repairs', 'Upgrades', 'Solutions'];

const featuredServices = [
  {
    title: 'Custom PC Builds',
    description: 'High-performance PCs tailored to your gaming or professional needs. Built with precision and passion.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'custom computer',
    link: '/services#custom-builds',
  },
  {
    title: 'Expert Repairs',
    description: 'Fast, reliable diagnostics and repairs for all types of computers and peripherals. We bring your tech back to life.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'computer repair',
    link: '/services#repairs',
  },
  {
    title: 'Performance Upgrades',
    description: 'Boost your system\'s speed and capabilities with our component upgrade services. From RAM to GPUs.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'computer components',
    link: '/services#upgrades',
  },
];

const whyChooseUsItems = [
    {
        icon: <Award className="w-10 h-10 text-primary" />,
        title: 'Quality Components',
        description: 'We use only the highest quality, industry-trusted components to ensure reliability and performance.'
    },
    {
        icon: <Wrench className="w-10 h-10 text-primary" />,
        title: 'Expert Technicians',
        description: 'Our team consists of certified and experienced technicians passionate about all things tech.'
    },
    {
        icon: <Zap className="w-10 h-10 text-primary" />,
        title: 'Fast Turnaround',
        description: 'We pride ourselves on providing efficient service to get you back up and running as quickly as possible.'
    }
]

function AnimatedHeroText() {
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentService(prevService => (prevService + 1) % services.length);
    }, 2500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative inline-block h-24 md:h-28 mt-2">
      {services.map((service, index) => (
        <span
          key={service}
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
            index === currentService
              ? 'opacity-100 transform-none'
              : 'opacity-0 transform translate-y-4'
          }`}
        >
          {service}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full text-center py-20 md:py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
            Cutting-Edge Tech
            <br />
            <span className="text-primary block"><AnimatedHeroText /></span>
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-base md:text-xl text-muted-foreground">
            LuminTech Solutions is your premier destination for high-performance custom PCs, expert repairs, and future-proof upgrades.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 md:py-24 bg-card/50">
          <div className="container mx-auto px-4">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">Why Choose LuminTech?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {whyChooseUsItems.map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-6">
                        {item.icon}
                        <h3 className="font-headline text-2xl font-semibold mt-6 mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                    </div>
                ))}
              </div>
          </div>
      </section>

      {/* Featured Services Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Card key={index} className="overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-2xl">
                <CardHeader className="p-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    data-ai-hint={service.aiHint}
                    className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-2xl mb-2">{service.title}</CardTitle>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button asChild variant="link" className="p-0 h-auto text-primary">
                    <Link href={service.link}>Learn More &rarr;</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
