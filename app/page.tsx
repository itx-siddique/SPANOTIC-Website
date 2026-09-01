import React from 'react';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import ServicesGrid from '@/components/ServicesGrid';
import FeaturedWork from '@/components/FeaturedWork';
import Pricing from '@/components/Pricing';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spanotic | Digital Architecture & High-Performance Systems',
  description: 'Spanotic builds high-performance digital systems and web architecture.',
  alternates: {
    canonical: 'https://spanotic.com',
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen text-white font-sans relative overflow-hidden flex flex-col items-center pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Spanotic",
            url: "https://spanotic.com",
            logo: "https://spanotic.com/og-image.jpg"
          })
        }}
      />

      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#00F0FF]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-[#8A2BE2]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-[#00F0FF]/10 blur-[150px] rounded-full pointer-events-none" />
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <FeaturedWork />
      <Pricing />
    </main>
  );
}