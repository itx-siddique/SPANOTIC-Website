import { Metadata } from 'next';
import PortfolioContent from './PortfolioContent';

export const metadata: Metadata = {
  title: 'Our Portfolio | Spanotic',
  description: 'Explore Spanotic\'s engineered systems and digital transformations.',
  alternates: {
    canonical: 'https://spanotic.com/portfolio',
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
