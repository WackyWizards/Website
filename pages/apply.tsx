"use client";

import React from "react";
import "../src/app/globals.css";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function Apply() {
    return (
        <main className="min-h-screen bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="overflow-hidden">
                    <header className="p-8 border-b border-gray-200">
                        <h1 className="text-3xl border-b-3 md:text-4xl font-semibold text-gray-800">
                            Join Our Team
                        </h1>
                        <p className="mt-4 text-base md:text-lg text-gray-600">
                            We’re always looking for passionate, creative and dedicated individuals to join our team.
                        </p>
                        <p className="mt-4 text-base md:text-lg text-gray-600">
                            If you’re interested in working with us, please fill out the application form below.
                        </p>
                    </header>
                    <div className="p-8">
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSfS6OQmxgr2B4MoOcjWf-zCnYiIYUdk-DU0cOq72Fz7lgZ6Xw/viewform?embedded=true"
                            className="w-full h-[800px] border-0"
                            title="Application Form"
                        >
                            Loading…
                        </iframe>
                    </div>
                </div>
            </div>
            <Navbar />
            <Footer />
        </main>
    );
}
