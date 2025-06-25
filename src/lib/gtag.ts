import { GTag } from "@/constants";

export const pageview = (url: string) => {
	window.gtag('config', GTag, {
		page_path: url,
	});
};

type GTagEvent = {
	action: string;
	category: string;
	label: string;
	value?: number;
};

export const event = ({ action, category, label, value }: GTagEvent) => {
	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value,
	});
};
