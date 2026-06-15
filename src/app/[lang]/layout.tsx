import type { Metadata } from "next";
import { Inter, Raleway } from 'next/font/google';
import Script from 'next/script';
import "../globals.css";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getDictionary } from '../../dictionaries/getDictionary';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const params = await props.params;
  const lang = params.lang || 'en';
  return {
    title: lang === 'es' ? "Core Resources | Soluciones de Talento y BPO" : "Core Resources",
    description: lang === 'es' ? "Soluciones de Talento y Servicios BPO para Empresas de EE. UU." : "Talent Solutions & BPO Services for U.S. Companies",
    icons: {
      icon: '/images/favicon.png',
    },
  };
}



export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang;
  const dict = getDictionary(lang);

  return (
    <html lang={lang} className={`${inter.variable} ${raleway.variable}`}>
      <body className="font-sans text-gray-900 relative antialiased min-h-screen flex flex-col">
        <Navbar dict={dict.nav} lang={lang} />
        {props.children}
        <Footer dict={dict.footer} lang={lang} />
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-H0BBLFHBLQ" />
        <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-H0BBLFHBLQ');
          `
        }} />
      </body>
    </html>
  );
}
