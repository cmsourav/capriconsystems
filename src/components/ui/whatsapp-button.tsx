
'use client';

import Link from 'next/link';
import Image from 'next/image';

export function WhatsAppButton() {
  const phoneNumber = '971524298611';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-fab" aria-label="Chat on WhatsApp">
      <Image 
        src="https://res.cloudinary.com/da82lkb5h/image/upload/v1754409311/whatsapp_zrrebx.png" 
        alt="WhatsApp"
        width={32}
        height={32}
      />
    </Link>
  );
}
