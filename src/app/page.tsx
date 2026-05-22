import HomeContent from './home/Home';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Core Resources - Scale your global operations',
  description: 'Scale your global operations with us without increasing complexity and unnecessary costs.',
};

export default function Home() {
  return <HomeContent />;
}
