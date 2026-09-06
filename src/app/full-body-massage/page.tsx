import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Phone, MessageCircle, Clock, ShieldCheck, Award, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

export const metadata: Metadata = {
  title: "Full Body Massage in Islamabad | Complete Relaxation Therapy",
  description:
    "Experience the ultimate full body massage in Islamabad at Best Spa. Our certified therapists provide head-to-toe relaxation, improved blood circulation, and deep stress relief. Open late till 4:40 AM & 24h weekends.",
  alternates: {
    canonical: "https://bestspaislamabad.com/full-body-massage",
  },
  openGraph: {
    title: "Full Body Massage in Islamabad | Best Spa Islamabad",
    description: "Rejuvenating head-to-toe full body massage therapies by certified practitioners.",
    url: "https://bestspaislamabad.com/full-body-massage",
  },
};

const pageFaqs = [
  {
    question: "What does a full body massage include?",
    answer:
      "A full body massage systematically works through your back, shoulders, neck, arms, hands, legs, and feet using specialized oils and pressure. Gentle head and scalp massage is included upon request.",
  },
  {
    question: "How long is a full body massage session?",
    answer:
      "Standard full body sessions are 60 minutes, while extended intensive sessions are 90 minutes. 90 minutes is ideal for thorough deep-tissue or hot stone relaxation.",
  },
  {
    question: "Is proper privacy and draping guaranteed?",
    answer:
      "Yes, absolute client privacy is our foundational rule. You are properly draped with clean sheets at all times, with only the specific area being massaged uncovered.",
  },
  {
    question: "What is the price of full body massage in Islamabad?",
    answer:
      "Our full body Swedish massage starts at PKR 5,000 for 60 minutes, Deep Tissue is PKR 6,000 for 75 minutes, and Thai Massage is PKR 6,500 for 90 minutes.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bestspaislamabad.com" },
        { "@type": "ListItem", position: 2, name: "Full Body Massage", item: "https://bestspaislamabad.com/full-body-massage" },
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

export default function FullBodyMassagePage() {
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
              <span>Head-to-Toe Restorative Therapy</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair tracking-tight text-foreground leading-tight">
              Full Body Massage in Islamabad
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Restore systemic balance, eliminate mental burnout, and relieve deep-seated muscle tension with our premium full body massage therapies. Performed by certified therapists in private, hygienic suites.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-lg hover:shadow-emerald-700/25 transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                Book Full Body Session
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

      {/* Protocol breakdown */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-playfair">What Makes Our Full Body Massage Exceptional</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We do not use cookie-cutter routines. Your therapist assesses your tightest muscle groups and calibrates pressure, oil temperature, and focus areas to address your exact fatigue triggers.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm">Targeted Trapezius & Upper Back Relief</h3>
                    <p className="text-xs text-muted-foreground">Dissolves tension from computer use, long commutes, and poor posture.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm">Lumbar & Gluteal Decompression</h3>
                    <p className="text-xs text-muted-foreground">Releases pressure on sciatic nerve pathways and restores pelvic alignment.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm">Calf & Foot Reflex Drainage</h3>
                    <p className="text-xs text-muted-foreground">Flushes lymphatic build-up, leaving your lower legs feeling light and revitalized.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-950 to-stone-900 text-white space-y-6 shadow-xl">
              <h3 className="text-2xl font-bold font-playfair">Full Body Pricing Menu</h3>
              <ul className="space-y-4 text-sm text-stone-300">
                <li className="flex justify-between border-b border-stone-800 pb-3">
                  <div>
                    <p className="font-semibold text-white">Full Body Swedish (60 min)</p>
                    <p className="text-xs text-stone-400">Gentle relaxation & circulation boost</p>
                  </div>
                  <span className="font-bold text-white text-base">PKR 5,000</span>
                </li>

                <li className="flex justify-between border-b border-stone-800 pb-3">
                  <div>
                    <p className="font-semibold text-white">Full Body Deep Tissue (75 min)</p>
                    <p className="text-xs text-stone-400">Deep myofascial knot release</p>
                  </div>
                  <span className="font-bold text-white text-base">PKR 6,000</span>
                </li>

                <li className="flex justify-between border-b border-stone-800 pb-3">
                  <div>
                    <p className="font-semibold text-white">Full Body Thai Massage (90 min)</p>
                    <p className="text-xs text-stone-400">Assisted stretching & energy acupressure</p>
                  </div>
                  <span className="font-bold text-white text-base">PKR 6,500</span>
                </li>

                <li className="flex justify-between">
                  <div>
                    <p className="font-semibold text-white">Hot Volcanic Stone Full Body (90 min)</p>
                    <p className="text-xs text-stone-400">Thermal deep tissue penetration</p>
                  </div>
                  <span className="font-bold text-emerald-400 text-base">PKR 7,000</span>
                </li>
              </ul>

              <a
                href="/whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all"
              >
                <MessageCircle className="h-4 w-4" /> Book Your Full Body Slot
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
            <p className="text-muted-foreground text-sm">Everything to know about our full body massage therapies.</p>
          </div>
          <FAQSection faqs={pageFaqs} />
        </div>
      </section>

      <SEOKeywords />
    </div>
  );
}
