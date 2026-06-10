import { en } from '@/dictionaries/en';
import { es } from '@/dictionaries/es';
import FAQContent from './FAQ';
import { Metadata } from 'next';

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const params = await props.params;
  const lang = params.lang || 'en';
  return {
    title: lang === 'es' ? 'Preguntas Frecuentes - The Core Resources' : 'FAQ - The Core Resources',
    description: lang === 'es' ? 'Preguntas frecuentes sobre The Core Resources, Employer of Record, Staffing y BPO.' : 'Frequently asked questions about The Core Resources, including Employer of Record, Staffing, and BPO operations.',
  };
}

export default async function FAQPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = params.lang;
  const dict = lang === 'es' ? es : en;

  return (
    <FAQContent dict={dict} lang={lang} />
  );
}
