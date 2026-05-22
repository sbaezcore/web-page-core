import Link from 'next/link';
import Image from 'next/image';

export default function HomeContent() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="w-full px-margin-mobile md:px-margin-desktop py-section-gap max-w-[1440px] mx-auto text-center flex flex-col items-center justify-center">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface max-w-4xl mx-auto mb-8 tracking-tight">
          Scale your global operations with us <br className="hidden md:block" />
          <span className="text-primary">without increasing complexity and unnecessary costs.</span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button className="bg-primary text-on-primary font-label-bold text-label-bold px-8 py-4 rounded-lg hover:bg-on-primary-fixed-variant transition-colors shadow-sm active:scale-95 duration-150 uppercase w-full sm:w-auto">
            BOOK A CALL
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full px-margin-mobile md:px-margin-desktop py-16 bg-surface-container-low max-w-[1440px] mx-auto rounded-3xl mb-section-gap">
        <h2 className="font-headline-lg text-headline-lg text-center mb-16 text-on-surface">How can we help you grow?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* Card 1: Build Your Team */}
          <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/30 flex flex-col md:flex-row gap-8 shadow-[0_12px_24px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_24px_rgba(15,23,42,0.08)] transition-all duration-300">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-6 uppercase">Build Your Team</h3>
                <ul className="space-y-4 mb-8 font-body-lg text-body-lg text-on-surface-variant">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span>Access top-tier global talent seamlessly.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span>Ensure 100% local compliance and legal safety.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span>Streamlined onboarding processes.</span>
                  </li>
                </ul>
              </div>
              <Link href="/buildTeams" className="bg-surface text-primary border border-primary font-label-bold text-label-bold px-6 py-3 rounded-lg hover:bg-primary hover:text-on-primary transition-colors w-fit uppercase text-center block">
                See Recruitment Solutions
              </Link>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden bg-secondary-container/20 flex items-center justify-center min-h-[250px] relative">
              <Image
                alt="A bright, modern office space with a diverse group of young professionals collaborating around a large wooden table."
                className="object-cover mix-blend-multiply opacity-90"
                fill={true}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZKpzkFf2Ax8g1USS--SBTukJMJ9ILxmssADUJWRz8IW4XP3izhLV4wqG6O-mt9M7YXCtYZWIa4m2jXAEHRebg7t17TQPtqHzdJSu094e1rgdkfMgdo01CAxGtV-bOayJezJLrV4GltLIHO_gD11T0BbkVW41VVzbd5ud7xZmxX1ai61MItXQ44YxEAFn0JHdLVT690GtDIL1QIYu3rstSdDJkTfKeN8E9MjdgT0pI5pgrhlYekHk6Yr02yJlEEX3pVVbtfk3C1Io"
              />
            </div>
          </div>

          {/* Card 2: Run Your Operations */}
          <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/30 flex flex-col md:flex-row-reverse gap-8 shadow-[0_12px_24px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_24px_rgba(15,23,42,0.08)] transition-all duration-300">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-6 uppercase text-right md:text-left">Run Your Operations</h3>
                <ul className="space-y-4 mb-8 font-body-lg text-body-lg text-on-surface-variant">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span>Unified global payroll and benefits management.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span>Automated tax filings and localized HR support.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span>Centralized dashboard for all operational data.</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-end md:justify-start">
                <Link href="/runOperations" className="bg-surface text-primary border border-primary font-label-bold text-label-bold px-6 py-3 rounded-lg hover:bg-primary hover:text-on-primary transition-colors w-fit uppercase text-center block">
                  See Operational Solutions
                </Link>
              </div>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden bg-tertiary-container/10 flex items-center justify-center min-h-[250px] relative">
              <Image
                alt="A sleek, modern laptop screen displaying abstract data charts and graphs."
                className="object-cover mix-blend-multiply opacity-80"
                fill={true}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa8gMnsE3c8AQeF8mPbvzQTCSJHqOGHeLEfrmHLRZBP_zJJmCmwLQvjJ7DKgYx1PbyoTWZ5ssOTD_PiQniOLwa5XVshoCtqV4jJ0ByM4QvyAAqOoQI0Rp0OChOtc9tOj0YEQLgz5xf2lkwDuNKmc9tRgcU8pc95JV1oFYFt4io1V573jQFFL9hjB2Cag6Wf28VMrsh8A8blfoV7krrDEYjVI7f6v084cZEq533mLU7zDN1RsLPRBN4HVsa0RBRyymGciY6lOqfBdY"
              />
            </div>
          </div>
        </div>
        <div className="mt-16 text-center font-body-lg text-body-lg text-on-surface-variant">
          Still undecided? Our experts can help you find the best fit. <Link className="text-primary font-bold hover:underline decoration-primary" href="/contact">Contact us.</Link>
        </div>
      </section>
    </main>
  );
}
