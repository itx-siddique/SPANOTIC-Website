'use client';

import React from 'react';
import Image from 'next/image';

export default function FeaturedWork() {
  return (
    <section className="w-full max-w-[1100px] px-6 z-10 mb-32">
      <p className="text-[#8A2BE2] text-sm font-bold tracking-widest uppercase mb-2">Featured Work</p>

      {/* FIX: Scaled down mobile heading to match the ServicesGrid */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Real Systems. Measurable Outcomes.</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Project 1: AirSpace */}
        {/* FIX: Changed h-[380px] to h-full min-h-[420px] so the card stretches on mobile. Added p-6. */}
        <div className="bg-[#16161D]/50 border border-[#2A2A38] rounded-2xl p-6 h-full min-h-[420px] flex flex-col backdrop-blur-sm group hover:border-[#00F0FF]/30 transition-all">

          <div className="relative w-full h-[180px] mb-6 shrink-0">
            <Image
              src="/airspace-3d-removebg.jpg"
              alt="AirSpace Community Platform 3D Concept"
              fill
              className="object-contain scale-[1.15] mix-blend-screen transition-transform duration-700 ease-out group-hover:scale-[1.25]"
            />
          </div>

          <h3 className="text-2xl font-bold text-white mb-3">AirSpace Community Platform</h3>

          {/* FIX: Removed line-clamp-2 and added leading-relaxed for better readability */}
          <p className="text-[#A1A1AA] text-sm mb-8 leading-relaxed">
            All-in-one mobile application engineered for university communities to connect and organize.
          </p>

          {/* FIX: Added mt-auto to anchor this badge to the bottom, regardless of card height */}
          <div className="inline-flex items-center self-start bg-[#00F0FF]/15 border border-[#00F0FF]/40 px-3 py-1.5 rounded-full mt-auto">
            <span className="text-[#00F0FF] text-xs font-bold">⚡ +40% Student Engagement</span>
          </div>
        </div>

        {/* Project 2: Axiora */}
        <div className="bg-[#16161D]/50 border border-[#2A2A38] rounded-2xl p-6 h-full min-h-[420px] flex flex-col backdrop-blur-sm group hover:border-[#8A2BE2]/30 transition-all">

          <div className="relative w-full h-[180px] mb-6 shrink-0">
            <Image
              src="/axiora-3d-Photoroom.jpg"
              alt="Axiora Crypto Hub 3D Concept"
              fill
              className="object-contain scale-[1.15] mix-blend-screen transition-transform duration-700 ease-out group-hover:scale-[1.25]"
            />
          </div>

          <h3 className="text-2xl font-bold text-white mb-3">Axiora Crypto Hub</h3>
          <p className="text-[#A1A1AA] text-sm mb-8 leading-relaxed">
            High-speed cryptocurrency signal hub and financial tracking portfolio with advanced access management.
          </p>

          <div className="inline-flex items-center self-start bg-[#8A2BE2]/15 border border-[#8A2BE2]/40 px-3 py-1.5 rounded-full mt-auto">
            <span className="text-[#8A2BE2] text-xs font-bold">⚡ &lt; 50ms Trade Execution</span>
          </div>
        </div>

      </div>
    </section>
  );
}