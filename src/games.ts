type Game = {
	title: string;
	description: string;
	launchUri?: string;
	images: Image[];
};

type Image = {
	src: string;
	alt: string;
};

export const games: Game[] = [
	{
		title: "Observation",
    	description: "Work for a mysterious company, observe security cameras, report anomalies.\nInspired by I'm on Observation Duty.",
    	launchUri: "/play/observation",
    	images: [
    		{
        		src: "/observation-1.png",
        		alt: "Observation 1",
      		},
      		{
        		src: "/observation-2.png",
        		alt: "Observation 2",
      		},
    	],
  	},
];
