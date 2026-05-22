'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('top-nav');
      if (nav) {
        if (window.scrollY > 10) {
          nav.classList.add('shadow-md');
          nav.classList.remove('shadow-sm');
        } else {
          nav.classList.add('shadow-sm');
          nav.classList.remove('shadow-md');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClasses = (path: string) => {
    const baseClasses = "transition-colors duration-200 cursor-pointer active:scale-95";
    if (pathname === path) {
      return `${baseClasses} text-primary dark:text-primary-fixed-dim border-b-2 border-primary dark:border-primary-fixed-dim pb-1`;
    }
    return `${baseClasses} text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim`;
  };

  return (
    <nav className="bg-surface dark:bg-on-background text-primary dark:text-primary-fixed-dim font-label-bold text-label-bold w-full top-0 sticky z-50 transition-all duration-300 shadow-sm" id="top-nav">
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="flex items-center gap-2 cursor-pointer">
          <Link href="/" className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim tracking-tight">Core Resources</Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link className={getLinkClasses("/")} href="/">Home</Link>
          <Link className={getLinkClasses("/buildTeams")} href="/buildTeams">Talent</Link>
          <Link className={getLinkClasses("/runOperations")} href="/runOperations">Operations</Link>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button className="text-primary hover:text-primary-fixed transition-colors font-label-bold">Login</button>
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg hover:bg-primary-fixed-variant transition-all font-label-bold shadow-sm hover:shadow-md active:scale-95">Get Started</button>
        </div>
        <button className="md:hidden text-primary">
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
      </div>
    </nav>
  );
}
