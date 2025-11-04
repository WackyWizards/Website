'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Game } from '@/games';

export default function HeroParallax({ game }: { game: Game }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const maxOffset = 50; // bigger parallax effect

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    let mouseX = 0;
    let mouseY = 0;
    let offsetX = 0;
    let offsetY = 0;
    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      const { width, height, left, top } = container.getBoundingClientRect();
      mouseX = ((e.clientX - left) / width - 0.5) * maxOffset * 2;
      mouseY = ((e.clientY - top) / height - 0.5) * maxOffset * 2;
    };

    const animate = () => {
      // Smoothly interpolate current offset
      offsetX += (mouseX - offsetX) * 0.1;
      offsetY += (mouseY - offsetY) * 0.1;

      image.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0) scale(1.1)`;
      animationFrame = requestAnimationFrame(animate);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', () => {
      mouseX = 0;
      mouseY = 0;
    });

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {game.images[0] && (
        <div ref={imageRef} className="absolute inset-0">
          <Image
            src={game.images[0].src}
            alt={game.images[0].alt}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center px-4 sm:px-8">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          {game.title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-6 drop-shadow-md whitespace-pre-line">
          {game.description}
        </p>
        {game.launchUri && (
          <a
            href={game.launchUri}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition"
          >
            Play on s&box
          </a>
        )}
      </div>
    </section>
  );
}
