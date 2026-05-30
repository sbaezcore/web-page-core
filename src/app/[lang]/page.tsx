import HomeContent from './home/Home';
import { getDictionary } from '../../dictionaries/getDictionary';
import type { Metadata } from "next";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const params = await props.params;
  const lang = params.lang || 'en';
  return {
    title: lang === 'es' 
      ? 'Soluciones de Talento y Servicios BPO para Empresas de EE. UU. | Core Resources' 
      : 'Talent Solutions & BPO Services for U.S. Companies | Core Resources',
    description: lang === 'es'
      ? 'Core Resources ayuda a las empresas de EE. UU. a escalar a través de soluciones globales de talento y operaciones subcontratadas, incluyendo reclutamiento, staffing, EOR, contabilidad, nómina y soporte administrativo.'
      : 'Core Resources helps U.S. companies scale through global talent solutions and outsourced operations, including recruitment, staffing, EOR, bookkeeping, payroll, contractor payments and back-office support.',
    keywords: 'talent solutions and BPO services for U.S. companies, nearshore recruitment and staffing services, business process outsourcing services, back office outsourcing services, global talent solutions, hire talent in Latin America, EOR services, staff augmentation services, outsourced bookkeeping services, payroll outsourcing services, contractor payment services, outsourced administrative support, outsourced finance support'
  };
}

export default async function Home(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = params.lang;
  const dict = getDictionary(lang);
  
  return <HomeContent dict={dict.home} lang={lang} />;
}
