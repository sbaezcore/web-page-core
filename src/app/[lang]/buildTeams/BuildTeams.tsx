import Image from 'next/image';
import Link from 'next/link';
import { Users, Calendar, Globe, UserPlus, FileText, Handshake, CheckCircle2 } from 'lucide-react';
import FadeInSection from '../../../components/FadeInSection';

export default function BuildTeamsContent({ dict }: { dict: any }) {
  const t = dict;
  const lang = dict.nav?.home === "Inicio" ? "es" : "en";
  return (
    <main className="w-full mx-auto overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-8 lg:pt-16 pb-16 lg:pb-20 px-6 xl:px-8 max-w-[1600px] mx-auto group">
        {/* Mobile Image */}
        <div className="block lg:hidden relative w-full h-[300px] mb-8 [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] -z-10">
          <Image alt="Global Map" src="/images/mapa.webp" fill className="object-cover rounded-3xl" sizes="100vw" priority />
        </div>

        {/* Desktop Image */}
        <div className="hidden lg:block absolute top-0 right-0 h-[90%] w-[55%] transition-all duration-500 [mask-image:linear-gradient(to_right,transparent_0%,black_100%)] -z-10">
          <Image alt="Global Map" src="/images/mapa.webp" fill className="object-cover" sizes="50vw" priority />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 relative z-10 pt-0">
            <FadeInSection>
              <h1 className="font-bold text-[32px] md:text-[32px] leading-[1.1] text-[#560FF3] tracking-tight">
                {t.heroTitle}
              </h1>
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <p className="font-bold text-lg text-black">
                {t.heroDesc1}
              </p>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <p className="text-[#4C4C4C] text-lg font-medium">
                {t.heroDesc2}
              </p>
            </FadeInSection>



            <FadeInSection delay={0.4}>
              <div className="pt-4">
                <Link href="/contact" className="inline-block bg-gradient-to-r from-[#450CC2] to-[#2827E5] hover:from-[#560FF3] hover:to-[#560FF3] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform origin-left hover:scale-105 shadow-lg shadow-indigo-500/30 hover:shadow-xl uppercase text-sm tracking-wide w-fit">
                  {t.startBuildingBtn}
                </Link>
              </div>
            </FadeInSection>
          </div>
          <div className="hidden lg:block relative min-h-[500px]">
            {/* Empty column on desktop so the background image shows through clearly */}
          </div>
        </div>
      </section>

      {/* Transition Section */}
      <section className="py-20 px-6 xl:px-8 relative">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <FadeInSection>
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <Users size={64} className="text-[#560FF3]" strokeWidth={1.5} />
                <div className="absolute top-0 right-0 bg-white rounded-full translate-x-2 -translate-y-2">
                  <CheckCircle2 size={24} className="text-[#560FF3]" strokeWidth={2.5} />
                </div>
              </div>
            </div>
            <h2 className="font-bold text-3xl md:text-4xl text-[#560FF3] mb-8">
              {t.transitionTitle}
            </h2>
            <div className="space-y-6 text-gray-700 text-lg group cursor-default">
              <p dangerouslySetInnerHTML={{ __html: t.transitionP1 }} />
              <p dangerouslySetInnerHTML={{ __html: t.transitionP2 }} />
              <div className="pt-2">
                <p className="font-bold text-black px-6 py-4 rounded-xl transition-colors duration-500 group-hover:bg-[#560FF3] group-hover:text-white inline-block w-full">
                  {t.transitionP3}
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 px-6 xl:px-8 relative group/section">
        <div className="max-w-[1440px] mx-auto">
          <FadeInSection>
            <div className="text-center mb-16 cursor-default">
              <div className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-[#333333] group-hover/section:bg-[#560FF3] transition-colors duration-500 py-8">
                <h2 className="font-bold text-3xl md:text-4xl text-white">
                  {t.useCasesTitle}
                </h2>
              </div>
            </div>
          </FadeInSection>

          <div className="space-y-12">
            {/* Row 1 */}
            <FadeInSection>
              <div className="bg-gray-100/50 rounded-[2.5rem] p-6 lg:p-10 group transition-all duration-300 hover:shadow-lg cursor-default">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  <div>
                    <h3 className="font-bold text-2xl text-black group-hover:text-[#560FF3] transition-colors duration-300 mb-4">{t.uc1Title}</h3>
                    <p className="text-gray-700 mb-4">{t.uc1P1}</p>
                    <p className="text-gray-700">{t.uc1P2}</p>
                  </div>
                  <div className="bg-white group-hover:bg-[#7C4EF6] transition-colors duration-300 rounded-[2rem] p-8 shadow-sm flex flex-col h-full">
                    <h4 className="font-bold text-black group-hover:text-white transition-colors duration-300 text-left mb-6">{t.servicesMayInclude}</h4>
                    <ul className="space-y-3 font-medium flex-grow">
                      <li className="flex items-center text-gray-800 group-hover:text-white transition-colors duration-300"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full mr-3 shrink-0 transition-colors duration-300"></span>{t.uc1S1}</li>
                      <li className="flex items-center text-gray-800 group-hover:text-white transition-colors duration-300"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full mr-3 shrink-0 transition-colors duration-300"></span>{t.uc1S2}</li>
                      <li className="flex items-center text-gray-800 group-hover:text-white transition-colors duration-300"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full mr-3 shrink-0 transition-colors duration-300"></span>{t.uc1S3}</li>
                      <li className="flex items-center text-gray-800 group-hover:text-white transition-colors duration-300"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full mr-3 shrink-0 transition-colors duration-300"></span>{t.uc1S4}</li>
                      <li className="flex items-center text-gray-800 group-hover:text-white transition-colors duration-300"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full mr-3 shrink-0 transition-colors duration-300"></span>{t.uc1S5}</li>
                    </ul>
                    <div className="mt-8 text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link href={`/${lang}/services#buildTeam-service-0`} className="inline-block border border-white text-white rounded-lg px-4 py-2 font-medium text-sm hover:bg-white hover:text-[#560FF3] transition-colors duration-300">
                        {dict.nav?.home === "Inicio" ? "Ver Servicios Relacionados" : "See Related Services"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Row 2 */}
            <FadeInSection>
              <div className="bg-gray-100/50 rounded-[2.5rem] p-6 lg:p-10 group transition-all duration-300 hover:shadow-lg cursor-default">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  <div>
                    <h3 className="font-bold text-2xl text-black group-hover:text-[#560FF3] transition-colors duration-300 mb-4">{t.uc2Title}</h3>
                    <p className="text-gray-700">{t.uc2P1}</p>
                  </div>
                  <div className="bg-white group-hover:bg-[#7C4EF6] transition-colors duration-300 rounded-[2rem] p-8 shadow-sm flex flex-col h-full">
                    <h4 className="font-bold text-black group-hover:text-white transition-colors duration-300 text-left mb-6">{t.servicesMayInclude}</h4>
                    <ul className="space-y-3 font-medium flex-grow">
                      <li className="flex items-center text-gray-800 group-hover:text-white transition-colors duration-300"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full mr-3 shrink-0 transition-colors duration-300"></span>{t.uc2S1}</li>
                      <li className="flex items-center text-gray-800 group-hover:text-white transition-colors duration-300"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full mr-3 shrink-0 transition-colors duration-300"></span>{t.uc2S2}</li>
                      <li className="flex items-center text-gray-800 group-hover:text-white transition-colors duration-300"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full mr-3 shrink-0 transition-colors duration-300"></span>{t.uc2S3}</li>
                      <li className="flex items-center text-gray-800 group-hover:text-white transition-colors duration-300"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full mr-3 shrink-0 transition-colors duration-300"></span>{t.uc2S4}</li>
                      <li className="flex items-center text-gray-800 group-hover:text-white transition-colors duration-300"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full mr-3 shrink-0 transition-colors duration-300"></span>{t.uc2S5}</li>
                    </ul>
                    <div className="mt-8 text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link href={`/${lang}/services#buildTeam-service-1`} className="inline-block border border-white text-white rounded-lg px-4 py-2 font-medium text-sm hover:bg-white hover:text-[#560FF3] transition-colors duration-300">
                        {dict.nav?.home === "Inicio" ? "Ver Servicios Relacionados" : "See Related Services"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Row 3 */}
            <FadeInSection>
              <div className="bg-gray-100/50 rounded-[2.5rem] p-6 lg:p-10 group transition-all duration-300 hover:shadow-lg cursor-default">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  <div>
                    <h3 className="font-bold text-2xl text-black group-hover:text-[#560FF3] transition-colors duration-300 mb-4">{t.uc3Title}</h3>
                    <p className="text-gray-700 mb-4">{t.uc3P1}</p>
                    <p className="text-gray-700">{t.uc3P2}</p>
                  </div>
                  <div className="bg-white group-hover:bg-[#7C4EF6] transition-colors duration-300 rounded-[2rem] p-8 shadow-sm flex flex-col h-full">
                    <h4 className="font-bold text-black group-hover:text-white transition-colors duration-300 text-left mb-6">{t.servicesMayInclude}</h4>
                    <ul className="space-y-3 font-medium flex-grow">
                      <li className="flex items-center text-gray-800 group-hover:text-white transition-colors duration-300"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full mr-3 shrink-0 transition-colors duration-300"></span>{t.uc3S1}</li>
                      <li className="flex items-center text-gray-800 group-hover:text-white transition-colors duration-300"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full mr-3 shrink-0 transition-colors duration-300"></span>{t.uc3S2}</li>
                      <li className="flex items-center text-gray-800 group-hover:text-white transition-colors duration-300"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full mr-3 shrink-0 transition-colors duration-300"></span>{t.uc3S3}</li>
                      <li className="flex items-center text-gray-800 group-hover:text-white transition-colors duration-300"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full mr-3 shrink-0 transition-colors duration-300"></span>{t.uc3S4}</li>
                      <li className="flex items-center text-gray-800 group-hover:text-white transition-colors duration-300"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full mr-3 shrink-0 transition-colors duration-300"></span>{t.uc3S5}</li>
                    </ul>
                    <div className="mt-8 text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link href={`/${lang}/services#buildTeam-service-2`} className="inline-block border border-white text-white rounded-lg px-4 py-2 font-medium text-sm hover:bg-white hover:text-[#560FF3] transition-colors duration-300">
                        {dict.nav?.home === "Inicio" ? "Ver Servicios Relacionados" : "See Related Services"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Row 4 */}
            <FadeInSection>
              <div className="bg-gray-100/50 rounded-[2.5rem] p-6 lg:p-10 group transition-all duration-300 hover:shadow-lg cursor-default">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  <div>
                    <h3 className="font-bold text-2xl text-black group-hover:text-[#560FF3] transition-colors duration-300 mb-4">{t.uc4Title}</h3>
                    <p className="text-gray-700">{t.uc4P1}</p>
                  </div>
                  <div className="bg-white group-hover:bg-[#7C4EF6] transition-colors duration-300 rounded-[2rem] p-8 shadow-sm flex flex-col h-full">
                    <h4 className="font-bold text-black group-hover:text-white transition-colors duration-300 text-left mb-6">{t.servicesMayInclude}</h4>
                    <ul className="space-y-3 font-medium flex-grow">
                      <li className="flex items-center text-gray-800 group-hover:text-white transition-colors duration-300"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full mr-3 shrink-0 transition-colors duration-300"></span>{t.uc4S1}</li>
                      <li className="flex items-center text-gray-800 group-hover:text-white transition-colors duration-300"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full mr-3 shrink-0 transition-colors duration-300"></span>{t.uc4S2}</li>
                      <li className="flex items-center text-gray-800 group-hover:text-white transition-colors duration-300"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full mr-3 shrink-0 transition-colors duration-300"></span>{t.uc4S3}</li>
                      <li className="flex items-center text-gray-800 group-hover:text-white transition-colors duration-300"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full mr-3 shrink-0 transition-colors duration-300"></span>{t.uc4S4}</li>
                      <li className="flex items-center text-gray-800 group-hover:text-white transition-colors duration-300"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full mr-3 shrink-0 transition-colors duration-300"></span>{t.uc4S5}</li>
                    </ul>
                    <div className="mt-8 text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link href={`/${lang}/services#buildTeam-service-3`} className="inline-block border border-white text-white rounded-lg px-4 py-2 font-medium text-sm hover:bg-white hover:text-[#560FF3] transition-colors duration-300">
                        {dict.nav?.home === "Inicio" ? "Ver Servicios Relacionados" : "See Related Services"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Row 5 */}
            <FadeInSection>
              <div className="bg-gray-100/50 rounded-[2.5rem] p-6 lg:p-10 group transition-all duration-300 hover:shadow-lg cursor-default">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  <div>
                    <h3 className="font-bold text-2xl text-black group-hover:text-[#560FF3] transition-colors duration-300 mb-4">{t.uc5Title}</h3>
                    <p className="text-gray-700">{t.uc5P1}</p>
                  </div>
                  <div className="bg-white group-hover:bg-[#7C4EF6] transition-colors duration-300 rounded-[2rem] p-8 shadow-sm flex flex-col h-full">
                    <h4 className="font-bold text-black group-hover:text-white transition-colors duration-300 text-left mb-6">{t.servicesMayInclude}</h4>
                    <ul className="space-y-3 font-medium flex-grow">
                      <li className="flex items-center text-gray-800 group-hover:text-white transition-colors duration-300"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full mr-3 shrink-0 transition-colors duration-300"></span>{t.uc5S1}</li>
                      <li className="flex items-center text-gray-800 group-hover:text-white transition-colors duration-300"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full mr-3 shrink-0 transition-colors duration-300"></span>{t.uc5S2}</li>
                      <li className="flex items-center text-gray-800 group-hover:text-white transition-colors duration-300"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full mr-3 shrink-0 transition-colors duration-300"></span>{t.uc5S3}</li>
                      <li className="flex items-center text-gray-800 group-hover:text-white transition-colors duration-300"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full mr-3 shrink-0 transition-colors duration-300"></span>{t.uc5S4}</li>
                      <li className="flex items-center text-gray-800 group-hover:text-white transition-colors duration-300"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full mr-3 shrink-0 transition-colors duration-300"></span>{t.uc5S5}</li>
                    </ul>
                    <div className="mt-8 text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link href={`/${lang}/services#buildTeam-service-4`} className="inline-block border border-white text-white rounded-lg px-4 py-2 font-medium text-sm hover:bg-white hover:text-[#560FF3] transition-colors duration-300">
                        {dict.nav?.home === "Inicio" ? "Ver Servicios Relacionados" : "See Related Services"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

          </div>
        </div>
      </section>

      {/* Bottom Services Grid */}
      <section className="pb-24 relative group/bottom transition-all duration-500 bg-[#F4F4F4] hover:bg-gradient-to-b hover:from-[#11D7A4] hover:via-[#D3CAFA] hover:to-[#F4F4F4]">
        <div className="w-full bg-[#333333] group-hover/bottom:bg-[#0A5240] transition-colors duration-500 py-6 mb-16">
          <h2 className="text-center font-bold text-2xl md:text-3xl text-white px-4">
            {t.bottomTitle}
          </h2>
        </div>

        <div className="max-w-[1600px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <FadeInSection delay={0.1} className="h-full">
              {/* Card 1 */}
              <div className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center text-center aspect-[4/5] shadow-sm transition-all duration-300 border border-transparent h-full group/card hover:bg-[#0FA986] hover:scale-105 hover:shadow-xl cursor-default">
                <Users size={36} className="text-gray-600 group-hover/card:text-white mb-6 transition-colors duration-300" strokeWidth={1.5} />
                <p className="text-sm font-medium text-gray-500 group-hover/card:text-white transition-colors duration-300">{t.card1}</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2} className="h-full">
              {/* Card 2 */}
              <div className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center text-center aspect-[4/5] shadow-sm transition-all duration-300 border border-transparent h-full group/card hover:bg-[#0FA986] hover:scale-105 hover:shadow-xl cursor-default">
                <Calendar size={36} className="text-gray-600 group-hover/card:text-white mb-6 transition-colors duration-300" strokeWidth={1.5} />
                <p className="text-sm font-medium text-gray-500 group-hover/card:text-white transition-colors duration-300">{t.card2}</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3} className="h-full">
              {/* Card 3 */}
              <div className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center text-center aspect-[4/5] shadow-sm transition-all duration-300 border border-transparent h-full group/card hover:bg-[#0FA986] hover:scale-105 hover:shadow-xl cursor-default">
                <Globe size={36} className="text-gray-600 group-hover/card:text-white mb-6 transition-colors duration-300" strokeWidth={1.5} />
                <p className="text-sm font-medium text-gray-500 group-hover/card:text-white transition-colors duration-300">{t.card3}</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4} className="h-full">
              {/* Card 4 */}
              <div className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center text-center aspect-[4/5] shadow-sm transition-all duration-300 border border-transparent h-full group/card hover:bg-[#0FA986] hover:scale-105 hover:shadow-xl cursor-default">
                <UserPlus size={36} className="text-gray-600 group-hover/card:text-white mb-6 transition-colors duration-300" strokeWidth={1.5} />
                <p className="text-sm font-medium text-gray-500 group-hover/card:text-white transition-colors duration-300">{t.card4}</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.5} className="h-full">
              {/* Card 5 */}
              <div className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center text-center aspect-[4/5] shadow-sm transition-all duration-300 border border-transparent h-full group/card hover:bg-[#0FA986] hover:scale-105 hover:shadow-xl cursor-default">
                <FileText size={36} className="text-gray-600 group-hover/card:text-white mb-6 transition-colors duration-300" strokeWidth={1.5} />
                <p className="text-sm font-medium text-gray-500 group-hover/card:text-white transition-colors duration-300">{t.card5}</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.6} className="h-full">
              {/* Card 6 */}
              <div className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center text-center aspect-[4/5] shadow-sm transition-all duration-300 border border-transparent h-full group/card hover:bg-[#0FA986] hover:scale-105 hover:shadow-xl cursor-default">
                <Handshake size={36} className="text-gray-600 group-hover/card:text-white mb-6 transition-colors duration-300" strokeWidth={1.5} />
                <p className="text-sm font-medium text-gray-500 group-hover/card:text-white leading-tight transition-colors duration-300">{t.card6}</p>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection delay={0.7}>
            <div className="text-center mt-12">
              <Link href="/services" className="inline-block border border-black rounded-lg px-8 py-3 font-bold text-sm hover:bg-black hover:text-white transition-colors bg-transparent">
                {dict.nav?.home === "Inicio" ? "VER TODOS LOS SERVICIOS" : "SEE ALL SERVICES"}
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}
