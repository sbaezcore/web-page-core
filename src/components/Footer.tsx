import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low dark:bg-inverse-surface w-full py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-4">
          <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">Core Resources</span>
          <p className="font-body-md text-body-md text-secondary dark:text-secondary-fixed-dim max-w-xs mt-2">
            Empowering global teams with frictionless talent solutions across Latin America.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-label-bold text-on-background dark:text-surface uppercase tracking-wider mb-2">Legal</h4>
          <Link className="font-body-md text-body-md text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed-dim underline decoration-2 underline-offset-4 transition-all duration-300 w-fit" href="/privacy">Privacy Policy</Link>
          <Link className="font-body-md text-body-md text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed-dim underline decoration-2 underline-offset-4 transition-all duration-300 w-fit" href="/terms">Terms of Service</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-label-bold text-on-background dark:text-surface uppercase tracking-wider mb-2">Company</h4>
          <Link className="font-body-md text-body-md text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed-dim underline decoration-2 underline-offset-4 transition-all duration-300 w-fit" href="/about">About Us</Link>
          <Link className="font-body-md text-body-md text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed-dim underline decoration-2 underline-offset-4 transition-all duration-300 w-fit" href="/careers">Careers</Link>
          <Link className="font-body-md text-body-md text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed-dim underline decoration-2 underline-offset-4 transition-all duration-300 w-fit" href="/contact">Contact Us</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-label-bold text-on-background dark:text-surface uppercase tracking-wider mb-2">Connect</h4>
          <a className="font-body-md text-body-md text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed-dim underline decoration-2 underline-offset-4 transition-all duration-300 w-fit flex items-center gap-2" href="#">
            <span className="material-symbols-outlined text-sm">open_in_new</span> LinkedIn
          </a>
          <a className="font-body-md text-body-md text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed-dim underline decoration-2 underline-offset-4 transition-all duration-300 w-fit flex items-center gap-2" href="#">
            <span className="material-symbols-outlined text-sm">open_in_new</span> Twitter
          </a>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-4 mt-12 pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body-md text-body-md text-secondary dark:text-secondary-fixed-dim">
            © 2024 Core Resources. All rights reserved.
          </p>
          <button className="bg-surface border border-outline-variant px-4 py-2 rounded-lg text-sm font-label-bold text-on-surface hover:bg-surface-variant transition-colors flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-base">language</span> English (US)
          </button>
        </div>
      </div>
    </footer>
  );
}
