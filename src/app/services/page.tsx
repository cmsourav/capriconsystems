import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    id: 'custom-builds',
    title: 'Custom PC Builds',
    description: 'From elite gaming rigs to powerful workstations, we design and build custom PCs tailored to your exact specifications. We work with you to select the best components for your budget and performance goals.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'gaming computer',
    features: ['Personalized Consultation', 'Premium Cable Management', 'Rigorous Stress Testing', '2-Year Warranty'],
  },
  {
    id: 'repairs',
    title: 'Expert Repairs & Diagnostics',
    description: 'Is your computer running slow, crashing, or not turning on? Our expert technicians can diagnose and fix a wide range of hardware and software issues to get your system back in peak condition.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'circuit board',
    features: ['Hardware Failure Diagnostics', 'Virus & Malware Removal', 'Data Recovery Services', 'OS Reinstallation'],
  },
  {
    id: 'upgrades',
    title: 'Performance Upgrades',
    description: 'Breathe new life into your existing system with our performance upgrade services. We can help you boost speed, increase storage, and enhance graphical capabilities for a fraction of the cost of a new PC.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'computer parts',
    features: ['GPU & CPU Upgrades', 'RAM Expansion', 'SSD & NVMe Installation', 'Cooling System Enhancements'],
  },
  {
    id: 'consulting',
    title: 'Tech Consulting',
    description: 'Navigating the world of tech can be daunting. We offer expert advice for your home or small business, from network setup to choosing the right software and hardware for your needs.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'server room',
    features: ['Home Network Setup', 'Small Business IT Support', 'Hardware Recommendations', 'Security Audits'],
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 animate-fade-in-up">
      <section className="text-center mb-16">
        <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
          We offer a comprehensive range of services to meet all your computing needs.
        </p>
      </section>

      <div className="space-y-20">
        {services.map((service, index) => (
          <section key={service.id} id={service.id} className="scroll-mt-20">
            <Card className="overflow-hidden animate-fade-in-up" style={{ animationDelay: `${index * 150}ms`}}>
              <div className={`grid md:grid-cols-2 items-center gap-8`}>
                <div className={`p-8 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
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
                <div className={` ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    data-ai-hint={service.aiHint}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </Card>
          </section>
        ))}
      </div>
    </div>
  );
}
