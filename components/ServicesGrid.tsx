import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

export default function ServicesGrid() {
  return (
    <section className="w-full max-w-[1100px] px-6 z-10 mb-24">
      <p className="text-[#00F0FF] text-sm font-bold tracking-widest uppercase mb-2">Our Core Capabilities</p>

      {/* FIX: Reduced mobile font size from 4xl to 3xl */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Intelligent Systems Engineered for Scale.</h2>

      <ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Card 1 */}
          {/* FIX: Swapped fixed h-[200px] for min-h-[200px], reduced mobile padding to p-6, added gap-4 */}
          <div className="bg-[#16161D]/50 border border-[#2A2A38] rounded-2xl p-6 md:p-8 min-h-[200px] flex flex-col justify-between gap-4 hover:border-[#00F0FF]/50 transition-colors backdrop-blur-sm shadow-[inset_0_1px_4px_rgba(255,255,255,0.02)]">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Custom Web &amp; Mobile Applications</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">Full-stack platforms built for scale using Next.js, React, Flutter, and Supabase.</p>
            </div>
            <p className="text-[#00F0FF] text-xs font-medium tracking-wide">[ Web • Mobile • APIs ]</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#16161D]/50 border border-[#2A2A38] rounded-2xl p-6 md:p-8 min-h-[200px] flex flex-col justify-between gap-4 hover:border-[#8A2BE2]/50 transition-colors backdrop-blur-sm shadow-[inset_0_1px_4px_rgba(255,255,255,0.02)]">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">White-Label Ordering Engines</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">Direct-to-consumer ordering systems for food and retail brands, eliminating third-party commissions.</p>
            </div>
            <p className="text-[#8A2BE2] text-xs font-medium tracking-wide">[ E-Commerce • Automation ]</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#16161D]/50 border border-[#2A2A38] rounded-2xl p-6 md:p-8 min-h-[200px] flex flex-col justify-between gap-4 hover:border-[#8A2BE2]/50 transition-colors backdrop-blur-sm shadow-[inset_0_1px_4px_rgba(255,255,255,0.02)]">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">B2B Enterprise Dashboards</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">High-speed admin panels featuring real-time analytics, inventory management, and revenue tracking.</p>
            </div>
            <p className="text-[#8A2BE2] text-xs font-medium tracking-wide">[ Analytics • Real-Time Data ]</p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#16161D]/50 border border-[#2A2A38] rounded-2xl p-6 md:p-8 min-h-[200px] flex flex-col justify-between gap-4 hover:border-[#00F0FF]/50 transition-colors backdrop-blur-sm shadow-[inset_0_1px_4px_rgba(255,255,255,0.02)]">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Digital Ecosystems &amp; Community Platforms</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">Architecture and deployment of large-scale interactive platforms and student community networks.</p>
            </div>
            <p className="text-[#00F0FF] text-xs font-medium tracking-wide">[ Community • Platforms ]</p>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}