import React from 'react';
import Link from 'next/link';
import DotGrid from '@/components/DotGrid';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-4 pb-12 overflow-hidden border-b border-white/5">

      {/* 1. FULL-BLEED BACKGROUND */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#092D32"
          activeColor="#00F0FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* 2. THE MAGIC GRADIENT OVERLAY */}
      {/* FIX: Darkened the mobile background for better text legibility */}
      <div className="absolute inset-0 w-full h-full z-10 bg-[#0B0B0E]/70 sm:bg-transparent sm:bg-gradient-to-r sm:from-[#0B0B0E] sm:via-[#0B0B0E]/90 sm:to-transparent pointer-events-none"></div>

      {/* 3. FOREGROUND CONTENT */}
      <div className="relative z-20 w-full max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col gap-6 max-w-2xl">

          {/* FIX: Lowered starting text size to 4xl, centered text on mobile */}
          <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.1] md:leading-[1.05] tracking-tight text-center md:text-left mt-10 md:mt-0">
            Converting <br className="hidden sm:block" /> Manual <br className="hidden sm:block" /> Operations into <br className="hidden lg:block" />
            <span className="text-[#00F0FF] drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">Digital Systems.</span>
          </h1>

          {/* FIX: Centered paragraph text on mobile */}
          <p className="text-base md:text-lg text-[#A1A1AA] max-w-lg leading-relaxed mt-2 text-center md:text-left mx-auto md:mx-0">
            Optimizing operational complexity into digital clarity through custom architecture.
          </p>

          {/* FIX: Switched from flex-wrap to flex-col on mobile so buttons stack neatly */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-6 w-full">
            <Link href="/contact" className="w-full sm:w-auto text-center bg-[#00F0FF] text-[#0B0B0E] font-bold px-8 py-3.5 rounded-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] relative z-30">
              Start Your Transition
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto text-center border border-[#2A2A38] text-white px-8 py-3.5 rounded-lg hover:border-[#8A2BE2] hover:bg-[#8A2BE2]/10 transition-all bg-[#0B0B0E]/50 backdrop-blur-md relative z-30">
              View Our Work
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
}