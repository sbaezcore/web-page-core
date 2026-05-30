import RunOperationsContent from './RunOperations';
import { Metadata } from 'next';
import { getDictionary } from '../../../dictionaries/getDictionary';

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const params = await props.params;
  const lang = params.lang || 'en';
  return {
    title: lang === 'es' ? 'Dirige tus Operaciones - Core Resources' : 'Run Your Operations - Core Resources',
    description: lang === 'es' ? 'Enfócate en el crecimiento, nosotros nos encargamos del papeleo.' : 'Focus on growth, we’ve got the paperwork covered.',
  };
}

export default async function RunOperationsPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = params.lang;
  const dict = await getDictionary(lang as 'en' | 'es');
  return <RunOperationsContent dict={dict.runOperations} />;
}
