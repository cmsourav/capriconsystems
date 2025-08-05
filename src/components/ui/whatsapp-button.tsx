
'use client';

import Link from 'next/link';

const WhatsAppIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 32 32" 
      className="w-8 h-8"
      fill="currentColor"
    >
      <path d="M16 2a14 14 0 1 0 0 28 14 14 0 0 0 0-28zM23.99 18.28a6.47 6.47 0 0 1-1.7.92 1.08 1.08 0 0 1-1.25-.26c-.4-.48-.92-1.07-1.32-1.57-.4-.5-.87-.8-1.4-.49-.52.3-3.25 1.58-5.87-1.05-2.62-2.62-1.35-5.35-1.05-5.87.31-.53-.01-1-.49-1.4s-1.09-.92-1.57-1.32a1.08 1.08 0 0 1-.26-1.25c.24-.58.5-1.2.92-1.7a6.47 6.47 0 0 1 1.07-.93c.48-.25 1.07-.25 1.52.05l.39.26c.2.14.4.3.6.48.48.4.8.88.94 1.42.14.53-.17 1.18-.4 1.57-.25.4-.5.75-.77 1.02-.27.27-.42.6-.21.94.7 1.25 2.18 2.74 3.43 3.43.34.21.67.06.94-.21.27-.27.62-.52 1.02-.77.39-.23.95-.54 1.57-.4.54.14 1.02.46 1.42.94.18.2.34.4.48.6l.26.39c.3.45.3.94.05 1.52a6.47 6.47 0 0 1-.93 1.07z"/>
    </svg>
);

export function WhatsAppButton() {
  const phoneNumber = '9633803580';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-fab" aria-label="Chat on WhatsApp">
      <WhatsAppIcon />
    </Link>
  );
}
