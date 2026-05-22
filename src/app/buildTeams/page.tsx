import BuildTeamsContent from './BuildTeams';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build Your Team - Core Resources',
  description: 'Hire top-tier talent fast—no entity needed.',
};

export default function BuildTeamsPage() {
  return <BuildTeamsContent />;
}
