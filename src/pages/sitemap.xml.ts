import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const BASE_URL = "https://www.manuelafonso.tech";

export const GET: APIRoute = async () => {
  const posts = await getCollection("posts");
  const lastModified = new Date().toISOString();

  const urls = [
    `${BASE_URL}/`,
    `${BASE_URL}/posts`,
    `${BASE_URL}/about`,
    ...posts.map((post) => `${BASE_URL}/posts/${post.id}`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) =>
      `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastModified}</lastmod>\n  </url>`,
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
};
