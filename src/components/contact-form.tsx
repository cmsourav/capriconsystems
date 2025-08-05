
'use client';

import { useState, useTransition } from 'react';
import { useUI } from '@/contexts/ui-context';
import { sendContactEmail } from '@/app/contact/client-actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function ContactForm() {
  const { showLoader, hideLoader, showMessage } = useUI();
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    showLoader();

    startTransition(async () => {
      try {
        const result = await sendContactEmail(formData);
        
        if (result.success) {
          showMessage({
            type: 'success',
            text: result.message,
          });
          (event.target as HTMLFormElement).reset();
        } else {
          showMessage({
            type: 'error',
            text: result.message,
          });
        }
      } catch (error) {
        showMessage({
            type: 'error',
            text: 'An unexpected error occurred. Please try again later.',
          });
      } finally {
        hideLoader();
      }
    });
  };

  return (
    <Card className="bg-card/50">
      <CardHeader>
        <CardTitle className="font-headline">Send us a Message</CardTitle>
        <CardDescription>Fill out the form below and we'll get back to you.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium leading-none">Full Name</label>
            <Input id="name" name="name" placeholder="John Doe" required />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none">Email Address</label>
            <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium leading-none">Phone Number (Optional)</label>
            <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" />
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium leading-none">Subject</label>
            <Input id="subject" name="subject" placeholder="Custom PC Build Quote" required />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium leading-none">Message</label>
            <Textarea id="message" name="message" placeholder="Tell us about your project or inquiry..." rows={5} required />
          </div>

          <Button type="submit" disabled={isPending} className="w-full mt-2">
            {isPending ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
