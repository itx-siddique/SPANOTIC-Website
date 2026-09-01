"use client";

import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Spanotic',
  description: 'Learn about Spanotic\'s mission to build intelligent digital systems and high-performance web architecture.',
  alternates: {
    canonical: 'https://spanotic.com/about',
  },
};
export default function AboutPage() {
  return (
    <main className="relative overflow-hidden min-h-screen pt-12 px-6 pb-24">
      {/* Ambient Lights */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-[#00F0FF] blur-[120px] rounded-full opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-[#8A2BE2] blur-[120px] rounded-full opacity-20 pointer-events-none" />

      {/* Header */}
      <h1 className="text-4xl text-white font-bold text-center relative z-10">
        Complexity to Clarity
      </h1>
      <p className="text-[#A1A1AA] text-center max-w-2xl mx-auto mt-4 mb-16 relative z-10">
        We engineer the digital infrastructure businesses need to thrive in the modern economy.
      </p>

      {/* The Mission Section */}
      <div className="grid md:grid-cols-2 gap-12 max-w-[1100px] mx-auto relative z-10 mb-20">
        {/* Left Column (The Chaos) */}
        <div>
          <h2 className="text-[#8A2BE2] text-xl font-semibold mb-4">The Problem Statement</h2>
          <p className="text-[#A1A1AA] leading-relaxed">
            Businesses often rely on unstructured, manual operations like WhatsApp orders and messy Excel sheets. This creates significant human bottlenecks, slowing down growth and introducing costly errors into everyday processes.
          </p>
        </div>

        {/* Right Column (The Solution) */}
        <div>
          <h2 className="text-[#00F0FF] text-xl font-semibold mb-4">Our Solution</h2>
          <p className="text-[#A1A1AA] leading-relaxed">
            We replace these manual tasks with intelligent, self-sustaining web and mobile applications. By automating workflows and centralizing data, we enable businesses to scale efficiently without being constrained by administrative overhead.
          </p>
        </div>
      </div>

      {/* Engineering Philosophy Grid */}
      <div className="relative z-10">
        <h2 className="text-2xl text-white font-bold text-center mb-8">
          Our Core Philosophy
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
          {/* Card 1 */}
          <div className="bg-[#16161D]/50 border border-[#2A2A38] rounded-2xl p-6 transition-all duration-300 hover:border-[#00F0FF]/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]">
            <h3 className="text-white text-lg font-semibold mb-3">Intelligent & Minimal</h3>
            <p className="text-[#A1A1AA] text-sm leading-relaxed">
              No clutter. Just clean, highly functional interfaces.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#16161D]/50 border border-[#2A2A38] rounded-2xl p-6 transition-all duration-300 hover:border-[#8A2BE2]/50 hover:shadow-[0_0_30px_rgba(138,43,226,0.1)]">
            <h3 className="text-white text-lg font-semibold mb-3">Remote-First Agility</h3>
            <p className="text-[#A1A1AA] text-sm leading-relaxed">
              A decentralized work culture allowing us to operate lean, fast, and highly efficiently.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#16161D]/50 border border-[#2A2A38] rounded-2xl p-6 transition-all duration-300 hover:border-[#00F0FF]/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]">
            <h3 className="text-white text-lg font-semibold mb-3">Future-Driven</h3>
            <p className="text-[#A1A1AA] text-sm leading-relaxed">
              We don't just build websites; we engineer operational systems that prepare businesses for the next decade.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
