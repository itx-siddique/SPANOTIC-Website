

import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Capabilities & Services | Spanotic',
  description: 'End-to-end digital product engineering and scalable system architecture services by Spanotic.',
  alternates: {
    canonical: 'https://spanotic.com/services',
  },
};

export default function ServicesPage() {
  return (
    // FIX: Changed pt-32 to pt-12 to reduce the massive top gap
    <main className="relative overflow-hidden min-h-screen pt-12 px-6">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#00F0FF]/15 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#8A2BE2]/15 blur-[120px] pointer-events-none z-0"></div>

      {/* Header Section */}
      <h1 className="text-white text-4xl font-bold relative z-10 text-center">
        Capabilities & Services
      </h1>
      <p className="text-[#A1A1AA] text-center mt-4 mb-16 relative z-10">
        End-to-end digital product engineering and scalable system architecture.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1100px] mx-auto relative z-10 pb-24">

        {/* Card 1 */}
        <div className="bg-[#16161D]/50 border border-[#2A2A38] rounded-2xl p-8 hover:border-[#8A2BE2]/50 transition-all">
          <div className="h-1 w-12 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] rounded-full mb-6"></div>
          <h3 className="text-xl font-bold text-white mb-4">Advanced UI/UX Design</h3>
          <p className="text-[#A1A1AA] leading-relaxed">
            Crafting immersive digital experiences utilizing dark-mode aesthetics, glassmorphism UI components, and interactive component variants.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            <span className="text-xs text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/20 px-3 py-1 rounded-full">Figma UI3</span>
            <span className="text-xs text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/20 px-3 py-1 rounded-full">Interactive Variants</span>
            <span className="text-xs text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/20 px-3 py-1 rounded-full">Wireframing</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#16161D]/50 border border-[#2A2A38] rounded-2xl p-8 hover:border-[#8A2BE2]/50 transition-all">
          <div className="h-1 w-12 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] rounded-full mb-6"></div>
          <h3 className="text-xl font-bold text-white mb-4">Cloud Infrastructure & Architecture</h3>
          <p className="text-[#A1A1AA] leading-relaxed">
            Deploying resilient AWS ecosystems, specializing in serverless compute, secure access management, and scalable storage tiers.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            <span className="text-xs text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/20 px-3 py-1 rounded-full">AWS Lambda</span>
            <span className="text-xs text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/20 px-3 py-1 rounded-full">Amazon EC2</span>
            <span className="text-xs text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/20 px-3 py-1 rounded-full">IAM Security</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#16161D]/50 border border-[#2A2A38] rounded-2xl p-8 hover:border-[#8A2BE2]/50 transition-all">
          <div className="h-1 w-12 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] rounded-full mb-6"></div>
          <h3 className="text-xl font-bold text-white mb-4">High-Performance Web Engineering</h3>
          <p className="text-[#A1A1AA] leading-relaxed">
            Architecting server-side rendered applications and interactive 3D WebGL environments using modern React frameworks.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            <span className="text-xs text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/20 px-3 py-1 rounded-full">Next.js 14</span>
            <span className="text-xs text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/20 px-3 py-1 rounded-full">React Three Fiber</span>
            <span className="text-xs text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/20 px-3 py-1 rounded-full">Framer Motion</span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#16161D]/50 border border-[#2A2A38] rounded-2xl p-8 hover:border-[#8A2BE2]/50 transition-all">
          <div className="h-1 w-12 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] rounded-full mb-6"></div>
          <h3 className="text-xl font-bold text-white mb-4">Data Systems & Logic</h3>
          <p className="text-[#A1A1AA] leading-relaxed">
            Developing robust Python-driven data pipelines, structural logic circuits, and automated machine learning evaluation systems.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            <span className="text-xs text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/20 px-3 py-1 rounded-full">Python</span>
            <span className="text-xs text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/20 px-3 py-1 rounded-full">Scikit-learn</span>
            <span className="text-xs text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/20 px-3 py-1 rounded-full">Logic Circuits</span>
          </div>
        </div>

      </div>
    </main>
  );
}