'use client'

import ContactForm from '@/components/ContactForm';
import Image from 'next/image';

export default function Home() {
  return (
    <>
    <ContactForm />
    <Image
      src="/public/globe.svg"
      alt="globe"
      width={300}
      height={300}
    />
    </>
  );
}
