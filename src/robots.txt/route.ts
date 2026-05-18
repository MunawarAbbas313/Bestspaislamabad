export async function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: https://bestspaislamabad.com/sitemap.xml`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
