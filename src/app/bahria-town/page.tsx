import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Phone, MessageCircle, Clock, MapPin, ShieldCheck, Award, Star, ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

export const metadata: Metadata = {
  title: "Spa & Massage in Bahria Town | Top Rated Wellness Center",
  description:
    "Discover premier massage and spa therapy across Bahria Town. Best Spa Islamabad in Phase 7 near Wallayat Complex serves Phase 1 through 8 with certified Swedish and deep tissue treatments. Open till 4:40 AM & 24h weekends.",
  alternates: {
    canonical: "https://bestspaislamabad.com/bahria-town",
  },
  openGraph: {
    title: "Spa & Massage in Bahria Town | Best Spa Islamabad",
    description: "Centrally located in Bahria Town Phase 7 near Wallayat Complex. Full body massages, couples therapies, and late night wellness.",
    url: "https://bestspaislamabad.com/bahria-town",
  },
};

const pageFaqs = [
  {
    question: "Which phases of Bahria Town do you cater to?",
    answer:
      "Our facility is centrally located in Bahria Town Phase 7 near Wallayat Complex, making it easily accessible within 5 to 12 minutes from Phase 1, Phase 2, Phase 3, Phase 4 (Civic Center), Phase 5, Phase 6, Phase 7, and Phase 8.",
  },
  {
    question: "Why do Bahria Town residents choose Best Spa?",
    answer:
      "Residents rely on us because we offer genuine hospital-grade cleanliness, verified certified therapists, private ensuite shower rooms, and flexible operating hours (weekdays until 4:40 AM, and 24 hours round-the-clock on weekends).",
  },
  {
    question: "Do I need an advance appointment from Bahria Town?",
    answer:
      "Advance reservations are highly advised to avoid waiting times during peak evening and weekend hours. You can instantly lock in your room and preferred therapist over WhatsApp.",
  },
  {
    question: "What are your popular treatments for Bahria Town clients?",
    answer:
      "Our most popular modalities include Full Body Swedish Massage, Deep Tissue Myofascial Therapy, Organic Aromatherapy, and Luxury Couples Spa sessions.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bestspaislamabad.com" },
        { "@type": "ListItem", position: 2, name: "Bahria Town Wellness", item: "https://bestspaislamabad.com/bahria-town" },
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

export default function BahriaTownPage() {
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
              <Building2 className="h-3.5 w-3.5" />
              <span>Serving All Bahria Town Communities &bull; Phases 1–8</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair tracking-tight text-foreground leading-tight">
              Spa & Massage in Bahria Town
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience the pinnacle of bodywork therapy and luxury relaxation in Bahria Town. Based in Phase 7 near Wallayat Complex, Best Spa Islamabad provides a clean, private, and peaceful sanctuary for residents seeking physical renewal and nervous system relief.
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
              <Link
                href="/massage-services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted font-semibold text-sm transition-all"
              >
                View Services
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border/60 text-xs font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Open till 4:40 AM Mon–Fri</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>24h Weekends</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Certified Staff</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Phase 7 Commercial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Reach */}
      <section className="py-16 bg-muted/20 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold font-playfair">Dedicated to the Bahria Town Community</h2>
            <p className="text-muted-foreground leading-relaxed">
              Whether you reside in the tranquil avenues of Phase 2, the bustling vicinity of Civic Center Phase 4, or the scenic sectors of Phase 8, our facility in Phase 7 is positioned right on the primary boulevard with rapid connectivity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-card border border-border space-y-2">
                <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Phases 1, 2, 3 & 4</span>
                </div>
                <p className="text-xs text-muted-foreground">Direct drive down Bahria Expressway into Phase 7 with zero traffic congestion outside rush hours.</p>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border space-y-2">
                <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Phases 5, 6, 7 & 8</span>
                </div>
                <p className="text-xs text-muted-foreground">Instant 3 to 6 minute access via Phase 7 commercial roads with ample private and public parking bays.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Treatments */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl font-bold font-playfair">Signature Therapies in Bahria Town</h2>
            <p className="text-muted-foreground text-sm">Every session is performed by qualified therapists using pure botanical oils.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl p-6 border border-border space-y-4 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold font-playfair">Full Body Swedish Massage</h3>
              <p className="text-sm text-muted-foreground">Gentle, flowing strokes that ease mental stress, soothe muscles, and optimize blood circulation.</p>
              <div className="text-lg font-bold text-foreground">PKR 5,000 <span className="text-xs text-muted-foreground font-normal">/ 60 mins</span></div>
              <Link href="/full-body-massage" className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:underline">
                View Full Body Details <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border space-y-4 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold font-playfair">Deep Muscle Restoration</h3>
              <p className="text-sm text-muted-foreground">Firm myofascial trigger point therapy to alleviate back spasms, neck tension, and postural fatigue.</p>
              <div className="text-lg font-bold text-foreground">PKR 6,000 <span className="text-xs text-muted-foreground font-normal">/ 75 mins</span></div>
              <Link href="/body-massage" className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:underline">
                View Deep Tissue Details <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border space-y-4 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold font-playfair">Botanical Aromatherapy</h3>
              <p className="text-sm text-muted-foreground">Nourishing essential oils of lavender and eucalyptus applied with soothing effleurage.</p>
              <div className="text-lg font-bold text-foreground">PKR 6,500 <span className="text-xs text-muted-foreground font-normal">/ 60 mins</span></div>
              <Link href="/spa-services" className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:underline">
                View Aromatherapy Details <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/10 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center space-y-3 mb-10">
            <h2 className="text-3xl font-bold font-playfair">Bahria Town Community FAQs</h2>
            <p className="text-muted-foreground text-sm">Frequently asked questions by our Bahria Town clientele.</p>
          </div>
          <FAQSection faqs={pageFaqs} />
        </div>
      </section>

      <SEOKeywords />
    </div>
  );
}
