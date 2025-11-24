import { MetadataRoute } from "next";
import path from "path";
import fs from "fs";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = "https://www.manuelafonso.tech";

  const postsDir = path.join(process.cwd(), "app/posts");
  const files = fs.readdirSync(postsDir);

  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      return {
        url: `${BASE_URL}/posts/${slug}`,
        lastModified: new Date(),
      };
    });

  return [
    { url: BASE_URL, lastModified: new Date() },
    { url: `${BASE_URL}/posts`, lastModified: new Date() },
    ...posts,
  ];
}
