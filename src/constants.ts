import React from 'react';
import { FaDiscord, FaGithub } from 'react-icons/fa';
import { FaBluesky } from 'react-icons/fa6';

export const GTag = 'G-MH5E7L88G5';

export interface Organization {
  name: string;
  description: string;
  website: string;
  socialLinks: Map<string, SocialLink>;
}

export interface SocialLink {
  key: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
}

export const organization: Organization = {
  name: 'Wacky Wizards',
  description: 'Indie Game Development Organization',
  website: 'https://www.wackywizards.org',
  socialLinks: new Map<string, SocialLink>([
    [
      'discord',
      {
        key: 'discord',
        name: 'Discord',
        icon: FaDiscord,
        url: 'https://discord.gg/kKU6a4AYNk',
      },
    ],
    [
      'bluesky',
      {
        key: 'bluesky',
        name: 'Bluesky',
        icon: FaBluesky,
        url: 'https://bsky.app/profile/wackywizards.org',
      },
    ],
    [
      'github',
      {
        key: 'github',
        name: 'GitHub',
        icon: FaGithub,
        url: 'https://github.com/wackywizards',
      },
    ],
  ]),
};
