'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function ArticleFooter({ title }: { title: string }) {
  const pathname = usePathname();
  const url = typeof window !== 'undefined' ? window.location.origin + pathname : '';

  async function handleShare() {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  }

  return (
    <footer className="mt-12 pt-8 border-t border-gray-200 flex gap-4">
      <Link
        href="/news"
        className="inline-flex items-center font-semibold px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        ← Back to all news
      </Link>

      <button
        onClick={handleShare}
        className="inline-flex items-center font-semibold px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition cursor-pointer"
      >
        Share Article
      </button>
    </footer>
  );
}
