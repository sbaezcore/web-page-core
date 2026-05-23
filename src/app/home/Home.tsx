import Link from 'next/link';
import Image from 'next/image';
import { Globe, User, TrendingUp, Briefcase, Laptop, ShieldCheck, UserCircle, CheckCircle } from 'lucide-react';

export default function HomeContent() {
  return (
    <main>
      {/* SECTION 1: Hero */}
      <section className="text-center pt-20 pb-16 px-4 relative z-10 max-w-6xl mx-auto">
        {/* Large Logo */}
        <div className="flex justify-center mb-10">
          <Image src="/images/corelogo.png" alt="Core Resources Logo" width={400} height={208} className="h-36 w-auto md:h-52 object-contain" priority />
        </div>

        {/* Headline (SEO H1) */}
        <h1 className="leading-none mb-8 flex flex-col items-center">
          <span className="block font-raleway font-thin text-[32px] text-black mb-2">
            Build your team. Run your operations.
          </span>
          <span className="block font-raleway font-bold text-[36px] text-[#560FF3] tracking-normal">
            Scale without unnecessary complexity.
          </span>
        </h1>

        {/* Subheadlines */}
        <p className="text-black text-lg md:text-xl max-w-4xl mx-auto mb-4 font-medium">
          Core Resources helps U.S. companies scale through global talent solutions and outsourced operations designed to reduce costs, simplify execution and support sustainable growth.
        </p>
        <p className="text-black text-base md:text-lg max-w-3xl mx-auto mb-12">
          Whether you need to build a team, manage hiring complexity, or delegate administrative, finance and back-office work, we help you find the right structure to grow without building everything in-house.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link className="inline-block bg-gradient-to-r from-[#450CC2] to-[#2827E5] hover:from-[#560FF3] hover:to-[#560FF3] text-white px-10 py-4 rounded-lg text-base font-bold uppercase tracking-wide hover:opacity-90 hover:scale-105 transform transition-all duration-300 shadow-lg shadow-indigo-500/30 w-full sm:w-auto" href="https://calendly.com/alejandro-torres-thecoreresources/30min?month=2026-05" target="_blank" rel="noopener noreferrer">
            Book a Call
          </Link>
          <Link className="inline-block bg-white border-2 border-gray-200 text-gray-700 hover:border-[#560FF3] hover:text-[#560FF3] px-10 py-4 rounded-lg text-base font-bold uppercase tracking-wide hover:scale-105 transform transition-all duration-300 shadow-sm w-full sm:w-auto" href="#solutions">
            Find the Right Solution
          </Link>
        </div>
      </section>

      {/* SECTION 2: Intro before cards */}
      <section id="solutions" className="max-w-4xl mx-auto px-8 py-12 text-center relative z-10">
        <h2 className="font-raleway font-bold text-[36px] md:text-[43px] leading-none text-black mb-6">How can we help you grow?</h2>
        <p className="text-black text-lg leading-relaxed">
          Every growing company reaches a point where doing everything internally becomes expensive, complex and hard to manage. Core gives U.S. companies two ways to scale smarter: build the team they need through flexible talent solutions, or delegate operational work through structured BPO and back-office support.
        </p>
      </section>

      {/* SECTION 3: Main solution cards */}
      <section className="max-w-7xl mx-auto px-8 py-8 relative z-10 text-center mb-16">
        <div className="grid md:grid-cols-2 gap-12 text-left">

          {/* Service Card 1: Build Your Team */}
          <div className="flex flex-col relative group min-h-[450px] p-8 bg-transparent overflow-hidden rounded-3xl items-center text-center md:items-start md:text-left">
            <div className="absolute top-0 left-0 w-full h-[55%] md:h-full md:w-[65%] md:left-auto md:right-0 grayscale group-hover:grayscale-0 transition-all duration-500 rounded-t-3xl md:rounded-t-none md:rounded-r-3xl [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] md:[mask-image:linear-gradient(to_right,transparent_0%,black_85%)] -z-10">
              <Image alt="Global Map" src="/images/mapa.webp" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>

            <div className="relative z-10 w-full md:w-[70%] flex flex-col h-full pt-44 md:pt-0 items-center md:items-start">
              <h3 className="font-raleway font-thin text-[36px] md:text-[43px] leading-none mb-4 text-black uppercase">
                BUILD YOUR<br /><span className="group-hover:text-[#560FF3] transition-colors  font-bold duration-500">TEAM</span>
              </h3>
              <p className="text-black font-medium text-sm leading-relaxed mb-6 max-w-sm md:max-w-none">
                Build the team you need with recruitment, staffing, legal hiring solutions abroad and employment visa support.
              </p>

              {/* Expanded details (Visible on desktop) */}
              <div className="text-sm text-black leading-relaxed mb-8 hidden md:block">
                <p className="mb-2 font-bold text-black">Services included:</p>
                <ul className="list-disc list-inside space-y-1 mb-6">
                  <li>Recruitment & Selection</li>
                  <li>Staffing</li>
                  <li>EOR / Employer of Record</li>
                  <li>Staff Augmentation</li>
                  <li>Employment Visa Services</li>
                  <li>Hiring and onboarding support</li>
                </ul>
                <p className="mb-2 font-bold text-black">Best fit for companies that need to:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Hire qualified talent beyond the U.S. market.</li>
                  <li>Reduce hiring costs without compromising quality.</li>
                  <li>Build remote or nearshore teams.</li>
                  <li>Cover temporary, project-based or long-term roles.</li>
                  <li>Hire without opening a local entity.</li>
                  <li>Simplify legal, administrative and hiring complexity.</li>
                </ul>
              </div>

              {/* Expanded details (Mobile) - Hidden to match clean screenshot layout */}
              <div className="md:hidden mb-8 text-sm text-black hidden">
                <p className="mb-2 font-bold text-black">Services included:</p>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <li>Recruitment & Selection</li>
                  <li>EOR / Employer of Record</li>
                  <li>Staff Augmentation</li>
                </ul>
              </div>

              <div className="relative z-10 mt-auto pt-4 self-center md:self-start">
                <Link className="group/btn relative inline-flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-gray-300 text-[#999999] group-hover:text-white text-sm font-bold uppercase py-3 px-6 rounded-lg transition-all duration-300 origin-center md:origin-left hover:scale-105 hover:shadow-lg" href="/buildTeams">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#450CC2] to-[#2827E5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute inset-0 bg-[#560FF3] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10">See Recruitment Solutions</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Service Card 2: Run Your Operations */}
          <div className="flex flex-col relative group min-h-[450px] p-8 bg-transparent overflow-hidden rounded-3xl items-center text-center md:items-end md:text-right">
            <div className="absolute top-0 left-0 w-full h-[55%] md:h-full md:w-[65%] md:right-auto md:left-0 grayscale group-hover:grayscale-0 transition-all duration-500 rounded-t-3xl md:rounded-t-none md:rounded-l-3xl [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] md:[mask-image:linear-gradient(to_left,transparent_0%,black_85%)] -z-10">
              <Image alt="Laptop Dashboard" src="/images/dashboard.webp" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>

            <div className="relative z-10 w-full md:w-[70%] ml-auto flex flex-col h-full pt-44 md:pt-0 items-center md:items-end">
              <h3 className="font-raleway font-thin text-[36px] md:text-[43px] leading-none mb-4 text-black uppercase">
                RUN YOUR<br /><span className="group-hover:text-[#560FF3] font-bold transition-colors duration-500">OPERATIONS</span>
              </h3>
              <p className="text-black font-medium text-sm leading-relaxed mb-6 max-w-sm md:max-w-none">
                Delegate bookkeeping, payroll, contractor payments, admin, finance and back-office operations.
              </p>

              {/* Expanded details (Visible on desktop) */}
              <div className="text-sm text-black leading-relaxed mb-8 hidden md:block text-right">
                <p className="mb-2 font-bold text-black">Services included:</p>
                <ul className="list-none space-y-1 mb-6">
                  <li>CoreBooks / Bookkeeping</li>
                  <li>Payroll Services</li>
                  <li>Contractor Payments</li>
                  <li>BPO / Back-Office Support</li>
                  <li>Administrative Support</li>
                  <li>Finance Support</li>
                  <li>Operational process support</li>
                </ul>
                <p className="mb-2 font-bold text-black">Best fit for companies that need to:</p>
                <ul className="list-none space-y-1">
                  <li>Free up time from administrative work.</li>
                  <li>Reduce operational costs without losing control.</li>
                  <li>Organize bookkeeping, payroll and finance processes.</li>
                  <li>Pay contractors consistently and compliantly.</li>
                  <li>Keep back-office tasks running month after month.</li>
                  <li>Allow owners and teams to focus on sales, clients and growth.</li>
                </ul>
              </div>

              {/* Expanded details (Mobile) - Hidden to match clean screenshot layout */}
              <div className="md:hidden mb-8 text-sm text-black text-center hidden">
                <p className="mb-2 font-bold text-black">Services included:</p>
                <ul className="list-none space-y-1 mb-4">
                  <li>CoreBooks / Bookkeeping</li>
                  <li>Payroll Services</li>
                  <li>BPO / Back-Office Support</li>
                </ul>
              </div>

              <div className="relative z-10 mt-auto pt-4 self-center md:self-end">
                <Link className="group/btn relative inline-flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-gray-300 text-[#999999] group-hover:text-white text-sm font-bold uppercase py-3 px-6 rounded-lg transition-all duration-300 origin-center md:origin-right hover:scale-105 hover:shadow-lg" href="/runOperations">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#450CC2] to-[#2827E5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute inset-0 bg-[#560FF3] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10">See Operational Solutions</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Core differentiator (Globe + 4 blocks) */}
      <section className="bg-gray-50/30 border-t border-b border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-8 relative z-10">

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
                One partner to help you scale people and operations.
              </h2>
              <p className="text-black mb-4 text-lg leading-relaxed">
                Core Resources is more than a recruiting partner, a staffing provider or a BPO company. We help U.S. companies design practical, cost-efficient ways to grow through talent solutions and outsourced operations.
              </p>
              <p className="text-black mb-6 text-lg leading-relaxed">
                Our role is to simplify the path from business need to execution: understanding what your company requires, finding the right talent or operational structure, and supporting the work over time so your business can keep moving forward.
              </p>
              <Link className="text-black font-semibold underline underline-offset-4 decoration-2 decoration-gray-300 hover:decoration-[#560FF3] group-hover:text-[#560FF3] group-hover:decoration-[#560FF3] transition-colors duration-500 text-lg" href="/about">
                About us
              </Link>
            </div>
          </div>

          {/* Differentiators Blocks */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="text-core-purple font-bold text-4xl mb-4 opacity-50">1</div>
              <h3 className="font-raleway font-bold text-xl mb-3 text-black">Built around your business need</h3>
              <p className="text-black text-sm leading-relaxed">We do not start with a generic service list. We start with the problem you need to solve: hiring, workload, cost reduction, operational control, compliance or growth.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="text-core-purple font-bold text-4xl mb-4 opacity-50">2</div>
              <h3 className="font-raleway font-bold text-xl mb-3 text-black">Talent and operations under one structure</h3>
              <p className="text-black text-sm leading-relaxed">Core can help you build a team, run part of your operation, or combine both solutions when your business needs people, processes and execution working together.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="text-core-purple font-bold text-4xl mb-4 opacity-50">3</div>
              <h3 className="font-raleway font-bold text-xl mb-3 text-black">Global reach, practical execution</h3>
              <p className="text-black text-sm leading-relaxed">Core is based in Mexico and works with U.S. companies to access talent across Latin America and other global markets where hiring can be more cost-efficient and equally or more effective.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="text-core-purple font-bold text-4xl mb-4 opacity-50">4</div>
              <h3 className="font-raleway font-bold text-xl mb-3 text-black">Ongoing support, not just setup</h3>
              <p className="text-black text-sm leading-relaxed">Whether we help you hire talent, staff a role or manage back-office operations, our focus is on building a reliable structure that supports your company month after month.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: Pain-based section */}
      <section className="max-w-7xl mx-auto px-8 py-20 relative z-10 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <h2 className="font-raleway font-bold text-[36px] md:text-[43px] leading-none text-black mb-6">If growth is creating more work than your team can handle, Core can help.</h2>
          <p className="text-black text-lg leading-relaxed mb-6">
            Many companies reach a point where growth brings more tasks, more costs and more operational pressure. Hiring only in the U.S. may be expensive. Building full internal departments may be unnecessary. Managing administration, finance, bookkeeping or payroll internally may take time away from the activities that actually grow the business.
          </p>
          <p className="text-core-purple font-bold text-xl mb-10">
            Core helps solve that gap with flexible talent and BPO solutions designed for growing U.S. companies.
          </p>
          <Link className="inline-block bg-gradient-to-r from-[#450CC2] to-[#2827E5] hover:from-[#560FF3] hover:to-[#560FF3] text-white px-8 py-4 rounded-lg text-base font-bold uppercase tracking-wide hover:opacity-90 hover:scale-105 transform transition-all duration-300 shadow-md origin-center" href="#solutions">
            Find the Right Solution
          </Link>
        </div>
        <div className="w-full md:w-1/2 bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-xl shadow-gray-200/50">
          <h3 className="font-raleway font-bold text-3xl mb-8 text-black">Pain points we solve:</h3>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <CheckCircle className="text-core-purple w-6 h-6 mt-0.5 shrink-0" />
              <span className="text-black font-medium">High hiring costs in the U.S.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle className="text-core-purple w-6 h-6 mt-0.5 shrink-0" />
              <span className="text-black font-medium">Difficulty finding qualified talent.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle className="text-core-purple w-6 h-6 mt-0.5 shrink-0" />
              <span className="text-black font-medium">Temporary, project-based or long-term hiring needs.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle className="text-core-purple w-6 h-6 mt-0.5 shrink-0" />
              <span className="text-black font-medium">Too much administrative workload.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle className="text-core-purple w-6 h-6 mt-0.5 shrink-0" />
              <span className="text-black font-medium">Messy bookkeeping, payroll or back-office processes.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle className="text-core-purple w-6 h-6 mt-0.5 shrink-0" />
              <span className="text-black font-medium">Contractor payment complexity.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle className="text-core-purple w-6 h-6 mt-0.5 shrink-0" />
              <span className="text-black font-medium">Owners spending time on operations instead of growth.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle className="text-core-purple w-6 h-6 mt-0.5 shrink-0" />
              <span className="text-black font-medium">Need for more support without building a full internal team.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 6: Final CTA Section */}
      <section className="bg-core-purple text-white py-20 px-8 text-center relative z-10 overflow-hidden mt-8 rounded-t-[3rem]">
        <div className="absolute inset-0 bg-network-pattern opacity-10"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-raleway font-bold text-[36px] md:text-[43px] leading-none mb-6">Not sure which solution fits your business?</h2>
          <p className="text-xl text-purple-100 mb-10 leading-relaxed font-light">
            Tell us what you are trying to solve. Our team can help you identify whether you need talent solutions, operational support or a combination of both.
          </p>
          <Link className="inline-block bg-white text-[#560FF3] px-12 py-4 rounded-lg text-lg font-bold uppercase tracking-wide hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 origin-center shadow-xl shadow-black/20" href="https://calendly.com/alejandro-torres-thecoreresources/30min?month=2026-05" target="_blank" rel="noopener noreferrer">
            Book a Call
          </Link>
        </div>
      </section>
    </main>
  );
}