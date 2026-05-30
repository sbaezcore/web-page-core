import Link from 'next/link';
import { FiInstagram, FiFacebook } from 'react-icons/fi';

export default function Footer({ dict, lang }: { dict: any, lang: string }) {
  return (
    <footer className="mt-20 px-4 pb-4">
      <div className="max-w-7xl mx-auto bg-black text-white rounded-3xl overflow-hidden font-raleway font-medium text-[20px]">
        {/* Footer Top CTA */}
        <div className="text-center py-16 px-8 border-b border-white">
          <h2 className="text-4xl font-bold mb-4">{dict.readyToScale}</h2>
          <p className="text-white mb-8 max-w-3xl mx-auto">
            {dict.supportGrowth}
          </p>
          <Link className="inline-block bg-gradient-to-r from-[#450CC2] to-[#2827E5] hover:from-[#560FF3] hover:to-[#560FF3] text-white px-8 py-3 rounded-lg font-bold hover:scale-105 transform transition-all duration-300 shadow-md origin-center" href="https://calendly.com/alejandro-torres-thecoreresources/30min?month=2026-05" target="_blank" rel="noopener noreferrer">
            {dict.bookConsultation}
          </Link>
        </div>
        {/* Footer Links Area */}
        <div className="py-12 px-12 md:px-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Pages Column */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-white mb-4 border-b-2 border-white pb-2 block">{dict.pages}</h4>
            <ul className="space-y-4 text-white">
              <li><Link href={`/${lang}/`}>{dict.home || 'Home'}</Link></li>
              <li><Link href={`/${lang}/about`}>{dict.aboutCore || 'About Core'}</Link></li>
              <li><Link href={`/${lang}/contact`}>{dict.contact || 'Contact'}</Link></li>
              <li><Link href={`/${lang}/privacy`}>{dict.privacyPolicy}</Link></li>
              <li><Link href={`/${lang}/terms`}>{dict.termsOfService}</Link></li>
            </ul>
          </div>
          {/* Services Column */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-white mb-4 border-b-2 border-white pb-2 block">{dict.servicesTitle}</h4>
            <ul className="space-y-4 text-white">
              <li><Link href={`/${lang}/buildTeams`}>{dict.buildYourTeam || 'Build Your Team'}</Link></li>
              <li><Link href={`/${lang}/runOperations`}>{dict.runOperations || 'Run Operations'}</Link></li>
            </ul>
          </div>
          {/* Social Networks Column */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-white mb-4 border-b-2 border-white pb-2 block">{dict.socialNetworks}</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiInstagram size={40} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiFacebook size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
