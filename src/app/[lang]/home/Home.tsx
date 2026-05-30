"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Globe, User, TrendingUp, Briefcase, Laptop, ShieldCheck, UserCircle, CheckCircle, X } from 'lucide-react';
import FadeInSection from '@/components/FadeInSection';

export default function HomeContent({ dict, lang }: { dict: any, lang: string }) {
  const [activeModal, setActiveModal] = useState<'build' | 'operations' | null>(null);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeModal]);
  return (
    <main>
      {/* SECTION 1: Hero */}
      <section className="text-center pt-20 pb-16 px-4 relative z-10 max-w-6xl mx-auto">
        {/* Large Logo */}
        <FadeInSection>
          <div className="flex justify-center mb-10">
            <Image src="/images/corelogo.png" alt="Core Resources Logo" width={400} height={208} className="h-36 w-auto md:h-52 object-contain" priority />
          </div>
        </FadeInSection>

        {/* Headline (SEO H1) */}
        <FadeInSection delay={0.1}>
          <h1 className="leading-none mb-8 flex flex-col items-center">
            <span className="block font-raleway font-medium text-[32px] text-black mb-2">
              {dict.heroTitle1}
            </span>
            <span className="block font-raleway font-bold text-[36px] text-[#560FF3] tracking-normal">
              {dict.heroTitle2}
            </span>
          </h1>
        </FadeInSection>

        {/* Subheadlines */}
        <FadeInSection delay={0.1}>
          <p className="text-black text-lg md:text-xl max-w-4xl mx-auto mb-4 font-medium">
            {dict.heroDesc1}
          </p>
          <p className="text-black text-base md:text-lg max-w-3xl mx-auto mb-12">
            {dict.heroDesc2}
          </p>
        </FadeInSection>

        {/* Hero CTAs */}
        <FadeInSection delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link className="inline-block bg-gradient-to-r from-[#450CC2] to-[#2827E5] hover:from-[#560FF3] hover:to-[#560FF3] text-white px-10 py-4 rounded-lg text-base font-bold uppercase tracking-wide hover:opacity-90 hover:scale-105 transform transition-all duration-300 shadow-lg shadow-indigo-500/30 w-full sm:w-auto" href="https://calendly.com/alejandro-torres-thecoreresources/30min?month=2026-05" target="_blank" rel="noopener noreferrer">
              {dict.bookACallBtn}
            </Link>
            <Link className="inline-block bg-white border-2 border-gray-200 text-gray-700 hover:border-[#560FF3] hover:text-[#560FF3] px-10 py-4 rounded-lg text-base font-bold uppercase tracking-wide hover:scale-105 transform transition-all duration-300 shadow-sm w-full sm:w-auto" href="#solutions">
              {dict.findSolutionBtn}
            </Link>
          </div>
        </FadeInSection>
      </section>

      {/* SECTION 2: Intro before cards */}
      <section id="solutions" className="max-w-4xl mx-auto px-8 py-12 text-center relative z-10">
        <FadeInSection>
          <h2 className="font-raleway font-bold text-[36px] md:text-[43px] leading-none text-black mb-6">{dict.howCanWeHelpTitle}</h2>
          <p className="text-black text-lg leading-relaxed">
            {dict.howCanWeHelpDesc}
          </p>
        </FadeInSection>
      </section>

      {/* SECTION 3: Main solution cards */}
      <section className="max-w-7xl mx-auto px-8 py-8 relative z-10 text-center mb-16">
        <div className="grid md:grid-cols-2 gap-12 text-left">

          {/* Service Card 1: Build Your Team */}
          <FadeInSection>
            <div
              onClick={() => setActiveModal('build')}
              className="flex flex-col relative group min-h-[450px] p-8 bg-transparent overflow-hidden rounded-3xl items-center text-center md:items-start md:text-left cursor-pointer transition-transform hover:scale-[1.01]"
            >
              <div className="absolute top-0 left-0 w-full h-[55%] md:h-full md:w-[65%] md:left-auto md:right-0 grayscale group-hover:grayscale-0 transition-all duration-500 rounded-t-3xl md:rounded-t-none md:rounded-r-3xl [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] md:[mask-image:linear-gradient(to_right,transparent_0%,black_85%)] -z-10">
                <Image alt="Global Map" src="/images/mapa.webp" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>

              <div className="relative z-10 w-full md:w-[70%] flex flex-col h-full pt-44 md:pt-0 items-center md:items-start">
                <h3 className="font-raleway font-medium text-[36px] md:text-[43px] leading-none mb-4 text-black uppercase">
                  {dict.buildTeamTitle1}<br /><span className="group-hover:text-[#560FF3] transition-colors  font-bold duration-500">TEAM</span>
                </h3>
                <p className="text-black font-medium text-sm leading-relaxed mb-6 max-w-sm md:max-w-none">
                  {dict.buildTeamDesc}
                </p>

                {/* Expanded details (Visible on desktop) */}
                <div className="text-sm text-black leading-relaxed mb-8 hidden md:block">
                  <p className="mb-2 font-bold text-black">{dict.servicesIncluded}</p>
                  <ul className="list-none space-y-1">
                    <li>{dict.buildService1}</li>
                    <li>{dict.buildService2}</li>
                    <li>{dict.buildService3}</li>
                    <li className="pt-2 text-gray-500 italic">{dict.andMore}</li>
                  </ul>
                </div>

                {/* Expanded details (Mobile) - Hidden to match clean screenshot layout */}
                <div className="md:hidden mb-8 text-sm text-black hidden">
                  <p className="mb-2 font-bold text-black">{dict.servicesIncluded}</p>
                  <ul className="list-none space-y-1 mb-4">
                    <li>{dict.buildService1}</li>
                    <li>{dict.buildService2}</li>
                    <li>{dict.buildService3}</li>
                    <li className="pt-2 text-gray-500 italic">{dict.andMore}</li>
                  </ul>
                </div>

                <div className="relative z-10 mt-auto pt-4 self-center md:self-start">
                  <Link
                    onClick={(e) => e.stopPropagation()}
                    className="group/btn relative inline-flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-gray-300 text-[#999999] group-hover:text-white text-sm font-bold uppercase py-3 px-6 rounded-lg transition-all duration-300 origin-center md:origin-left hover:scale-105 hover:shadow-lg"
                    href={`/${lang}/buildTeams`}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#450CC2] to-[#2827E5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="absolute inset-0 bg-[#560FF3] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative z-10">{dict.seeRecruitmentBtn}</span>
                  </Link>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Service Card 2: Run Your Operations */}
          <FadeInSection delay={0.2}>
            <div
              onClick={() => setActiveModal('operations')}
              className="flex flex-col relative group min-h-[450px] p-8 bg-transparent overflow-hidden rounded-3xl items-center text-center md:items-end md:text-right cursor-pointer transition-transform hover:scale-[1.01]"
            >
              <div className="absolute top-0 left-0 w-full h-[55%] md:h-full md:w-[65%] md:right-auto md:left-0 grayscale group-hover:grayscale-0 transition-all duration-500 rounded-t-3xl md:rounded-t-none md:rounded-l-3xl [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] md:[mask-image:linear-gradient(to_left,transparent_0%,black_85%)] -z-10">
                <Image alt="Laptop Dashboard" src="/images/dashboard.webp" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>

              <div className="relative z-10 w-full md:w-[70%] ml-auto flex flex-col h-full pt-44 md:pt-0 items-center md:items-end">
                <h3 className="font-raleway font-medium text-[36px] md:text-[43px] leading-none mb-4 text-black uppercase">
                  {dict.runOpsTitle1}<br /><span className="group-hover:text-[#560FF3] font-bold transition-colors duration-500">{dict.runOpsTitle2}</span>
                </h3>
                <p className="text-black font-medium text-sm leading-relaxed mb-6 max-w-sm md:max-w-none">
                  {dict.runOpsDesc}
                </p>

                {/* Expanded details (Visible on desktop) */}
                <div className="text-sm text-black leading-relaxed mb-8 hidden md:block text-right">
                  <p className="mb-2 font-bold text-black">{dict.servicesIncluded}</p>
                  <ul className="list-none space-y-1">
                    <li>{dict.opsService1} •</li>
                    <li>{dict.opsService2} •</li>
                    <li>{dict.opsService3} •</li>
                    <li className="pt-2 text-gray-500 italic">{dict.andMore}</li>
                  </ul>
                </div>

                {/* Expanded details (Mobile) - Hidden to match clean screenshot layout */}
                <div className="md:hidden mb-8 text-sm text-black text-center hidden">
                  <p className="mb-2 font-bold text-black">{dict.servicesIncluded}</p>
                  <ul className="list-none space-y-1 mb-4">
                    <li>{dict.opsService1} •</li>
                    <li>{dict.opsService2} •</li>
                    <li>{dict.opsService3} •</li>
                    <li className="pt-2 text-gray-500 italic">{dict.andMore}</li>
                  </ul>
                </div>

                <div className="relative z-10 mt-auto pt-4 self-center md:self-end">
                  <Link
                    onClick={(e) => e.stopPropagation()}
                    className="group/btn relative inline-flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-gray-300 text-[#999999] group-hover:text-white text-sm font-bold uppercase py-3 px-6 rounded-lg transition-all duration-300 origin-center md:origin-right hover:scale-105 hover:shadow-lg"
                    href={`/${lang}/runOperations`}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#450CC2] to-[#2827E5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="absolute inset-0 bg-[#560FF3] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative z-10">{dict.seeOperationalBtn}</span>
                  </Link>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* SECTION 4: Core differentiator (Globe + 4 blocks) */}
      <section className="bg-gray-50/30 border-t border-b border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-8 relative z-10">

          <FadeInSection>
            <div className="flex flex-col md:flex-row items-center justify-between gap-16 mb-16 group">
              {/* Left side: Icon Grid & Central Globe */}
              <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[500px] flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full text-gray-200 -z-10 transition-transform duration-700 group-hover:scale-95" fill="none" viewBox="0 0 400 400">
                  <path d="M50 200 Q 200 50 350 200 T 50 200" fill="none" stroke="currentColor" strokeWidth="1"></path>
                  <path d="M100 100 Q 200 350 300 100" fill="none" stroke="currentColor" strokeWidth="1"></path>
                  <circle cx="200" cy="200" fill="none" r="100" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1"></circle>
                </svg>
                <div className="w-32 h-32 md:w-40 md:h-40 bg-[#560FF3] text-white rounded-full flex items-center justify-center relative z-10 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-opacity-80">
                  <Globe className="w-20 h-20 md:w-28 md:h-28" strokeWidth={1.5} />
                </div>
                <div className="absolute top-[15%] left-[15%] w-16 h-16 md:w-20 md:h-20 bg-[#560FF3] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-700 transform -translate-x-1/2 -translate-y-1/2 group-hover:-translate-x-1/4 group-hover:-translate-y-1/4 group-hover:scale-110 group-hover:bg-opacity-80">
                  <User className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2} />
                </div>
                <div className="absolute top-[15%] right-[15%] w-16 h-16 md:w-20 md:h-20 bg-[#560FF3] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-700 transform translate-x-1/2 -translate-y-1/2 group-hover:translate-x-1/4 group-hover:-translate-y-1/4 group-hover:scale-110 group-hover:bg-opacity-80">
                  <TrendingUp className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2} />
                </div>
                <div className="absolute top-1/2 left-[5%] md:left-[5%] w-20 h-20 md:w-24 md:h-24 bg-[#560FF3] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-700 transform -translate-x-1/2 -translate-y-1/2 group-hover:-translate-x-1/4 group-hover:-translate-y-1/2 group-hover:scale-110 group-hover:bg-opacity-80 border-4 border-white">
                  <Briefcase className="w-10 h-10 md:w-12 md:h-12" strokeWidth={2} />
                </div>
                <div className="absolute top-1/2 right-[5%] md:right-[5%] w-16 h-16 md:w-20 md:h-20 bg-[#560FF3] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-700 transform translate-x-1/2 -translate-y-1/2 group-hover:translate-x-1/4 group-hover:-translate-y-1/2 group-hover:scale-110 group-hover:bg-opacity-80">
                  <Laptop className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2} />
                </div>
                <div className="absolute bottom-[15%] left-[15%] w-16 h-16 md:w-20 md:h-20 bg-[#560FF3] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-700 transform -translate-x-1/2 translate-y-1/2 group-hover:-translate-x-1/4 group-hover:translate-y-1/4 group-hover:scale-110 group-hover:bg-opacity-80">
                  <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2} />
                </div>
                <div className="absolute bottom-[15%] right-[15%] w-16 h-16 md:w-20 md:h-20 bg-[#560FF3] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-700 transform translate-x-1/2 translate-y-1/2 group-hover:translate-x-1/4 group-hover:translate-y-1/4 group-hover:scale-110 group-hover:bg-opacity-80">
                  <UserCircle className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2} />
                </div>
              </div>

              {/* Right side: Text Content */}
              <div className="w-full md:w-1/2 text-center md:text-left transition-colors duration-500">
                <h2 className="font-raleway font-bold text-[36px] md:text-[43px] leading-none mb-6 text-black group-hover:text-[#560FF3] transition-colors duration-500">
                  {dict.onePartnerTitle}
                </h2>
                <p className="text-black mb-4 text-lg leading-relaxed">
                  {dict.onePartnerDesc1}
                </p>
                <p className="text-black mb-6 text-lg leading-relaxed">
                  {dict.onePartnerDesc2}
                </p>
                <Link className="text-black font-semibold underline underline-offset-4 decoration-2 decoration-gray-300 hover:decoration-[#560FF3] group-hover:text-[#560FF3] group-hover:decoration-[#560FF3] transition-colors duration-500 text-lg" href={`/${lang}/about`}>
                  {dict.aboutUsLink}
                </Link>
              </div>
            </div>
          </FadeInSection>

          {/* Differentiators Blocks */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeInSection delay={0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all h-full">
                <div className="text-core-purple font-bold text-4xl mb-4 opacity-50">1</div>
                <h3 className="font-raleway font-bold text-xl mb-3 text-black">{dict.diff1Title}</h3>
                <p className="text-black text-sm leading-relaxed">{dict.diff1Desc}</p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all h-full">
                <div className="text-core-purple font-bold text-4xl mb-4 opacity-50">2</div>
                <h3 className="font-raleway font-bold text-xl mb-3 text-black">{dict.diff2Title}</h3>
                <p className="text-black text-sm leading-relaxed">{dict.diff2Desc}</p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.3}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all h-full">
                <div className="text-core-purple font-bold text-4xl mb-4 opacity-50">3</div>
                <h3 className="font-raleway font-bold text-xl mb-3 text-black">{dict.diff3Title}</h3>
                <p className="text-black text-sm leading-relaxed">{dict.diff3Desc}</p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.4}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all h-full">
                <div className="text-core-purple font-bold text-4xl mb-4 opacity-50">4</div>
                <h3 className="font-raleway font-bold text-xl mb-3 text-black">{dict.diff4Title}</h3>
                <p className="text-black text-sm leading-relaxed">{dict.diff4Desc}</p>
              </div>
            </FadeInSection>
          </div>

        </div>
      </section>

      {/* SECTION 5: Pain-based section */}
      <section className="max-w-7xl mx-auto px-8 py-20 relative z-10 flex flex-col md:flex-row items-center gap-16">
        <FadeInSection className="w-full md:w-1/2">
          <h2 className="font-raleway font-bold text-[36px] md:text-[43px] leading-none text-black mb-6">{dict.painTitle}</h2>
          <p className="text-black text-lg leading-relaxed mb-6">
            {dict.painDesc1}
          </p>
          <p className="text-core-purple font-bold text-xl mb-10">
            {dict.painDesc2}
          </p>
          <Link className="inline-block bg-gradient-to-r from-[#450CC2] to-[#2827E5] hover:from-[#560FF3] hover:to-[#560FF3] text-white px-8 py-4 rounded-lg text-base font-bold uppercase tracking-wide hover:opacity-90 hover:scale-105 transform transition-all duration-300 shadow-md origin-center" href="#solutions">
            {dict.findSolutionBtn}
          </Link>
        </FadeInSection>

        <FadeInSection delay={0.2} className="w-full md:w-1/2">
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-xl shadow-gray-200/50">
            <h3 className="font-raleway font-bold text-3xl mb-8 text-black">{dict.painPointsTitle}</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <CheckCircle className="text-core-purple w-6 h-6 mt-0.5 shrink-0" />
                <span className="text-black font-medium">{dict.painPoint1}</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="text-core-purple w-6 h-6 mt-0.5 shrink-0" />
                <span className="text-black font-medium">{dict.painPoint2}</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="text-core-purple w-6 h-6 mt-0.5 shrink-0" />
                <span className="text-black font-medium">{dict.painPoint3}</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="text-core-purple w-6 h-6 mt-0.5 shrink-0" />
                <span className="text-black font-medium">{dict.painPoint4}</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="text-core-purple w-6 h-6 mt-0.5 shrink-0" />
                <span className="text-black font-medium">{dict.painPoint5}</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="text-core-purple w-6 h-6 mt-0.5 shrink-0" />
                <span className="text-black font-medium">{dict.painPoint6}</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="text-core-purple w-6 h-6 mt-0.5 shrink-0" />
                <span className="text-black font-medium">{dict.painPoint7}</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="text-core-purple w-6 h-6 mt-0.5 shrink-0" />
                <span className="text-black font-medium">{dict.painPoint8}</span>
              </li>
            </ul>
          </div>
        </FadeInSection>
      </section>

      {/* SECTION 6: Final CTA Section */}
      <section className="bg-core-purple text-white py-20 px-8 text-center relative z-10 overflow-hidden mt-8 rounded-t-[3rem]">
        <div className="absolute inset-0 bg-network-pattern opacity-10"></div>
        <FadeInSection>
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="font-raleway font-bold text-[36px] md:text-[43px] leading-none mb-6">{dict.finalCtaTitle}</h2>
            <p className="text-xl text-purple-100 mb-10 leading-relaxed font-light">
              {dict.finalCtaDesc}
            </p>
            <Link className="inline-block bg-white text-[#560FF3] px-12 py-4 rounded-lg text-lg font-bold uppercase tracking-wide hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 origin-center shadow-xl shadow-black/20" href="https://calendly.com/alejandro-torres-thecoreresources/30min?month=2026-05" target="_blank" rel="noopener noreferrer">
              {dict.bookACallBtn}
            </Link>
          </div>
        </FadeInSection>
      </section>
      {/* Modal Overlay */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-black text-white rounded-[2rem] p-8 md:p-10 max-w-2xl w-full relative shadow-2xl border border-gray-800 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
              onClick={() => setActiveModal(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {activeModal === 'build' ? (
              <>
                <h3 className="font-raleway font-bold text-2xl md:text-3xl mb-6 pr-8">
                  {dict.buildModalTitle}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                  {dict.buildModalDesc1}
                </p>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                  {dict.buildModalDesc2}
                </p>

                <h4 className="font-bold text-white mb-3">{dict.servicesIncluded}</h4>
                <ul className="list-none space-y-2 mb-8 text-gray-300 text-sm md:text-base">
                  <li>{dict.buildService1}</li>
                  <li>{dict.buildService2}</li>
                  <li>{dict.buildService3}</li>
                  <li>{dict.buildService4}</li>
                  <li>{dict.buildService5}</li>
                  <li>{dict.buildService6}</li>
                </ul>

                <Link
                  href={`/${lang}/buildTeams`}
                  className="inline-block bg-[#3B12D1] hover:bg-[#560FF3] text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 text-sm hover:scale-105"
                  onClick={() => setActiveModal(null)}
                >
                  {dict.seeRecruitmentBtn}
                </Link>
              </>
            ) : (
              <>
                <h3 className="font-raleway font-bold text-2xl md:text-3xl mb-6 pr-8">
                  {dict.opsModalTitle}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                  {dict.opsModalDesc1}
                </p>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                  {dict.opsModalDesc2}
                </p>

                <h4 className="font-bold text-white mb-3">{dict.servicesIncluded}</h4>
                <ul className="list-none space-y-2 mb-8 text-gray-300 text-sm md:text-base">
                  <li>{dict.opsService1}</li>
                  <li>{dict.opsService2}</li>
                  <li>{dict.opsService3}</li>
                  <li>{dict.opsService4}</li>
                  <li>{dict.opsService5}</li>
                  <li>{dict.opsService6}</li>
                  <li>{dict.opsService7}</li>
                </ul>

                <Link
                  href={`/${lang}/runOperations`}
                  className="inline-block bg-[#3B12D1] hover:bg-[#560FF3] text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 text-sm hover:scale-105"
                  onClick={() => setActiveModal(null)}
                >
                  {dict.seeOperationalBtn}
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}