import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({
    pattern: "**/*.mdx",
    base: "./src/content/posts",
    generateId: ({ entry }) => entry.replace(/\.mdx$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    postedAt: z.coerce.date(),
    category: z.string().default("Article"),
  }),
});

export const collections = { posts };
