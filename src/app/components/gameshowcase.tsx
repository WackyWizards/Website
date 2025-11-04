'use client';

import { useState, useEffect } from 'react';
import { easeOut, motion } from 'framer-motion';
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-8 py-16">
      {games.map((game, i) => (
        <motion.a
          key={game.slug}
          href={`/games/${game.slug}`}
          whileHover={{ scale: 1.03 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="relative h-[45rem] rounded-2xl shadow-2xl overflow-hidden cursor-pointer group"
        >
          {game.images.map((img, j) => (
            <motion.img
              key={j}
              src={img.src}
              alt={img.alt}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                j === currentIndexes[i] ? 'opacity-100' : 'opacity-0'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: j === currentIndexes[i] ? 1 : 0 }}
            />
          ))}

          {/* Game title */}
          <motion.p
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white font-bold text-xl bg-black/50 px-4 py-2 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {game.title}
          </motion.p>
        </motion.a>
      ))}
    </div>
  );
}
