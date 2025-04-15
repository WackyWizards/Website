"use client";

import { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Games from "@/app/components/games";

import { FaDiscord } from "react-icons/fa";

export default function Home() {
  const [overlayVisible, setOverlayVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOverlayVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="grid grid-rows-[auto_auto_auto_auto] font-[family-name:var(--font-geist-sans)]">
        <div
          className={`fixed inset-0 bg-black flex items-center justify-center transition-opacity duration-1000 ${overlayVisible ? 'opacity-100 z-50' : 'opacity-0 z-0 pointer-events-none'}`}
        >
          <div className="text-white text-center">
            <h1 className="text-3xl font-bold w-300">Unnamed Organization</h1>
          </div>
        </div>

        {/* The rest of the page content */}
        <section id="home" className="h-screen flex items-center justify-center p-8 sm:p-20">
          <main className="flex flex-col gap-8 items-center sm:items-start">
            <div className="flex gap-4 items-center flex-col">
              <h1 className="text-5xl font-bold text-white">Unnamed Org</h1>
              <p className="text-lg text-gray-400">Making Video Games</p>
              <FaDiscord
                className="w-12 h-12 cursor-pointer hover:text-gray-500 transition duration-200"
                onClick={() => {
                  location.href = "https://discord.gg/kKU6a4AYNk";
                }}
              />
            </div>
          </main>
        </section>

        <Games />
      </div>
      <Footer />
    </div>
  );
}
