
'use client';

import Link from 'next/link';

const WhatsAppIcon = () => (
    <svg 
      viewBox="0 0 32 32" 
      xmlns="http://www.w3.org/2000/svg" 
      className="w-8 h-8 text-white"
      fill="currentColor"
    >
        <path d="M16,2A13,13,0,0,0,3,15,13.05,13.05,0,0,0,16,28.91c2.6,0,5.1-1,7.2-2.34L28,28l-1.58-4.81A12.62,12.62,0,0,0,29,15,13,13,0,0,0,16,2Zm6.57,15.81c-1.39.81-2.22.42-4.19-1.18S15.42,13,15.2,12.89c-.23-.12-1.28-.09-1.28-.09s-1.13,0-2,.81c-.84.85-1.3,2.13-1.3,2.13s.48,2.23,3.22,4.91,5,3.31,5,3.31.81.44,1.42-.25,2.1-2,2.1-2,0-.81-.52-1.22Z" />
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
