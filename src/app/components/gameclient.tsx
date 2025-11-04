'use client';

import { Game } from '@/games';
import { easeOut, motion } from 'framer-motion';

interface Props {
  game: Game;
}

export default function GameClient({ game }: Props) {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={game.images[0].src}
            alt={game.images[0].alt}
            className="object-cover w-full h-full opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-3xl px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">{game.title}</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">{game.description}</p>

          <div className="flex gap-4 justify-center">
            <a
              href={game.launchUri}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 text-lg rounded-xl font-semibold transition-colors"
            >
              Play Now
            </a>
            {game.link && (
              <a
                href={game.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-400 text-gray-200 hover:bg-gray-800 px-6 py-3 text-lg rounded-xl font-semibold transition-colors"
              >
                Learn More
              </a>
            )}
          </div>
        </motion.div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Overview
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg leading-relaxed max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {game.overview}
        </motion.p>
      </section>

      {/* Feature Sections */}
      {game.sections && game.sections.length > 0 && (
        <section className="bg-gray-800 py-16">
          <div className="max-w-6xl mx-auto flex flex-col gap-20 px-6">
            {game.sections.map((section, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: easeOut }}
                  viewport={{ once: true }}
                >
                  <img
                    src={game.images[i + 1]?.src || game.images[0].src}
                    alt={section.featureTitle}
                    className="rounded-xl shadow-lg object-cover w-full"
                  />
                </motion.div>

                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: easeOut }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl font-semibold mb-4">{section.featureTitle}</h3>
                  <p className="text-gray-300 leading-relaxed">{section.featureDescription}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Media Gallery */}
      {(game.images.length > 1 || (game.videos && game.videos.length > 0)) && (
        <section className="max-w-7xl mx-auto py-20 px-6">
          <h2 className="text-4xl font-bold mb-10 text-center">Media Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {game.images.slice(1).map((img, i) => (
              <motion.div
                key={`img-${i}`}
                className="rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <img src={img.src} alt={img.alt} className="object-cover w-full h-full" />
              </motion.div>
            ))}

            {game.videos?.map((vid, i) => (
              <motion.div
                key={`vid-${i}`}
                className="rounded-xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.03 }}
              >
                <iframe
                  src={vid.src}
                  title={`video-${i}`}
                  className="w-full aspect-video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-700 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to experience {game.title}?</h2>
        <a
          href={game.launchUri}
          className="inline-block mt-4 bg-white text-indigo-700 text-lg font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
        >
          Launch Now
        </a>
      </section>
    </main>
  );
}
