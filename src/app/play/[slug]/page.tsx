import { Metadata } from 'next';
import { findGameBySlug, getAllGameSlugs } from '@/games';
import GameLauncher from '@/app/components/gamelauncher';

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = findGameBySlug(slug);

  if (!game) {
    return {
      title: 'Game Not Found',
      description: 'The requested game could not be found.',
    };
  }

  return {
    title: game.metadata.title,
    description: game.metadata.description,
    keywords: game.metadata.keywords,
    openGraph: {
      title: game.metadata.title,
      description: game.metadata.description,
      images: game.metadata.ogImage ? [game.metadata.ogImage] : undefined,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: game.metadata.title,
      description: game.metadata.description,
      images: game.metadata.ogImage ? [game.metadata.ogImage] : undefined,
    },
  };
}

// Generate static params for all games
export async function generateStaticParams() {
  return getAllGameSlugs().map((slug) => ({
    slug,
  }));
}

export default async function GameLauncherPage({ params }: Props) {
  const { slug } = await params;
  const game = findGameBySlug(slug);

  return <GameLauncher game={game} />;
}
