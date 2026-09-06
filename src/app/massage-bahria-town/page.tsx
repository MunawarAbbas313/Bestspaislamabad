import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Phone, MessageCircle, Clock, MapPin, ShieldCheck, Award, Star, ArrowRight } from "lucide-react";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

export const metadata: Metadata = {
  title: "Massage in Bahria Town | Professional Therapists & Bodywork",
  description:
    "Looking for a professional massage in Bahria Town? Best Spa Islamabad offers certified Swedish, Thai, and Deep Tissue massage therapies in Phase 7 near Wallayat Complex. Late night sessions till 4:40 AM & 24h weekends.",
  alternates: {
    canonical: "https://bestspaislamabad.com/massage-bahria-town",
  },
  openGraph: {
    title: "Massage in Bahria Town | Best Spa Islamabad",
    description: "Professional body massage in Bahria Town. Certified therapists, private suites, and late night hours.",
    url: "https://bestspaislamabad.com/massage-bahria-town",
  },
};

const pageFaqs = [
  {
    question: "What massage options do you offer in Bahria Town?",
    answer:
      "We offer Swedish massage, deep tissue therapy, traditional Thai massage, hot stone massage, and full body relaxation therapies. Session lengths range from 60 to 90 minutes.",
  },
  {
    question: "Can I get a massage late at night in Bahria Town?",
    answer:
      "Yes! We are open Monday to Friday until 4:40 AM for late-night sessions, and open 24 hours round-the-clock on Saturday and Sunday.",
  },
  {
    question: "Where are you located in Bahria Town?",
    answer:
      "We are in Bahria Town Phase 7, Near Nando's & Wallayat Complex, with private parking and discreet suites.",
  },
  {
    question: "How do I book a massage session?",
    answer:
      "Simply text our official WhatsApp number at +92 370 0802980 or call our reception.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bestspaislamabad.com" },
        { "@type": "ListItem", position: 2, name: "Massage in Bahria Town", item: "https://bestspaislamabad.com/massage-bahria-town" },
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

export default function MassageBahriaTownPage() {
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
              <span>Certified Body Massage in Bahria Town</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair tracking-tight text-foreground leading-tight">
              Professional Massage in Bahria Town
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Relieve accumulated fatigue, release painful muscle knots, and soothe your senses. Our certified therapists provide tailored treatments designed for modern professionals and residents across Bahria Town.
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

      {/* Treatments */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl p-6 border border-border space-y-4 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold font-playfair">Swedish Massage</h3>
              <p className="text-sm text-muted-foreground">Rhythmic strokes, increased circulation, and total nervous system calming.</p>
              <div className="text-lg font-bold text-foreground">PKR 5,000 <span className="text-xs text-muted-foreground font-normal">/ 60 mins</span></div>
              <Link href="/services#swedish" className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:underline">
                Explore Swedish <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border space-y-4 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold font-playfair">Deep Tissue Massage</h3>
              <p className="text-sm text-muted-foreground">Firm myofascial pressure to break stubborn fibrous knots and release trapped nerves.</p>
              <div className="text-lg font-bold text-foreground">PKR 6,000 <span className="text-xs text-muted-foreground font-normal">/ 75 mins</span></div>
              <Link href="/services#deep-tissue" className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:underline">
                Explore Deep Tissue <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border space-y-4 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold font-playfair">Thai Stretching Massage</h3>
              <p className="text-sm text-muted-foreground">Dynamic passive stretching and acupressure to unlock tight hips and shoulders.</p>
              <div className="text-lg font-bold text-foreground">PKR 6,500 <span className="text-xs text-muted-foreground font-normal">/ 90 mins</span></div>
              <Link href="/services#thai" className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:underline">
                Explore Thai <ArrowRight className="h-3 w-3" />
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
            <p className="text-muted-foreground text-sm">Everything to know before booking your massage in Bahria Town.</p>
          </div>
          <FAQSection faqs={pageFaqs} />
        </div>
      </section>

      <SEOKeywords />
    </div>
  );
}
