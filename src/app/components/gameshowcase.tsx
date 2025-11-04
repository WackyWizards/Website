import { useState, useEffect } from 'react';
import { games } from '@/games';

export default function GameShowcase() {
  const [currentIndexes, setCurrentIndexes] = useState(Array(games.length).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexes((prev) =>
        prev.map((index, i) => (index + 1) % games[i].images.length)
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-8">
      {games.map((game, i) => (
        <a
          key={i}
          href={`/games/${game.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative h-[45rem] overflow-hidden rounded-2xl shadow-2xl hover:shadow-[0_0_30px_rgba(0,0,0,0.7)] transition-shadow duration-300"
        >
          {game.images.map((img, j) => (
            <img
              key={j}
              src={img.src}
              alt={img.alt}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                j === currentIndexes[i] ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <p className="absolute bottom-2 left-0 w-full text-center text-white font-semibold bg-black/40 py-1 rounded-b-xl">
            {game.title}
          </p>
        </a>
      ))}
    </div>
  );
}
