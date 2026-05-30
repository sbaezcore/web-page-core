import Image from 'next/image';
import Link from 'next/link';
import { Workflow, CheckCircle2, BookOpen, Banknote, HandCoins, Network, FileText, TrendingUp } from 'lucide-react';
import FadeInSection from '../../components/FadeInSection';

export default function RunOperationsContent() {
  return (
    <main className="w-full mx-auto overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 pb-16 md:pt-24 md:pb-20 px-6 xl:px-8 max-w-7xl mx-auto group">
        {/* Background Image with animation */}
        <div className="absolute top-0 right-0 w-full h-[50%] lg:h-full lg:w-[55%] grayscale group-hover:grayscale-0 transition-all duration-500 [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_100%)] -z-10">
          <Image alt="Dashboard Laptop Mockup" src="/images/dashboard.webp" fill className="object-cover object-left" sizes="(max-width: 1024px) 100vw, 50vw" priority />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 relative z-10 pt-48 lg:pt-0">
            <FadeInSection>
              <h1 className="font-bold text-[32px] md:text-[32px] leading-[1.1] text-black tracking-tight">
                Run your operations without hiring more people or losing control.
              </h1>
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <p className="font-bold text-lg text-black">
                Core helps U.S. companies outsource administrative, finance, bookkeeping, payroll, contractor payment and back-office operations through structured BPO support.
              </p>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <p className="text-[#4C4C4C] text-lg font-medium">
                We help growing companies reduce operational workload, organize critical processes and give owners and teams more time to focus on sales, clients and growth.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="mt-4">
                <p className="font-bold text-black mb-4">Best fit for companies that need to:</p>
                <ul className="space-y-2 text-[#4C4C4C] text-lg font-medium">
                  <li className="flex items-start">
                    <span className="mr-2 text-gray-400">•</span>
                    Free up time from administrative work.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-gray-400">•</span>
                    Reduce operational costs without losing control.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-gray-400">•</span>
                    Organize bookkeeping, payroll and finance processes.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-gray-400">•</span>
                    Pay contractors consistently and compliantly.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-gray-400">•</span>
                    Keep back-office tasks running month after month.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-gray-400">•</span>
                    Allow owners and teams to focus on sales, clients and growth.
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
              <Workflow size={64} className="text-black" strokeWidth={1.5} />
            </div>
            <h2 className="font-bold text-3xl md:text-4xl text-black mb-8">
              Your business should not depend on you doing everything.
            </h2>
            <div className="space-y-6 text-gray-700 text-lg">
              <p>
                As companies grow, operational work starts to pile up. Bookkeeping, payroll, contractor payments, administrative tasks, reporting, follow-ups and back-office processes become harder to manage internally.
              </p>
              <p>
                At some point, the problem is not only lack of time. It is lack of structure.
              </p>
              <p>
                Core helps U.S. companies delegate the operational work that keeps the business running, without building a full internal team or losing visibility over the process. Through CoreBooks and BPO support, we help your operation stay organized, up to date and compliant.
              </p>
              <p className="font-bold text-black pt-2">
                You focus on growing the business. We help keep the operation moving.
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
                What operational challenge are you trying to solve?
              </h2>
              <p className="font-bold text-black text-lg max-w-3xl mx-auto">
                You may not need a full internal department. You may need the right operational support behind the business. Core starts with the problem, then connects it with the right outsourced solution.
              </p>
            </div>
          </FadeInSection>

          <div className="space-y-12">
            {/* Row 1 */}
            <FadeInSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-bold text-2xl text-black mb-4">Get control of your back office</h3>
                  <p className="text-gray-700 mb-4">
                    Your business is growing, but admin tasks, documents, follow-ups and internal processes are scattered. Things get done, but not always with the structure or consistency you need.
                  </p>
                  <p className="text-gray-700">
                    Core helps organize and run back-office tasks so your business can operate with more clarity, control and continuity.
                  </p>
                </div>
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                  <h4 className="font-bold text-black text-right mb-6">Services that may include:</h4>
                  <ul className="space-y-3 font-medium">
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3 shrink-0"></span>Back-Office Support</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3 shrink-0"></span>Administrative Support</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3 shrink-0"></span>Operational process support</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3 shrink-0"></span>Document coordination</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3 shrink-0"></span>Ongoing task management</li>
                  </ul>
                </div>
              </div>
            </FadeInSection>

            {/* Row 2 */}
            <FadeInSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-bold text-2xl text-black mb-4">Fix your financial operations</h3>
                  <p className="text-gray-700 mb-4">
                    If bookkeeping, reconciliations, financial records or reporting are delayed or inconsistent, it becomes harder to make decisions and understand how the business is really performing.
                  </p>
                  <p className="text-gray-700">
                    CoreBooks helps keep your financial operations organized, updated and easier to manage month after month.
                  </p>
                </div>
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                  <h4 className="font-bold text-black text-right mb-6">Services that may include:</h4>
                  <ul className="space-y-3 font-medium">
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3 shrink-0"></span>Bookkeeping</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3 shrink-0"></span>Finance Support</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3 shrink-0"></span>Reporting support</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3 shrink-0"></span>Account reconciliation support</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3 shrink-0"></span>Administrative finance tasks</li>
                  </ul>
                </div>
              </div>
            </FadeInSection>

            {/* Row 3 */}
            <FadeInSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-bold text-2xl text-black mb-4">Delegate payroll and contractor payments</h3>
                  <p className="text-gray-700 mb-4">
                    Paying employees, contractors or remote teams can become time-consuming and sensitive. Mistakes, delays or lack of structure can create unnecessary risk and frustration.
                  </p>
                  <p className="text-gray-700">
                    Core helps manage payroll and contractor payment processes with consistency, control and compliance-minded execution.
                  </p>
                </div>
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                  <h4 className="font-bold text-black text-right mb-6">Services that may include:</h4>
                  <ul className="space-y-3 font-medium">
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3 shrink-0"></span>Payroll Services</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3 shrink-0"></span>Contractor Payments</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3 shrink-0"></span>Payment coordination</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3 shrink-0"></span>Administrative support</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3 shrink-0"></span>Compliance-minded process support</li>
                  </ul>
                </div>
              </div>
            </FadeInSection>

            {/* Row 4 */}
            <FadeInSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-bold text-2xl text-black mb-4">Reduce operational workload</h3>
                  <p className="text-gray-700 mb-4">
                    When owners or internal teams spend too much time on administrative work, the business loses focus. Sales, client service and growth initiatives get pushed aside.
                  </p>
                  <p className="text-gray-700">
                    Core helps take recurring operational tasks off your team's plate, giving them more time to focus on higher-value work.
                  </p>
                </div>
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                  <h4 className="font-bold text-black text-right mb-6">Services that may include:</h4>
                  <ul className="space-y-3 font-medium">
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3 shrink-0"></span>Administrative Support</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3 shrink-0"></span>BPO Support</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3 shrink-0"></span>Back-Office Support</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3 shrink-0"></span>Finance Support</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3 shrink-0"></span>Recurring task management</li>
                  </ul>
                </div>
              </div>
            </FadeInSection>

            {/* Row 5 */}
            <FadeInSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-bold text-2xl text-black mb-4">Scale operations without building a full internal team</h3>
                  <p className="text-gray-700 mb-4">
                    Your company may need more operational capacity, but not necessarily a full finance, admin, payroll or back-office department in the U.S.
                  </p>
                  <p className="text-gray-700">
                    Core helps you build an outsourced operations structure that supports growth without increasing internal complexity or fixed overhead.
                  </p>
                </div>
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                  <h4 className="font-bold text-black text-right mb-6">Services that may include:</h4>
                  <ul className="space-y-3 font-medium">
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3 shrink-0"></span>BPO / Back-Office Support</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3 shrink-0"></span>Bookkeeping</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3 shrink-0"></span>Payroll Services</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3 shrink-0"></span>Contractor Payments</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3 shrink-0"></span>Administrative Support</li>
                    <li className="flex items-center text-gray-800"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3 shrink-0"></span>Finance Support</li>
                  </ul>
                </div>
              </div>
            </FadeInSection>

          </div>
        </div>
      </section>

      {/* Bottom Services Grid */}
      <section className="py-24 px-6 xl:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-center font-bold text-2xl md:text-3xl text-[#6225E6] mb-12">
              Outsourced operations designed to keep your business organized and moving.
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <FadeInSection delay={0.1} className="h-full">
              {/* Card 1 */}
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 flex flex-col items-center justify-center text-center aspect-[4/5] shadow-sm hover:shadow-md transition-all border border-white/40 h-full">
                <BookOpen size={36} className="text-gray-600 mb-6" strokeWidth={1.5} />
                <p className="text-sm font-medium text-gray-600">Bookkeeping</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2} className="h-full">
              {/* Card 2 */}
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 flex flex-col items-center justify-center text-center aspect-[4/5] shadow-sm hover:shadow-md transition-all border border-white/40 h-full">
                <Banknote size={36} className="text-gray-600 mb-6" strokeWidth={1.5} />
                <p className="text-sm font-medium text-gray-600">Payroll Services</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3} className="h-full">
              {/* Card 3 */}
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 flex flex-col items-center justify-center text-center aspect-[4/5] shadow-sm hover:shadow-md transition-all border border-white/40 h-full">
                <HandCoins size={36} className="text-gray-600 mb-6" strokeWidth={1.5} />
                <p className="text-sm font-medium text-gray-600">Contractor Payments</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4} className="h-full">
              {/* Card 4 */}
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 flex flex-col items-center justify-center text-center aspect-[4/5] shadow-sm hover:shadow-md transition-all border border-white/40 h-full">
                <Network size={36} className="text-gray-600 mb-6" strokeWidth={1.5} />
                <p className="text-sm font-medium text-gray-600 leading-tight">BPO / Back-Office Support</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.5} className="h-full">
              {/* Card 5 */}
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 flex flex-col items-center justify-center text-center aspect-[4/5] shadow-sm hover:shadow-md transition-all border border-white/40 h-full">
                <FileText size={36} className="text-gray-600 mb-6" strokeWidth={1.5} />
                <p className="text-sm font-medium text-gray-600">Administrative Support</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.6} className="h-full">
              {/* Card 6 */}
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 flex flex-col items-center justify-center text-center aspect-[4/5] shadow-sm hover:shadow-md transition-all border border-white/40 h-full">
                <TrendingUp size={36} className="text-gray-600 mb-6" strokeWidth={1.5} />
                <p className="text-sm font-medium text-gray-600">Finance Support</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </main>
  );
}
