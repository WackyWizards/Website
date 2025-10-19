export type Game = {
  title: string;
  /** Whether this game is hidden from the game list */
  hide: boolean;
  /** URL-friendly identifier */
  slug: string;
  description: string;
  /** Steam launch URI */
  launchUri: string;
  /** External link (e.g., sbox.game) */
  link?: string;
  images: GameImage[];
  metadata: GameMetadata;
};

export type GameImage = {
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
    hide: false,
    slug: 'observation',
    description:
      "Work for a mysterious company, observe security cameras, report anomalies.\nInspired by I'm on Observation Duty.",
    launchUri: 'steam://run/590830//-rungame spoonstuff.observation',
    link: 'https://sbox.game/spoonstuff/observation',
    images: [
      {
        src: '/observation-1.png',
        alt: 'Observation Game Screenshot 1',
      },
      {
        src: '/observation-2.png',
        alt: 'Observation Game Screenshot 2',
      },
    ],
    metadata: {
      title: 'Launch Observation | Game Launcher',
      description: 'Work for a mysterious company, observe security cameras, report anomalies.',
      ogImage: '/observation-1.png',
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
];

/** Find a game by its slug */
export function findGameBySlug(slug: string): Game | undefined {
  return games.find((g) => g.slug.toLowerCase() === slug.toLowerCase());
}

/** Get all game slugs */
export function getAllGameSlugs(): string[] {
  return games.map((g) => g.slug);
}
