import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Phone, MessageCircle, Clock, MapPin, ShieldCheck, Award, Star, ArrowRight, Navigation } from "lucide-react";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

export const metadata: Metadata = {
  title: "Massage Center Bahria Town Phase 7 | Best Spa Islamabad",
  description:
    "Looking for a massage center in Bahria Town Phase 7? Visit Best Spa Islamabad near Nando's & Wallayat Complex. Certified Swedish, Deep Tissue, Thai massage. Open late till 4:40 AM and 24h weekends.",
  alternates: {
    canonical: "https://bestspaislamabad.com/massage-center-bahria-town-phase-7",
  },
  openGraph: {
    title: "Massage Center Bahria Town Phase 7 | Near Wallayat Complex",
    description: "The top-rated massage center in Bahria Phase 7. Certified therapists, private suites, easy parking.",
    url: "https://bestspaislamabad.com/massage-center-bahria-town-phase-7",
  },
};

const pageFaqs = [
  {
    question: "Where exactly is the massage center located in Bahria Town Phase 7?",
    answer:
      "We are located in Bahria Town Phase 7, right near Nando's and the Wallayat Complex commercial sector. It features convenient street parking, private elevator access, and a discreet, secure entrance.",
  },
  {
    question: "What are your operating hours in Bahria Phase 7?",
    answer:
      "We are open Monday through Friday from 10:00 AM until 4:40 AM for late-night sessions, and open 24 hours round-the-clock on Saturday and Sunday.",
  },
  {
    question: "How far is this branch from DHA Phase 1 & 2?",
    answer:
      "Our Phase 7 center is approximately 5 to 10 minutes from DHA Phase 1 and DHA Phase 2 via the main Bahria expressway, making it the most convenient wellness hub in the area.",
  },
  {
    question: "How do I make a reservation?",
    answer:
      "Simply text or call us directly on WhatsApp at +92 370 0802980 for immediate booking confirmation.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bestspaislamabad.com" },
        { "@type": "ListItem", position: 2, name: "Massage Center Bahria Town Phase 7", item: "https://bestspaislamabad.com/massage-center-bahria-town-phase-7" },
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

export default function MassageCenterBahriaPhase7Page() {
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
              <MapPin className="h-3.5 w-3.5" />
              <span>Near Nando's & Wallayat Complex, Bahria Phase 7</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair tracking-tight text-foreground leading-tight">
              Massage Center in Bahria Town Phase 7
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience the pinnacle of therapeutic relaxation right in your neighborhood. Located in the heart of Bahria Town Phase 7 near Wallayat Complex, Best Spa Islamabad delivers clinical-grade hygiene, certified therapists, and complete discretion.
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
                <span>Open till 4:40 AM Weekdays</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>24h Weekends Open</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Discreet & Safe Entrance</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-500 shrink-0 fill-amber-500" />
                <span>4.9 / 5 Verified Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Context & Proximity */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-playfair">Your Neighborhood Sanctuary in Phase 7</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Whether you live in Bahria Phase 7, Phase 8, Phase 4, or nearby DHA Phase 1, you no longer need to brave heavy traffic to find elite wellness therapy. We provide world-class bodywork just around the corner.
              </p>

              <div className="space-y-3 text-sm">
                <div className="p-4 rounded-xl border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                    <Navigation className="h-4 w-4 text-emerald-600" /> Landmark Highlights
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Located near Nando's Bahria Phase 7 and Wallayat Complex. Ample dedicated customer parking in front of the building.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-emerald-600" /> Late-Night Convenience
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Finish late meetings or gym workouts and still book a 60-90 minute deep relaxation session before heading home.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-stone-900 to-emerald-950 text-white space-y-6 shadow-xl">
              <h3 className="text-2xl font-bold font-playfair">Popular Treatments in Phase 7</h3>
              <ul className="space-y-3 text-sm text-stone-300">
                <li className="flex justify-between border-b border-stone-800 pb-2">
                  <span>Full Body Swedish Massage (60 min)</span>
                  <span className="font-bold text-white">PKR 5,000</span>
                </li>
                <li className="flex justify-between border-b border-stone-800 pb-2">
                  <span>Deep Tissue Trigger Point (75 min)</span>
                  <span className="font-bold text-white">PKR 6,000</span>
                </li>
                <li className="flex justify-between border-b border-stone-800 pb-2">
                  <span>Traditional Thai Assisted Yoga (90 min)</span>
                  <span className="font-bold text-white">PKR 6,500</span>
                </li>
                <li className="flex justify-between border-b border-stone-800 pb-2">
                  <span>Hot Volcanic Stone Massage (90 min)</span>
                  <span className="font-bold text-white">PKR 7,000</span>
                </li>
                <li className="flex justify-between">
                  <span>Romantic Couples Suite Session (90 min)</span>
                  <span className="font-bold text-emerald-400">PKR 12,000</span>
                </li>
              </ul>
              <a
                href="/whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all"
              >
                <MessageCircle className="h-4 w-4" /> Book at Phase 7 Center
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/10 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center space-y-3 mb-10">
            <h2 className="text-3xl font-bold font-playfair">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-sm">Common questions about our Bahria Town Phase 7 branch.</p>
          </div>
          <FAQSection faqs={pageFaqs} />
        </div>
      </section>

      <SEOKeywords />
    </div>
  );
}
