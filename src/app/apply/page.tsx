import React from 'react';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

export const metadata = {
    title: 'Apply',
    description: 'Join our team!'
};

export default function Apply() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white py-16">
                <div className="mx-auto px-6 md:px-10 pt-6 md:pt-10 text-black">
                    <header className="mb-8 border-b border-gray-200 pb-6">
                        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
                            Join Our Team
                        </h1>
                        <p className="mt-4 text-base md:text-lg text-gray-600">
                            We’re always looking for passionate, creative and dedicated individuals to join our team.
                        </p>
                        <p className="mt-4 text-base md:text-lg text-gray-600">
                            If you’re interested in working with us, please fill out the application form below.
                        </p>
                    </header>
                    <div>
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSfS6OQmxgr2B4MoOcjWf-zCnYiIYUdk-DU0cOq72Fz7lgZ6Xw/viewform?embedded=true"
                            className="w-full h-[800px] border-0"
                            title="Application Form"
                        >
                            Loading…
                        </iframe>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
