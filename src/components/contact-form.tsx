
'use client';

import { useFormStatus, useFormState } from 'react-dom';
import { useEffect, useActionState } from 'react';
import { useUI } from '@/contexts/ui-context';
import { submitContactForm, type ContactFormState } from '@/app/contact/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full mt-2">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

function ContactFormBody({ formAction, state }: { formAction: (payload: FormData) => void, state: ContactFormState }) {
  const { pending } = useFormStatus();
  const { showLoader, hideLoader, showMessage } = useUI();

  useEffect(() => {
    if (pending) {
      showLoader();
    } else {
      hideLoader();
    }
  }, [pending, showLoader, hideLoader]);

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      showMessage({
        type: 'success',
        message: state.message,
      });
    } else {
      showMessage({
        type: 'error',
        message: state.message,
      });
    }
  }, [state, showMessage]);

  return (
    <form action={formAction} className="space-y-4">
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
  )
}

export function ContactForm() {
  const initialState: ContactFormState = {
    success: false,
    message: '',
  };

  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <Card className="bg-card/50">
      <CardHeader>
        <CardTitle className="font-headline">Send us a Message</CardTitle>
        <CardDescription>Fill out the form below and we'll get back to you.</CardDescription>
      </CardHeader>
      <CardContent>
        <ContactFormBody formAction={formAction} state={state} />
      </CardContent>
    </Card>
  );
}
