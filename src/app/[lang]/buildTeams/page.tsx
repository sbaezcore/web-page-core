import BuildTeamsContent from './BuildTeams';
import { Metadata } from 'next';
import { getDictionary } from '../../../dictionaries/getDictionary';

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const params = await props.params;
  const lang = params.lang || 'en';
  return {
    title: lang === 'es' ? 'Construye tu Equipo - Core Resources' : 'Build Your Team - Core Resources',
    description: lang === 'es' ? 'Contrata talento de primer nivel rápidamente, sin necesidad de entidad local.' : 'Hire top-tier talent fast—no entity needed.',
  };
}

export default async function BuildTeamsPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = params.lang;
  const dict = await getDictionary(lang as 'en' | 'es');
  return <BuildTeamsContent dict={dict.buildTeams} />;
}
