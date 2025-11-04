'use client';

import GameShowcase from '../components/gameshowcase';

export default function GamesPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-gray-900 text-white pt-16">
      <GameShowcase />
    </main>
  );
}
