"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { MessageCircleQuestion, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { LuMessageCircleQuestion, LuMessagesSquare } from 'react-icons/lu';

export default function FAQContent({ dict, lang }: { dict: any, lang: string }) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    const isOpening = openSection !== section;
    setOpenSection(isOpening ? section : null);
    
    if (isOpening) {
      setTimeout(() => {
        const element = document.getElementById(`faq-section-${section}`);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 120;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
    }
  };

  const faqData = [
    {
      id: 'build',
      title: dict.faq.buildYourTeam.title,
      questions: [
        { q: dict.faq.buildYourTeam.q1, a: dict.faq.buildYourTeam.a1 },
        { q: dict.faq.buildYourTeam.q2, a: dict.faq.buildYourTeam.a2 },
        { q: dict.faq.buildYourTeam.q3, a: dict.faq.buildYourTeam.a3 },
        { q: dict.faq.buildYourTeam.q4, a: dict.faq.buildYourTeam.a4 },
        { q: dict.faq.buildYourTeam.q5, a: dict.faq.buildYourTeam.a5 },
      ],
      ctaTitle: dict.faq.buildYourTeam.ctaTitle,
      ctaDesc: dict.faq.buildYourTeam.ctaDesc,
      ctaLink: dict.faq.buildYourTeam.ctaLink,
      ctaBtn: dict.faq.buildYourTeam.ctaBtn,
    },
    {
      id: 'ops',
      title: dict.faq.runYourOperations.title,
      questions: [
        { q: dict.faq.runYourOperations.q1, a: dict.faq.runYourOperations.a1 },
        { q: dict.faq.runYourOperations.q2, a: dict.faq.runYourOperations.a2 },
        { q: dict.faq.runYourOperations.q3, a: dict.faq.runYourOperations.a3 },
        { q: dict.faq.runYourOperations.q4, a: dict.faq.runYourOperations.a4 },
        { q: dict.faq.runYourOperations.q5, a: dict.faq.runYourOperations.a5 },
      ],
      ctaTitle: dict.faq.runYourOperations.ctaTitle,
      ctaDesc: dict.faq.runYourOperations.ctaDesc,
      ctaLink: dict.faq.runYourOperations.ctaLink,
      ctaBtn: dict.faq.runYourOperations.ctaBtn,
    }
  ];

  return (
    <main className="w-full mx-auto overflow-hidden bg-[#fafafa] min-h-screen flex flex-col">
      {/* Top Header Background Section */}
      <section className="relative w-full pt-28 md:pt-16 pb-16 px-6 xl:px-8 max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Network Pattern Background */}
        <div className="absolute top-0 left-0 w-full h-[60vh] z-0 pointer-events-none">
          <Image
            src="/images/about-background.webp"
            alt="Background Pattern"
            fill
            className="object-cover object-top opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fafafa]"></div>
        </div>

        <div className="relative z-10 flex flex-col-reverse md:flex-row w-full items-center justify-between max-w-6xl mx-auto gap-4 md:gap-0">
          <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start mt-2 md:mt-0">
            <h1 className="text-[#560FF3] font-bold text-4xl md:text-5xl lg:text-[36px] leading-tight text-center md:text-left">{dict.faq.title}</h1>
          </div>
          
          <div className="w-full md:w-1/2 flex items-center justify-center relative pb-2 md:pb-0">
             <svg width="0" height="0">
               <linearGradient id="faqGradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                 <stop offset="0%" stopColor="#b392f0" />
                 <stop offset="100%" stopColor="#560FF3" />
               </linearGradient>
             </svg>
             <LuMessageCircleQuestion stroke="url(#faqGradient)" strokeWidth={1.5} className="w-24 h-24 md:w-32 md:h-32" />
          </div>
        </div>
      </section>

      {/* Accordions Section */}
      <section className="relative z-10 w-full px-6 xl:px-8 max-w-6xl mx-auto pb-16 flex-grow">
        {faqData.map((section) => (
          <div key={section.id} id={`faq-section-${section.id}`} className="mb-8">
            {openSection !== section.id && (
              <button 
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                <div className="flex items-center w-full">
                  <h2 className="text-[#560FF3] text-2xl md:text-3xl lg:text-[36px] font-bold whitespace-nowrap leading-tight">{section.title}</h2>
                  <div className="h-px bg-gray-400 mx-4 flex-grow transition-colors group-hover:bg-[#560FF3]"></div>
                </div>
                <ChevronDown className="text-gray-600 group-hover:text-[#560FF3] flex-shrink-0" />
              </button>
            )}

            {/* Expanded Content */}
            {openSection === section.id && (
              <div className="bg-[#333333] text-white rounded-xl overflow-hidden shadow-2xl transition-all duration-500 ease-in-out">
                <div className="p-8 md:p-12 space-y-8">
                  {/* Top Bar matching design inside accordion */}
                  <div className="flex items-center justify-between pb-4">
                    <div className="flex items-center w-full">
                      <h3 className="text-2xl md:text-3xl lg:text-[36px] font-bold whitespace-nowrap leading-tight">{section.title}</h3>
                      <div className="h-px bg-gray-500 mx-4 flex-grow"></div>
                    </div>
                    <ChevronUp className="text-gray-400 cursor-pointer flex-shrink-0 hover:text-white" onClick={() => toggleSection(section.id)} />
                  </div>
                  
                  {section.questions.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <h4 className="font-bold text-[15px]">{item.q}</h4>
                      <p className="text-gray-300 text-[14px] leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
                
                {/* CTA Box inside Accordion */}
                <div className="bg-[#f0f0f0] text-black p-10 text-center flex flex-col items-center">
                  <h4 className="font-bold text-lg mb-2">{section.ctaTitle}</h4>
                  <p className="text-[14px] text-gray-700 max-w-2xl mb-4 leading-relaxed">{section.ctaDesc}</p>
                  <Link href={`/${lang}/services`} className="text-[#560FF3] text-[13px] font-semibold mb-6 hover:underline">
                    {section.ctaLink}
                  </Link>
                  <Link href={`/${lang}/contact`}>
                    <button className="bg-[#00c29a] text-white font-bold py-2.5 px-8 rounded hover:bg-[#00a885] transition-colors text-sm">
                      {section.ctaBtn}
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Bottom Contact Section */}
      <section className="relative z-10 w-full px-6 xl:px-8 max-w-6xl mx-auto pb-24 text-center flex flex-col items-center">
        <LuMessagesSquare className="w-32 h-32 text-gray-600 mb-4" strokeWidth={1.5} />
        <p className="text-gray-600 font-semibold mb-6 text-2xl">{dict.faq.stillHaveQuestions}</p>
        <Link 
          href={`/${lang}/contact`} 
          className="border border-[#560FF3] text-[#560FF3] font-bold py-2 px-8 rounded hover:bg-[#560FF3] hover:text-white transition-colors text-sm uppercase"
        >
          {dict.faq.contactUsBtn}
        </Link>
      </section>
    </main>
  );
}
