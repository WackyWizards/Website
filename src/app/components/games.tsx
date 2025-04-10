"use client";

import { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

function Games() {
    const games = [
        {
            title: "Hangout",
            description: "Play games, build your own room, hang out with your friends!",
            launchUri: "steam://run/590830//-rungame spoonstuff.hangout",
            images: []
        },
        {
            title: "Observation",
            description: "Work for a mysterious company, observe security cameras, report anomalies.\nInspired by I'm on Observation Duty.",
            launchUri: "steam://run/590830//-rungame spoonstuff.observation",
            images: [
                {
                    src: "/observation-1.png",
                    alt: "Observation 1",
                },
                {
                    src: "/observation-2.png",
                    alt: "Observation 2",
                }
            ]
        }
    ];

    const [currentGameIndex, setCurrentGameIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const launchGame = (uri: string) => window.location.href = uri;

    const handleGameChange = (direction: number) => {
        if (isAnimating) return;

        setIsAnimating(true);
        setCurrentGameIndex((prevIndex) => {
            const nextIndex = (prevIndex + direction + games.length) % games.length;
            return nextIndex;
        });
        setTimeout(() => setIsAnimating(false), 300);
    };

    const goToGame = (index: number) => {
        if (isAnimating || index === currentGameIndex) return;
        setIsAnimating(true);
        setCurrentGameIndex(index);
        setTimeout(() => setIsAnimating(false), 300);
    };

    return (
        <section id="games" className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-900">
            <div className="w-full h-full px-4 py-6 pt-20 pb-40">
                <h2 className="text-5xl font-bold text-center text-white">Our Games</h2>
                <p className="text-lg text-center text-gray-400 mt-4">Check out our latest games!</p>
                {/* Game Carousel */}
                <div className="relative w-full h-full overflow-hidden">
                    <div
                        className="flex transition-transform duration-300 ease-in-out h-full"
                        style={{ transform: `translateX(-${currentGameIndex * 100}%)` }}
                    >
                        {games.map((game, index) => (
                            <div key={index} className="w-full flex-shrink-0 py-8 px-4">
                                <div
                                    className="bg-gray-800 p-6 shadow-md h-full flex flex-col relative"
                                    style={{
                                        backgroundImage: game.images.length > 0 ? `url(${game.images[0].src})` : 'none',
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay for readability */}
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-medium mb-4 text-white">{game.title}</h3>
                                        <p className="text-white text-lg flex-grow">{game.description}</p>
                                        <div className="mt-auto">
                                            <button
                                                onClick={() => launchGame(game.launchUri)}
                                                className="mt-4 bg-blue-600 text-white py-3 px-6 rounded-md active:bg-blue-400 hover:bg-blue-500 transition duration-300 font-medium cursor-pointer"
                                            >
                                                Play Game
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="absolute pl-4 left-4 top-1/2 z-10">
                        <button
                            onClick={() => handleGameChange(-1)}
                            className="bg-gray-900 hover:bg-gray-600 p-2 rounded-full text-white cursor-pointer transition duration-300"
                            aria-label="Previous game"
                            disabled={isAnimating}
                        >
                            <FaChevronCircleLeft size={24} />
                        </button>
                    </div>
                    <div className="absolute pr-4 right-4 top-1/2 z-10">
                        <button
                            onClick={() => handleGameChange(1)}
                            className="bg-gray-900 hover:bg-gray-600 p-2 rounded-full text-white cursor-pointer transition duration-300"
                            aria-label="Next game"
                            disabled={isAnimating}
                        >
                            <FaChevronCircleRight size={24} />
                        </button>
                    </div>

                    <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2">
                        {games.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToGame(index)}
                                className={`h-3 w-3 rounded-full ${index === currentGameIndex ? "bg-blue-500" : "bg-gray-500"}`}
                                aria-label={`Go to game ${index + 1}`}
                                disabled={isAnimating}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Games;
