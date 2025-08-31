import React from "react";
import { FaDiscord } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

export const GTag = 'G-MH5E7L88G5';

export interface Organization {
    name: string;
    description: string;
    website: string;
    socialLinks: SocialLink[];
}

export interface SocialLink {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
}

export const organization: Organization = {
    name: 'Wacky Wizards',
    description: 'An indie game development studio making fun and engaging games!',
    website: 'https://www.wackywizards.org',
    socialLinks: [
        {
            name: 'Discord',
            icon: FaDiscord,
            url: 'https://discord.gg/kKU6a4AYNk',
        },
        {
            name: 'Bluesky',
            icon: FaBluesky,
            url: 'https://bsky.app/profile/wackywizards.org',
        },
    ],
};
