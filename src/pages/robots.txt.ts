import type { APIRoute } from "astro";
import { SITE_PUBLISHED } from "astro:env/server";

// Bloqueia indexação enquanto o site está "em construção".
export const GET: APIRoute = ({ site }) => {
  const body = SITE_PUBLISHED
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL("/sitemap.xml", site).href}\n`
    : "User-agent: *\nDisallow: /\n";
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
