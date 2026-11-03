import type { APIRoute } from "astro";
import { siteConfig } from "../config";

// Home + /startups (quando há ofertas no config), com a data do build.
export const GET: APIRoute = ({ site }) => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const paths = ["/", ...(siteConfig.startups?.offers?.length ? ["/startups"] : [])];
  const urls = paths
    .map((path) => `  <url>\n    <loc>${new URL(path, site).href}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
    .join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
