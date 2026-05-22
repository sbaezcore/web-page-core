import RunOperationsContent from './RunOperations';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Run Your Operations - Core Resources',
  description: 'Focus on growth, we’ve got the paperwork covered.',
};

export default function RunOperationsPage() {
  return <RunOperationsContent />;
}
