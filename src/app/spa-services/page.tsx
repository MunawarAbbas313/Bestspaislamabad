import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Phone, MessageCircle, Clock, ShieldCheck, Award, Star, ArrowRight, Flower2, Heart, CheckCircle2 } from "lucide-react";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

export const metadata: Metadata = {
  title: "Spa Services Islamabad | Luxury Treatment Menu & Pricing",
  description:
    "Explore the complete spa and massage treatment menu at Best Spa Islamabad. Swedish, Deep Tissue, Thai, Hot Stone, Aromatherapy, and Couples packages. Open Mon-Fri till 4:40 AM & 24h weekends.",
  alternates: {
    canonical: "https://bestspaislamabad.com/spa-services",
  },
  openGraph: {
    title: "Spa Services Islamabad | Complete Treatment Menu",
    description: "Explore all luxury massage and wellness treatments available at Best Spa Islamabad.",
    url: "https://bestspaislamabad.com/spa-services",
  },
};

const servicesList = [
  {
    title: "Swedish Massage Therapy",
    duration: "60 / 90 Minutes",
    price: "PKR 5,000 / PKR 7,500",
    description: "The classic European relaxation massage using gentle gliding effleurage, kneading, and light friction to boost blood circulation and soothe the nervous system.",
    benefits: ["Relieves general stress", "Improves arterial blood flow", "Enhances sleep quality"],
    target: "/services#swedish",
  },
  {
    title: "Deep Tissue & Trigger Point Therapy",
    duration: "75 Minutes",
    price: "PKR 6,000",
    description: "Intense, focused manual pressure applied directly to chronic muscle knots, myofascial adhesions, and restricted spinal tendons.",
    benefits: ["Dissolves stubborn knots", "Alleviates sciatica", "Releases desk-bound neck tension"],
    target: "/services#deep-tissue",
  },
  {
    title: "Traditional Thai Massage (Nuad Boran)",
    duration: "90 Minutes",
    price: "PKR 6,500",
    description: "Ancient floor-mat bodywork combining passive yoga stretching, joint mobilization, and rhythmic acupressure along Sen energy meridians.",
    benefits: ["Expands hip & spine flexibility", "Boosts vitality", "Corrects postural imbalances"],
    target: "/services#thai",
  },
  {
    title: "Hot Volcanic Stone Therapy",
    duration: "90 Minutes",
    price: "PKR 7,000",
    description: "Smooth basalt volcanic stones heated to optimal soothing temperatures, delivering deep penetrative heat into tight muscles without pain.",
    benefits: ["Melt deep muscle tension", "Calms joint stiffness", "Superior cold-weather comfort"],
    target: "/services#hot-stone",
  },
  {
    title: "Organic Aromatherapy Ritual",
    duration: "75 Minutes",
    price: "PKR 6,500",
    description: "Multi-sensory massage utilizing imported pure essential oils (French Lavender, Blue Eucalyptus, Lemongrass) that penetrate skin and soothe the mind.",
    benefits: ["Reduces anxiety & mental fatigue", "Nourishes the skin", "Clears respiratory pathways"],
    target: "/services#aromatherapy",
  },
  {
    title: "Private Couples Massage Suite",
    duration: "90 Minutes",
    price: "PKR 12,000",
    description: "Side-by-side synchronized massage session in an exclusive VIP suite with candlelight, rose petals, and soothing scents. Perfect for anniversaries and dates.",
    benefits: ["Shared relaxation memory", "Private luxury suite", "Customized pressure per person"],
    target: "/services#couples",
  },
];

const pageFaqs = [
  {
    question: "How do I choose the best spa service for my condition?",
    answer:
      "If your goal is gentle relaxation, choose Swedish or Aromatherapy. If you have chronic aches, knots, or sciatica, choose Deep Tissue or Hot Stone. For flexibility and invigorating energy, choose Traditional Thai.",
  },
  {
    question: "Are prices all-inclusive?",
    answer:
      "Yes, all listed prices are transparent and all-inclusive. There are no hidden fees, utility charges, or unexpected costs.",
  },
  {
    question: "How do I book any of these services?",
    answer:
      "Simply text or call us directly on WhatsApp at +92 370 0802980. We confirm availability immediately.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bestspaislamabad.com" },
        { "@type": "ListItem", position: 2, name: "Spa Services", item: "https://bestspaislamabad.com/spa-services" },
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

export default function SpaServicesPage() {
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
              <Flower2 className="h-3.5 w-3.5" />
              <span>Full Treatment Menu & Pricing</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair tracking-tight text-foreground leading-tight">
              Spa Services in Islamabad
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our complete menu of restorative massage and wellness therapies. Every service is administered by certified therapists in private, sterilized luxury suites.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-lg hover:shadow-emerald-700/25 transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                Book Any Service via WhatsApp
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
                <span>24h Weekends Open</span>
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

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.map((service) => (
              <div key={service.title} className="p-6 rounded-2xl border border-border bg-card hover:shadow-xl transition-all space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-xl font-bold font-playfair text-foreground">{service.title}</h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 shrink-0">
                      {service.duration}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>

                  <div className="space-y-1 pt-1">
                    {service.benefits.map((b) => (
                      <div key={b} className="flex items-center gap-2 text-xs text-stone-600 dark:text-stone-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-lg font-bold text-emerald-700 dark:text-emerald-400">{service.price}</span>
                  <a
                    href="/whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold transition-all shadow-sm"
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> Book Service
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/10 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center space-y-3 mb-10">
            <h2 className="text-3xl font-bold font-playfair">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-sm">Common questions regarding our services and bookings.</p>
          </div>
          <FAQSection faqs={pageFaqs} />
        </div>
      </section>

      <SEOKeywords />
    </div>
  );
}
