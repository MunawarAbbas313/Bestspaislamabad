import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Phone, MessageCircle, Clock, MapPin, ShieldCheck, Award, Star, ArrowRight, Flower2, HeartHandshake } from "lucide-react";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

export const metadata: Metadata = {
  title: "Spa in Rawalpindi | Luxury Day Spa & Wellness Center",
  description:
    "Seeking a premier, hygienic spa in Rawalpindi? Best Spa Islamabad offers world-class day spa rituals, Swedish massages, and organic aromatherapy in Bahria Phase 7. Open late until 4:40 AM & 24h on weekends.",
  alternates: {
    canonical: "https://bestspaislamabad.com/spa-rawalpindi",
  },
  openGraph: {
    title: "Spa in Rawalpindi | Best Spa Islamabad",
    description: "Luxury day spa facilities serving Rawalpindi and Bahria Town. Certified therapists, organic scrubs, hot stone rituals, and peaceful private suites.",
    url: "https://bestspaislamabad.com/spa-rawalpindi",
  },
};

const pageFaqs = [
  {
    question: "How can clients from Rawalpindi reach Best Spa?",
    answer:
      "Our spa is located in Bahria Town Phase 7, Near Nando's & Wallayat Complex, Rawalpindi. We are directly accessible via GT Road and Islamabad Expressway, providing an easy drive from Saddar, Chaklala Scheme 3, Morgah, Gulraiz, and Askari sectors.",
  },
  {
    question: "What distinguishes your spa in Rawalpindi from standard parlors?",
    answer:
      "We operate as a clinical-grade wellness sanctuary with certified international-standard therapists, private soundproof treatment rooms, organic therapeutic-grade essential oils, and uncompromised hygiene protocols.",
  },
  {
    question: "What are your operating hours for Rawalpindi visitors?",
    answer:
      "We are open Monday to Friday from 10:00 AM to 4:40 AM (allowing late-night relaxation after demanding workdays), and open 24 hours continuously on Saturdays and Sundays.",
  },
  {
    question: "Can couples book simultaneous spa treatments?",
    answer:
      "Yes, we provide specialized couples spa packages in private suites furnished with ambient lighting, fresh floral touches, and simultaneous certified therapy sessions.",
  },
  {
    question: "How do I secure an appointment from Rawalpindi?",
    answer:
      "You can immediately reserve your appointment by messaging us on WhatsApp at +92 370 0802980 or calling our front desk. Walk-ins are accepted based on room availability.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bestspaislamabad.com" },
        { "@type": "ListItem", position: 2, name: "Spa Rawalpindi", item: "https://bestspaislamabad.com/spa-rawalpindi" },
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

export default function SpaRawalpindiPage() {
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
              <span>Sanctuary of Peace &bull; Rawalpindi</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair tracking-tight text-foreground leading-tight">
              Best Spa in Rawalpindi
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Escape the urban hustle of Rawalpindi and step into an environment dedicated solely to rest and physical restoration. Situated in Bahria Town Phase 7 near Wallayat Complex, our spa combines soothing aromatherapy, hot stone therapy, and master Swedish bodywork to replenish your vitality.
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
                href="/spa-services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted font-semibold text-sm transition-all"
              >
                View Spa Packages
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
                <span>Hospital Hygiene</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-500 shrink-0 fill-amber-500" />
                <span>4.9 / 5 Guest Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Rawalpindi Chooses Us */}
      <section className="py-16 bg-muted/20 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl font-bold font-playfair text-foreground">
              Why Rawalpindi Residents Choose Our Spa Sanctuary
            </h2>
            <p className="text-muted-foreground text-sm">
              Discover the standard of comfort that keeps guests returning from across the Twin Cities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-2xl border border-border space-y-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-700">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold font-playfair">Uncompromising Sanitation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Freshly laundered organic cotton towels, single-use slippers, UV-sterilized therapy tools, and private en-suite hot showers ensure peak hygiene.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border space-y-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-700">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold font-playfair">Vetted Certified Therapists</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All therapy staff have extensive professional training in anatomy, ergonomics, and international spa techniques, upholding respectful boundaries.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border space-y-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-700">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold font-playfair">Accessible From All Sectors</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Conveniently located right at Bahria Town Phase 7 with ample secure parking, avoiding dense downtown Rawalpindi traffic and parking congestion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spa Menu Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl font-bold font-playfair">Popular Spa Rituals</h2>
            <p className="text-muted-foreground text-sm">Experience our signature day spa therapies designed for mind, muscle, and body wellness.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl p-6 border border-border space-y-4 hover:shadow-lg transition-shadow flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-playfair">Aromatherapy Spa Ritual</h3>
                <p className="text-sm text-muted-foreground">Custom botanical blends of lavender, eucalyptus, and chamomile infused into gentle relaxation strokes.</p>
                <div className="text-lg font-bold text-emerald-700 dark:text-emerald-400">PKR 6,500 <span className="text-xs text-muted-foreground font-normal">/ 60 mins</span></div>
              </div>
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="https://wa.me/923700802980?text=Hello%2C%20I%20want%20to%20book%20the%20Aromatherapy%20Spa%20Ritual%20(PKR%206%2C500)%20in%20Rawalpindi."
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
                <h3 className="text-xl font-bold font-playfair">Hot Stone Mineral Therapy</h3>
                <p className="text-sm text-muted-foreground">Smooth heated volcanic basalt stones placed along spinal energy centers to melt away deep muscular knots.</p>
                <div className="text-lg font-bold text-emerald-700 dark:text-emerald-400">PKR 8,000 <span className="text-xs text-muted-foreground font-normal">/ 75 mins</span></div>
              </div>
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="https://wa.me/923700802980?text=Hello%2C%20I%20want%20to%20book%20the%20Hot%20Stone%20Therapy%20(PKR%208%2C000)%20in%20Rawalpindi."
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
                <h3 className="text-xl font-bold font-playfair">Executive Rejuvenation Spa</h3>
                <p className="text-sm text-muted-foreground">Combined Swedish full body massage, organic facial cleanse, and foot reflexology treatment.</p>
                <div className="text-lg font-bold text-emerald-700 dark:text-emerald-400">PKR 10,000 <span className="text-xs text-muted-foreground font-normal">/ 90 mins</span></div>
              </div>
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="https://wa.me/923700802980?text=Hello%2C%20I%20want%20to%20book%20the%20Executive%20Package%20(PKR%2010%2C000)%20in%20Rawalpindi."
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

      {/* Rawalpindi FAQs */}
      <section className="py-16 bg-muted/10 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center space-y-3 mb-10">
            <h2 className="text-3xl font-bold font-playfair">Frequently Asked Questions &bull; Rawalpindi Spa</h2>
            <p className="text-muted-foreground text-sm">Essential booking and location information for guests visiting from Rawalpindi.</p>
          </div>
          <FAQSection faqs={pageFaqs} />
        </div>
      </section>

      <SEOKeywords />
    </div>
  );
}
