'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

export async function submitContactForm(data: unknown): Promise<{ success: boolean; message: string }> {
  const validatedFields = contactSchema.safeParse(data);

  if (!validatedFields.success) {
    console.error('Validation failed:', validatedFields.error.flatten().fieldErrors);
    return { success: false, message: 'Invalid data provided. Please check the form and try again.' };
  }

  // Simulate sending an email or saving to a database
  console.log('Received contact form submission:', validatedFields.data);
  
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Here you would integrate with an email service like Resend, SendGrid, etc.
    
    // Simulate a random failure to demonstrate error handling
    if (Math.random() < 0.1) {
      throw new Error('Email service is currently unavailable.');
    }

    return { success: true, message: 'Thank you for your message! We will get back to you shortly.' };

  } catch (error) {
    console.error('Failed to process contact form:', error);
    return { success: false, message: 'An unexpected error occurred. Please try again later.' };
  }
}
