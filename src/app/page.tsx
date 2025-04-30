"use client";

import { useEffect, useState } from "react";

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Games from "@/app/components/games";
import Team from "@/app/components/team";

import { FaDiscord } from "react-icons/fa";
import { OrgName } from "@/constants";

type BackgroundType = { type: "image" | "video"; src: string };

export default function Home() {
    const [backgroundIndex, setBackgroundIndex] = useState(0);

    const backgrounds: BackgroundType[] = [
        { type: "image", src: "/observation-1.png" },
        { type: "image", src: "/observation-2.jpg" }
    ];

    useEffect(() => {
        const bgTimer = setInterval(() => {
            setBackgroundIndex((prev) => (prev + 1) % backgrounds.length);
        }, 10000); // background changes every 10s

        return () => {
            clearInterval(bgTimer);
        };
    }, [backgrounds.length]);

    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY === 0);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // in case we load mid-scroll because users can't behave

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className="relative h-full min-h-screen overflow-hidden">
            <Navbar />

            {/* Background */}
            <div className="fixed inset-0 z-[-2]">
                {backgrounds.map((bg, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${idx === backgroundIndex ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        {bg.type === "image" ? (
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${bg.src})` }}
                            />
                        ) : (
                            <video
                                className="w-full h-full object-cover"
                                src={bg.src}
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        )}
                    </div>
                ))}

                {/* Background tint */}
                <div className="absolute inset-0 bg-black/40 z-10" />
            </div>

            <div className="relative z-10 grid grid-rows-[auto_auto_auto_auto] font-[family-name:var(--font-geist-sans)]">
                <section id="home" className="h-screen flex items-center justify-center p-8 sm:p-20">
                    <main className="flex flex-col gap-8 items-center sm:items-start">
                        <div className="flex gap-4 items-center flex-col">
                            <h1 className="text-5xl font-bold uppercase text-white" style={{ textShadow: '0 0 4px black' }}>{OrgName}</h1>
                            <p className="text-lg text-gray-300">Making Video Games For S&Box</p>
                            <FaDiscord
                                className="w-12 h-12 cursor-pointer hover:text-gray-400 transition duration-200"
                                onClick={() => {
                                    location.href = "https://discord.gg/kKU6a4AYNk";
                                }}
                            />
                        </div>
                    </main>
                    <div className={`absolute bottom-520 text-5xl text-white ${isAtTop ? "opacity-100 animate-bounce" : "opacity-0 pointer-events-none"} transition-opacity duration-700 `}>▼</div>
                </section>

                <Games />
                <Team />
            </div>

            <Footer />
        </div>
    );
}
