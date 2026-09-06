import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Phone, MessageCircle, Clock, ShieldCheck, Award, Star, ArrowRight, Activity, Zap } from "lucide-react";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

export const metadata: Metadata = {
  title: "Body Massage Islamabad | Muscle Recovery & Pain Relief Therapy",
  description:
    "Suffering from chronic back pain, stiff neck, or desk fatigue? Best Spa Islamabad provides specialized therapeutic body massage, myofascial release, and sciatica relief in Bahria Town Phase 7. Open late till 4:40 AM & 24h weekends.",
  alternates: {
    canonical: "https://bestspaislamabad.com/body-massage",
  },
  openGraph: {
    title: "Body Massage Islamabad | Pain Relief & Recovery | Best Spa",
    description: "Therapeutic body massage for back pain, muscle knots, and athletic recovery.",
    url: "https://bestspaislamabad.com/body-massage",
  },
};

const pageFaqs = [
  {
    question: "How does therapeutic body massage differ from standard relaxation?",
    answer:
      "Therapeutic body massage specifically isolates damaged or hypertonic muscle fibers, applying precise trigger-point compression and myofascial release to alleviate nerve pinch and restore natural range of motion.",
  },
  {
    question: "Can body massage help with chronic sciatica?",
    answer:
      "Yes! Sciatica is frequently caused by a tight piriformis muscle compressing the sciatic nerve. Our therapists use targeted friction and myofascial protocols to decompress the area and offer immediate relief.",
  },
  {
    question: "Will I feel sore after a therapeutic body massage?",
    answer:
      "Mild soreness for 24 hours can occur as muscle adhesions break down and lactic acid is released. Drinking plenty of warm water and resting will accelerate tissue recovery.",
  },
  {
    question: "How do I book a therapeutic body massage?",
    answer:
      "You can message us directly on WhatsApp at +92 370 0802980 or call our front desk for appointment slots.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bestspaislamabad.com" },
        { "@type": "ListItem", position: 2, name: "Body Massage", item: "https://bestspaislamabad.com/body-massage" },
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

export default function BodyMassagePage() {
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
              <Activity className="h-3.5 w-3.5" />
              <span>Pain Relief & Muscle Recovery Therapy</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair tracking-tight text-foreground leading-tight">
              Therapeutic Body Massage in Islamabad
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Don't let muscle aches, desk fatigue, or sciatica restrict your active lifestyle. Our specialized therapeutic body massage treatments target the root causes of musculoskeletal tension to restore pain-free vitality.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-lg hover:shadow-emerald-700/25 transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                Book Therapy Session
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

      {/* Conditions Treated */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl font-bold font-playfair">Conditions We Successfully Treat</h2>
            <p className="text-muted-foreground text-sm">Targeted therapeutic solutions for common modern ailments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl p-6 border border-border space-y-3 hover:shadow-lg transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold font-playfair">Desk Fatigue & Tech Neck</h3>
              <p className="text-sm text-muted-foreground">
                Releases strained suboccipital muscles, shoulder knots, and rounded cervical spine posture caused by daily screen time.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border space-y-3 hover:shadow-lg transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600">
                <Activity className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold font-playfair">Sciatica & Lumbar Spasms</h3>
              <p className="text-sm text-muted-foreground">
                Decompresses the piriformis muscle and lumbar vertebrae to release nerve entrapment and restore pain-free walking.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border space-y-3 hover:shadow-lg transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold font-playfair">Athletic Soreness & DOMS</h3>
              <p className="text-sm text-muted-foreground">
                Flushes lactic acid accumulation, accelerates myofibrillar healing, and expands hip and hamstring flexibility.
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
            <p className="text-muted-foreground text-sm">Therapeutic body massage questions answered by our specialists.</p>
          </div>
          <FAQSection faqs={pageFaqs} />
        </div>
      </section>

      <SEOKeywords />
    </div>
  );
}
