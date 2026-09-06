import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Phone, MessageCircle, Clock, ShieldCheck, Award, Star, ArrowRight, CheckCircle2, UserCheck, HeartHandshake } from "lucide-react";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

export const metadata: Metadata = {
  title: "Why Choose Us | Best Spa Islamabad & Bahria Town",
  description:
    "Discover why Best Spa Islamabad is rated 4.9/5 by over 180+ clients. Internationally certified therapists, hospital-grade hygiene, private suites, and late-night sessions till 4:40 AM & 24h weekends.",
  alternates: {
    canonical: "https://bestspaislamabad.com/why-choose-us",
  },
  openGraph: {
    title: "Why Choose Best Spa Islamabad | 4.9/5 Rated Luxury Spa",
    description: "Certified therapists, clinical hygiene, private luxury suites, and extended late-night hours.",
    url: "https://bestspaislamabad.com/why-choose-us",
  },
};

const pageFaqs = [
  {
    question: "How are your therapists vetted and trained?",
    answer:
      "All therapists possess verified certifications in human anatomy, therapeutic bodywork, and traditional modalities like Swedish and Thai massage. They undergo regular training in ethics, hygiene, and client communication.",
  },
  {
    question: "What hygiene protocols do you follow?",
    answer:
      "Every suite is deep-cleaned and sanitized after every single treatment. Fresh Egyptian cotton linens, sterilized tools, and single-use slippers are provided to each client.",
  },
  {
    question: "Can I choose between male and female therapists?",
    answer:
      "Yes, we have certified male and female therapists available. You can specify your preference when reserving your session.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "We operate Monday to Friday from 10:00 AM until 4:40 AM for late-night sessions, and 24 hours round-the-clock on Saturday and Sunday.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bestspaislamabad.com" },
        { "@type": "ListItem", position: 2, name: "Why Choose Us", item: "https://bestspaislamabad.com/why-choose-us" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: pageFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-emerald-950/25 via-background to-background border-b border-border/40">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
              <Award className="h-3.5 w-3.5" />
              <span>Excellence in Professional Bodywork</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair tracking-tight text-foreground leading-tight">
              Why Choose Best Spa Islamabad
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Rated 4.9/5 across hundreds of satisfied clients in Islamabad and Rawalpindi. We have set the benchmark for clinical cleanliness, international certifications, and unwavering client privacy.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-lg hover:shadow-emerald-700/25 transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                Book Your Session
              </a>
              <a
                href="tel:+923700802980"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 dark:bg-stone-800 hover:bg-stone-800 text-white font-semibold text-sm transition-all"
              >
                <Phone className="h-4 w-4 text-emerald-400" />
                Call 0370 0802980
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-border bg-card space-y-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600">
                <UserCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold font-playfair">Certified Therapists</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Trained in anatomy, myofascial trigger point science, and genuine Thai & Swedish techniques.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-card space-y-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold font-playfair">Clinical Hygiene</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Fresh Egyptian cotton linens for each guest, single-use accessories, and sterilized treatment rooms.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-card space-y-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold font-playfair">Extended Hours</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Open late until 4:40 AM on weekdays and 24 hours on weekends, fitting your schedule seamlessly.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-card space-y-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold font-playfair">Total Discretion</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Quiet private entrances, soundproof suites, and strict client confidentiality guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/10 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center space-y-3 mb-10">
            <h2 className="text-3xl font-bold font-playfair">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-sm">Everything you need to know about our standards.</p>
          </div>
          <FAQSection faqs={pageFaqs} />
        </div>
      </section>

      <SEOKeywords />
    </div>
  );
}
