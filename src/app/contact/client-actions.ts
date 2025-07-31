
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

  // IMPORTANT: You must configure your own EmailJS account and add the following
  // environment variables to a .env.local file in your project root.
  // The form will not work without them.
  //
  // NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
  // NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
  // NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    const errorMessage = "EmailJS credentials are not configured. Please check your environment variables.";
    console.error(errorMessage);
    return { success: false, message: errorMessage };
  }


  try {
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Capricon Systems',
      subject: subject,
      message: message,
    };

    await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    return { success: true, message: 'Thank you for your message! We will get back to you shortly.' };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, message: 'An unexpected error occurred. Please try again later.' };
  }
}
