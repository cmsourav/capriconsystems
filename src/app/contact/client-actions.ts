
'use client';

import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { type ContactFormState } from './actions';


const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function sendContactEmail(formData: FormData): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    const errorMessages = validatedFields.error.errors.map(e => e.message).join(' ');
    console.error('Validation failed:', validatedFields.error.flatten().fieldErrors);
    return { success: false, message: errorMessages || 'Invalid data provided.' };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Capricon Systems',
      subject: subject,
      message: message,
    };

    // These values are safe to be in the client-side code as they are public keys for EmailJS
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_zv9gh2d',
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_ubsnen9',
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'BczFLffBj-fWqMfq6'
    );

    return { success: true, message: 'Thank you for your message! We will get back to you shortly.' };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, message: 'An unexpected error occurred. Please try again later.' };
  }
}
