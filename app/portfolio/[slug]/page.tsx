import { Metadata } from 'next';
import React from 'react';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const title = params.slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  return {
    title: `${title} | Portfolio Case Study | Spanotic`,
    description: `Read our case study on ${title} and how we engineered this digital solution.`,
    alternates: {
      canonical: `https://spanotic.com/portfolio/${params.slug}`,
    },
  };
}

export default function PortfolioCaseStudy({ params }: { params: { slug: string } }) {
  const title = params.slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service", // Using Service or CreativeWork as requested
    "name": `${title} Case Study`,
    "url": `https://spanotic.com/portfolio/${params.slug}`
  };

  return (
    <main className="min-h-screen pt-12 pb-16 flex flex-col items-center px-6 font-sans text-white relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#00F0FF]/15 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#8A2BE2]/15 blur-[120px] pointer-events-none z-0"></div>
      <div className="w-full max-w-[1100px] flex flex-col items-center text-center relative z-10 mb-12">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-[#A1A1AA] text-lg max-w-[600px]">Portfolio Case Study Details</p>
      </div>
    </main>
  );
}
