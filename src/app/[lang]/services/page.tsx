import ServicesContent from './Services';
import { getDictionary } from '../../../dictionaries/getDictionary';
import type { Metadata } from "next";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const params = await props.params;
  const lang = params.lang || 'en';
  return {
    title: lang === 'es' 
      ? 'Servicios | Core Resources' 
      : 'Services | Core Resources',
    description: lang === 'es'
      ? 'Descubre nuestros servicios. Arma tu equipo y opera tu negocio con Core Resources.'
      : 'Discover our services. Build your team and run your operations with Core Resources.'
  };
}

export default async function ServicesPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = params.lang;
  const dict = getDictionary(lang);
  
  return <ServicesContent dict={dict.servicesPage} lang={lang} />;
}
