import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Phone, MessageCircle, Clock, MapPin, ShieldCheck, Award, Star, ArrowRight, Activity, CheckCircle2 } from "lucide-react";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

export const metadata: Metadata = {
  title: "Massage Center in Bahria Town | Professional Certified Therapists",
  description:
    "Looking for a licensed, hygienic massage center in Bahria Town? Best Spa Islamabad offers certified full body, Swedish, and deep tissue massages in Phase 7 near Wallayat Complex. Open late until 4:40 AM & 24h weekends.",
  alternates: {
    canonical: "https://bestspaislamabad.com/massage-center-bahria-town",
  },
  openGraph: {
    title: "Massage Center in Bahria Town | Best Spa Islamabad",
    description: "Certified male and female therapists in Bahria Town Phase 7. Professional therapy suites, sterile equipment, and late-night availability.",
    url: "https://bestspaislamabad.com/massage-center-bahria-town",
  },
};

const pageFaqs = [
  {
    question: "Where is your massage center situated in Bahria Town?",
    answer:
      "Our facility is centrally situated in Bahria Town Phase 7, right near Nando's and Wallayat Complex. It is within a quick 5-to-10 minute drive for residents of Phase 1, Phase 2, Phase 3, Phase 4 (Civic Center), Phase 5, Phase 6, and Phase 8.",
  },
  {
    question: "What types of massage services are offered at the Bahria Town center?",
    answer:
      "We provide Full Body Swedish Massage, Deep Tissue Myofascial Therapy, Thai Acupressure, Organic Aromatherapy, Hot Stone Therapy, and Foot Reflexology conducted in sanitized, soundproof private rooms.",
  },
  {
    question: "Do I need to book in advance before visiting?",
    answer:
      "Advance booking is strongly encouraged to ensure your preferred room and certified therapist are immediately ready. You can easily reserve a slot via WhatsApp (+92 370 0802980) or direct phone call.",
  },
  {
    question: "What are your operating hours in Bahria Town?",
    answer:
      "We are open Monday through Friday from 10:00 AM to 4:40 AM (accommodating busy executives and late-night professionals), and 24 hours non-stop every Saturday and Sunday.",
  },
  {
    question: "Is there convenient parking available near the center?",
    answer:
      "Yes, there is secure, spacious public parking available right in front of Wallayat Complex and adjacent commercial zones in Phase 7.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bestspaislamabad.com" },
        { "@type": "ListItem", position: 2, name: "Massage Center Bahria Town", item: "https://bestspaislamabad.com/massage-center-bahria-town" },
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

export default function MassageCenterBahriaTownPage() {
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
              <Activity className="h-3.5 w-3.5" />
              <span>Certified Massage Therapy Center &bull; Bahria Town</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair tracking-tight text-foreground leading-tight">
              Premier Massage Center in Bahria Town
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience genuine physical rejuvenation with certified massage therapists in Bahria Town Phase 7. Whether you are dealing with chronic workstation stiffness, athletic fatigue, or mental burnout, our sterile, soundproof suites near Wallayat Complex offer the highest standard of legitimate therapeutic care.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-lg hover:shadow-emerald-700/25 transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                Reserve on WhatsApp
              </a>
              <a
                href="tel:+923700802980"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 dark:bg-stone-800 hover:bg-stone-800 text-white font-semibold text-sm transition-all"
              >
                <Phone className="h-4 w-4 text-emerald-400" />
                Call 0370 0802980
              </a>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted font-semibold text-sm transition-all"
              >
                Online Booking
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
                <span>Near Wallayat Complex</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Accessibility & Context */}
      <section className="py-16 bg-muted/20 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <h2 className="text-3xl font-bold font-playfair text-foreground">
                Centrally Located for All Bahria Town Phases
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Reaching our massage center in Bahria Town Phase 7 is seamless whether arriving from the Grand Trunk Road entrance or the Bahria Expressway:
              </p>
              <ul className="space-y-3 text-sm text-foreground">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Phase 1 to Phase 6 & Civic Center:</strong> Under 8 minutes via Bahria Expressway through the main Phase 7 boulevard.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Bahria Town Phase 8:</strong> Quick 5-minute commute via the Phase 7/8 connecting bridge.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>DHA Islamabad Phase 1 & 2:</strong> Easily accessible via DHA/Bahria link roads within 12 to 15 minutes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Dedicated Private Suites:</strong> Separate, sound-dampened rooms equipped with fresh organic linen, warm towel warmers, and private en-suite showers.</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm space-y-4">
              <h3 className="text-xl font-bold font-playfair">Visit or Consult Today</h3>
              <p className="text-sm text-muted-foreground">
                Speak directly with our front desk coordinators to customize your session based on your target muscle focus and therapist gender preference.
              </p>
              <div className="p-4 rounded-xl bg-muted/40 space-y-2 text-xs">
                <div><strong>Location:</strong> Bahria Town Phase 7, Near Nando's & Wallayat Complex, Rawalpindi</div>
                <div><strong>Operating Hours:</strong> Mon–Fri: 10:00 AM – 4:40 AM | Sat–Sun: 24 Hours Open</div>
                <div><strong>Direct Contact:</strong> +92 370 0802980</div>
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
                  Call Reception
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Therapies */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl font-bold font-playfair">Targeted Massage Modalities</h2>
            <p className="text-muted-foreground text-sm">Every treatment is customized by our certified practitioners to your physical requirements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl p-6 border border-border space-y-4 hover:shadow-lg transition-shadow flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-playfair">Full Body Swedish Massage</h3>
                <p className="text-sm text-muted-foreground">Long, fluid strokes with therapeutic cold-pressed oils that improve circulation and alleviate general fatigue.</p>
                <div className="text-lg font-bold text-emerald-700 dark:text-emerald-400">PKR 5,000 <span className="text-xs text-muted-foreground font-normal">/ 60 mins</span></div>
              </div>
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="https://wa.me/923700802980?text=Hello%2C%20I%20want%20to%20book%20the%20Full%20Body%20Swedish%20Massage%20(PKR%205%2C000)%20in%20Bahria%20Town."
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
                <h3 className="text-xl font-bold font-playfair">Deep Tissue Muscle Relief</h3>
                <p className="text-sm text-muted-foreground">Slow, firm pressure targeting deep fascia, resolving lower back tension, neck pain, and chronic tightness.</p>
                <div className="text-lg font-bold text-emerald-700 dark:text-emerald-400">PKR 6,000 <span className="text-xs text-muted-foreground font-normal">/ 75 mins</span></div>
              </div>
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="https://wa.me/923700802980?text=Hello%2C%20I%20want%20to%20book%20the%20Deep%20Tissue%20Relief%20(PKR%206%2C000)%20in%20Bahria%20Town."
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
                <h3 className="text-xl font-bold font-playfair">Thai Stretching & Acupressure</h3>
                <p className="text-sm text-muted-foreground">Traditional assisted stretching along bodily energy lines (Sen lines) to maximize flexibility and posture.</p>
                <div className="text-lg font-bold text-emerald-700 dark:text-emerald-400">PKR 7,000 <span className="text-xs text-muted-foreground font-normal">/ 75 mins</span></div>
              </div>
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="https://wa.me/923700802980?text=Hello%2C%20I%20want%20to%20book%20the%20Thai%20Acupressure%20(PKR%207%2C000)%20in%20Bahria%20Town."
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
            <h2 className="text-3xl font-bold font-playfair">Bahria Town Massage FAQs</h2>
            <p className="text-muted-foreground text-sm">Clear, transparent answers for your visit to our Bahria Town center.</p>
          </div>
          <FAQSection faqs={pageFaqs} />
        </div>
      </section>

      <SEOKeywords />
    </div>
  );
}
