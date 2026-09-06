import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Phone, MessageCircle, Clock, MapPin, ShieldCheck, Award, Star, ArrowRight } from "lucide-react";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

export const metadata: Metadata = {
  title: "Massage Center Rawalpindi | Top Rated Luxury Spa",
  description:
    "Looking for the best massage center in Rawalpindi? Best Spa Islamabad offers certified Swedish, Thai, and Deep Tissue massage in Bahria Town Phase 7 near Wallayat Complex. Open late till 4:40 AM & 24h weekends.",
  alternates: {
    canonical: "https://bestspaislamabad.com/massage-center-rawalpindi",
  },
  openGraph: {
    title: "Massage Center Rawalpindi | Best Spa Islamabad",
    description: "Top-rated massage therapy center serving Rawalpindi and the twin cities. Certified therapists and late-night sessions.",
    url: "https://bestspaislamabad.com/massage-center-rawalpindi",
  },
};

const pageFaqs = [
  {
    question: "Do you serve clients from Rawalpindi Cantt and Saddar?",
    answer:
      "Yes! Many of our regular clients drive from Saddar, Rawalpindi Cantt, Askari 14, and Peshawar Road via the signal-free Expressway and GT Road directly to our Phase 7 Bahria center in 15-20 minutes.",
  },
  {
    question: "What makes this the best massage center in Rawalpindi?",
    answer:
      "Unlike crowded centers, we offer strictly private sanitized suites, certified therapists, premium organic oils, discreet parking, and late-night hours until 4:40 AM on weekdays and 24 hours on weekends.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can message us directly on WhatsApp at +92 370 0802980 or call our reception.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bestspaislamabad.com" },
        { "@type": "ListItem", position: 2, name: "Massage Center Rawalpindi", item: "https://bestspaislamabad.com/massage-center-rawalpindi" },
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

export default function MassageCenterRawalpindiPage() {
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
              <Sparkles className="h-3.5 w-3.5" />
              <span>Serving Rawalpindi & Twin Cities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair tracking-tight text-foreground leading-tight">
              Top Massage Center in Rawalpindi
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Serving residents and working professionals across Rawalpindi with certified massage treatments, therapeutic bodywork, and serene private treatment suites.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-lg hover:shadow-emerald-700/25 transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                Book via WhatsApp
              </a>
              <a
                href="tel:+923700802980"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 dark:bg-stone-800 hover:bg-stone-800 text-white font-semibold text-sm transition-all"
              >
                <Phone className="h-4 w-4 text-emerald-400" />
                Call 0370 0802980
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border/60 text-xs font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Till 4:40 AM Weekdays</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>24h Weekends</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Certified Therapists</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-500 shrink-0 fill-amber-500" />
                <span>4.9 / 5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Menu */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl p-6 border border-border space-y-4 hover:shadow-lg transition-shadow flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-playfair">Swedish Massage</h3>
                <p className="text-sm text-muted-foreground">Flowing strokes, improved blood flow, and complete nervous system relaxation.</p>
                <div className="text-lg font-bold text-emerald-700 dark:text-emerald-400">PKR 5,000 <span className="text-xs text-muted-foreground font-normal">/ 60 mins</span></div>
              </div>
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="https://wa.me/923700802980?text=Hello%2C%20I%20want%20to%20book%20the%20Swedish%20Massage%20(PKR%205%2C000)%20at%20Rawalpindi%20center."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>Book on WhatsApp</span>
                </a>
                <a
                  href="tel:+923700802980"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold"
                >
                  <Phone className="h-3 w-3 text-emerald-400" />
                  <span>Call 0370 0802980</span>
                </a>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border space-y-4 hover:shadow-lg transition-shadow flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-playfair">Deep Tissue Therapy</h3>
                <p className="text-sm text-muted-foreground">Targeted trigger-point work for chronic desk fatigue, lower back pain, and stiff necks.</p>
                <div className="text-lg font-bold text-emerald-700 dark:text-emerald-400">PKR 6,000 <span className="text-xs text-muted-foreground font-normal">/ 75 mins</span></div>
              </div>
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="https://wa.me/923700802980?text=Hello%2C%20I%20want%20to%20book%20the%20Deep%20Tissue%20Therapy%20(PKR%206%2C000)%20at%20Rawalpindi%20center."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>Book on WhatsApp</span>
                </a>
                <a
                  href="tel:+923700802980"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold"
                >
                  <Phone className="h-3 w-3 text-emerald-400" />
                  <span>Call 0370 0802980</span>
                </a>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border space-y-4 hover:shadow-lg transition-shadow flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-playfair">Traditional Thai Massage</h3>
                <p className="text-sm text-muted-foreground">Acupressure along Sen energy lines and assisted yoga stretching to restore mobility.</p>
                <div className="text-lg font-bold text-emerald-700 dark:text-emerald-400">PKR 6,500 <span className="text-xs text-muted-foreground font-normal">/ 90 mins</span></div>
              </div>
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="https://wa.me/923700802980?text=Hello%2C%20I%20want%20to%20book%20the%20Thai%20Massage%20(PKR%206%2C500)%20at%20Rawalpindi%20center."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>Book on WhatsApp</span>
                </a>
                <a
                  href="tel:+923700802980"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold"
                >
                  <Phone className="h-3 w-3 text-emerald-400" />
                  <span>Call 0370 0802980</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/10 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center space-y-3 mb-10">
            <h2 className="text-3xl font-bold font-playfair">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-sm">Answers to common inquiries for Rawalpindi visitors.</p>
          </div>
          <FAQSection faqs={pageFaqs} />
        </div>
      </section>

      <SEOKeywords />
    </div>
  );
}
