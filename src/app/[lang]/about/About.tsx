"use client";
import React from 'react';
import Image from 'next/image';
import FadeInSection from '@/components/FadeInSection';

export default function AboutContent({ dict }: { dict: any }) {
  const t = dict;
  return (
    <main className="w-full mx-auto overflow-hidden">
      {/* New Hero Section for About Page */}
      <section className="relative w-full pt-24 md:pt-12 pb-16 px-6 xl:px-8 max-w-[1440px] mx-auto min-h-[40vh] flex items-center">
        {/* Network Pattern Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-background.webp"
            alt="Background Pattern"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full gap-12">
          <FadeInSection className="w-full md:w-1/2 flex justify-center md:justify-start">
            <h1 className="text-[#560FF3] font-bold text-4xl md:text-5xl lg:text-[36px] text-center md:text-left leading-tight">
              {t.aboutCoreResources}
            </h1>
          </FadeInSection>
          <FadeInSection delay={0.2} className="w-full md:w-1/2 flex justify-center md:justify-center">
            <Image
              src="/images/corelogo.png"
              alt="Core Resources Logo"
              width={500}
              height={308}
              className="h-32 md:h-40 lg:h-36 w-auto object-contain"
              priority
            />
          </FadeInSection>
        </div>
      </section>

      {/* Top Banner */}
      <div className="w-full bg-[#450CC2] py-2 px-4 text-center">
        <h2 className="text-white font-bold text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
          {t.heroTitle1}
          <br />
          {t.heroTitle2}
        </h2>
      </div>

      {/* Gradient Wrapper */}
      <div className="relative w-full bg-gradient-to-b from-[#340992] via-[#00B49A] to-white">
        {/* Gradient Hero Section */}
        <section className="relative w-full pt-4 pb-24 px-6 xl:px-8">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Photo */}
            <FadeInSection delay={0.1} className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/seo.webp"
                  alt="Francisco Hernández"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </FadeInSection>

            {/* Profile Text */}
            <FadeInSection delay={0.2} className="w-full md:w-1/2 text-white text-lg md:text-xl font-medium leading-relaxed space-y-6 text-center md:text-right">
              <p>{t.profileP1}</p>
              <p>{t.profileP2}</p>
            </FadeInSection>
          </div>
        </section>

        {/* Middle Circle */}
        <section className="relative -mt-16 flex justify-center z-10 px-4">
          <FadeInSection delay={0.3}>
            <div className="bg-[#560FF3] w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center text-center shadow-xl ">
              <h2 className="text-white font-bold text-xl md:text-3xl px-4 leading-tight">
                {t.howWeHelp}
              </h2>
            </div>
          </FadeInSection>
        </section>

        {/* Growth Intro */}
        <section className="py-2 px-6 xl:px-8 max-w-[1440px] mx-auto text-center mb-2">
          <FadeInSection>
            <div className="bg-white/80 backdrop-blur-md border border-gray-100 shadow-sm rounded-3xl p-8 md:p-4  mx-auto">
              <p className="text-black font-semibold text-lg md:text-xl leading-relaxed">
                {t.growthIntro}
              </p>
            </div>
          </FadeInSection>
        </section>
      </div>

      {/* Two Cards Section */}
      <section className="pb-1 px-6 xl:px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Card 1: Build Team */}
          <FadeInSection delay={0.1}>
            <div className="flex flex-col group h-full">
              {/* Image Box */}
              <div className="relative w-full h-[250px] md:h-[350px] rounded-lg overflow-hidden  mb-8">
                <Image
                  src="/images/mapa.webp"
                  alt="Build Your Team"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay & Title over image */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-white flex pt-8 justify-center">
                  <h3 className="text-white font-bold text-2xl md:text-3xl text-center px-4">
                    {t.buildTeamTitle}
                  </h3>
                </div>
              </div>

              {/* Text Box */}
              <div className="flex-1 flex flex-col text-center px-4">
                <h4 className="font-raleway font-bold text-xl md:text-2xl text-black group-hover:text-[#560FF3] transition-colors duration-300 mb-4">
                  {t.buildTeamSub}
                </h4>
                <p className="text-gray-700 leading-relaxed text-[15px]">
                  {t.buildTeamDesc}
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Card 2: Run Ops */}
          <FadeInSection delay={0.2}>
            <div className="flex flex-col group h-full">
              {/* Image Box */}
              <div className="relative w-full h-[250px] md:h-[350px] rounded-lg overflow-hidden  mb-8">
                <Image
                  src="/images/dashboard.webp"
                  alt="Run Your Operations"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay & Title over image */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-transparent to-white flex pt-8 justify-center">
                  <h3 className="text-white font-bold text-2xl md:text-3xl text-center px-4">
                    {t.runOpsTitle}
                  </h3>
                </div>
              </div>

              {/* Text Box */}
              <div className="flex-1 flex flex-col text-center px-4">
                <h4 className="font-raleway font-bold text-xl md:text-2xl text-black group-hover:text-[#560FF3] transition-colors duration-300 mb-4">
                  {t.runOpsSub}
                </h4>
                <p className="text-gray-700 leading-relaxed text-[15px]">
                  {t.runOpsDesc}
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="py-4 px-6 xl:px-8 max-w-[1440px] mx-auto mb-10">
        <FadeInSection>
          <div className="bg-[#00897B] rounded-[2rem] p-10 md:p-8 text-center shadow-xl">
            <p className="text-white font-semibold text-lg md:text-xl leading-relaxed">
              {t.footerBanner}
            </p>
          </div>
        </FadeInSection>
      </section>

      {/* Bottom Logo */}
      <section className="pb-1 px-6 xl:px-8 max-w-[1440px] mx-auto flex justify-center">
        <FadeInSection delay={0.2}>
          <Image
            src="/images/logo2026.svg"
            alt="Core Resources Logo"
            width={240}
            height={48}
            className="h-12 md:h-16 w-auto object-contain"
          />
        </FadeInSection>
      </section>
    </main>
  );
}
