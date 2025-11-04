export type Game = {
  /** Whether this game is hidden from the game list */
  hide?: boolean;
  title: string;
  /** URL-friendly identifier */
  slug: string;
  description: string;
  /** Steam launch URI */
  launchUri: string;
  /** External link (e.g., sbox.game) */
  link?: string;
  images: GameImage[];
  videos?: GameVideo[];
  metadata: GameMetadata;
};

export type GameImage = {
  src: string;
  alt: string;
};

export type GameVideo = {
  src: string;
  alt: string;
};

export type GameMetadata = {
  /** SEO title */
  title: string;
  /** SEO description */
  description: string;
  /** Open Graph image URL */
  ogImage?: string;
  /** SEO keywords */
  keywords?: string[];
};

export const games: Game[] = [
  {
    title: 'Observation',
    slug: 'observation',
    description:
      "Work for a mysterious company, observe security cameras, report anomalies.\nInspired by I'm on Observation Duty.",
    launchUri: 'steam://run/590830//-rungame spoonstuff.observation',
    link: 'https://sbox.game/spoonstuff/observation',
    images: [
      {
        src: '/games/observation/observation-1.png',
        alt: 'Observation Game Screenshot 1',
      },
      {
        src: '/games/observation/observation-2.jpg',
        alt: 'Observation Game Screenshot 2',
      },
      {
        src: '/games/observation/observation-3.jpg',
        alt: 'Observation Game Screenshot 3',
      },
      {
        src: '/games/observation/observation-4.jpg',
        alt: 'Observation Game Screenshot 4',
      },
      {
        src: '/games/observation/observation-5.jpg',
        alt: 'Observation Game Screenshot 5',
      },
    ],
    videos: [{
      src: '/games/observation/observation-gameplay.mp4',
      alt: 'Observation Game Video'
    }],
    metadata: {
      title: 'Observation',
      description: 'Work for a mysterious company, observe security cameras, report anomalies.',
      ogImage: '/games/observation/observation-1.png',
      keywords: [
        'observation',
        'sbox',
        's&box',
        'game',
        'horror',
        'horror game',
        'security cameras',
        'anomalies',
      ],
    },
  },
  {
    title: 'Untitled Card Game',
    slug: 'untitledcardgame',
    description:
      'Go on an epic quest, fight all sorts of enemies, buy upgrades from the store and clear levels.',
    launchUri: 'steam://run/590830//-rungame spoonstuff.card_game',
    link: 'https://sbox.game/spoonstuff/card_game',
    images: [
      {
        src: '/games/untitledcardgame/untitledcardgame1.jpg',
        alt: 'Untitled Card Game Screenshot 1',
      },
      {
        src: '/games/untitledcardgame/untitledcardgame2.jpg',
        alt: 'Untitled Card Game Screenshot 2',
      },
    ],
    metadata: {
      title: 'Untitled Card Game',
      description:
        'Go on an epic quest, fight all sorts of enemies, buy upgrades from the store and clear levels.',
      ogImage: '/games/untitledcardgame/untitledcardgame1.jpg',
      keywords: [
        'cards',
        'sbox',
        's&box',
        'game',
        'card battler',
        'adventure',
        'card game',
        'zombies',
        'enemies',
        'store',
        'upgrade',
      ],
    },
  },
];

/** Find a game by its slug */
export function findGameBySlug(slug: string): Game | undefined {
  return games.find((g) => g.slug.toLowerCase() === slug.toLowerCase());
}

/** Get all game slugs */
export function getAllGameSlugs(): string[] {
  return games.map((g) => g.slug);
}
