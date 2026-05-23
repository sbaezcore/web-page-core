import HomeContent from './home/Home';
// import { Metadata } from 'next';

export const metadata = {
  title: 'Talent Solutions & BPO Services for U.S. Companies | Core Resources',
  description: 'Core Resources helps U.S. companies scale through global talent solutions and outsourced operations, including recruitment, staffing, EOR, bookkeeping, payroll, contractor payments and back-office support.',
  keywords: 'talent solutions and BPO services for U.S. companies, nearshore recruitment and staffing services, business process outsourcing services, back office outsourcing services, global talent solutions, hire talent in Latin America, EOR services, staff augmentation services, outsourced bookkeeping services, payroll outsourcing services, contractor payment services, outsourced administrative support, outsourced finance support'
};

export default function Home() {
  return <HomeContent />;
}
