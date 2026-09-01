"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  // State to manage the mobile menu open/close toggle
  const [isOpen, setIsOpen] = useState(false);

  const getLinkClass = (href: string) => {
    const isActive = pathname === href;
    return `text-sm font-medium transition-colors ${isActive
      ? 'text-[#00F0FF] border-b-2 border-[#00F0FF]'
      : 'text-[#A1A1AA] hover:text-white'
      }`;
  };

  // Helper function to close menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B0B0E]/80 backdrop-blur-md border-b border-[#2A2A38]">
      <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">

        {/* Brand */}
        <Link href="/" className="text-white font-bold text-xl tracking-wider z-50" onClick={handleLinkClick}>
          SPANOTIC
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 focus:outline-none z-50 relative"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // Close (X) Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Menu Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className={getLinkClass('/')}>Home</Link>
          <Link href="/portfolio" className={getLinkClass('/portfolio')}>Portfolio</Link>
          <Link href="/services" className={getLinkClass('/services')}>Services</Link>
          <Link href="/pricing" className={getLinkClass('/pricing')}>Pricing</Link>
          <Link href="/about" className={getLinkClass('/about')}>About</Link>
          <Link href="/team" className={getLinkClass('/team')}>Team</Link>
          <Link href="/contact" className={getLinkClass('/contact')}>Contact</Link>

          <Link
            href="/contact"
            className="text-sm font-bold text-[#0B0B0E] bg-[#00F0FF] px-4 py-2 rounded-lg hover:bg-white hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all"
          >
            Book Consultation
          </Link>
        </nav>
      </div>

      {/* Mobile Links Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#0B0B0E] border-b border-[#2A2A38] shadow-2xl flex flex-col p-6 gap-6 z-40">
          <Link href="/" onClick={handleLinkClick} className={getLinkClass('/')}>Home</Link>
          <Link href="/portfolio" onClick={handleLinkClick} className={getLinkClass('/portfolio')}>Portfolio</Link>
          <Link href="/services" onClick={handleLinkClick} className={getLinkClass('/services')}>Services</Link>
          <Link href="/pricing" onClick={handleLinkClick} className={getLinkClass('/pricing')}>Pricing</Link>
          <Link href="/about" onClick={handleLinkClick} className={getLinkClass('/about')}>About</Link>
          <Link href="/team" onClick={handleLinkClick} className={getLinkClass('/team')}>Team</Link>
          <Link href="/contact" onClick={handleLinkClick} className={getLinkClass('/contact')}>Contact</Link>

          <Link
            href="/contact"
            onClick={handleLinkClick}
            className="text-sm font-bold text-[#0B0B0E] bg-[#00F0FF] px-4 py-3 rounded-lg hover:bg-white transition-all text-center mt-2"
          >
            Book Consultation
          </Link>
        </div>
      )}
    </header>
  );
}