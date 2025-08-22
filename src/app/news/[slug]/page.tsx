import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAllNewsPosts, getNewsPost } from '@/lib/markdown';
import { ArticleFooter } from '@/app/components/articlefooter';
import { Metadata } from 'next';

// Generate static params for all news articles at build time
export async function generateStaticParams() {
  const posts = await getAllNewsPosts();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

/**
 * Generate metadata for articles.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getNewsPost(slug);

  if (!post) {
    return {
      title: 'Article Not Found | News',
      description: 'The requested article could not be found.',
    };
  }

  return {
    title: `${post.title} | News`,
    description: post.excerpt || `Read about ${post.title}`,
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read about ${post.title}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      ...(post.featuredImage && {
        images: [
          {
            url: post.featuredImage,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || `Read about ${post.title}`,
      ...(post.featuredImage && {
        images: [post.featuredImage],
      }),
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getNewsPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
      <article className="relative mx-auto max-w-4xl px-6 md:px-10 pt-6 md:pt-10">
        <header className="mb-8">
          <div className="flex items-center space-x-4">
            <h1 className="text-4xl font-bold mb-4 flex-grow">{post.title}</h1>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-lg">{post.author}</span>
              {post.authorAvatar && (
                <Image
                  src={post.authorAvatar}
                  alt={post.author}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                />
              )}
            </div>
          </div>
          <time dateTime={post.date} className="text-gray-400 text-lg">
            {new Date(post.date).toLocaleDateString('en-UK', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </header>
        <div
          className="prose prose-lg max-w-none prose-invert prose-headings:text-white prose-p:text-gray-300 prose-a:text-blue-400 hover:prose-a:text-blue-600 prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <ArticleFooter title={post.title} />
      </article>
    </main>
  );
}
