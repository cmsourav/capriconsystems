import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const teamMembers = [
  { name: 'Alex Johnson', role: 'Founder & Lead Engineer', avatar: 'https://placehold.co/100x100.png', aiHint: 'man portrait' },
  { name: 'Maria Garcia', role: 'Hardware Specialist', avatar: 'https://placehold.co/100x100.png', aiHint: 'woman portrait' },
  { name: 'Sam Chen', role: 'Customer Support Lead', avatar: 'https://placehold.co/100x100.png', aiHint: 'person portrait' },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 animate-fade-in-up">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">About LuminTech Solutions</h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
          We are a team of passionate tech enthusiasts dedicated to building high-performance computers and providing top-tier tech support.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              Our mission is to empower gamers, creators, and professionals with technology that unleashes their full potential. We believe in quality craftsmanship, transparent pricing, and building lasting relationships with our clients. Every machine we build and every problem we solve is a testament to our commitment to excellence.
            </p>
            <p className="text-muted-foreground">
              Founded in 2020, LuminTech was born from a desire to create a computer shop that prioritizes customer needs and pushes the boundaries of performance and design.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image 
              src="https://placehold.co/600x400.png"
              alt="Our workshop"
              width={600}
              height={400}
              data-ai-hint="computer workshop"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section>
        <h2 className="font-headline text-3xl font-bold text-center mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name} 
              className={cn(
                "text-center transition-all duration-300 hover:shadow-primary/20 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up",
              )}
              style={{ animationDelay: `${index * 150}ms`}}
            >
              <CardContent className="p-6 flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4 border-2 border-primary">
                  <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.aiHint}/>
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="font-headline text-xl font-semibold">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
