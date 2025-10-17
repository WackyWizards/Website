'use client';

import { useState } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { games } from '@/games';

export default function Games() {
  const [currentGameIndex, setCurrentGameIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const launchGame = (uri: string) => (window.location.href = uri);

  const handleGameChange = (direction: number) => {
    if (isAnimating) {
      return;
    }

    setIsAnimating(true);
    setCurrentGameIndex((prevIndex) => {
      const nextIndex = (prevIndex + direction + games.length) % games.length;
      return nextIndex;
    });
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToGame = (index: number) => {
    if (isAnimating || index === currentGameIndex) {
      return;
    }

    setIsAnimating(true);
    setCurrentGameIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <section id="games" className="w-full flex flex-col items-center justify-center bg-gray-900">
      <div className="w-full h-full px-8 sm:px-6 lg:px-8 py-6 pt-8 sm:pt-26 pb-8 sm:pb-26">
        {/* Header */}
        <header className="mb-12 text-center pb-8">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Our Games
          </h2>
          <p className="text-base sm:text-lg text-gray-400">Check out our latest games!</p>
        </header>

        {/* Games Carousel */}
        <div className="relative w-full flex-1 flex flex-col items-center justify-center overflow-hidden max-w-5xl mx-auto">
          <div
            className="flex w-full transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentGameIndex * 100}%)` }}
          >
            {games.map((game, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-1 sm:px-2 flex items-center justify-center"
              >
                <div
                  className="relative p-4 sm:p-6 shadow-lg w-full min-h-[450px] sm:min-h-[500px] rounded-lg overflow-hidden"
                  style={{
                    backgroundImage:
                      game.images.length > 0 ? `url(${game.images[0].src})` : undefined,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundColor: game.images.length === 0 ? '#2d2d2d' : '#1f2937',
                  }}
                >
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/50 sm:bg-black/40"></div>

                  <div className="relative z-10 flex flex-col justify-between w-full h-full">
                    <div className="flex flex-col w-full flex-1">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-3 sm:mb-4 text-white drop-shadow-lg uppercase">
                        {game.title}
                      </h3>
                      <p className="text-white text-sm sm:text-base lg:text-lg whitespace-pre-line leading-relaxed drop-shadow-md">
                        {game.description}
                      </p>
                    </div>
                    <div className="mt-4">
                      {game.launcherUri && (
                        <button
                          onClick={() => launchGame(game.launcherUri!)}
                          className="w-full sm:w-auto bg-blue-600 text-white py-3 px-6 sm:px-8 rounded-md active:bg-blue-400 hover:bg-blue-500 transition duration-300 font-medium cursor-pointer text-base sm:text-lg"
                        >
                          Play Game
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Only show if more than one game */}
          {games.length > 1 && (
            <>
              <div className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10">
                <button
                  onClick={() => handleGameChange(-1)}
                  className="bg-gray-900/80 hover:bg-gray-600/80 p-2 sm:p-3 rounded-full text-white cursor-pointer transition duration-300 backdrop-blur-sm"
                  aria-label="Previous game"
                  disabled={isAnimating}
                >
                  <FaChevronCircleLeft size={window.innerWidth < 640 ? 28 : 35} />
                </button>
              </div>
              <div className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10">
                <button
                  onClick={() => handleGameChange(1)}
                  className="bg-gray-900/80 hover:bg-gray-600/80 p-2 sm:p-3 rounded-full text-white cursor-pointer transition duration-300 backdrop-blur-sm"
                >
                  <FaChevronCircleRight size={window.innerWidth < 640 ? 28 : 35} />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center gap-2">
                {games.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToGame(index)}
                    className={`h-3 w-3 sm:h-4 sm:w-4 rounded-full cursor-pointer transition-colors duration-200 ${
                      index === currentGameIndex ? 'bg-blue-500' : 'bg-gray-500/70'
                    }`}
                    aria-label={`Go to game ${index + 1}`}
                    disabled={isAnimating}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
