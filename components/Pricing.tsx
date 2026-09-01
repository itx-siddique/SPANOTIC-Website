import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function Pricing() {
  return (
    <section className="w-full max-w-[1100px] px-6 z-10 mb-32">
      <p className="text-[#00F0FF] text-sm font-bold tracking-widest uppercase mb-2">Transparent Pricing</p>
      <h2 className="text-4xl font-bold text-white mb-10">Estimate Your Project Investment.</h2>

      <ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Essential Tier */}
          <div className="bg-[#16161D]/50 border border-[#2A2A38] rounded-2xl p-8 flex flex-col backdrop-blur-sm">
            <h3 className="text-[#A1A1AA] text-xl font-bold mb-4">Essential</h3>
            <p className="text-white text-3xl font-bold mb-4">$800 – $1,500</p>
            <p className="text-[#A1A1AA] text-sm mb-8 line-clamp-3">Best for static web platforms, landing pages, &amp; small business digitizations.</p>
            <ul className="space-y-4 mb-auto text-sm text-white">
              <li>✓ Custom Next.js Frontend</li>
              <li>✓ Standard Scroll Animations</li>
              <li>✓ Responsive Mobile Layout</li>
              <li>✓ Form Lead Capture</li>
            </ul>
            {/* Routes to interactive estimator with tier pre-selected */}
            <Link href="/pricing?complexity=Essential" className="w-full mt-10 bg-transparent border border-[#2A2A38] text-white text-center font-medium py-3 rounded-lg hover:border-white transition-all block">
              Select Essential
            </Link>
          </div>

          {/* Professional Tier */}
          <div className="bg-[#16161D]/70 border border-[#00F0FF] rounded-2xl p-8 flex flex-col relative shadow-[0_0_30px_rgba(0,240,255,0.1)] backdrop-blur-md transform lg:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00F0FF] text-[#0B0B0E] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="text-[#00F0FF] text-xl font-bold mb-4">Professional</h3>
            <p className="text-white text-3xl font-bold mb-4">$2,000 – $4,000</p>
            <p className="text-[#A1A1AA] text-sm mb-8 line-clamp-3">Full-stack CMS applications, white-label engines, &amp; business dashboards.</p>
            <ul className="space-y-4 mb-auto text-sm text-white">
              <li>✓ Everything in Essential</li>
              <li>✓ Sanity CMS / Admin Panel</li>
              <li>✓ Booking Scheduler Integration</li>
              <li>✓ Database &amp; API Connection</li>
            </ul>
            {/* Routes to interactive estimator with tier pre-selected */}
            <Link href="/pricing?complexity=Professional" className="w-full mt-10 bg-[#00F0FF] text-[#0B0B0E] text-center font-bold py-3 rounded-lg hover:bg-white hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all block">
              Start Project
            </Link>
          </div>

          {/* Enterprise Tier */}
          <div className="bg-[#16161D]/50 border border-[#8A2BE2] rounded-2xl p-8 flex flex-col backdrop-blur-sm">
            <h3 className="text-[#8A2BE2] text-xl font-bold mb-4">Enterprise</h3>
            <p className="text-white text-3xl font-bold mb-4">$4,500 – $8,000+</p>
            <p className="text-[#A1A1AA] text-sm mb-8 line-clamp-3">3D interactive product environments, complex automated ecosystems, &amp; AI.</p>
            <ul className="space-y-4 mb-auto text-sm text-white">
              <li>✓ Everything in Professional</li>
              <li>✓ React Three Fiber 3D Experience</li>
              <li>✓ Interactive Cost Estimator</li>
              <li>✓ Multi-Language Support</li>
            </ul>
            {/* Routes to interactive estimator with tier pre-selected */}
            <Link href="/pricing?complexity=Enterprise" className="w-full mt-10 bg-[#8A2BE2] text-white text-center font-bold py-3 rounded-lg hover:opacity-80 hover:shadow-[0_0_15px_rgba(138,43,226,0.4)] transition-all block">
              Request Enterprise
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}