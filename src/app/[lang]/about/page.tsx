import React from 'react';
import AboutContent from './About';
import { en } from '@/dictionaries/en';
import { es } from '@/dictionaries/es';
import type { Metadata } from 'next';

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const params = await props.params;
  const lang = params.lang || 'en';
  return {
    title: lang === 'es' ? 'Sobre Nosotros | Core Resources' : 'About Us | Core Resources',
    description: lang === 'es' ? 'Conoce más sobre la misión y liderazgo de Core Resources.' : 'Learn more about Core Resources mission and leadership.',
  };
}

export default async function AboutPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = params.lang;
  const dict = lang === 'es' ? es : en;

  return <AboutContent dict={dict.about} />;
}
