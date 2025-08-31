import { Suspense } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import Analytics from '@/app/analytics';
import CookieConsent from '@/app/components/cookieconsent';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        {children}
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
