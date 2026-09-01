
import Link from 'next/link';
import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing & Estimator | Spanotic',
  description: 'Generate a real-time budget estimate for your next digital architecture project with Spanotic.',
  alternates: {
    canonical: 'https://spanotic.com/pricing',
  },
};

// Inner component — reads URL params and owns all interactive state
function PricingEstimator() {
  const searchParams = useSearchParams();
  const incomingComplexity = searchParams.get('complexity');

  const validComplexities = ['Essential', 'Professional', 'Enterprise'];
  const defaultComplexity =
    incomingComplexity && validComplexities.includes(incomingComplexity)
      ? incomingComplexity
      : 'Professional';

  const [projectType, setProjectType] = useState('Web Platform');
  const [complexity, setComplexity] = useState(defaultComplexity);
  const [timeline, setTimeline] = useState('Standard');

  const projectTypes = ['Landing Page', 'Web Platform', 'Mobile App'];
  const complexities = ['Essential', 'Professional', 'Enterprise'];
  const timelines = ['Relaxed (2+ Months)', 'Standard', 'Rushed (ASAP)'];

  const calculateEstimate = () => {
    let base = 3000;
    if (projectType === 'Landing Page') base = 1500;
    if (projectType === 'Mobile App') base = 5000;

    let multiplier = 1;
    if (complexity === 'Professional') multiplier = 1.5;
    if (complexity === 'Enterprise') multiplier = 2.5;

    let timeMultiplier = 1;
    if (timeline === 'Relaxed (2+ Months)') timeMultiplier = 0.9;
    if (timeline === 'Rushed (ASAP)') timeMultiplier = 1.25;

    const minPrice = Math.round(base * multiplier * timeMultiplier);
    const maxPrice = Math.round(minPrice * 1.5);

    const format = (num: number) =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }).format(num);

    return `${format(minPrice)} - ${format(maxPrice)}`;
  };

  // Build the contact href with all three selections encoded
  const contactHref = `/contact?type=${encodeURIComponent(projectType)}&complexity=${encodeURIComponent(complexity)}&timeline=${encodeURIComponent(timeline)}`;

  return (
    <div className="grid md:grid-cols-[1fr_350px] gap-8 max-w-[1100px] mx-auto relative z-10">
      {/* Left Column */}
      <div className="space-y-12">
        {/* Project Type */}
        <section>
          <h2 className="text-xl text-white font-semibold mb-6">
            Project Type
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {projectTypes.map((type) => (
              <button
                key={type}
                onClick={() => setProjectType(type)}
                className={`p-6 rounded-xl border text-center transition-all duration-300 backdrop-blur-md ${projectType === type
                  ? 'border-[#00F0FF] bg-[#00F0FF]/10 text-white shadow-[0_0_15px_rgba(0,240,255,0.1)]'
                  : 'border-[#2A2A38] bg-[#16161D]/50 text-[#A1A1AA] hover:border-[#00F0FF]/30 hover:bg-[#16161D]/80'
                  }`}
              >
                <span className="font-medium">{type}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Complexity */}
        <section>
          <h2 className="text-xl text-white font-semibold mb-6">
            Complexity
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {complexities.map((comp) => (
              <button
                key={comp}
                onClick={() => setComplexity(comp)}
                className={`p-6 rounded-xl border text-center transition-all duration-300 backdrop-blur-md ${complexity === comp
                  ? 'border-[#00F0FF] bg-[#00F0FF]/10 text-white shadow-[0_0_15px_rgba(0,240,255,0.1)]'
                  : 'border-[#2A2A38] bg-[#16161D]/50 text-[#A1A1AA] hover:border-[#00F0FF]/30 hover:bg-[#16161D]/80'
                  }`}
              >
                <span className="font-medium">{comp}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-xl text-white font-semibold mb-6">
            Timeline
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {timelines.map((time) => (
              <button
                key={time}
                onClick={() => setTimeline(time)}
                className={`p-6 rounded-xl border text-center transition-all duration-300 backdrop-blur-md ${timeline === time
                  ? 'border-[#00F0FF] bg-[#00F0FF]/10 text-white shadow-[0_0_15px_rgba(0,240,255,0.1)]'
                  : 'border-[#2A2A38] bg-[#16161D]/50 text-[#A1A1AA] hover:border-[#00F0FF]/30 hover:bg-[#16161D]/80'
                  }`}
              >
                <span className="font-medium">{time}</span>
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Right Column (Sticky) */}
      <div className="relative">
        <div className="sticky top-32 p-8 rounded-2xl border border-[#2A2A38] bg-[#16161D]/50 backdrop-blur-md flex flex-col items-center text-center">
          <h3 className="text-[#A1A1AA] font-medium mb-4">Estimated Investment</h3>
          <p className="text-4xl font-bold text-[#00F0FF] mb-8">{calculateEstimate()}</p>

          {/* Passes all three selections to the contact page */}
          <Link
            href={contactHref}
            className="block w-full text-center bg-[#00F0FF] text-[#0B0B0E] font-bold py-3 rounded-lg hover:bg-white hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all mt-8"
          >
            Book This Build
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <main className="relative overflow-hidden min-h-screen pt-12 px-6 pb-24 bg-[#0B0B0E]">
      {/* Ambient Lights */}
      <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-[#00F0FF]/15 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute top-1/3 right-[-10%] w-[600px] h-[600px] bg-[#8A2BE2]/15 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      <h1 className="text-4xl text-white font-bold text-center relative z-10 mb-4">
        Project Estimator
      </h1>
      <p className="text-[#A1A1AA] text-center mb-12 relative z-10 max-w-2xl mx-auto text-lg">
        Select your requirements to generate a real-time budget estimate.
      </p>

      {/* Suspense boundary required by useSearchParams */}
      <Suspense fallback={<div className="text-[#00F0FF] text-center animate-pulse">Loading estimator...</div>}>
        <PricingEstimator />
      </Suspense>
    </main>
  );
}
