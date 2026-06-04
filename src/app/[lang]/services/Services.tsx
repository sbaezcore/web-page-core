"use client";
import React from 'react';
import Image from 'next/image';
import { 
  UserCheck, 
  CalendarClock, 
  Globe, 
  UserPlus, 
  FileCheck, 
  Handshake,
  BookCheck,
  Banknote,
  HandCoins,
  Network,
  FileText,
  TrendingUp
} from 'lucide-react';
import FadeInSection from '@/components/FadeInSection';

export default function ServicesContent({ dict, lang }: { dict: any, lang: string }) {
  const buildTeamServices = [
    {
      title: dict.buildTeam.s1Title,
      desc: dict.buildTeam.s1Desc,
      best: dict.buildTeam.s1Best,
      bestDesc: dict.buildTeam.s1BestDesc,
      Icon: UserCheck
    },
    {
      title: dict.buildTeam.s2Title,
      desc: dict.buildTeam.s2Desc,
      best: dict.buildTeam.s2Best,
      bestDesc: dict.buildTeam.s2BestDesc,
      Icon: CalendarClock
    },
    {
      title: dict.buildTeam.s3Title,
      desc: dict.buildTeam.s3Desc,
      best: dict.buildTeam.s3Best,
      bestDesc: dict.buildTeam.s3BestDesc,
      Icon: Globe
    },
    {
      title: dict.buildTeam.s4Title,
      desc: dict.buildTeam.s4Desc,
      best: dict.buildTeam.s4Best,
      bestDesc: dict.buildTeam.s4BestDesc,
      Icon: UserPlus
    },
    {
      title: dict.buildTeam.s5Title,
      desc: dict.buildTeam.s5Desc,
      best: dict.buildTeam.s5Best,
      bestDesc: dict.buildTeam.s5BestDesc,
      Icon: FileCheck
    },
    {
      title: dict.buildTeam.s6Title,
      desc: dict.buildTeam.s6Desc,
      best: dict.buildTeam.s6Best,
      bestDesc: dict.buildTeam.s6BestDesc,
      Icon: Handshake
    }
  ];

  const runOpsServices = [
    {
      title: dict.runOps.s1Title,
      desc: dict.runOps.s1Desc,
      best: dict.runOps.s1Best,
      bestDesc: dict.runOps.s1BestDesc,
      Icon: BookCheck
    },
    {
      title: dict.runOps.s2Title,
      desc: dict.runOps.s2Desc,
      best: dict.runOps.s2Best,
      bestDesc: dict.runOps.s2BestDesc,
      Icon: Banknote
    },
    {
      title: dict.runOps.s3Title,
      desc: dict.runOps.s3Desc,
      best: dict.runOps.s3Best,
      bestDesc: dict.runOps.s3BestDesc,
      Icon: HandCoins
    },
    {
      title: dict.runOps.s4Title,
      desc: dict.runOps.s4Desc,
      best: dict.runOps.s4Best,
      bestDesc: dict.runOps.s4BestDesc,
      Icon: Network
    },
    {
      title: dict.runOps.s5Title,
      desc: dict.runOps.s5Desc,
      best: dict.runOps.s5Best,
      bestDesc: dict.runOps.s5BestDesc,
      Icon: FileText
    },
    {
      title: dict.runOps.s6Title,
      desc: dict.runOps.s6Desc,
      best: dict.runOps.s6Best,
      bestDesc: dict.runOps.s6BestDesc,
      Icon: TrendingUp
    }
  ];

  return (
    <main className="w-full mx-auto overflow-hidden">
      {/* SECTION 1: Hero */}
      <section className="relative pt-24 pb-16 px-4 sm:px-8 xl:px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center overflow-hidden">
        <div className="w-full md:w-3/5 z-10 pr-0 md:pr-6 text-center md:text-left">
          <FadeInSection>
            <h1 className="font-raleway font-bold text-[40px] md:text-[50px] text-[#560FF3] mb-6">
              {dict.heroTitle}
            </h1>
            <p className="text-black text-lg md:text-xl leading-relaxed font-medium">
              {dict.heroDesc1}
              <span className="font-bold">{dict.heroDesc2}</span>
              {dict.heroDesc3}
              <span className="font-bold">{dict.heroDesc4}</span>
              {dict.heroDesc5}
            </p>
          </FadeInSection>
        </div>
        <div className="w-full md:w-2/5 mt-10 md:mt-0 relative h-[250px] md:h-[300px] flex justify-end">
          {/* The image should be properly faded or styled to match the hero header layout */}
          <div className="relative w-full h-full [mask-image:linear-gradient(to_right,transparent_0%,black_30%)]">
            <Image 
              src="/images/servicios.webp" 
              alt="Services Dashboard" 
              fill 
              className="object-cover opacity-90 rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: Build Your Team */}
      <section className="py-16 px-4 sm:px-8 xl:px-8 max-w-6xl mx-auto bg-[#F5F3FF] rounded-3xl mb-16">
        <FadeInSection>
          <div className="flex items-center justify-center mb-16">
            <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent to-[#560FF3]"></div>
            <h2 className="px-6 font-raleway font-bold text-[36px] md:text-[42px] text-[#560FF3]">
              {dict.buildTeamTitle}
            </h2>
            <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent to-[#560FF3]"></div>
          </div>
        </FadeInSection>

        <div className="space-y-4">
          {buildTeamServices.map((service, idx) => (
            <React.Fragment key={idx}>
              <FadeInSection delay={0.1}>
                <div className="group flex flex-col p-6 sm:p-10 rounded-[2rem] transition-all duration-300 hover:bg-white hover:shadow-xl cursor-default">
                  <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
                    <div className="w-full md:w-3/5 text-center md:text-left">
                      <h3 className="font-raleway font-bold text-2xl mb-4 text-black group-hover:text-[#560FF3] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-black text-[15px] leading-relaxed whitespace-pre-line">
                        {service.desc}
                      </p>
                    </div>
                    <div className="w-full md:w-2/5 flex justify-center">
                      <div className="w-32 h-32 md:w-36 md:h-36 bg-[#560FF3] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:bg-[#6c2cf5]">
                        <service.Icon className="text-white w-16 h-16 md:w-20 md:h-20" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                  <div className="text-center w-full mt-2 py-4 px-6 rounded-2xl transition-colors duration-300 group-hover:bg-black group-hover:text-white">
                    <span className="font-bold block mb-1 text-[15px] text-black group-hover:text-white transition-colors duration-300">
                      {service.best}
                    </span>
                    <span className="text-[15px] text-black group-hover:text-white transition-colors duration-300">
                      {service.bestDesc}
                    </span>
                  </div>
                </div>
              </FadeInSection>
              {idx !== buildTeamServices.length - 1 && (
                <div className="w-full h-px bg-gray-300 my-4 opacity-50"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* SECTION 3: Run Your Operations */}
      <section className="py-16 px-4 sm:px-8 xl:px-8 max-w-6xl mx-auto bg-[#E6F7F5] rounded-3xl mb-16">
        <FadeInSection>
          <div className="flex items-center justify-center mb-16">
            <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent to-[#00897B]"></div>
            <h2 className="px-6 font-raleway font-bold text-[36px] md:text-[42px] text-[#00897B]">
              {dict.runOpsTitle}
            </h2>
            <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent to-[#00897B]"></div>
          </div>
        </FadeInSection>

        <div className="space-y-4">
          {runOpsServices.map((service, idx) => (
            <React.Fragment key={idx}>
              <FadeInSection delay={0.1}>
                <div className="group flex flex-col p-6 sm:p-10 rounded-[2rem] transition-all duration-300 hover:bg-white hover:shadow-xl cursor-default">
                  <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
                    <div className="w-full md:w-3/5 text-center md:text-left">
                      <h3 className="font-raleway font-bold text-2xl mb-4 text-black group-hover:text-[#00897B] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-black text-[15px] leading-relaxed whitespace-pre-line">
                        {service.desc}
                      </p>
                    </div>
                    <div className="w-full md:w-2/5 flex justify-center">
                      <div className="w-32 h-32 md:w-36 md:h-36 bg-[#00B894] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:bg-[#15c5a3]">
                        <service.Icon className="text-white w-16 h-16 md:w-20 md:h-20" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                  <div className="text-center w-full mt-2 py-4 px-6 rounded-2xl transition-colors duration-300 group-hover:bg-black group-hover:text-white">
                    <span className="font-bold block mb-1 text-[15px] text-black group-hover:text-white transition-colors duration-300">
                      {service.best}
                    </span>
                    <span className="text-[15px] text-black group-hover:text-white transition-colors duration-300">
                      {service.bestDesc}
                    </span>
                  </div>
                </div>
              </FadeInSection>
              {idx !== runOpsServices.length - 1 && (
                <div className="w-full h-px bg-gray-300 my-4 opacity-50"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    </main>
  );
}
