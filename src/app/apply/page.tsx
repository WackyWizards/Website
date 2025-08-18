import React from 'react';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apply',
  description: 'Join our team!',
};

export default function Apply() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
        <div className="relative mx-auto max-w-7xl px-6 md:px-10 pt-6 md:pt-10">
          <header className="mb-12 text-center border-b border-white/10 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              Join Our Team
            </h1>
            <p className="text-gray-400">
              We&apos;re always looking for passionate, creative and dedicated individuals to join
              our team.
            </p>
            <p className="text-gray-400">
              If you&apos;re interested in working with us, please fill out the application form
              below.
            </p>
          </header>

          {/* Form container with glassmorphism effect */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-1 shadow-2xl">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-inner">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfS6OQmxgr2B4MoOcjWf-zCnYiIYUdk-DU0cOq72Fz7lgZ6Xw/viewform?embedded=true"
                  className="w-full h-[800px] border-0 rounded-xl"
                  title="Application Form"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
