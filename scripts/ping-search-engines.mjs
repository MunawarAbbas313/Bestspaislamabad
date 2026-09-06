// Standalone script to ping Google and Bing with updated sitemap
import https from "node:https";

const sitemapUrl = encodeURIComponent("https://bestspaislamabad.com/sitemap.xml");

const endpoints = [
  `https://www.google.com/ping?sitemap=${sitemapUrl}`,
  `https://www.bing.com/ping?sitemap=${sitemapUrl}`,
];

console.log("🚀 Pinging search engines for Best Spa Islamabad...");

for (const url of endpoints) {
  https.get(url, (res) => {
    console.log(`[${res.statusCode}] Pinged: ${url}`);
  }).on("error", (err) => {
    console.error(`Error pinging ${url}:`, err.message);
  });
}
