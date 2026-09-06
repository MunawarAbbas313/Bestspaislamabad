import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Phone, MessageCircle, Clock, ShieldCheck, Award, Star, ArrowRight, Heart, Flower2 } from "lucide-react";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

export const metadata: Metadata = {
  title: "Spa in Islamabad | Luxury Day Spa & Wellness Treatments",
  description:
    "Experience the finest luxury spa in Islamabad. Best Spa Islamabad offers aromatherapy, couples massage packages, deep tissue therapy, and organic skincare in Bahria Town Phase 7. Open until 4:40 AM weekdays and 24h weekends.",
  alternates: {
    canonical: "https://bestspaislamabad.com/spa-islamabad",
  },
  openGraph: {
    title: "Spa in Islamabad | Luxury Day Spa | Best Spa Islamabad",
    description: "Premier luxury spa offering holistic body treatments, Swedish massage, and private suites.",
    url: "https://bestspaislamabad.com/spa-islamabad",
  },
};

const pageFaqs = [
  {
    question: "Why is Best Spa considered the top luxury spa in Islamabad?",
    answer:
      "We provide hospital-grade sterilized suites, internationally certified therapists, premium organic botanical oils, and extended operating hours (till 4:40 AM on weekdays and 24 hours on weekends) to accommodate busy executives and families.",
  },
  {
    question: "Do you offer couples spa packages in Islamabad?",
    answer:
      "Yes! Our private couples suite features side-by-side treatments, romantic aromatherapy, candlelight ambiance, and personalized massage modalities starting at PKR 12,000 for 90 minutes.",
  },
  {
    question: "What should I bring to my spa appointment?",
    answer:
      "You don't need to bring anything. We provide sterilized robes, plush towels, single-use slippers, and premium toiletries. Just arrive 10 minutes prior to your appointment to unwind.",
  },
  {
    question: "How do I book a session at Spa in Islamabad?",
    answer:
      "You can book directly via WhatsApp at +92 370 0802980 or call our front desk for immediate reservations.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bestspaislamabad.com" },
        { "@type": "ListItem", position: 2, name: "Spa in Islamabad", item: "https://bestspaislamabad.com/spa-islamabad" },
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

export default function SpaIslamabadPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-emerald-950/25 via-background to-background border-b border-border/40">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
              <Flower2 className="h-3.5 w-3.5" />
              <span>The Luxury Day Spa Destination in Islamabad</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair tracking-tight text-foreground leading-tight">
              Best Luxury Spa in Islamabad
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Step into an enclave of quiet luxury where world-class bodywork meets peaceful sanctuary. Serving clients across Islamabad, DHA, and Bahria Town with bespoke wellness journeys, organic aromatherapy, and certified therapists.
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
                <span>Late-Night & 24h Weekends</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Sterilized Private Suites</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Certified Therapists</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-500 shrink-0 fill-amber-500" />
                <span>4.9 / 5 Client Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spa Pillars */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl font-bold font-playfair">Bespoke Spa Treatments</h2>
            <p className="text-muted-foreground text-sm">Every treatment is customized using certified botanical extracts and personalized pressure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl p-6 border border-border space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600">
                <Flower2 className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold font-playfair">Aromatherapy Ritual</h3>
              <p className="text-sm text-muted-foreground">
                Organic French lavender, eucalyptus, and sweet citrus oils combined with gentle rhythmic effleurage to melt mental stress.
              </p>
              <div className="text-lg font-bold text-foreground">PKR 6,500 <span className="text-xs text-muted-foreground font-normal">/ 75 mins</span></div>
              <Link href="/services#aromatherapy" className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:underline">
                Explore Aromatherapy <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold font-playfair">Hot Stone Therapy</h3>
              <p className="text-sm text-muted-foreground">
                Heated volcanic basalt stones gently gliding along energy meridians to penetrate deep into muscle layers without forceful pressure.
              </p>
              <div className="text-lg font-bold text-foreground">PKR 7,000 <span className="text-xs text-muted-foreground font-normal">/ 90 mins</span></div>
              <Link href="/services#hot-stone" className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:underline">
                Explore Hot Stone <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold font-playfair">Couples Retreat</h3>
              <p className="text-sm text-muted-foreground">
                Private romantic suite with twin massage beds, candlelight, soothing aromatherapy, and synchronized therapist choreography.
              </p>
              <div className="text-lg font-bold text-foreground">PKR 12,000 <span className="text-xs text-muted-foreground font-normal">/ 90 mins</span></div>
              <Link href="/services#couples" className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:underline">
                Explore Couples Retreat <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/10 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center space-y-3 mb-10">
            <h2 className="text-3xl font-bold font-playfair">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-sm">Everything you need to know about our luxury spa services in Islamabad.</p>
          </div>
          <FAQSection faqs={pageFaqs} />
        </div>
      </section>

      <SEOKeywords />
    </div>
  );
}
