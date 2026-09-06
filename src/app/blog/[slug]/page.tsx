import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, ArrowRight, Clock, MessageCircle } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog-data";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found | Best Spa Islamabad" };
  }

  const canonicalUrl = `https://bestspaislamabad.com/blog/${slug}`;

  return {
    title: `${post.title} | Best Spa Islamabad`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.date,
      authors: ["Best Spa Islamabad"],
      siteName: "Best Spa Islamabad",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://bestspaislamabad.com/blog/${slug}`,
    },
    author: {
      "@type": "Organization",
      name: "Best Spa Islamabad",
      url: "https://bestspaislamabad.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Best Spa Islamabad",
      logo: {
        "@type": "ImageObject",
        url: "https://bestspaislamabad.com/icon.png",
      },
    },
    keywords: post.keywords.join(", "),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://bestspaislamabad.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://bestspaislamabad.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://bestspaislamabad.com/blog/${slug}` },
    ],
  };

  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center text-emerald-700 dark:text-emerald-400 hover:underline font-semibold mb-8 transition-colors text-sm"
        >
          <ArrowLeft className="h-4 w-4 mr-1.5" /> Back to All Articles
        </Link>

        <article className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-xl mb-16 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-muted-foreground">
            <span className="bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Tag className="h-3.5 w-3.5" /> {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> {post.date}
            </span>
            {post.readingTime && (
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {post.readingTime}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-foreground leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-emerald-600 pl-4">
            {post.excerpt}
          </p>

          <div
            className="prose prose-emerald dark:prose-invert max-w-none text-muted-foreground leading-relaxed pt-4 space-y-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Quick CTA Box inside article */}
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-emerald-900 to-stone-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg font-playfair">Ready to Experience This Therapy?</h3>
              <p className="text-xs text-stone-300">Book your session with certified therapists in Bahria Town Phase 7.</p>
            </div>
            <a
              href="/whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-md shrink-0"
            >
              <MessageCircle className="h-4 w-4" /> Book on WhatsApp
            </a>
          </div>
        </article>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="border-t border-border pt-12">
            <h2 className="text-2xl font-bold font-playfair text-foreground mb-6 text-center">
              Related Wellness Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  aria-label={`Read article: ${related.title}`}
                  className="group block p-5 rounded-2xl bg-card border border-border hover:shadow-lg transition-all"
                >
                  <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">
                    {related.category}
                  </span>
                  <h3 className="font-bold text-base font-playfair text-foreground group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors mt-1 mb-2 line-clamp-2">
                    {related.title}
                  </h3>
                  <div className="flex items-center text-xs text-emerald-700 dark:text-emerald-400 font-semibold mt-auto pt-2">
                    <span>Read Article</span>
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <SEOKeywords />
    </div>
  );
}
