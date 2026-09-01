import React from 'react';

export default function StatsBar() {
  return (
    <section className="w-full max-w-[1100px] px-6 z-10 mb-24">
      <div className="w-full h-auto lg:h-[90px] bg-[#16161D]/60 border border-[#2A2A38] rounded-xl backdrop-blur-md flex flex-col lg:flex-row items-center justify-around py-6 lg:py-0 shadow-[inset_0_1px_4px_rgba(255,255,255,0.05)] gap-6 lg:gap-0">
        <div className="text-center">
          <p className="text-[#00F0FF] text-3xl font-bold">99.9%</p>
          <p className="text-[#A1A1AA] text-sm mt-1">Uptime Guarantee</p>
        </div>
        <div className="text-center">
          <p className="text-[#8A2BE2] text-3xl font-bold">10+</p>
          <p className="text-[#A1A1AA] text-sm mt-1">Systems Digitized</p>
        </div>
        <div className="text-center">
          <p className="text-[#00F0FF] text-3xl font-bold">100%</p>
          <p className="text-[#A1A1AA] text-sm mt-1">Direct Client Control</p>
        </div>
        <div className="text-center">
          <p className="text-[#8A2BE2] text-3xl font-bold">24/7</p>
          <p className="text-[#A1A1AA] text-sm mt-1">Automated Workflows</p>
        </div>
      </div>
    </section>
  );
}
