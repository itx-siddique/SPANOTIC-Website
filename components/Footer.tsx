import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#2A2A38] bg-transparent py-12 mt-20 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto px-6">

        {/* Brand Column */}
        <div>
          <h3 className="text-2xl font-bold text-[#00F0FF] mb-4">SPANOTIC</h3>
          <p className="text-[#A1A1AA]">
            Engineered digital systems and scalable product architecture.
          </p>
        </div>

        {/* Links Column */}
        <div className="flex flex-col">
          <h3 className="text-white font-semibold mb-4">Navigation</h3>
          <Link href="/" className="text-[#A1A1AA] hover:text-[#00F0FF] transition-colors mb-2">Home</Link>
          <Link href="/portfolio" className="text-[#A1A1AA] hover:text-[#00F0FF] transition-colors mb-2">Portfolio</Link>
          <Link href="/services" className="text-[#A1A1AA] hover:text-[#00F0FF] transition-colors">Services</Link>
          <Link href="/pricing" className="text-[#A1A1AA] hover:text-[#00F0FF] transition-colors">Pricing</Link>
          <Link href="/about" className="text-[#A1A1AA] hover:text-[#00F0FF] transition-colors">About</Link>


        </div>

        {/* Contact Column */}
        <div className="flex flex-col">
          <h3 className="text-[#00F0FF] font-semibold mb-4">Connect</h3>
          <a href="mailto:afnanahmed.pro@gmail.com" className="text-[#A1A1AA] mb-2 hover:text-white transition-colors cursor-pointer">
            afnanahmed.pro@gmail.com
          </a>
          <a href="tel:+923235225493" className="text-[#A1A1AA] mb-2 hover:text-white transition-colors cursor-pointer">
            +92 323 5225493
          </a>
          <p className="text-[#A1A1AA] hover:text-white transition-colors mt-1">
            Rawalpindi, Punjab, Pakistan<br />
            <span className="text-xs text-[#00F0FF]/80">(Remote-First Global Operations)</span>
          </p>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="w-full text-center text-[#A1A1AA] text-sm mt-12 pt-8 border-t border-[#2A2A38]/50">
        © 2026 Spanotic. All rights reserved.
      </div>
    </footer>
  );
}