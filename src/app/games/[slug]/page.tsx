import { findGameBySlug, getAllGameSlugs } from '@/games';
import { notFound } from 'next/navigation';

// ✅ Prebuild static paths for all games
export async function generateStaticParams() {
  return getAllGameSlugs().map((slug) => ({ slug }));
}

// ✅ Default export — must be a React component
export default function GamePage({ params }: { params: { slug: string } }) {
  const game = findGameBySlug(params.slug);
  if (!game) notFound();

  return (
    <div className="pt-20 p-8 max-w-4xl mx-auto">
      {/* ↑ add pt-20 (or adjust to your navbar height) */}
      <h1 className="text-4xl font-bold mb-4">{game.title}</h1>
      <p className="text-lg text-gray-300 whitespace-pre-line mb-8">{game.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {game.images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        ))}
      </div>

      {game.link && (
        <a
          href={game.launchUri}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
        >
          Play
        </a>
      )}
    </div>
  );
}
