import { Metadata } from 'next';
import PricingContent from './PricingContent';

export const metadata: Metadata = {
  title: 'Pricing & Estimator | Spanotic',
  description: 'Generate a real-time budget estimate for your next digital architecture project with Spanotic.',
  alternates: {
    canonical: 'https://spanotic.com/pricing',
  },
};

export default function PricingPage() {
  return <PricingContent />;
}
