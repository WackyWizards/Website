'use client';

import { useEffect } from 'react';

/**
 * Client component that handles click interactions for spoiler tags.
 * Add this component to any page that renders markdown with spoilers.
 */
export function SpoilerScript() {
  useEffect(() => {
    const handleSpoilerClick = (mouseEvent: MouseEvent) => {
      const target = mouseEvent.target as HTMLElement;
      if (target.classList.contains('spoiler')) {
        target.classList.toggle('revealed');
      }
    };

    document.addEventListener('click', handleSpoilerClick);

    return () => {
      document.removeEventListener('click', handleSpoilerClick);
    };
  }, []);

  return null;
}
