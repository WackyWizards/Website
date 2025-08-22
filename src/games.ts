export type Game = {
  title: string;
  description: string;
  launcherUri?: string;
  launchUri?: string;
  link?: string;
  images: GameImage[];
};

export type GameImage = {
  src: string;
  alt: string;
};

export const games: Game[] = [
  {
    title: 'Observation',
    description:
      "Work for a mysterious company, observe security cameras, report anomalies.\nInspired by I'm on Observation Duty.",
    launcherUri: '/play/observation',
    launchUri: 'steam://run/590830//-rungame spoonstuff.observation',
    link: 'https://sbox.game/spoonstuff/observation',
    images: [
      {
        src: '/observation-1.png',
        alt: 'Observation 1',
      },
      {
        src: '/observation-2.png',
        alt: 'Observation 2',
      },
    ],
  },
];
