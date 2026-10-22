import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const body = `User-agent: Googlebot
Allow: /
Disallow: /private/

User-agent: Applebot
User-agent: Bingbot
Disallow: /

Sitemap: https://www.manuelafonso.tech/sitemap.xml
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
};
