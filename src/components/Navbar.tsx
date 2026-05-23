"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="sticky top-4 z-50 w-full transition-all duration-300">
        <header className={`max-w-7xl mx-4 xl:mx-auto flex justify-between items-center transition-all duration-300 ${isScrolled ? 'bg-white/70 backdrop-blur-md shadow-sm rounded-lg py-3 px-6 xl:px-8' : 'bg-transparent py-6 px-4 xl:px-8'}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/images/logo2026.svg" alt="Core Resources Logo" width={200} height={40} className="h-10 w-auto object-contain" priority />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-2 text-sm font-medium">
            <Link className="text-[#181789] px-4 py-2 rounded-lg hover:bg-core-purple hover:text-white transition-all" href="/about">About Core</Link>
            <Link className="text-[#181789] px-4 py-2 rounded-lg hover:bg-core-purple hover:text-white transition-all" href="/services">Services</Link>
            <Link className="text-[#181789] px-4 py-2 rounded-lg hover:bg-core-purple hover:text-white transition-all" href="/contact">Contact</Link>
          </nav>

          {/* Header Actions */}
          <div className="flex items-center space-x-4">
            {/* Header CTA - Hidden on mobile */}
            <Link className="hidden md:inline-block bg-gradient-to-r from-[#450CC2] to-[#2827E5] hover:from-[#560FF3] hover:to-[#560FF3] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 hover:scale-105 transform transition-all duration-300 shadow-md" href="https://calendly.com/alejandro-torres-thecoreresources/30min?month=2026-05" target="_blank" rel="noopener noreferrer">
              Book a Call
            </Link>

            {/* Hamburger Button - Visible only on mobile */}
            <button 
              className="md:hidden text-[#181789] focus:outline-none" 
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <i className="ph ph-list text-3xl"></i>
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#474747] bg-opacity-[0.97] flex flex-col items-center justify-center transition-opacity duration-300">
          <button 
            className="absolute top-8 right-8 text-white p-2 hover:scale-110 transition-transform"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="ph ph-x-circle text-4xl"></i>
          </button>

          <nav className="flex flex-col items-center space-y-10 text-white font-raleway text-[22px] font-light">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="underline underline-offset-8 decoration-2 font-semibold hover:text-gray-200 transition-colors">Home</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-200 transition-colors">About Core</Link>
            <Link href="/buildTeams" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-200 transition-colors">Build Your Team</Link>
            <Link href="/runOperations" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-200 transition-colors">Run Your Operations</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-200 transition-colors">Contact</Link>
          </nav>

          <div className="absolute bottom-16">
            <Link 
              href="https://calendly.com/alejandro-torres-thecoreresources/30min?month=2026-05" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-8 py-3 rounded-xl font-bold uppercase tracking-wider text-sm shadow-xl hover:scale-105 transition-transform"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              BOOK A CALL
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
