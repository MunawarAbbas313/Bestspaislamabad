import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Phone, MessageCircle, Clock, MapPin, Navigation, Car, ShieldCheck, ArrowRight } from "lucide-react";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

export const metadata: Metadata = {
  title: "Location & Directions | Best Spa Islamabad & Bahria Town",
  description:
    "Turn-by-turn driving directions, map, and parking guidelines for Best Spa Islamabad in Bahria Town Phase 7 near Nando's & Wallayat Complex. Rapid access from Islamabad Expressway & DHA.",
  alternates: {
    canonical: "https://bestspaislamabad.com/location",
  },
  openGraph: {
    title: "Location & Driving Directions | Best Spa Islamabad",
    description: "Visit Best Spa Islamabad in Bahria Town Phase 7 near Wallayat Complex & Nando's.",
    url: "https://bestspaislamabad.com/location",
  },
};

const pageFaqs = [
  {
    question: "Where is Best Spa Islamabad located?",
    answer:
      "We are located in Bahria Town Phase 7, Near Nando's & Wallayat Complex, Rawalpindi, Punjab 46000. It is easily reachable via the Islamabad Expressway and GT Road.",
  },
  {
    question: "Is there secure parking on site?",
    answer:
      "Yes, there is ample, safe, and free dedicated parking available directly in front of and around our building.",
  },
  {
    question: "How far is this from DHA Islamabad Phase 1 & 2?",
    answer:
      "It is only a 5 to 10 minute drive from DHA Phase 1 and Phase 2 via the Bahria expressway entrance.",
  },
  {
    question: "What are your operating hours for visits?",
    answer:
      "We are open Monday to Friday from 10:00 AM until 4:40 AM for late-night wellness, and open 24 hours round-the-clock on Saturday and Sunday.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bestspaislamabad.com" },
        { "@type": "ListItem", position: 2, name: "Location & Directions", item: "https://bestspaislamabad.com/location" },
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

export default function LocationPage() {
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
              <span>Turn-by-Turn Directions & Parking</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair tracking-tight text-foreground leading-tight">
              Location & Directions to Best Spa
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Find effortless peace and discreet luxury. Conveniently located in Bahria Town Phase 7 near Wallayat Complex, easily accessible from all sectors of Islamabad and Rawalpindi.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-lg hover:shadow-emerald-700/25 transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                Request Live WhatsApp Location
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

      {/* Turn by turn directions */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-border bg-card space-y-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600">
                <Navigation className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold font-playfair">From Islamabad Expressway</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Take the main Bahria Town Phase 7 / Phase 8 exit from the Expressway. Follow the main boulevard towards the Phase 7 commercial zone. We are situated near Wallayat Complex and Nando's.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-card space-y-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600">
                <Car className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold font-playfair">From DHA Islamabad (Phases 1 & 2)</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Enter via the direct link connecting DHA Phase 1 to Bahria Phase 7. Drive past the roundabout into the Wallayat Complex commercial sector. Estimated travel time is 7 minutes.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-card space-y-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold font-playfair">Parking & Discretion</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Ample well-lit parking is available directly in front of the premises. Our quiet private reception ensures complete privacy from the moment you arrive.
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
            <p className="text-muted-foreground text-sm">Directions and parking questions answered.</p>
          </div>
          <FAQSection faqs={pageFaqs} />
        </div>
      </section>

      <SEOKeywords />
    </div>
  );
}
