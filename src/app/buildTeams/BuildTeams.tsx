import Image from 'next/image';
import Link from 'next/link';

export default function BuildTeamsContent() {
  return (
    <main className="w-full max-w-[1440px] mx-auto overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-6 z-10 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-bold text-primary tracking-wide uppercase text-xs">Talent Solutions</span>
            </div>
            <h1 className="font-montserrat font-bold text-[32px] text-primary leading-tight md:text-headline-lg md:font-headline-lg">
              Build Your Team
            </h1>
            <h2 className="font-montserrat font-bold text-[24px] text-on-background leading-snug">
              Hire top-tier talent fast—no entity needed.
            </h2>
            <p className="font-open-sans text-body-lg text-on-surface-variant max-w-xl">
              Core Resources simplifies the process of hiring, managing, and paying top professionals across Latin America legally and efficiently. Core handles all compliance and payroll, saving over 50% in administrative costs.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-primary text-white font-open-sans font-bold px-8 py-4 rounded-lg hover:bg-primary-fixed-variant transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 group">
                Start Recruiting Talent
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 relative mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-surface-variant/40 to-primary-container/10 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-surface-dim group">
              <Image
                alt="Recruiter in video call"
                width={800}
                height={600}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxf6AFSaKQqIOTbau2TjqOkBztHkzQxun6TYp7djengiwIcYA1lHWNQW0YQlmuQQNXEBP3HTAyNfrvWyO34om7IX9anmHNz6FqGpwuWOwoRMf1-Z0y0jPH1UhpxT7qWxajZN3bqp32ebX6NniRzqDblHgsJMmpZ51hejWe_8MvCv_RC971TZ3pmi8a7PNzc2d1MCZIFGFiLRRLwG9SXn3Ojuy22MffjaNRuvZQNWJx9WRsGg-ZYjDZrTK2vwa5owaFua5e2levp94"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-surface p-4 rounded-xl shadow-lg border border-surface-dim flex items-center gap-4 animate-[bounce_3s_ease-in-out_infinite]">
              <div className="bg-primary-container p-3 rounded-lg text-on-primary-container">
                <span className="material-symbols-outlined">public</span>
              </div>
              <div>
                <p className="font-label-bold text-sm text-on-surface">LATAM Talent Pool</p>
                <p className="text-xs text-on-surface-variant font-medium">Access instantly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1: Cost Pain Point */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-tertiary-fixed/30 rounded-3xl blur-2xl -z-10"></div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-surface-dim">
              <Image
                alt="Graph showing growing teams and decreasing costs"
                width={800}
                height={600}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGQ3vRYf0jRlcBdKxy5ZktfCQtc8QtgpzcmezhOzSA_sTC9WBdryrkpqFthQno6-RyopJbtfIx8k1TsQGRVHMG7YfjrggtP1x-hWbvNo9eW1uLKn6Tfr07sA8Q23n3oIYJY_n_XGyB2jW4y7oAEPKy_iudvULLbn-HqdzRWtjD3AWYVZuB21IPRZgL8r9jtOSO0Vj_CEEqdFI7zSXRSZaToqmwW_BtJlYT3qodvOuX8g5km5ql-bnwwWWLTaYA3KXLK7JaLBDiBJI"
              />
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2 flex flex-col gap-6">
            <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed mb-2">
              <span className="material-symbols-outlined text-2xl">trending_down</span>
            </div>
            <h3 className="font-montserrat font-bold text-headline-md text-on-background">
              Scale your team without increasing overhead.
            </h3>
            <p className="font-open-sans text-body-lg text-on-surface-variant">
              Expanding your workforce often implies massive administrative overhead. Our solutions cut administrative costs by consistently over 50%, allowing you to invest more in growth and less in bureaucracy.
            </p>
          </div>
        </div>
      </section>

      {/* Feature 2: Commitment Pain Point */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop relative overflow-hidden">
        {/* Decorative blur */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl -z-10 transform -translate-y-1/2 translate-x-1/3"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed mb-2">
              <span className="material-symbols-outlined text-2xl">timer</span>
            </div>
            <h3 className="font-montserrat font-bold text-headline-md text-on-background">
              Add specialised talent for projects without long-term commitments.
            </h3>
            <p className="font-open-sans text-body-lg text-on-surface-variant">
              Projects require specialised skillsets for limited periods. Core Resources provides flexible staffing options, enabling you to bring in expert contractors exactly when you need them, without the burden of full-time employment contracts.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 relative mt-12 lg:mt-0">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-surface-dim group">
              <Image
                alt="Agile team with Kanban board"
                width={800}
                height={600}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ9ir4RVABKE25JZWbxbN-vuRemWSnnKszHr6Nyl2Ss86qkiS2Y3IAbkPh7gojnAlK9HWGZvoay-gNtDSqdOnfTvCFoTg6F1BlByb8N8gEdUK0G1dX5mJAac0EChqYAVYjOX2eJaeoh-qZnQgqEgqQkyQM2ly4aFnisrf9Mw6ss3hkN4ZZ1-w5Ag9N2nklWw5F8F0bBnBl9yFKHFasGhpMxlRmpHp4nNB1gFUzV8QfvvbeBdkPMYIj4yvYde0aYzUYwUNzUVTZ3go"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Access Pain Point */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-highest relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 relative group">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl transform -translate-x-3 translate-y-3 -z-10 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 duration-300"></div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-surface-dim">
              <Image
                alt="Collage of diverse professionals"
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyIT10yRQEBqdX4bA8kWKVdbrkt3nuyVjKIPrF0K8saxI2NxmHzC5sfC7idgEIB8YARlgZ2YBNVVfdtz3V2Ypvzi2VcKXJNWeA87R9q_TTM2cUgsuM4E3jXVexFDnrKR4IuxbSPXI83YI5aTWXl8fPbaW8gDHMu78Vj1-TVwKIVqMkbKq5nBen6ugFkjn9gLxDC_7k5UIUMa26pDrTwuiRFolIMF1wzZPmCP2pKq1Ir3_3HKyRTCP8JuTw6H5jCP194uRykBPxpQk"
              />
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2 flex flex-col gap-6">
            <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed mb-2">
              <span className="material-symbols-outlined text-2xl">group_add</span>
            </div>
            <h3 className="font-montserrat font-bold text-headline-md text-on-background">
              Gain access to highly skilled professionals at competitive rates.
            </h3>
            <p className="font-open-sans text-body-lg text-on-surface-variant">
              Accessing top-tier talent in the U.S. is expensive. We create advanced hiring strategies, connecting you with a large pool of world-class professionals in LATAM, ensuring you get the skills you need at a fraction of the cost.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section (Bento Grid Style) */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop bg-background">
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col gap-4">
          <h2 className="font-montserrat font-bold text-[32px] text-primary md:text-headline-lg">
            Services
          </h2>
          <p className="font-open-sans text-body-lg text-on-surface-variant">
            Core Resources is your single partner for all aspects of international talent management. Our core services include comprehensive solutions designed to streamline your global operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Image Card */}
          <div className="md:col-span-12 lg:col-span-5 rounded-3xl overflow-hidden shadow-sm border border-surface-dim relative group h-[400px] lg:h-auto">
            <Image
              alt="Modern desk with compliance certificate"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuANEYsEheBCSR4Dacf0SBPlZmKFNxBOlKAaQybUo1T9YoCRJ11zJyHtBoS6kyhXeU3Cl5vnQN6FFkAq4R2oyj2wyL5vqIxEQl3HOIUdI27BUI3_Qp-t-xTMHpMvlW38verQPbFbWc_SC2gtyU7SjZnWc0YfaqI5cYF6D5b8O1HDOGJAlmbBB50aJRjvSeImFEqSKjL5XDoJyCmV0cJGEHLHx-ZRn9Tvp6rWn7i4FE8wRIoqh6Mik9FeewijEiTKtp8lOhMQyYHekZk"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/40 to-transparent flex flex-col justify-end p-8">
              <span className="text-primary-fixed-dim font-label-bold uppercase tracking-wider text-sm mb-2">Global Reach</span>
              <h4 className="text-white font-montserrat font-bold text-2xl">Seamless Compliance Worldwide</h4>
            </div>
          </div>
          {/* Services Grid */}
          <div className="md:col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Service 1 */}
            <div className="bg-surface-bright rounded-3xl p-8 shadow-sm border border-surface-dim hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">corporate_fare</span>
              </div>
              <h4 className="font-montserrat font-bold text-xl text-on-background mb-3">Employer of Record (EOR)</h4>
              <p className="font-open-sans text-body-md text-on-surface-variant">Seamlessly hire and manage employees legally without setting up a local entity.</p>
            </div>
            {/* Service 2 */}
            <div className="bg-surface-bright rounded-3xl p-8 shadow-sm border border-surface-dim hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">person_search</span>
              </div>
              <h4 className="font-montserrat font-bold text-xl text-on-background mb-3">Recruitment &amp; Selection</h4>
              <p className="font-open-sans text-body-md text-on-surface-variant">Find and hire top professionals effortlessly with our targeted search strategies.</p>
            </div>
            {/* Service 3 */}
            <div className="bg-surface-bright rounded-3xl p-8 shadow-sm border border-surface-dim hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary mb-6 group-hover:bg-tertiary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">extension</span>
              </div>
              <h4 className="font-montserrat font-bold text-xl text-on-background mb-3">Staff Augmentation</h4>
              <p className="font-open-sans text-body-md text-on-surface-variant">Fill skill gaps quickly with highly qualified contractors for specific project needs.</p>
            </div>
            {/* Service 4 */}
            <div className="bg-surface-bright rounded-3xl p-8 shadow-sm border border-surface-dim hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">flight_takeoff</span>
              </div>
              <h4 className="font-montserrat font-bold text-xl text-on-background mb-3">Visa Services</h4>
              <p className="font-open-sans text-body-md text-on-surface-variant">Obtain work and residency visas smoothly for your international workforce.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
