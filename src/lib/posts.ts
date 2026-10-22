import { getCollection } from "astro:content";
import type { Post, PostLink, PostNavigation } from "@/types";

const WORDS_PER_MINUTE = 200;

export function getReadingTime(body?: string): number {
  if (!body) return 1;

  const words = body.trim().split(/\s+/).filter(Boolean).length;

  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export default class Posts {
  static async findAll(): Promise<Post[]> {
    const entries = await getCollection("posts");

    return entries
      .map((entry) => ({
        slug: entry.id,
        title: entry.data.title,
        description: entry.data.description,
        author: entry.data.author,
        postedAt: entry.data.postedAt.toISOString(),
        category: entry.data.category,
        readingTime: getReadingTime(entry.body),
      }))
      .sort((a, z) => +new Date(z.postedAt) - +new Date(a.postedAt));
  }
}

export async function getPostNavigation(slug: string): Promise<PostNavigation> {
  const posts = await Posts.findAll();
  const index = posts.findIndex((post) => post.slug === slug);

  const toLink = (post?: Post): PostLink | undefined =>
    post ? { slug: post.slug, title: post.title } : undefined;

  return {
    newer: index > 0 ? toLink(posts[index - 1]) : undefined,
    older:
      index >= 0 && index < posts.length - 1
        ? toLink(posts[index + 1])
        : undefined,
  };
}
