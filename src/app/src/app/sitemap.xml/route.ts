export async function GET() {
  const baseUrl = "https://bestspaislamabad.com";

  const pages = [
    { url: "", priority: "1.0", changefreq: "daily" },
    { url: "/about", priority: "0.9", changefreq: "monthly" },
    { url: "/services", priority: "0.9", changefreq: "weekly" },
    { url: "/contact", priority: "0.8", changefreq: "monthly" },
    { url: "/blog", priority: "0.7", changefreq: "weekly" },
    { url: "/gallery", priority: "0.6", changefreq: "monthly" },
    { url: "/faqs", priority: "0.7", changefreq: "monthly" },
    { url: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
