import Image from 'next/image';
import Link from 'next/link';

export default function RunOperationsContent() {
  return (
    <main>
      {/* Hero Section */}
      <section className="w-full px-margin-mobile md:px-margin-desktop py-16 md:py-24 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <p className="text-primary font-montserrat font-bold text-[32px] uppercase tracking-wider">RUN YOUR OPERATIONS</p>
            <h1 className="text-on-surface font-montserrat font-bold text-[32px] md:text-[40px] leading-tight">Focus on growth, we’ve got the paperwork covered.</h1>
            <p className="text-on-surface-variant text-body-lg font-opensans max-w-2xl">For companies that need to outsource, organize, or optimize their back office. We handle all local employment, tax, and legal requirements—so your business stays fully compliant and protected from liability. Externalize your operations and focus on scaling your business with zero risk.</p>
            <div className="pt-4">
              <Link className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary font-label-bold text-label-bold rounded-lg hover:bg-on-primary-fixed-variant transition-colors shadow-sm hover:shadow-md hover:-translate-y-0.5 duration-200" href="/contact">
                Optimize Your Operations
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 relative mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-primary-fixed rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
            <Image alt="" width={800} height={457} className="w-full h-auto rounded-2xl shadow-xl object-cover aspect-[1.75]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnyZ4bmB1oZuWtVkiAGKGL3XaAV4QrKrACoY_-g87G3zv52Fgn6Ox1sc3M8XPau9pP9109GTii54L7jLwS0muoyJ4pX4-ANcIW9mSihGSJg_oPw-movCZfd3S3Y4HqTCWr0BMzurjLT2_Ojc9qnzCd31J6FelWQ5vFXW_Ubyny2R_nU6tLdSbF4t1nEEvRLGwRoW71nQi2gdc1MBdFzOZ9AHio167wtdoC8o0HRt3i82-SrmYE3zQV3XwjIq2F1EP70IhksQi7Pak"/>
          </div>
        </div>
      </section>

      {/* Operational Pain Points Sections */}
      <section className="w-full px-margin-mobile md:px-margin-desktop py-section-gap max-w-[1440px] mx-auto flex flex-col gap-24 md:gap-32">
        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 md:col-start-1 relative">
            <div className="absolute inset-0 bg-secondary-fixed rounded-xl transform -translate-x-3 translate-y-3 -z-10"></div>
            <Image alt="" width={800} height={584} className="w-full h-auto rounded-xl shadow-md object-cover aspect-[1.37]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuSKndBF91E3ODmXNMxWjDAPaWysHm8C87zaKc0nuT7WNiLzvfVYQlBreyM3LMyPzPBM4o6LEMV_LD14zwjXz1f-xSes0im3y3kQpdxbYJfNHSFQyhXeCc6HFlXLCuQbZyiNRlMnhU3azLyXajMTb5DCSqQCpZe4dpC95QouCacATUG4N33Auw5kqumhdRHBfU-nhppw4Yro_pAFV9F4wrVFmaQUAfCc_8FZjU-nkitCCi7v0dhWBhLu_qOerd4qVKQDivTtsKarw"/>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-4 mt-8 md:mt-0">
            <h2 className="text-on-surface font-montserrat font-bold text-headline-md">Reduce operational costs without losing control.</h2>
            <p className="text-on-surface-variant font-opensans text-body-lg">Save over 50% in administrative costs. Our clients consistently cut overhead without compromising quality, accuracy, or compliance. Build a qualified, cost-effective financial team in Mexico.</p>
          </div>
        </div>

        {/* Section 2 (Image Right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-6 md:col-start-1 flex flex-col gap-4 order-2 md:order-1 mt-8 md:mt-0">
            <h2 className="text-on-surface font-montserrat font-bold text-headline-md">Fix your financial operations.</h2>
            <p className="text-on-surface-variant font-opensans text-body-lg">Core books+ connects you with bilingual, U.S.-savvy bookkeepers who handle your daily financial operations, transactions entry, and bank reconciliations—so your CPA can focus strictly on tax strategy.</p>
          </div>
          <div className="md:col-span-5 md:col-start-8 relative order-1 md:order-2">
            <div className="absolute inset-0 bg-tertiary-fixed rounded-xl transform translate-x-3 -translate-y-3 -z-10"></div>
            <Image alt="" width={800} height={584} className="w-full h-auto rounded-xl shadow-md object-cover aspect-[1.37]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBfrZwdZU68h9vKeijMz3RxFHLwVgYFqPQBYtz-JOD2AHAzzjLbVThjm9E6uzbwzyscNAxCi9H_cryRNmuSonshylSBDlTv8iq2xzdSlyQWv8Hr3y6j8SThN4GBHMXFNakl2QuFuLb6hPBBkSl_IkAlRirtZV_iCZ-dsnvPIVbNVWpmYhtWB1-XZMfylQdYVKsnEmck6SEMaf9N0zUfrbZkeFwR5DKYDuSfCt4opoZK3uY-3fV4RE7qX_wFIUFwzHVdqfCsvioHj4"/>
          </div>
        </div>

        {/* Section 3 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 md:col-start-1 relative">
            <div className="absolute inset-0 bg-surface-variant rounded-xl transform -translate-x-3 translate-y-3 -z-10"></div>
            <Image alt="" width={800} height={584} className="w-full h-auto rounded-xl shadow-md object-cover aspect-[1.37]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5Q3Bopilo7H-_qJucJw5fuubwfK_L8P0mOHN05YdDdqixer51HbnOHGJQSeuiBNgCTZbvvcGgqwB7cKMlPWTaDkC7b9lhaRyqSIcwzIiyD6ws588eIC6HnDcrXpBLyZ6C0NPD6BTWGbwswY2PaTtJdxNr24r62SOvVch4UiUTMRKj9m-B3uiIA_u0gQU_0N4RNsOWUs_aV2bm6RTG1CFDo2gXslKEqKPK8cIk2a4IqWV1AQ2ST7L3fqhIKnb7_BsNZ74cGQw8Fmg"/>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-4 mt-8 md:mt-0">
            <h2 className="text-on-surface font-montserrat font-bold text-headline-md">Delegate your back office and focus on growth.</h2>
            <p className="text-on-surface-variant font-opensans text-body-lg">Our BPO accounting solutions let you focus on your core business while we handle A/R and A/P management, processing of bills, and financial reporting. Let us be your trusted Global Accountant.</p>
          </div>
        </div>

        {/* Section 4 (Image Right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-6 md:col-start-1 flex flex-col gap-4 order-2 md:order-1 mt-8 md:mt-0">
            <h2 className="text-on-surface font-montserrat font-bold text-headline-md">Pay contractors compliantly.</h2>
            <p className="text-on-surface-variant font-opensans text-body-lg">Pay independent contractors securely and compliantly. We handle payment processing, tax considerations, and legal obligations, ensuring smooth contractor management and reducing administrative burdens.</p>
          </div>
          <div className="md:col-span-5 md:col-start-8 relative order-1 md:order-2">
            <div className="absolute inset-0 bg-primary-fixed-dim rounded-xl transform translate-x-3 translate-y-3 -z-10"></div>
            <Image alt="" width={800} height={584} className="w-full h-auto rounded-xl shadow-md object-cover aspect-[1.37]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy3BDVxwz0C0ZLZqII0PFM5_LsZXvZ3Av8G9martHTCIxRY93yQ-zoJMrf10gFjNPWflNUYLcMayeNMFcjlaqeCRYc9wwM6qAPWnxQ8BaHx7oFLAmA015RyjeBPK7z6YdqTQUeap5CqrgtuaGByT1_Lx3iftgooCEArVUEY1xmUYaDjCwa-4N6ACEL0HrDKUVNHiWoZXNJ7MiEo1qs-oDJ1uDWJgQzWXxkA2Gl-Hnxa3y4EFJlBCcFyESpjp9Po-WFabBOi3AMslU"/>
          </div>
        </div>
      </section>

      {/* Services Section (Bottom) */}
      <section className="w-full px-margin-mobile md:px-margin-desktop py-16 md:py-24 bg-surface-container-low max-w-[1440px] mx-auto rounded-3xl mb-section-gap">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-montserrat font-bold text-[32px] tracking-wide mb-6">SERVICES</h2>
          <p className="text-on-surface-variant font-opensans text-body-lg">From knowledge to results, we provide strategic solutions tailored to your unique needs. Our core operational services include:</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          <div className="md:col-span-7 flex flex-col gap-6">
            <div className="bg-surface p-6 rounded-xl border border-outline-variant hover:border-primary transition-colors hover:shadow-sm">
              <h3 className="font-montserrat font-bold text-on-surface text-xl mb-2 flex items-center gap-2"><span className="material-symbols-outlined text-primary">account_balance</span> CoreBooks</h3>
              <p className="text-on-surface-variant font-opensans">Daily financial operations, bookkeeping, and reconciliation.</p>
            </div>
            <div className="bg-surface p-6 rounded-xl border border-outline-variant hover:border-primary transition-colors hover:shadow-sm">
              <h3 className="font-montserrat font-bold text-on-surface text-xl mb-2 flex items-center gap-2"><span className="material-symbols-outlined text-primary">payments</span> Payroll Services</h3>
              <p className="text-on-surface-variant font-opensans">Accurate and compliant local payroll management.</p>
            </div>
            <div className="bg-surface p-6 rounded-xl border border-outline-variant hover:border-primary transition-colors hover:shadow-sm">
              <h3 className="font-montserrat font-bold text-on-surface text-xl mb-2 flex items-center gap-2"><span className="material-symbols-outlined text-primary">receipt_long</span> Contractor Payments</h3>
              <p className="text-on-surface-variant font-opensans">Secure, compliant cross-border payment processing.</p>
            </div>
            <div className="bg-surface p-6 rounded-xl border border-outline-variant hover:border-primary transition-colors hover:shadow-sm">
              <h3 className="font-montserrat font-bold text-on-surface text-xl mb-2 flex items-center gap-2"><span className="material-symbols-outlined text-primary">support_agent</span> BPO / Back Office Support</h3>
              <p className="text-on-surface-variant font-opensans">Comprehensive administrative and operational delegation.</p>
            </div>
          </div>
          <div className="md:col-span-5 flex justify-center items-center mt-12 md:mt-0 p-8">
            <Image alt="" width={400} height={400} className="w-full max-w-sm h-auto mix-blend-multiply opacity-90" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAYAAAB/HSuDAAAQAElEQVR4AezdCfw979/Q80/CTbdQWZLIEsVNZcmtLClSiiKUlMrWohKitEkLLUQLFVlTSUSWiDaVpe7KUrZEi50I2Vtdr8//e33/8zvfs2+fOefz/D7O9Z05s17znJlrrus9c+bzu734R4AAAQIECBAgQIAAAQIECDy7wIsAwNPvYhtIgAABAgQIECBAgAABAgReBAAcBAQIECBAgAABAgQIECBA4OkFxgZ6AmAg+BAgQIAAAQIECBAgQIAAgWcWaNsEAFKQCBAgQIAAAQIECBAgQIDA8wq8bpkAwCuD/wgQIECAAAECBAgQIECAwLMKfG67BAA+5+B/AgQIECBAgAABAgQIECDwnAIftkoA4AOEDgECBAgQIECAAAECBAgQeEaBuU0CAFNClwABAgQIECBAgAABAgQIPJ/Axy0SAPhIoYcAAQIECBAgQIAAAQIECDybwOe3RwDg8xb6CBAgQIAAAQIECBAgQIDAcwkstkYAYIGhlwABAgQIECBAgAABAgQIPJPAclsEAJYa+gkQIECAAAECBAgQIECAwPMIfGZLBAA+w+ELAQIECBAgQIAAAQIECBB4FoHPbocAwGc9fCNAgAABAgQIECBAgQIAAgc/t/wAAAAD//7XQbuAAAAYZSURBVMBxKn0eCybNMgAAAABJRU5ErkJggg=="/>
          </div>
        </div>
      </section>
    </main>
  );
}
