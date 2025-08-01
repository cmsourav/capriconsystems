'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useGlow } from '@/hooks/use-glow';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const services = [
  {
    id: 'custom-builds',
    title: 'Custom PC Builds',
    description: 'From elite gaming rigs to powerful workstations, we design and build custom PCs tailored to your exact specifications. We work with you to select the best components for your budget and performance goals.',
    image: 'https://images.unsplash.com/photo-1660855552442-1bae49431379?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    aiHint: 'gaming computer',
    features: ['Personalized Consultation', 'Premium Cable Management', 'Rigorous Stress Testing', '2-Year Warranty'],
  },
  {
    id: 'repairs',
    title: 'Expert Repairs & Diagnostics',
    description: 'Is your computer running slow, crashing, or not turning on? Our expert technicians can diagnose and fix a wide range of hardware and software issues to get your system back in peak condition.',
    image: 'https://images.unsplash.com/photo-1654778747238-12314fb5a4aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    aiHint: 'circuit board',
    features: ['Hardware Failure Diagnostics', 'Virus & Malware Removal', 'Data Recovery Services', 'OS Reinstallation'],
  },
  {
    id: 'upgrades',
    title: 'Performance Upgrades',
    description: 'Breathe new life into your existing system with our performance upgrade services. We can help you boost speed, increase storage, and enhance graphical capabilities for a fraction of the cost of a new PC.',
    image: 'https://images.unsplash.com/photo-1700427296131-0cc4c4610fc6?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    aiHint: 'computer parts',
    features: ['GPU & CPU Upgrades', 'RAM Expansion', 'SSD & NVMe Installation', 'Cooling System Enhancements'],
  },
  {
    id: 'consulting',
    title: 'Tech Consulting',
    description: 'Navigating the world of tech can be daunting. We offer expert advice for your home or small business, from network setup to choosing the right software and hardware for your needs.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    aiHint: 'data analysis',
    features: ['Home Network Setup', 'Small Business IT Support', 'Hardware Recommendations', 'Security Audits'],
  },
];

const ServiceTextContent = ({ service, onVisible }: { service: typeof services[0], onVisible: (id: string) => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.5 });
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    if (isVisible) {
      onVisible(service.id);
    }
  }, [isVisible, service.id, onVisible]);

  return (
    <div ref={ref} id={service.id} className="min-h-[60vh] flex flex-col justify-center">
       <div className="md:hidden mb-8">
          <Image
            src={service.image}
            alt={service.title}
            width={600}
            height={400}
            data-ai-hint={service.aiHint}
            className="rounded-xl shadow-lg object-cover w-full aspect-video"
          />
        </div>
      <div className="py-12">
        <h2 className="font-headline text-3xl font-bold mb-4">{service.title}</h2>
        <p className="text-muted-foreground mb-6">{service.description}</p>
        <ul className="space-y-3">
          {service.features.map(feature => (
            <li key={feature} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default function ServicesPage() {
  const [activeServiceId, setActiveServiceId] = useState(services[0].id);

  const handleVisibilityChange = useCallback((id: string) => {
    setActiveServiceId(id);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-center">Our Services</h1>
      <p className="max-w-3xl mx-auto text-lg text-muted-foreground text-center mb-16">
        We offer a comprehensive range of services to meet all your computing needs.
      </p>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left Column: Text Content */}
        <div>
          {services.map(service => (
            <ServiceTextContent 
              key={service.id} 
              service={service} 
              onVisible={handleVisibilityChange}
            />
          ))}
        </div>

        {/* Right Column: Sticky Image */}
        <div className="sticky top-24 h-[calc(100vh-6rem)] hidden md:flex items-center justify-center">
          <div className="relative w-full aspect-video">
            {services.map(service => (
              <Image
                key={service.id}
                src={service.image}
                alt={service.title}
                fill
                data-ai-hint={service.aiHint}
                className={cn(
                  'object-cover rounded-xl shadow-2xl transition-opacity duration-500 absolute inset-0',
                  activeServiceId === service.id ? 'opacity-100' : 'opacity-0'
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
