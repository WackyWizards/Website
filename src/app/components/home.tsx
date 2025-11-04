'use client';

import { useEffect, useState } from 'react';
import Games from '@/app/components/old_games';
import Team from '@/app/components/team';
import { organization } from '@/constants';

type BackgroundType = { type: 'image' | 'video'; src: string };
const adjectives: string[] = [
  'Innovative',
  'Creative',
  'Visionary',
  'Inspiring',
  'Awesome',
  'Ambitious',
  'Wacky',
];

export default function Home() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [currentAdjective, setCurrentAdjective] = useState(adjectives[0]);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const backgrounds: BackgroundType[] = [
    { type: 'image', src: '/games/untitledcardgame/untitledcardgame1.jpg' },
    { type: 'image', src: '/games/observation/observation-1.png' },
    { type: 'image', src: '/games/untitledcardgame/untitledcardgame2.jpg' },
    { type: 'image', src: '/games/observation/observation-2.jpg' },
  ];

  // Background rotation timer (every 10 seconds)
  useEffect(() => {
    const bgTimer = setInterval(() => {
      setBackgroundIndex((prev) => (prev + 1) % backgrounds.length);
    }, 10000);

    return () => {
      clearInterval(bgTimer);
    };
  }, [backgrounds.length]);

  // Typewriter effect
  useEffect(() => {
    let typeTimer: NodeJS.Timeout;
    let eraseTimer: NodeJS.Timeout;
    let nextWordTimer: NodeJS.Timeout;

    const typeText = (text: string) => {
      let i = 0;
      setDisplayedText('');
      setIsTyping(true);

      const type = () => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1));
          i++;
          typeTimer = setTimeout(type, 100);
        } else {
          setIsTyping(false);
          // Wait 3 seconds before starting to erase
          eraseTimer = setTimeout(() => eraseText(text), 8000);
        }
      };
      type();
    };

    const eraseText = (text: string) => {
      let i = text.length;
      setIsTyping(true);

      const erase = () => {
        if (i > 0) {
          setDisplayedText(text.slice(0, i - 1));
          i--;
          typeTimer = setTimeout(erase, 50);
        } else {
          setIsTyping(false);
          // Wait 500ms before next word
          nextWordTimer = setTimeout(() => {
            const nextIndex = (adjectives.indexOf(currentAdjective) + 1) % adjectives.length;
            setCurrentAdjective(adjectives[nextIndex]);
          }, 500);
        }
      };
      erase();
    };

    typeText(currentAdjective);

    return () => {
      clearTimeout(typeTimer);
      clearTimeout(eraseTimer);
      clearTimeout(nextWordTimer);
    };
  }, [currentAdjective]);

  // Cursor blink effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // in case we load mid-scroll because users can't behave

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-full min-h-screen overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-[-2]">
        {backgrounds.map((bg, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              idx === backgroundIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {bg.type === 'image' ? (
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
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center px-4 py-8 sm:px-8 sm:py-20"
        >
          <main className="flex flex-col gap-6 items-center text-center max-w-4xl w-full">
            <div className="flex gap-2 items-center flex-col">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase text-white">
                {organization.name}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300">
                Making{' '}
                <span className="inline-block">
                  {displayedText}
                  <span
                    className={`${
                      showCursor || isTyping ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-100`}
                  >
                    |
                  </span>
                </span>{' '}
                Video Games
              </p>
              <div className="flex gap-4 items-center justify-center">
                {organization.socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center transform hover:scale-105 transition-transform duration-200"
                  >
                    <link.icon className="w-9 h-9" />
                  </a>
                ))}
              </div>
            </div>
          </main>

          {/* Scroll indicator */}
          <div
            className={`absolute bottom-24 left-1/2 -translate-x-1/2 text-5xl text-white
    hidden sm:block
    ${isAtTop ? 'opacity-100 animate-bounce' : 'opacity-0 pointer-events-none'}
    transition-opacity duration-400`}
          >
            ▼
          </div>
        </section>

        <Games />
        <Team />
      </div>
    </div>
  );
}
