import { ContactForm } from '@/components/contact-form';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <section className="text-center mb-16">
        <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
          Have a question or a project in mind? We'd love to hear from you.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h2 className="font-headline text-3xl font-bold">Contact Information</h2>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-md bg-primary/10">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-muted-foreground">Reach out to us for any inquiries.</p>
              <a href="mailto:contact@lumintech.com" className="text-primary hover:underline">
                contact@lumintech.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-md bg-primary/10">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-muted-foreground">Mon-Fri, 9am - 6pm</p>
              <a href="tel:+1234567890" className="text-primary hover:underline">
                (123) 456-7890
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-md bg-primary/10">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Office</h3>
              <p className="text-muted-foreground">123 Tech Street, Silicon Valley, CA 94000</p>
            </div>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
