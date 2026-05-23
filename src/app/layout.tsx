import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Raleway:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="text-gray-900 relative antialiased min-h-screen flex flex-col">
        <Script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" strategy="beforeInteractive" />
        <Script src="https://unpkg.com/@phosphor-icons/web" strategy="beforeInteractive" />
        <Script id="tailwind-config" strategy="beforeInteractive">
          {`
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'core-purple': '#6225E6',
                    'core-dark': '#0F0F0F',
                  },
                  fontFamily: {
                    sans: ['Inter', 'sans-serif'],
                    raleway: ['Raleway', 'sans-serif'],
                  }
                }
              }
            }
          `}
        </Script>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
