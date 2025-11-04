export type Game = {
  /** Whether this game is hidden from the game list */
  hide?: boolean;
  title: string;
  /** URL-friendly identifier */
  slug: string;
  description: string;
  overview: string;
  /** Steam launch URI */
  launchUri: string;
  /** External link (e.g., sbox.game) */
  link?: string;
  images: GameImage[];
  videos?: GameVideo[];
  sections?: GameSection[];
  metadata: GameMetadata;
};

export type GameImage = {
  src: string;
  alt: string;
};

export type GameVideo = {
  src: string;
};

export type GameSection = {
  featureTitle: string;
  featureDescription: string;
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
    overview: `
Step into the shoes of a lone security operator working for a secretive organization. 
Your job is simple: monitor a network of cameras, track unusual activities, and report any anomalies you see. 
However, the more you observe, the more you realize that not everything is as it seems. 
With each shift, the environment becomes increasingly unpredictable, challenging your perception, memory, and decision-making. 
Every flicker of a monitor could hide a critical clue—or a threat. 
Observation is not just a test of vigilance but also a journey into the unknown, where curiosity can either save you or lead to disaster.
    `,
    launchUri: 'steam://run/590830//-rungame spoonstuff.observation',
    link: 'https://sbox.game/spoonstuff/observation',
    images: [
      { src: '/games/observation/observation-1.png', alt: 'Observation Game Screenshot 1' },
      { src: '/games/observation/observation-2.jpg', alt: 'Observation Game Screenshot 2' },
    ],
    videos: [
      { src: 'https://www.youtube.com/embed/Thk5dnNKP-E?si=edtJC1H5oPvJdwAF' },
      { src: 'https://www.youtube.com/embed/V3oU_zBL-3g?si=s1VLh7lI8BxTQOLt' },
    ],
    metadata: {
      title: 'Observation',
      description: 'Work for a mysterious company, observe security cameras, report anomalies.',
      ogImage: '/games/observation/observation-1.png',
      keywords: ['observation', 'horror', 'sbox', 'anomalies'],
    },
    sections: [
      {
        featureTitle: 'Stay Vigilant. Every Glitch Is a Clue.',
        featureDescription:
          'In Observation, every flicker on a monitor could mean the difference between success and chaos. Report anomalies, stay alert, and uncover what your employer isn’t telling you.',
      },
      {
        featureTitle: 'Anomalies Evolve Over Time',
        featureDescription:
          'Each playthrough becomes more unpredictable. New anomalies, altered camera feeds, and shifting environments keep you on edge.',
      },
    ],
  },
  {
    title: 'Untitled Card Game',
    slug: 'untitledcardgame',
    description:
      'Go on an epic quest, fight all sorts of enemies, buy upgrades from the store and clear levels.',
    overview: `
Embark on a thrilling journey where strategy, skill, and creativity determine your success. 
In this card-based adventure, you will collect hundreds of unique cards, each with powerful abilities and synergies. 
Build the ultimate deck to face increasingly challenging enemies and overcome intricate level designs. 
Every decision counts—from the cards you choose to play to the timing of your abilities—making each encounter a test of strategy and adaptability. 
Adventure through richly themed environments, battle epic bosses, and uncover the secrets hidden within every deck you craft. 
The path to victory is as rewarding as it is challenging.
    `,
    launchUri: 'steam://run/590830//-rungame spoonstuff.card_game',
    link: 'https://sbox.game/spoonstuff/card_game',
    images: [
      { src: '/games/untitledcardgame/untitledcardgame1.jpg', alt: 'Card Game Screenshot 1' },
      { src: '/games/untitledcardgame/untitledcardgame2.jpg', alt: 'Card Game Screenshot 2' },
    ],
    metadata: {
      title: 'Untitled Card Game',
      description: 'Go on an epic quest, fight enemies, buy upgrades, and build your perfect deck.',
      ogImage: '/games/untitledcardgame/untitledcardgame1.jpg',
      keywords: ['cards', 'strategy', 'sbox', 'deckbuilding'],
    },
    sections: [
      {
        featureTitle: 'Build. Battle. Conquer.',
        featureDescription:
          'Strategize your every move. Collect powerful cards, combine abilities, and take down enemies as you climb through each level of adventure.',
      },
      {
        featureTitle: 'Deck Customization at Its Finest',
        featureDescription:
          'Create your ultimate deck by choosing from hundreds of cards. Adapt your strategy for every encounter and unlock powerful synergies to outsmart your opponents.',
      },
      {
        featureTitle: 'Epic Boss Battles',
        featureDescription:
          'Face off against challenging bosses that test your planning, resource management, and card combinations. Victory requires skill, strategy, and the perfect deck.',
      },
      {
        featureTitle: 'Adventure Mode',
        featureDescription:
          'Explore different levels and themed environments, each filled with enemies, rewards, and surprises. Progress through a thrilling journey full of twists and strategic challenges.',
      },
    ],
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
