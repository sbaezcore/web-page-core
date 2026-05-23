import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-20 px-4 pb-4">
      <div className="max-w-7xl mx-auto bg-black text-white rounded-3xl overflow-hidden font-raleway font-medium text-[20px]">
        {/* Footer Top CTA */}
        <div className="text-center py-16 px-8 border-b border-white">
          <h2 className="text-4xl font-bold mb-4">Ready to scale your business?</h2>
          <p className="text-white mb-8 max-w-3xl mx-auto">
            Whether you need to build your dream team or optimize your back-office operations, we are here to support your growth.
          </p>
          <Link className="inline-block bg-gradient-to-r from-[#450CC2] to-[#2827E5] hover:from-[#560FF3] hover:to-[#560FF3] text-white px-8 py-3 rounded-lg font-bold hover:scale-105 transform transition-all duration-300 shadow-md origin-center" href="https://calendly.com/alejandro-torres-thecoreresources/30min?month=2026-05" target="_blank" rel="noopener noreferrer">
            Book a Consultation
          </Link>
        </div>
        {/* Footer Links Area */}
        <div className="py-12 px-12 md:px-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Pages Column */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-white mb-4 border-b-2 border-white pb-2 block">PAGES</h4>
            <ul className="space-y-4 text-white">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Core</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
          {/* Services Column */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-white mb-4 border-b-2 border-white pb-2 block">SERVICES</h4>
            <ul className="space-y-4 text-white">
              <li><Link href="/buildTeams">Build Your Team</Link></li>
              <li><Link href="/runOperations">Run Your Operations</Link></li>
            </ul>
          </div>
          {/* Social Networks Column */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-white mb-4 border-b-2 border-white pb-2 block">SOCIAL NETWORKS</h4>
            <div className="flex space-x-4">
              <a className="text-white hover:scale-110 transform transition-transform" href="#" target="_blank" rel="noopener noreferrer">
                <i className="ph ph-instagram-logo text-[40px]"></i>
              </a>
              <a className="text-white hover:scale-110 transform transition-transform" href="#" target="_blank" rel="noopener noreferrer">
                <i className="ph ph-facebook-logo text-[40px]"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
