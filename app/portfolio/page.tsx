

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Portfolio | Spanotic',
  description: 'Explore Spanotic\'s engineered systems and digital transformations.',
  alternates: {
    canonical: 'https://spanotic.com/portfolio',
  },
};

const Project3DCanvas = dynamic(() => import('@/components/Project3DCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <p className="text-[#A1A1AA] text-xs animate-pulse">Loading 3D…</p>
    </div>
  ),
});

const categories = ['All', 'Mobile Apps', 'B2B Dashboards', 'Web Platforms'];

const projectsData = [
  { title: 'AirSpace Community', category: 'Mobile Apps', metric: '+40% Engagement', color: '#00F0FF' },
  { title: 'Axiora Crypto Hub', category: 'B2B Dashboards', metric: '< 50ms Latency', color: '#8A2BE2' },
  { title: 'Spanotic Web Engine', category: 'Web Platforms', metric: '0% 3rd-Party Fees', color: '#00F0FF' },
  { title: 'OmniTrack Core', category: 'B2B Dashboards', metric: '100% Real-Time Sync', color: '#8A2BE2' },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projectsData.filter(
    (project) => activeCategory === 'All' || activeCategory === project.category
  );

  return (
    <main className="min-h-screen pt-12 pb-16 flex flex-col items-center px-6 font-sans text-white relative overflow-hidden">

      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#00F0FF]/15 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#8A2BE2]/15 blur-[120px] pointer-events-none z-0"></div>

      {/* Header Section */}
      <div className="w-full max-w-[1100px] flex flex-col items-center text-center relative z-10 mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Engineered Systems & Portfolio
        </h1>
        <p className="text-[#A1A1AA] text-lg max-w-[600px]">
          A deep dive into custom digital transformations, B2B dashboards, and white-label platforms.
        </p>
      </div>

      {/* Interactive Filter Tabs */}
      <div className="w-full max-w-[1100px] flex flex-wrap justify-center gap-4 relative z-10">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 font-medium text-sm
                ${isActive
                  ? 'text-[#00F0FF] border-[#00F0FF] bg-[#00F0FF]/10'
                  : 'text-[#A1A1AA] border-[#2A2A38] hover:border-[#00F0FF]/50 hover:text-white'
                }
              `}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1100px] mt-12 relative z-10">
        {filteredProjects.map((project, index) => (
          <div key={index} className="bg-[#16161D]/50 border border-[#2A2A38] rounded-2xl p-6 hover:border-[#00F0FF]/50 transition-all flex flex-col gap-4">
            {/* 3D Canvas Container */}
            <div className="h-[200px] w-full relative rounded-lg overflow-hidden bg-black/20">
              <Project3DCanvas color={project.color} />
            </div>

            {/* Bottom Info */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-[#A1A1AA] text-sm">{project.category}</p>

              <div
                className="text-xs text-white border px-3 py-1 rounded-full w-fit mt-2"
                style={{ borderColor: project.color }}
              >
                {project.metric}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
