import React from 'react';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import ServicesGrid from '@/components/ServicesGrid';
import FeaturedWork from '@/components/FeaturedWork';
import Pricing from '@/components/Pricing';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B0B0E] text-white font-sans relative overflow-hidden flex flex-col items-center pb-0">

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