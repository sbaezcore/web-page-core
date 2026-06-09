import React from 'react';
import ContactContent from './Contact';
import { en } from '@/dictionaries/en';
import { es } from '@/dictionaries/es';
import type { Metadata } from 'next';

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const params = await props.params;
  const lang = params.lang || 'en';
  return {
    title: lang === 'es' ? 'Contacto | Core Resources' : 'Contact Us | Core Resources',
    description: lang === 'es' ? 'Ponte en contacto con Core Resources para explorar cómo podemos ayudarte a crecer.' : 'Get in touch with Core Resources to explore how we can help you grow.',
  };
}

export default async function ContactPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = params.lang;
  const dict = lang === 'es' ? es : en;

  return <ContactContent dict={dict.contactPage} />;
}
