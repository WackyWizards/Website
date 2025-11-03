import { useState, useEffect } from 'react';

export default function GameShowcase() {
  const games = [
    {
      name: 'Observation',
      images: ['/observation-1.png', '/observation-2.jpg'],
      link: 'https://example.com/game1',
    },
    {
      name: 'Untitled Card Game',
      images: ['/images/game2a.jpg', '/images/game2b.jpg'],
      link: 'https://example.com/game2',
    },
    {
      name: 'Game Three',
      images: ['/images/game3a.jpg', '/images/game3b.jpg'],
      link: 'https://example.com/game3',
    },
    {
      name: 'Game Four',
      images: ['/images/game4a.jpg', '/images/game4b.jpg'],
      link: 'https://example.com/game4',
    },
    {
      name: 'Game Five',
      images: ['/images/game5a.jpg', '/images/game5b.jpg'],
      link: 'https://example.com/game5',
    },
    {
      name: 'Game Six',
      images: ['/images/game6a.jpg', '/images/game6b.jpg'],
      link: 'https://example.com/game6',
    },
  ];

  const [currentIndexes, setCurrentIndexes] = useState(Array(games.length).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexes((prev) => prev.map((index, i) => (index + 1) % games[i].images.length));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-8">
      {games.map((game, i) => (
        <a
          key={i}
          href={game.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative h-[45rem] overflow-hidden rounded-2xl shadow-lg"
        >
          {game.images.map((img, j) => (
            <img
              key={j}
              src={img}
              alt={game.name}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                j === currentIndexes[i] ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <p className="absolute bottom-2 left-0 w-full text-center text-white font-semibold bg-black/40 py-1 rounded-b-xl">
            {game.name}
          </p>
        </a>
      ))}
    </div>
  );
}
