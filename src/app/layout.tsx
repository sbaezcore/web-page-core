import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Raleway } from 'next/font/google';
import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

export const metadata: Metadata = {
  title: "Core Resources",
  description: "Talent Solutions & BPO Services for U.S. Companies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable}`}>
      <body className="font-sans text-gray-900 relative antialiased min-h-screen flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
