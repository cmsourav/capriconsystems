'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

export type ContactFormState = {
  success: boolean;
  message: string;
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });


  if (!validatedFields.success) {
    console.error('Validation failed:', validatedFields.error.flatten().fieldErrors);
    return { success: false, message: 'Invalid data provided. Please check the form and try again.' };
  }

  // Simulate sending an email or saving to a database
  console.log('Received contact form submission:', validatedFields.data);
  
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate a random failure to demonstrate error handling
    if (Math.random() < 0.2) {
      throw new Error('Email service is currently unavailable.');
    }

    return { success: true, message: 'Thank you for your message! We will get back to you shortly.' };

  } catch (error) {
    console.error('Failed to process contact form:', error);
    return { success: false, message: 'An unexpected error occurred. Please try again later.' };
  }
}
