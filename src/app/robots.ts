import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Applebot",
          "YandexBot",
          "DuckDuckBot",
          "Baiduspider",
          "PerplexityBot",
          "ChatGPT-User",
          "GPTBot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://bestspaislamabad.com/sitemap.xml",
  };
}
