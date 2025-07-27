import { ContactForm } from '@/components/contact-form';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 animate-fade-in-blur">
      <section className="text-center mb-16">
        <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
          Have a question or a project in mind? We'd love to hear from you.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8 animate-fade-in-blur" style={{animationDelay: '150ms'}}>
          <h2 className="font-headline text-3xl font-bold">Contact Information</h2>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-md bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-muted-foreground">Reach out to us for any inquiries.</p>
              <a href="mailto:contact@capriconsystems.com" className="text-primary hover:underline">
                info@capriconsystems.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-md bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <a href="tel:+971 524298611" className="text-primary hover:underline">
              +971 52 429 8611
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-md bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Office</h3>
              <p className="text-muted-foreground">Sharjah Media City(Shams)</p>
              <p className="text-muted-foreground">PO.Box 515000 </p>
              <p className="text-muted-foreground">Sharjah, UAE </p>
            </div>
          </div>
        </div>

        <div className="animate-fade-in-blur" style={{animationDelay: '300ms'}}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
