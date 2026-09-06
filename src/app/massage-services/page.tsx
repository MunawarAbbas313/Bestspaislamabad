import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Phone, MessageCircle, Clock, MapPin, ShieldCheck, Award, Star, ArrowRight, Activity, Check } from "lucide-react";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

export const metadata: Metadata = {
  title: "Professional Massage Services | Bahria Town & Rawalpindi",
  description:
    "Explore our complete menu of professional massage services in Bahria Town Phase 7, Rawalpindi. Full body, Swedish, deep tissue, Thai, and reflexology delivered by certified therapists. Open late until 4:40 AM & 24h weekends.",
  alternates: {
    canonical: "https://bestspaislamabad.com/massage-services",
  },
  openGraph: {
    title: "Professional Massage Services | Best Spa Islamabad",
    description: "Certified therapeutic massage services in Bahria Town Phase 7 near Wallayat Complex. Full body, deep tissue, reflexology, and hot stone sessions.",
    url: "https://bestspaislamabad.com/massage-services",
  },
};

const massageMenu = [
  {
    id: "full-body",
    title: "Full Body Swedish Massage",
    tagline: "Total Mind & Body Tension Dissolution",
    duration: "60 / 90 Mins",
    price: "PKR 5,000 – 7,500",
    description: "The gold standard of therapeutic relaxation. Utilizes rhythmic gliding strokes, kneading, and gentle passive stretching to stimulate circulation and soothe stressed nerves.",
    benefits: ["Relieves muscle fatigue", "Enhances lymphatic drainage", "Improves sleep quality"],
    link: "/full-body-massage",
  },
  {
    id: "deep-tissue",
    title: "Deep Tissue Therapy",
    tagline: "Chronic Myofascial Tightness Relief",
    duration: "75 / 90 Mins",
    price: "PKR 6,000 – 8,500",
    description: "Firm, focused pressure targeting deeper fascial and muscular layers. Recommended for chronic neck pain, lower back discomfort, sciatica, and postural tension.",
    benefits: ["Breaks stubborn muscle knots", "Restores joint mobility", "Targeted lower back relief"],
    link: "/body-massage",
  },
  {
    id: "thai-massage",
    title: "Traditional Thai Bodywork",
    tagline: "Assisted Stretching & Energy Line Alignment",
    duration: "75 Mins",
    price: "PKR 7,000",
    description: "Dynamic therapeutic stretching combined with rhythmic thumb and palm acupressure along natural energy lines (Sen lines) to restore physical balance and flexibility.",
    benefits: ["Increases range of motion", "Boosts core energy levels", "Releases joint stiffness"],
    link: "/services#thai",
  },
  {
    id: "hot-stone",
    title: "Heated Basalt Stone Therapy",
    tagline: "Deep Penetrating Mineral Heat",
    duration: "75 Mins",
    price: "PKR 8,000",
    description: "Volcanic basalt stones heated to the ideal therapeutic temperature placed on spinal energy points while warm oiled stones are used for smooth, soothing strokes.",
    benefits: ["Relaxes rigid muscles effortlessly", "Calms the central nervous system", "Promotes cellular detox"],
    link: "/services#hot-stone",
  },
  {
    id: "aromatherapy",
    title: "Organic Aromatherapy Massage",
    tagline: "Botanical Essence Sensory Rejuvenation",
    duration: "60 Mins",
    price: "PKR 6,500",
    description: "Customized organic plant extracts—including lavender, eucalyptus, and bergamot—infused into organic jojoba and almond carrier oils for tranquil bliss.",
    benefits: ["Reduces psychological stress", "Hydrates dry skin", "Relieves headaches & anxiety"],
    link: "/spa-services",
  },
  {
    id: "reflexology",
    title: "Foot & Hand Reflexology",
    tagline: "Targeted Pressure Point Restoration",
    duration: "45 Mins",
    price: "PKR 4,000",
    description: "Targeted stimulation of reflexive zones on the soles and palms that correspond neuro-physiologically to internal organ systems, easing overall fatigue.",
    benefits: ["Relieves tired feet and plantar strain", "Enhances blood circulation", "Induces deep calm"],
    link: "/services#reflexology",
  },
];

const pageFaqs = [
  {
    question: "What is the difference between Swedish and Deep Tissue massage?",
    answer:
      "Swedish massage uses light-to-moderate pressure with long, continuous strokes aimed at total nervous system relaxation. Deep tissue employs slower, firmer pressure targeting sub-surface myofascial layers to resolve chronic muscular adhesions.",
  },
  {
    question: "How should I prepare for my massage service?",
    answer:
      "Arrive 10 to 15 minutes prior to your scheduled time. Avoid heavy meals immediately before your session, and drink plenty of water before and after your treatment.",
  },
  {
    question: "Are your therapists certified and vetted?",
    answer:
      "Yes, all therapists at Best Spa Islamabad are fully certified professionals with verified clinical training in anatomy, ergonomics, and hygiene protocols.",
  },
  {
    question: "Can I choose between male and female therapists?",
    answer:
      "Yes. We maintain certified male and female therapists on staff. Please notify our reception at the time of reservation regarding your preference.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bestspaislamabad.com" },
        { "@type": "ListItem", position: 2, name: "Massage Services", item: "https://bestspaislamabad.com/massage-services" },
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

export default function MassageServicesPage() {
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
              <span>Certified Bodywork Menu &bull; Bahria Town Phase 7</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair tracking-tight text-foreground leading-tight">
              Professional Massage Services
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our curated selection of evidence-based massage therapies in Bahria Town Phase 7, Rawalpindi. Designed to relieve chronic muscular tension, restore physical vitality, and provide deep therapeutic rest in clinical-grade comfort.
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
                href="/book"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted font-semibold text-sm transition-all"
              >
                Schedule Appointment
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

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl font-bold font-playfair text-foreground">Treatment Catalog</h2>
            <p className="text-muted-foreground text-sm">Transparent pricing, proven therapeutic methods, and certified care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {massageMenu.map((item) => (
              <div
                key={item.id}
                className="bg-card rounded-2xl border border-border p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                      {item.duration}
                    </span>
                    <span className="font-bold text-sm text-foreground">{item.price}</span>
                  </div>

                  <h3 className="text-xl font-bold font-playfair text-foreground">{item.title}</h3>
                  <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">{item.tagline}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>

                  <div className="space-y-2 pt-2 border-t border-border/50">
                    <span className="text-xs font-semibold text-foreground">Core Benefits:</span>
                    <ul className="space-y-1">
                      {item.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border flex items-center justify-between">
                  <Link
                    href={item.link}
                    className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    Details <ArrowRight className="h-3 w-3" />
                  </Link>

                  <a
                    href={`https://wa.me/923700802980?text=${encodeURIComponent(`Hello, I want to book the ${item.title} session.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold transition-colors"
                  >
                    Book This
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Middle CTA */}
      <section className="py-12 bg-emerald-950 text-white">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold font-playfair">Unsure Which Therapy Fits Your Condition?</h2>
            <p className="text-emerald-200 text-sm">Consult our experienced wellness coordinators via WhatsApp for tailored guidance.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="/whatsapp"
              className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-sm shadow-md transition-all"
            >
              WhatsApp Consultation
            </a>
            <a
              href="tel:+923700802980"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all"
            >
              Call 0370 0802980
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/10 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center space-y-3 mb-10">
            <h2 className="text-3xl font-bold font-playfair">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-sm">Helpful details about our massage therapy sessions and policies.</p>
          </div>
          <FAQSection faqs={pageFaqs} />
        </div>
      </section>

      <SEOKeywords />
    </div>
  );
}
