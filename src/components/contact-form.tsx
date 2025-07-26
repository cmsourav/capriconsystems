'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import * as z from 'zod';
import { useUI } from '@/contexts/ui-context';
import { submitContactForm, type ContactFormState } from '@/app/contact/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export function ContactForm() {
  const { showLoader, hideLoader, showMessage } = useUI();

  const initialState: ContactFormState = {
    success: false,
    message: '',
  };

  const [state, formAction] = useFormState(submitContactForm, initialState);

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      showMessage({
        type: 'success',
        message: state.message,
      });
      // Optionally reset the form here if needed, though useFormState doesn't auto-reset
    } else {
      showMessage({
        type: 'error',
        message: state.message,
      });
    }
  }, [state, showMessage]);

  const { pending } = useFormStatus();
  
  useEffect(() => {
    if (pending) {
      showLoader();
    } else {
      hideLoader();
    }
  }, [pending, showLoader, hideLoader]);


  return (
    <Card className="bg-card/50">
      <CardHeader>
        <CardTitle className="font-headline">Send us a Message</CardTitle>
        <CardDescription>Fill out the form below and we'll get back to you.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium leading-none">Full Name</label>
            <Input id="name" name="name" placeholder="John Doe" required />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none">Email Address</label>
            <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium leading-none">Subject</label>
            <Input id="subject" name="subject" placeholder="Custom PC Build Quote" required />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium leading-none">Message</label>
            <Textarea id="message" name="message" placeholder="Tell us about your project or inquiry..." rows={5} required />
          </div>
          
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
