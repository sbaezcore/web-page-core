import Image from 'next/image';
import Link from 'next/link';
import { Users, Calendar, Globe, UserPlus, FileText, Handshake, CheckCircle2 } from 'lucide-react';
import FadeInSection from '../../../components/FadeInSection';

export default function BuildTeamsContent({ dict }: { dict: any }) {
  return (
    <main className="w-full mx-auto overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 pb-16 md:pt-24 md:pb-20 px-6 xl:px-8 max-w-7xl mx-auto group">
        {/* Background Image with animation */}
        <div className="absolute top-0 right-0 w-full h-[50%] lg:h-full lg:w-[55%] grayscale group-hover:grayscale-0 transition-all duration-500 [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_100%)] -z-10">
          <Image alt="Global Map" src="/images/mapa.webp" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 relative z-10 pt-48 lg:pt-0">
            <FadeInSection>
              <h1 className="font-bold text-[32px] md:text-[32px] leading-[1.1] text-black tracking-tight">
                Build the team you need without hiring friction, legal complexity or unnecessary overhead.
              </h1>
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <p className="font-bold text-lg text-black">
                Core helps U.S. companies recruit, hire, staff and manage qualified talent across Latin America and global markets through flexible talent solutions.
              </p>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <p className="text-[#4C4C4C] text-lg font-medium">
                Whether you need long-term employees, temporary support, project-based talent, staff augmentation, legal hiring structures abroad or employment visa support, we help you find the right way to build your team.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="mt-4">
                <p className="font-bold text-black mb-4">Best fit for companies that need to:</p>
                <ul className="space-y-2 text-[#4C4C4C] text-lg font-medium">
                  <li className="flex items-start">
                    <span className="mr-2 text-gray-400">•</span>
                    Hire qualified talent beyond the U.S. market.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-gray-400">•</span>
                    Reduce hiring costs without compromising quality.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-gray-400">•</span>
                    Build remote or nearshore teams.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-gray-400">•</span>
                    Cover temporary, project-based or long-term roles.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-gray-400">•</span>
                    Hire without opening a local entity.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-gray-400">•</span>
                    Simplify legal, administrative and hiring complexity.
                  </li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="pt-4">
                <Link href="/contact" className="inline-block bg-gradient-to-r from-[#450CC2] to-[#2827E5] hover:from-[#560FF3] hover:to-[#560FF3] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform origin-left hover:scale-105 shadow-lg shadow-indigo-500/30 hover:shadow-xl uppercase text-sm tracking-wide w-fit">
                  START BUILDING YOUR TEAM
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
                <Users size={64} className="text-black" strokeWidth={1.5} />
                <div className="absolute top-0 right-0 bg-white rounded-full translate-x-2 -translate-y-2">
                  <CheckCircle2 size={24} className="text-black" strokeWidth={2.5} />
                </div>
              </div>
            </div>
            <h2 className="font-bold text-3xl md:text-4xl text-black mb-8">
              Hiring should help you grow, not slow you down.
            </h2>
            <div className="space-y-6 text-gray-700 text-lg">
              <p>
                For many growing companies, building a team comes with too much complexity: high hiring costs in the U.S., long recruitment cycles, legal uncertainty, local entity requirements, payroll questions, onboarding work and operational burden.
              </p>
              <p>
                Core simplifies that process. We help you access qualified talent beyond the U.S. market and structure the right hiring solution based on what your business actually needs: a permanent hire, temporary coverage, specialized support, a remote team, or a compliant way to hire abroad.
              </p>
              <p className="font-bold text-black pt-2">
                You focus on growth. We help you build the team to support it.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 px-6 xl:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="font-bold text-3xl md:text-4xl text-[#6225E6] mb-4">
                What are you trying to solve?
              </h2>
              <p className="font-bold text-black text-lg max-w-3xl mx-auto">
                You may not know which hiring model you need yet. That is why we start with the business problem, then match it with the right talent solution.
              </p>
            </div>
          </FadeInSection>

          <div className="space-y-12">
            {/* Row 1 */}
            <FadeInSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-bold text-2xl text-black mb-4">Hire abroad without opening a local entity</h3>
                  <p className="text-gray-700 mb-4">
                    You found the right talent in another country, but you do not want to create a local company, manage legal setup or figure out employment compliance alone.
                  </p>
                  <p className="text-gray-700">
                    Core helps you legally hire talent abroad through the right structure, including Employer of Record solutions when needed
                  </p>
                </div>
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                  <h4 className="font-bold text-black text-right mb-6">Services that may include:</h4>
                  <ul className="space-y-3 font-medium">
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Employer of Record</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Hiring setup</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Onboarding support</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Compliance support</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Ongoing management</li>
                  </ul>
                </div>
              </div>
            </FadeInSection>

            {/* Row 2 */}
            <FadeInSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-bold text-2xl text-black mb-4">Build a long-term team outside the U.S.</h3>
                  <p className="text-gray-700">
                    Hiring only in the U.S. can be expensive and slow. Core helps you find qualified talent in Latin America and other global markets where hiring can be more cost-efficient without sacrificing quality or productivity.
                  </p>
                </div>
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                  <h4 className="font-bold text-black text-right mb-6">Services that may include:</h4>
                  <ul className="space-y-3 font-medium">
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Recruitment & Selection</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Employer of Record</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Hiring support</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Onboarding support</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Talent management</li>
                  </ul>
                </div>
              </div>
            </FadeInSection>

            {/* Row 3 */}
            <FadeInSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-bold text-2xl text-black mb-4">Cover temporary or project-based roles</h3>
                  <p className="text-gray-700 mb-4">
                    Sometimes you do not need a permanent hire. You need reliable talent for a specific project, season, workload increase or temporary need.
                  </p>
                  <p className="text-gray-700">
                    Core helps you cover those roles with flexible staffing solutions that give you capacity without unnecessary long-term commitments.
                  </p>
                </div>
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                  <h4 className="font-bold text-black text-right mb-6">Services that may include:</h4>
                  <ul className="space-y-3 font-medium">
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Staffing</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Temporary hiring</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Project-based talent</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Hiring and onboarding support</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Ongoing coordination</li>
                  </ul>
                </div>
              </div>
            </FadeInSection>

            {/* Row 4 */}
            <FadeInSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-bold text-2xl text-black mb-4">Strengthen your existing team with specialized talent</h3>
                  <p className="text-gray-700">
                    Your team may already be in place, but needs more capacity or specific skills to move faster. Core helps you add qualified professionals who can support your existing team without adding internal hiring burden.
                  </p>
                </div>
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                  <h4 className="font-bold text-black text-right mb-6">Services that may include:</h4>
                  <ul className="space-y-3 font-medium">
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Staff Augmentation</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Specialized recruitment</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Staffing</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Remote talent support</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Ongoing coordination</li>
                  </ul>
                </div>
              </div>
            </FadeInSection>

            {/* Row 5 */}
            <FadeInSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-bold text-2xl text-black mb-4">Manage employment visa needs in Mexico</h3>
                  <p className="text-gray-700">
                    If your company needs to bring foreign employees to Mexico or manage employment-related immigration processes, Core can support the visa process with practical guidance and administrative coordination.
                  </p>
                </div>
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                  <h4 className="font-bold text-black text-right mb-6">Services that may include:</h4>
                  <ul className="space-y-3 font-medium">
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Employment Visa Services</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Documentation support</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Process coordination</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Administrative guidance</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Mexico-based hiring support</li>
                  </ul>
                </div>
              </div>
            </FadeInSection>

          </div>
        </div>
      </section>

      {/* Bottom Services Grid */}
      <section className="py-24 px-6 xl:px-8  relative">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-center font-bold text-2xl md:text-3xl text-[#6225E6] mb-12">
              Talent solutions designed around how you need to hire.
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <FadeInSection delay={0.1} className="h-full">
              {/* Card 1 */}
              <div className="bg-[#F6F5FA] rounded-3xl p-6 flex flex-col items-center justify-center text-center aspect-[4/5] shadow-sm hover:shadow-md transition-shadow border border-gray-50 h-full">
                <Users size={36} className="text-gray-600 mb-6" strokeWidth={1.5} />
                <p className="text-sm font-medium text-gray-500">Recruitment & Selection</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2} className="h-full">
              {/* Card 2 */}
              <div className="bg-[#F6F5FA] rounded-3xl p-6 flex flex-col items-center justify-center text-center aspect-[4/5] shadow-sm hover:shadow-md transition-shadow border border-gray-50 h-full">
                <Calendar size={36} className="text-gray-600 mb-6" strokeWidth={1.5} />
                <p className="text-sm font-medium text-gray-500">Staffing</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3} className="h-full">
              {/* Card 3 */}
              <div className="bg-[#F6F5FA] rounded-3xl p-6 flex flex-col items-center justify-center text-center aspect-[4/5] shadow-sm hover:shadow-md transition-shadow border border-gray-50 h-full">
                <Globe size={36} className="text-gray-600 mb-6" strokeWidth={1.5} />
                <p className="text-sm font-medium text-gray-500">Employer of Record (EOR)</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4} className="h-full">
              {/* Card 4 */}
              <div className="bg-[#F6F5FA] rounded-3xl p-6 flex flex-col items-center justify-center text-center aspect-[4/5] shadow-sm hover:shadow-md transition-shadow border border-gray-50 h-full">
                <UserPlus size={36} className="text-gray-600 mb-6" strokeWidth={1.5} />
                <p className="text-sm font-medium text-gray-500">Staff Augmentation</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.5} className="h-full">
              {/* Card 5 */}
              <div className="bg-[#F6F5FA] rounded-3xl p-6 flex flex-col items-center justify-center text-center aspect-[4/5] shadow-sm hover:shadow-md transition-shadow border border-gray-50 h-full">
                <FileText size={36} className="text-gray-600 mb-6" strokeWidth={1.5} />
                <p className="text-sm font-medium text-gray-500">Employment Visa Services</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.6} className="h-full">
              {/* Card 6 */}
              <div className="bg-[#F6F5FA] rounded-3xl p-6 flex flex-col items-center justify-center text-center aspect-[4/5] shadow-sm hover:shadow-md transition-shadow border border-gray-50 h-full">
                <Handshake size={36} className="text-gray-600 mb-6" strokeWidth={1.5} />
                <p className="text-sm font-medium text-gray-500 leading-tight">Hiring, onboarding and ongoing support</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </main>
  );
}
