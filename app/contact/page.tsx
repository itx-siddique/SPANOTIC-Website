

import { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Spanotic',
  description: 'Get in touch with Spanotic to discuss your digital architecture needs.',
  alternates: {
    canonical: 'https://spanotic.com/contact',
  },
};

export default function ContactPage() {
  return <ContactForm />;
}