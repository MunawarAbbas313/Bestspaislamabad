import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Phone, MessageCircle, Clock, MapPin, CheckCircle2, ShieldCheck, Award, Star, ArrowRight } from "lucide-react";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

export const metadata: Metadata = {
  title: "Massage Center Islamabad | Luxury Full Body & Thai Massage",
  description:
    "Looking for the top-rated massage center in Islamabad? Enjoy certified Swedish, Thai, Deep Tissue, and Full Body massage therapies at Best Spa Islamabad. Open Mon-Fri till 4:40 AM and 24 hours on weekends.",
  alternates: {
    canonical: "https://bestspaislamabad.com/massage-center-islamabad",
  },
  openGraph: {
    title: "Massage Center Islamabad | Best Spa Islamabad",
    description: "Islamabad's premier massage center. Certified therapists, private suites, and late-night sessions.",
    url: "https://bestspaislamabad.com/massage-center-islamabad",
  },
};

const pageFaqs = [
  {
    question: "What types of therapies are available at Massage Center Islamabad?",
    answer:
      "We offer Swedish massage, authentic Thai massage, deep tissue myofascial release, hot volcanic stone therapy, aromatherapy, and romantic couples massage packages. Every session is customized to your pressure preferences.",
  },
  {
    question: "What are your operating hours in Islamabad?",
    answer:
      "Best Spa Islamabad is open Monday to Friday from 10:00 AM until 4:40 AM for late-night sessions, and open 24 hours round-the-clock on Saturday and Sunday.",
  },
  {
    question: "Where is the massage center located?",
    answer:
      "We are conveniently located in Bahria Town Phase 7, Near Nando's & Wallayat Complex, easily accessible within 15-20 minutes from DHA Islamabad, Gulberg Greens, PWD, and the Islamabad Expressway.",
  },
  {
    question: "Do I need to book in advance?",
    answer:
      "While walk-ins are accepted subject to therapist availability, advance booking via WhatsApp (0370 0802980) is strongly recommended to guarantee your preferred private suite and time slot.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bestspaislamabad.com" },
        { "@type": "ListItem", position: 2, name: "Massage Center Islamabad", item: "https://bestspaislamabad.com/massage-center-islamabad" },
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

export default function MassageCenterIslamabadPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-emerald-950/20 via-background to-background border-b border-border/40">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Premier Massage Center in Islamabad & Bahria Town</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair tracking-tight text-foreground leading-tight">
              Top-Rated Massage Center in Islamabad
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Escape daily stress and rejuvenate your body with certified therapists at <strong>Best Spa Islamabad</strong>. Conveniently situated in Bahria Town Phase 7 near Wallayat Complex and Nando's, we offer an oasis of calm for residents of Islamabad, DHA, and Rawalpindi.
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

            {/* Quick Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border/60 text-xs font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Open till 4:40 AM & 24h Weekends</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>100% Private Suites</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Certified Therapists</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-500 shrink-0 fill-amber-500" />
                <span>4.9 / 5 Rating (184+ Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Treatments */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl font-bold font-playfair">Popular Massage Therapies</h2>
            <p className="text-muted-foreground text-sm">
              Tailored modalities designed to relieve chronic muscle tension, improve circulation, and quiet mental chatter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl p-6 border border-border space-y-4 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold font-playfair text-emerald-700 dark:text-emerald-400">Swedish Massage</h3>
              <p className="text-sm text-muted-foreground">
                Classic long gliding strokes and gentle kneading to melt full-body fatigue and improve arterial oxygen flow.
              </p>
              <div className="text-lg font-bold text-foreground">PKR 5,000 <span className="text-xs text-muted-foreground font-normal">/ 60 mins</span></div>
              <Link href="/services#swedish" className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:underline">
                Explore Swedish Details <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-emerald-600/30 ring-2 ring-emerald-600/20 space-y-4 shadow-md">
              <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-600 text-white">Most Popular</div>
              <h3 className="text-xl font-bold font-playfair text-emerald-700 dark:text-emerald-400">Deep Tissue Massage</h3>
              <p className="text-sm text-muted-foreground">
                Focused pressure targeting deep muscular layers, trigger points, chronic neck stiffness, and sciatic pain.
              </p>
              <div className="text-lg font-bold text-foreground">PKR 6,000 <span className="text-xs text-muted-foreground font-normal">/ 75 mins</span></div>
              <Link href="/services#deep-tissue" className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:underline">
                Explore Deep Tissue Details <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border space-y-4 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold font-playfair text-emerald-700 dark:text-emerald-400">Traditional Thai Massage</h3>
              <p className="text-sm text-muted-foreground">
                Ancient assisted yoga stretches and rhythmic acupressure along energy meridians to restore joint flexibility.
              </p>
              <div className="text-lg font-bold text-foreground">PKR 6,500 <span className="text-xs text-muted-foreground font-normal">/ 90 mins</span></div>
              <Link href="/services#thai" className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:underline">
                Explore Thai Massage Details <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Accessibility */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-playfair">Convenient Location for Islamabad & Rawalpindi</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Located right at <strong>Bahria Town Phase 7 near Nando's & Wallayat Complex</strong>, our facility offers rapid access from all major arteries including the Islamabad Expressway, GT Road, DHA Phase 1 & 2, PWD, and Gulberg Greens.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Ample, secure and private parking directly on-site.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Discreet private entrance ensuring complete client confidentiality.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Open late until 4:40 AM on weekdays and 24 hours on weekends.</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/location"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
                >
                  View Turn-by-Turn Driving Directions <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-900 to-stone-900 text-white p-8 rounded-3xl space-y-6 shadow-xl">
              <h3 className="text-2xl font-bold font-playfair">Reserve Your Massage Suite</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Connect directly with our front desk receptionist on WhatsApp to confirm therapist availability and schedule your appointment today.
              </p>
              <div className="space-y-2 text-xs text-stone-300">
                <p>📍 Bahria Town Phase 7, Near Nando's & Wallayat Complex</p>
                <p>📞 Phone / WhatsApp: +92 370 0802980</p>
                <p>⏰ Mon–Fri: 10:00 AM – 4:40 AM | Sat–Sun: 24 Hours Open</p>
              </div>
              <a
                href="/whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-md"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/10 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center space-y-3 mb-10">
            <h2 className="text-3xl font-bold font-playfair">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-sm">Everything you need to know about visiting our massage center in Islamabad.</p>
          </div>
          <FAQSection faqs={pageFaqs} />
        </div>
      </section>

      <SEOKeywords />
    </div>
  );
}
