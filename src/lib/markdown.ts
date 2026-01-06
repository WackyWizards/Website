import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkSpoiler from './remark-spoiler';
import { organization } from '@/constants';

const newsDirectory = path.join(process.cwd(), 'content/news');

export interface NewsPost {
  id: string;
  title: string;
  author: string;
  authorAvatar?: string;
  date: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  tags: string[];
}

export async function getNewsPost(id: string): Promise<NewsPost | null> {
  try {
    const fullPath = path.join(newsDirectory, `${id}.md`);

    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${fullPath}`);
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Process markdown to HTML
    const processedContent = await remark()
      .use(remarkUnwrapImages)
      .use(remarkSpoiler)
      .use(remarkRehype) // convert mdast → hast
      .use(rehypeStringify) // convert hast → HTML
      .process(content);

    const contentHtml = processedContent.toString();

    const post: NewsPost = {
      id,
      title: data.title || 'Untitled',
      author: data.author || organization.name,
      authorAvatar: data.authorAvatar || undefined,
      date: data.date || new Date().toISOString().split('T')[0],
      excerpt: data.excerpt || '',
      content: contentHtml,
      featuredImage: data.featuredImage || data.featured_image || undefined,
      tags: Array.isArray(data.tags) ? data.tags : [],
    };

    console.log('Created post object:', {
      id: post.id,
      title: post.title,
      date: post.date,
      featuredImage: post.featuredImage,
    });
    return post;
  } catch (error) {
    console.error(`Error reading news post ${id}:`, error);
    return null;
  }
}

export async function getAllNewsPosts(): Promise<NewsPost[]> {
  try {
    if (!fs.existsSync(newsDirectory)) {
      console.log('News directory does not exist, returning empty array');
      return [];
    }

    const fileNames = fs.readdirSync(newsDirectory);
    const markdownFiles = fileNames.filter((name) => name.endsWith('.md'));

    if (markdownFiles.length === 0) {
      console.log('No markdown files found');
      return [];
    }

    const posts = await Promise.all(
      markdownFiles.map(async (name) => {
        const id = name.replace(/\.md$/, '');
        const post = await getNewsPost(id);
        return post;
      })
    );

    const validPosts = posts.filter((post): post is NewsPost => post !== null);
    const sortedPosts = validPosts.sort((a, b) => (a.date < b.date ? 1 : -1));

    return sortedPosts;
  } catch (error) {
    console.error('Error reading news posts:', error);
    return [];
  }
}
