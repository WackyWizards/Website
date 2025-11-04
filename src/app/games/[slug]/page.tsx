import { findGameBySlug, getAllGameSlugs, Game } from '@/games';
import { notFound } from 'next/navigation';
import GameClient from '@/app/components/gameclient';

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

  return <GameClient game={game} />;
}
