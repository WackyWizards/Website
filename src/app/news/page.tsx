import React from 'react';
import Link from 'next/link';
import { getAllNewsPosts } from '@/lib/markdown';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News',
  description: 'Stay updated with the latest news',
};

export default async function NewsPage() {
  const posts = await getAllNewsPosts();

  return (
    <main className="min-h-screen bg-gray-900 py-16">
      <div className="relative mx-auto max-w-4xl px-6 md:px-10 pt-6 md:pt-10">
        <header className="mb-12 text-center border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Latest News
          </h1>
          <p className="text-base sm:text-lg text-gray-400">
            Hear about our latest updates and announcements.
          </p>
        </header>

        <section id="latest-news">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-2xl mb-4">No news articles found.</p>
              <p className="text-gray-400 text-lg">Check back later for updates!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <article key={post.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <Link
                    href={`/news/${post.id}`}
                    className="block bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-colors"
                  >
                    <h2 className="text-2xl font-semibold mb-2 text-blue-600">{post.title}</h2>
                    <time dateTime={post.date} className="text-sm text-gray-500 mb-3 block">
                      {new Date(post.date).toLocaleDateString('en-UK', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    {post.excerpt && (
                      <p className="text-gray-400 leading-relaxed">{post.excerpt}</p>
                    )}
                    {post.tags.length > 0 && (
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-gray-300"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Link>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
