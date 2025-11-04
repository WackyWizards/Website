import { findGameBySlug, getAllGameSlugs, Game } from '@/games';
import { notFound } from 'next/navigation';
import HeroParallax from '@/app/components/heroparallax';

// Pre-generate static params
export async function generateStaticParams() {
  return getAllGameSlugs().map((slug) => ({ slug }));
}

interface PageProps {
  params: { slug: string };
}

export default async function GamePage({ params }: PageProps) {
  const { slug } = await params;
  const game: Game | undefined = findGameBySlug(slug);

  if (!game) notFound();

  return (
    <main className="w-full min-h-screen bg-gray-900 text-white flex flex-col">
      <HeroParallax game={game} />

      {/* Media Gallery */}
      {(game.images.length > 1 || (game.videos && game.videos.length > 0)) && (
        <section className="w-full flex flex-wrap justify-center gap-6 p-6 bg-gray-800">
          {game.images.slice(1).map((img, i) => (
            <div
              key={`img-${i}`}
              className="w-full sm:w-1/2 lg:w-1/3 max-w-[400px] h-auto rounded-lg overflow-hidden shadow-lg flex justify-center items-center"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="object-contain w-full h-full"
              />
            </div>
          ))}

          {game.videos &&
            game.videos.map((vid, i) => (
              <div
                key={`vid-${i}`}
                className="w-full sm:w-1/2 lg:w-1/3 max-w-[400px] h-auto rounded-lg overflow-hidden shadow-lg flex justify-center items-center"
              >
                <video
                  src={vid.src}
                  controls
                  className="w-full h-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
        </section>
      )}
    </main>
  );
}
