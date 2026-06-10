"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Menu, XCircle, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar({ dict, lang }: { dict: any, lang: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = () => {
    const newLang = lang === 'en' ? 'es' : 'en';
    // pathname starts with /en or /es because of middleware
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath);
  };

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
        <header className={`max-w-[1600px] mx-4 xl:mx-auto flex justify-between items-center transition-all duration-300 ${isScrolled ? 'bg-white/70 backdrop-blur-md shadow-sm rounded-lg py-3 px-6 xl:px-8' : 'bg-transparent py-6 px-4 xl:px-8'}`}>
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center">
            <Image src="/images/logo2026.svg" alt="Core Resources Logo" width={200} height={40} className="h-10 w-auto object-contain" priority />
          </Link>

          {/* Navigation */}
          {/* <nav className="hidden md:flex space-x-2 text-sm font-medium items-center">
            <Link className="text-[#181789] hover:bg-[#560FF3]/80 hover:text-white px-4 py-2 rounded-lg transition-all duration-300" href={`/${lang}/buildTeams`}>{dict.buildYourTeam}</Link>
            <Link className="text-[#181789] hover:bg-[#560FF3]/80 hover:text-white px-4 py-2 rounded-lg transition-all duration-300" href={`/${lang}/runOperations`}>{dict.runOperations}</Link>
            <Link className="text-[#181789] hover:bg-[#560FF3]/80 hover:text-white px-4 py-2 rounded-lg transition-all duration-300" href={`/${lang}/services`}>{dict.services}</Link>
            <Link className="text-[#181789] hover:bg-[#560FF3]/80 hover:text-white px-4 py-2 rounded-lg transition-all duration-300" href={`/${lang}/about`}>{dict.aboutCore}</Link>
            <Link className="text-[#181789] hover:bg-[#560FF3]/80 hover:text-white px-4 py-2 rounded-lg transition-all duration-300" href={`/${lang}/faq`}>{dict.faq}</Link>
            <Link className="text-[#181789] hover:bg-[#560FF3]/80 hover:text-white px-4 py-2 rounded-lg transition-all duration-300" href={`/${lang}/contact`}>{dict.contact}</Link>
          </nav> */}

          <nav className="hidden md:flex space-x-2 text-sm font-medium items-center">
            <Link className="text-[#181789] hover:bg-[#560FF3]/80 hover:text-white px-4 py-2 rounded-lg transition-all duration-300" href={`/${lang}/buildTeams`}>{dict.buildYourTeam}</Link>
            <Link className="text-[#181789] hover:bg-[#560FF3]/80 hover:text-white px-4 py-2 rounded-lg transition-all duration-300" href={`/${lang}/runOperations`}>{dict.runOperations}</Link>
            <Link className="text-[#181789] hover:bg-[#560FF3]/80 hover:text-white px-4 py-2 rounded-lg transition-all duration-300" href={`/${lang}/services`}>{dict.services}</Link>
            <Link className="text-[#181789] hover:bg-[#560FF3]/80 hover:text-white px-4 py-2 rounded-lg transition-all duration-300" href={`/${lang}/about`}>{dict.aboutCore}</Link>
            <Link className="text-[#181789] hover:bg-[#560FF3]/80 hover:text-white px-4 py-2 rounded-lg transition-all duration-300" href={`/${lang}/faq`}>{dict.faq}</Link>
            <Link className="text-[#181789] hover:bg-[#560FF3]/80 hover:text-white px-4 py-2 rounded-lg transition-all duration-300" href={`/${lang}/contact`}>{dict.contact}</Link>
          </nav>

          {/* Header Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={switchLanguage}
              className="flex items-center space-x-1 text-[#181789] font-bold hover:bg-[#560FF3]/10 px-3 py-2 rounded-lg transition-colors border border-transparent hover:border-[#560FF3]/20"
            >
              <Globe size={20} />
              <span className="text-sm">{lang === 'en' ? 'ES' : 'EN'}</span>
            </button>

            {/* Header CTA - Hidden on mobile */}
            <Link className="hidden md:inline-block bg-gradient-to-b from-[#005A4D] to-[#00B49A] hover:from-[#005A4D]/90 hover:to-[#00B49A]/90 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 hover:scale-105 transform transition-all duration-300 shadow-md" href="https://calendly.com/alejandro-torres-thecoreresources/30min?month=2026-05" target="_blank" rel="noopener noreferrer">
              {dict.bookACall}
            </Link>

            {/* Hamburger Button - Visible only on mobile */}
            <button
              className="md:hidden text-[#181789] focus:outline-none flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={32} />
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#474747] bg-opacity-[0.97] flex flex-col items-center justify-center transition-opacity duration-300">
          <button
            className="absolute top-8 right-8 text-white p-2 hover:scale-110 transition-transform flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <XCircle size={40} />
          </button>

          <nav className="flex flex-col items-center space-y-10 text-white font-raleway text-[22px] font-light">
            <Link href={`/${lang}/`} onClick={() => setIsMobileMenuOpen(false)} className="underline underline-offset-8 decoration-2 font-semibold hover:text-gray-200 transition-colors">{dict.home}</Link>
            <Link href={`/${lang}/buildTeams`} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-200 transition-colors">{dict.buildYourTeam}</Link>
            <Link href={`/${lang}/runOperations`} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-200 transition-colors">{dict.runOperations}</Link>
            <Link href={`/${lang}/services`} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-200 transition-colors">{dict.services}</Link>
            <Link href={`/${lang}/about`} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-200 transition-colors">{dict.aboutCore}</Link>
            <Link href={`/${lang}/faq`} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-200 transition-colors">{dict.faq}</Link>
            <Link href={`/${lang}/contact`} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-200 transition-colors">{dict.contact}</Link>
          </nav>

          <div className="absolute bottom-16">
            <Link
              href="https://calendly.com/alejandro-torres-thecoreresources/30min?month=2026-05"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-8 py-3 rounded-xl font-bold uppercase tracking-wider text-sm shadow-xl hover:scale-105 transition-transform"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {dict.bookACall.toUpperCase()}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
