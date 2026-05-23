"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-4 z-50 w-full transition-all duration-300">
      <header className={`max-w-7xl mx-4 xl:mx-auto flex justify-between items-center transition-all duration-300 ${isScrolled ? 'bg-white/70 backdrop-blur-md shadow-sm rounded-lg py-3 px-6 xl:px-8' : 'bg-transparent py-6 px-4 xl:px-8'}`}>
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/images/logo2026.svg" alt="Core Resources Logo" className="h-10 object-contain" />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-2 text-sm font-medium">
          <Link className="text-[#181789] px-4 py-2 rounded-lg hover:bg-core-purple hover:text-white transition-all" href="/about">About Core</Link>
          <Link className="text-[#181789] px-4 py-2 rounded-lg hover:bg-core-purple hover:text-white transition-all" href="/services">Services</Link>
          <Link className="text-[#181789] px-4 py-2 rounded-lg hover:bg-core-purple hover:text-white transition-all" href="/contact">Contact</Link>
        </nav>

        {/* Header CTA */}
        <Link className="bg-gradient-to-r from-[#450CC2] to-[#2827E5] hover:from-[#560FF3] hover:to-[#560FF3] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 hover:scale-105 transform transition-all duration-300 shadow-md" href="https://calendly.com/alejandro-torres-thecoreresources/30min?month=2026-05" target="_blank" rel="noopener noreferrer">
          Book a Call
        </Link>
      </header>
    </div>
  );
}
