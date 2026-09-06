import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Phone, MessageCircle, Clock, MapPin, ShieldCheck, Award, Star, ArrowRight, Flower2 } from "lucide-react";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

export const metadata: Metadata = {
  title: "Spa in Bahria Town | Luxury Wellness & Massage Treatments",
  description:
    "Looking for the best spa in Bahria Town? Best Spa Islamabad offers luxury Swedish, Thai, and Couples massage in Bahria Phase 7 near Wallayat Complex. Open late until 4:40 AM & 24h weekends.",
  alternates: {
    canonical: "https://bestspaislamabad.com/spa-bahria-town",
  },
  openGraph: {
    title: "Spa in Bahria Town | Luxury Wellness | Best Spa Islamabad",
    description: "The premier day spa in Bahria Town. Certified therapists, private suites, and late night wellness.",
    url: "https://bestspaislamabad.com/spa-bahria-town",
  },
};

const pageFaqs = [
  {
    question: "Where in Bahria Town is Best Spa located?",
    answer:
      "We are in Bahria Town Phase 7, Near Nando's and Wallayat Complex. Very convenient for residents of Bahria Phase 1 to 8, Civic Center, and DHA Islamabad.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "We operate Monday to Friday from 10:00 AM until 4:40 AM, and 24 hours round-the-clock on Saturday and Sunday.",
  },
  {
    question: "Are there certified female therapists available?",
    answer:
      "Yes, we have a qualified team of certified male and female therapists. You can specify your preference when reserving your session.",
  },
  {
    question: "What treatments are most recommended for stress?",
    answer:
      "Our Swedish Massage and Organic Aromatherapy treatments are the most sought-after therapies for relieving stress and muscle fatigue.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bestspaislamabad.com" },
        { "@type": "ListItem", position: 2, name: "Spa in Bahria Town", item: "https://bestspaislamabad.com/spa-bahria-town" },
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

export default function SpaBahriaTownPage() {
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
              <Flower2 className="h-3.5 w-3.5" />
              <span>The Premier Day Spa in Bahria Town</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair tracking-tight text-foreground leading-tight">
              Best Spa in Bahria Town
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Indulge in unmatched relaxation right inside Bahria Town. With hospital-grade sanitation, certified therapists, and a tranquil atmosphere near Wallayat Complex, Best Spa Islamabad is the neighborhood’s first choice for health and rejuvenation.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-lg hover:shadow-emerald-700/25 transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                Book on WhatsApp
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
                <span>Mon–Fri till 4:40 AM</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>24h Weekends</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Certified Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-500 shrink-0 fill-amber-500" />
                <span>4.9 / 5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Services */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl font-bold font-playfair">Signature Therapies in Bahria Town</h2>
            <p className="text-muted-foreground text-sm">Experience the restorative magic of skilled hands and tranquil ambiance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl p-6 border border-border space-y-4 hover:shadow-lg transition-shadow flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-playfair">Swedish Massage</h3>
                <p className="text-sm text-muted-foreground">Effleurage, gentle kneading, and full-body relaxation to erase daily tension.</p>
                <div className="text-lg font-bold text-emerald-700 dark:text-emerald-400">PKR 5,000 <span className="text-xs text-muted-foreground font-normal">/ 60 mins</span></div>
              </div>
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="https://wa.me/923700802980?text=Hello%2C%20I%20want%20to%20book%20the%20Swedish%20Massage%20(PKR%205%2C000)%20in%20Bahria%20Town."
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
                <p className="text-sm text-muted-foreground">Myofascial tension release for chronic shoulder pain, lower back aches, and sciatica.</p>
                <div className="text-lg font-bold text-emerald-700 dark:text-emerald-400">PKR 6,000 <span className="text-xs text-muted-foreground font-normal">/ 75 mins</span></div>
              </div>
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="https://wa.me/923700802980?text=Hello%2C%20I%20want%20to%20book%20the%20Deep%20Tissue%20Therapy%20(PKR%206%2C000)%20in%20Bahria%20Town."
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
                <h3 className="text-xl font-bold font-playfair">Couples Suite Treatment</h3>
                <p className="text-sm text-muted-foreground">Romantic shared relaxation with side-by-side beds, rose petals, and soothing scents.</p>
                <div className="text-lg font-bold text-emerald-700 dark:text-emerald-400">PKR 12,000 <span className="text-xs text-muted-foreground font-normal">/ 90 mins</span></div>
              </div>
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="https://wa.me/923700802980?text=Hello%2C%20I%20want%20to%20book%20the%20Couples%20Suite%20Treatment%20(PKR%2012%2C000)%20in%20Bahria%20Town."
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
            <p className="text-muted-foreground text-sm">Questions regarding our spa services in Bahria Town.</p>
          </div>
          <FAQSection faqs={pageFaqs} />
        </div>
      </section>

      <SEOKeywords />
    </div>
  );
}
