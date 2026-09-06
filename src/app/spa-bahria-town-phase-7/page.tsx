import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Phone, MessageCircle, Clock, MapPin, ShieldCheck, Award, Star, ArrowRight, Flower2, Compass } from "lucide-react";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

export const metadata: Metadata = {
  title: "Spa in Bahria Town Phase 7 | Luxury Day Spa near Wallayat Complex",
  description:
    "Looking for a premium spa in Bahria Town Phase 7 Rawalpindi? Best Spa Islamabad offers certified Swedish massage, organic facials, and couple suites right near Nando's and Wallayat Complex. Open late until 4:40 AM & 24h on weekends.",
  alternates: {
    canonical: "https://bestspaislamabad.com/spa-bahria-town-phase-7",
  },
  openGraph: {
    title: "Spa in Bahria Town Phase 7 | Best Spa Islamabad",
    description: "The top-rated day spa located in Bahria Town Phase 7 near Wallayat Complex. Certified therapists, private therapy rooms, and 24/7 weekend service.",
    url: "https://bestspaislamabad.com/spa-bahria-town-phase-7",
  },
};

const pageFaqs = [
  {
    question: "Where exactly is your spa located in Bahria Town Phase 7?",
    answer:
      "We are situated in the primary commercial area of Bahria Town Phase 7, Rawalpindi, right near Nando's and the Wallayat Complex. This provides effortless walking or driving access for residents of Phase 7, Corniche Road, and the Spring North/South sectors.",
  },
  {
    question: "What treatments are featured at the Phase 7 spa center?",
    answer:
      "Our menu includes Swedish Full Body Relaxation, Deep Tissue Myofascial Massage, Thai Therapy, Hot Stone Basalt Massage, Aromatherapy, Foot Reflexology, and Luxury Couples Spa packages.",
  },
  {
    question: "What are your operational hours in Phase 7?",
    answer:
      "We are open Monday through Friday from 10:00 AM to 4:40 AM, and 24 hours non-stop throughout Saturday and Sunday, allowing convenient visits anytime day or night.",
  },
  {
    question: "How do I make a reservation at the Phase 7 location?",
    answer:
      "Simply send a quick WhatsApp message to +92 370 0802980 or tap Call to speak directly with our reception. We will reserve your private suite instantly.",
  },
  {
    question: "Is parking readily available in Phase 7?",
    answer:
      "Yes, extensive paved parking is available directly in front of the commercial complex with 24/7 Bahria Town security surveillance.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bestspaislamabad.com" },
        { "@type": "ListItem", position: 2, name: "Spa Bahria Town Phase 7", item: "https://bestspaislamabad.com/spa-bahria-town-phase-7" },
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

export default function SpaBahriaTownPhase7Page() {
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
              <Compass className="h-3.5 w-3.5" />
              <span>Phase 7 Commercial Hub &bull; Near Wallayat Complex</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair tracking-tight text-foreground leading-tight">
              Best Spa in Bahria Town Phase 7
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Step into an enclave of quiet serenity in the center of Bahria Town Phase 7. Located moments from Nando’s and Wallayat Complex, our luxury day spa offers world-class massage therapy, organic body scrubs, and restorative rituals carried out by certified professionals.
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
                Directions to Phase 7
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
                <span>Licensed Spa</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Phase 7 Commercial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Landmark Convenience */}
      <section className="py-16 bg-muted/20 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold font-playfair">Unrivaled Convenience in Bahria Phase 7</h2>
            <p className="text-muted-foreground leading-relaxed">
              Bahria Town Phase 7 is the lifestyle and culinary center of the twin cities. Whether you are finishing dinner along the main commercial strip, wrapping up an evening at Wallayat Complex, or returning home to Bahria Phase 7 or Phase 8, our private spa retreat offers the perfect venue to decompress.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-card border border-border space-y-2">
                <h3 className="font-semibold text-sm">Nearby Phase 7 Landmarks</h3>
                <p className="text-xs text-muted-foreground">Within 1-3 minutes of Nando’s, Hardee’s, Wallayat Complex, Clock Tower commercial plaza, and Corniche Road.</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border space-y-2">
                <h3 className="font-semibold text-sm">Late-Night Accessibility</h3>
                <p className="text-xs text-muted-foreground">Open until 4:40 AM on weekdays and 24 hours on weekends. Late night appointments with full security and dedicated parking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Therapies */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl font-bold font-playfair">Signature Phase 7 Spa Services</h2>
            <p className="text-muted-foreground text-sm">Indulge in our most sought-after restorative therapies.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl p-6 border border-border space-y-4 hover:shadow-lg transition-shadow flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-playfair">Relaxing Swedish Massage</h3>
                <p className="text-sm text-muted-foreground">Classic effleurage and petrissage strokes to melt away muscular stiffness and daily cognitive stress.</p>
                <div className="text-lg font-bold text-emerald-700 dark:text-emerald-400">PKR 5,000 <span className="text-xs text-muted-foreground font-normal">/ 60 mins</span></div>
              </div>
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="https://wa.me/923700802980?text=Hello%2C%20I%20want%20to%20book%20the%20Swedish%20Massage%20(PKR%205%2C000)%20in%20Bahria%20Phase%207."
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
                <h3 className="text-xl font-bold font-playfair">Pure Botanical Aromatherapy</h3>
                <p className="text-sm text-muted-foreground">Gentle full-body application of pure essential extracts designed to soothe anxiety and encourage sound sleep.</p>
                <div className="text-lg font-bold text-emerald-700 dark:text-emerald-400">PKR 6,500 <span className="text-xs text-muted-foreground font-normal">/ 60 mins</span></div>
              </div>
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="https://wa.me/923700802980?text=Hello%2C%20I%20want%20to%20book%20the%20Aromatherapy%20(PKR%206%2C500)%20in%20Bahria%20Phase%207."
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
                <h3 className="text-xl font-bold font-playfair">Heated Basalt Stone Massage</h3>
                <p className="text-sm text-muted-foreground">Warm volcanic stones glide smoothly over tension points, penetrating deep muscle tissues effortlessly.</p>
                <div className="text-lg font-bold text-emerald-700 dark:text-emerald-400">PKR 8,000 <span className="text-xs text-muted-foreground font-normal">/ 75 mins</span></div>
              </div>
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="https://wa.me/923700802980?text=Hello%2C%20I%20want%20to%20book%20the%20Hot%20Stone%20Massage%20(PKR%208%2C000)%20in%20Bahria%20Phase%207."
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
            <h2 className="text-3xl font-bold font-playfair">Bahria Phase 7 Spa FAQs</h2>
            <p className="text-muted-foreground text-sm">Key details for your reservation at our Phase 7 facility.</p>
          </div>
          <FAQSection faqs={pageFaqs} />
        </div>
      </section>

      <SEOKeywords />
    </div>
  );
}
