import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Phone, MessageCircle, Clock, MapPin, ShieldCheck, Award, Star, ArrowRight, Navigation, CheckCircle2 } from "lucide-react";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

export const metadata: Metadata = {
  title: "Bahria Town Phase 7 Massage & Spa | Near Wallayat Complex",
  description:
    "Experience certified massage therapy in Bahria Town Phase 7, Rawalpindi. Best Spa Islamabad is located near Nando's and Wallayat Complex. Full body, Swedish, deep tissue & late night slots. Open till 4:40 AM & 24h weekends.",
  alternates: {
    canonical: "https://bestspaislamabad.com/bahria-town-phase-7",
  },
  openGraph: {
    title: "Bahria Town Phase 7 Massage & Spa | Best Spa Islamabad",
    description: "Your local wellness sanctuary in Bahria Town Phase 7 near Wallayat Complex. Certified therapists, private suites, and 24/7 weekend service.",
    url: "https://bestspaislamabad.com/bahria-town-phase-7",
  },
};

const pageFaqs = [
  {
    question: "Where exactly in Phase 7 are you located?",
    answer:
      "We are situated in the primary commercial boulevard of Bahria Town Phase 7, Rawalpindi, within immediate walking distance of Nando's and Wallayat Complex.",
  },
  {
    question: "Can I walk in or do I need to book on WhatsApp?",
    answer:
      "While walk-in guests are welcomed subject to room availability, booking in advance via WhatsApp (+92 370 0802980) guarantees that your private suite is pre-sanitized and ready upon arrival.",
  },
  {
    question: "What are the operating hours in Bahria Phase 7?",
    answer:
      "We are open Monday to Friday from 10:00 AM to 4:40 AM, and 24 hours round-the-clock on Saturdays and Sundays.",
  },
  {
    question: "What facilities are included in each treatment suite?",
    answer:
      "Each private suite features acoustic sound dampening, adjustable climate control, clean organic cotton linen, mood lighting, aromatherapy diffusers, and an attached private hot shower.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bestspaislamabad.com" },
        { "@type": "ListItem", position: 2, name: "Bahria Town Phase 7", item: "https://bestspaislamabad.com/bahria-town-phase-7" },
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

export default function BahriaTownPhase7Page() {
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
              <Navigation className="h-3.5 w-3.5" />
              <span>Phase 7 Commercial Hub &bull; Near Nando's & Wallayat Complex</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair tracking-tight text-foreground leading-tight">
              Bahria Town Phase 7 Massage & Spa
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Elevate your wellness right here in Bahria Town Phase 7. Conveniently located near Nando's and Wallayat Complex, Best Spa Islamabad offers certified massage therapy, peaceful treatment suites, and round-the-clock weekend availability.
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
                href="/location"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted font-semibold text-sm transition-all"
              >
                Get Phase 7 Directions
              </Link>
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
                <span>Certified Therapists</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Wallayat Complex</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Landmark Convenience */}
      <section className="py-16 bg-muted/20 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <h2 className="text-3xl font-bold font-playfair text-foreground">
                The Heart of Bahria Town Phase 7
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Phase 7 center is positioned in the commercial epicenter of Bahria Town Rawalpindi, providing convenient access whether you are local to Phase 7 or commuting from surrounding neighborhoods:
              </p>
              <ul className="space-y-3 text-sm text-foreground">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Near Nando's & Wallayat Complex:</strong> Recognizable landmarks make reaching our venue effortless.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Phase 8 Connectivity:</strong> Just 5 minutes over the bridge from Phase 8.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Secure Parking:</strong> Plentiful parking bays right in front of the complex with 24-hour security.</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm space-y-4">
              <h3 className="text-xl font-bold font-playfair">Reserve Your Phase 7 Room</h3>
              <p className="text-sm text-muted-foreground">
                Choose your preferred therapy duration, time, and certified therapist gender. We handle the rest.
              </p>
              <div className="p-4 rounded-xl bg-muted/40 space-y-2 text-xs">
                <div><strong>Address:</strong> Bahria Town Phase 7, Near Nando's & Wallayat Complex, Rawalpindi</div>
                <div><strong>Hours:</strong> Mon–Fri: 10:00 AM – 4:40 AM | Sat–Sun: 24 Hours Open</div>
                <div><strong>Phone / WhatsApp:</strong> +92 370 0802980</div>
              </div>
              <div className="flex gap-3">
                <a
                  href="/whatsapp"
                  className="flex-1 text-center py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold"
                >
                  WhatsApp Now
                </a>
                <a
                  href="tel:+923700802980"
                  className="flex-1 text-center py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Treatments */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl font-bold font-playfair">Popular Treatments in Phase 7</h2>
            <p className="text-muted-foreground text-sm">Professional therapies carried out in peaceful, private rooms.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl p-6 border border-border space-y-4 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold font-playfair">Full Body Swedish Therapy</h3>
              <p className="text-sm text-muted-foreground">Soothing strokes to melt away muscular stiffness and daily stress.</p>
              <div className="text-lg font-bold text-foreground">PKR 5,000 <span className="text-xs text-muted-foreground font-normal">/ 60 mins</span></div>
              <Link href="/full-body-massage" className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:underline">
                View Full Body <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border space-y-4 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold font-playfair">Deep Tissue Muscle Relief</h3>
              <p className="text-sm text-muted-foreground">Targeted deep pressure for chronic neck stiffness, lower back pain, and tight hips.</p>
              <div className="text-lg font-bold text-foreground">PKR 6,000 <span className="text-xs text-muted-foreground font-normal">/ 75 mins</span></div>
              <Link href="/body-massage" className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:underline">
                View Deep Tissue <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border space-y-4 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold font-playfair">Couples Suite Package</h3>
              <p className="text-sm text-muted-foreground">Side-by-side couples massage in our luxury ambient suite with floral aromatherapy.</p>
              <div className="text-lg font-bold text-foreground">PKR 12,000 <span className="text-xs text-muted-foreground font-normal">/ 90 mins</span></div>
              <Link href="/services#couples" className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:underline">
                View Couples Details <ArrowRight className="h-3 w-3" />
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
            <p className="text-muted-foreground text-sm">Key details for your reservation at our Phase 7 facility.</p>
          </div>
          <FAQSection faqs={pageFaqs} />
        </div>
      </section>

      <SEOKeywords />
    </div>
  );
}
