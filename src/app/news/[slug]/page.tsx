import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAllNewsPosts, getNewsPost } from '@/lib/markdown';
import { ArticleFooter } from '@/app/components/articlefooter';
import { SpoilerScript } from '@/app/components/spoilerscript';
import type { Metadata } from 'next';

// Generate static params for all news articles at build time
export async function generateStaticParams() {
  const posts = await getAllNewsPosts();

  // If no posts exist, return a dummy post to satisfy static export
  if (posts.length === 0) {
    return [{ slug: '__no_posts__' }];
  }

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

  if (slug === '__no_posts__') {
    return {
      title: 'No Articles Yet | News',
      description: 'No news articles have been published yet.',
    };
  }

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

  // Handle the dummy case when no posts exist
  if (slug === '__no_posts__') {
    notFound();
  }

  const post = await getNewsPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen bg-gray-900 py-16">
      <SpoilerScript />

      <article className="mx-auto max-w-4xl px-6 md:px-10 pt-6 md:pt-10">
        <header className="mb-10 border-b border-gray-800 pb-6">
          <h1 className="text-4xl font-bold leading-tight text-white">{post.title}</h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              {post.authorAvatar && (
                <Image
                  src={post.authorAvatar}
                  alt={post.author}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full"
                />
              )}
              <span className="font-medium text-gray-300">{post.author}</span>
            </div>

            <span aria-hidden="true">•</span>

            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-UK', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </header>

        <div
          className="
          prose prose-lg max-w-none
          prose-invert
          prose-headings:text-white
          prose-p:text-gray-300
          prose-p:leading-relaxed
          prose-a:text-blue-400 hover:prose-a:text-blue-500
          prose-strong:text-white
        "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <ArticleFooter title={post.title} />
      </article>
    </main>
  );
}
