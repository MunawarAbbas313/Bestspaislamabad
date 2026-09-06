import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCall, MessageCircle, Clock, MapPin, ShieldCheck, Award, CalendarCheck, Sparkles, CheckCircle2, Navigation } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

export const metadata: Metadata = {
  title: "Call Us Now | Direct Phone & WhatsApp Booking | Best Spa Islamabad",
  description:
    "Call Best Spa Islamabad directly at 0370 0802980 or chat on WhatsApp. Immediate phone reservations for Swedish, full body, and deep tissue massage in Bahria Town Phase 7. Open till 4:40 AM & 24h weekends.",
  alternates: {
    canonical: "https://bestspaislamabad.com/call-us-now",
  },
  openGraph: {
    title: "Call Us Now | Direct Booking 0370 0802980 | Best Spa",
    description: "Instant phone & WhatsApp reservations for luxury spa & massage in Bahria Town Phase 7, Rawalpindi. On-duty reception available.",
    url: "https://bestspaislamabad.com/call-us-now",
  },
};

const callFaqs = [
  {
    question: "What is your official contact number for direct phone calls?",
    answer:
      "You can dial our on-duty front desk directly at +92 370 0802980 (or locally 0370 0802980). We take phone calls and WhatsApp inquiries around the clock.",
  },
  {
    question: "What are your operating hours to receive calls and bookings?",
    answer:
      "We operate Monday to Friday from 10:00 AM to 4:40 AM (ideal for late-night sessions), and 24 hours round-the-clock throughout Saturday and Sunday.",
  },
  {
    question: "How fast can I get a massage slot if I call right now?",
    answer:
      "When you call or send a WhatsApp message, our front desk coordinator confirms available private suites and therapists within 2 to 5 minutes. Walk-ins are also accommodated subject to suite availability.",
  },
  {
    question: "Can I request specific therapist preferences when calling?",
    answer:
      "Yes. When you call 0370 0802980, you can specify your therapist gender preference (certified male or female therapists), duration (60, 75, or 90 minutes), and specific therapy focus.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bestspaislamabad.com" },
        { "@type": "ListItem", position: 2, name: "Call Us Now", item: "https://bestspaislamabad.com/call-us-now" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: callFaqs.map((faq) => ({
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

export default function CallUsNowPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <section className="container mx-auto px-4 md:px-6 mb-12 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold mb-4 border border-emerald-300/40">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Live Front Desk &bull; Taking Calls Now</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-playfair tracking-tight text-foreground leading-tight mb-4">
          Call Us Now for Instant Booking
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Connect immediately with our reception coordinator in Bahria Town Phase 7. Reserve your private therapy suite, check real-time availability, or get instant turn-by-turn driving directions.
        </p>

        {/* Primary Call & WhatsApp Card */}
        <div className="mt-8 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-stone-900 via-emerald-950 to-stone-950 text-white shadow-2xl border border-emerald-500/30 max-w-2xl mx-auto">
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-amber-500/20 text-amber-400 border border-amber-400/40 mx-auto">
              <PhoneCall className="h-8 w-8 animate-bounce" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-emerald-300 font-bold mb-1">
                Direct Phone Hotline
              </p>
              <a
                href="tel:+923700802980"
                className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white hover:text-amber-300 transition-colors block font-playfair"
              >
                0370 0802980
              </a>
              <p className="text-xs text-stone-300 mt-2">Tap to call instantly from your mobile phone</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <a
                href="tel:+923700802980"
                className="inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-base shadow-lg transition-all active:scale-95"
              >
                <PhoneCall className="h-5 w-5" />
                <span>Call Now (0370 0802980)</span>
              </a>

              <a
                href="https://wa.me/923700802980?text=Hello%2C%20I%20am%20calling%20to%20book%20a%20massage%20appointment%20right%20now."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg transition-all active:scale-95"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Instant Call</span>
              </a>
            </div>

            <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center justify-center gap-4 text-xs text-emerald-200/90 font-medium">
              <span>🕒 Mon–Fri till 4:40 AM</span>
              <span>•</span>
              <span>⭐ 24h Weekends</span>
              <span>•</span>
              <span>📍 Bahria Phase 7 near Wallayat Complex</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Call Directly */}
      <section className="container mx-auto px-4 md:px-6 mb-16 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-card border border-border space-y-3 text-center">
            <div className="h-12 w-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 flex items-center justify-center mx-auto">
              <Sparkles className="h-6 w-6" />
            </div>
            <h2 className="text-lg font-bold font-playfair">Real-Time Suite Lock</h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Calling ensures your private suite is held and freshly sanitized for your exact arrival time.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border space-y-3 text-center">
            <div className="h-12 w-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 flex items-center justify-center mx-auto">
              <Award className="h-6 w-6" />
            </div>
            <h2 className="text-lg font-bold font-playfair">Therapist Selection</h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Discuss specific muscle pain points or request certified male or female practitioners over the phone.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border space-y-3 text-center">
            <div className="h-12 w-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 flex items-center justify-center mx-auto">
              <Navigation className="h-6 w-6" />
            </div>
            <h2 className="text-lg font-bold font-playfair">Turn-By-Turn Arrival</h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Our front desk guides you to free, secure parking directly outside Wallayat Complex in Phase 7.
            </p>
          </div>
        </div>
      </section>

      {/* Online Reservation Form Fallback */}
      <section className="container mx-auto px-4 md:px-6 mb-16 max-w-2xl">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-playfair">Prefer to Submit Online?</h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Fill this quick form and your details will be sent directly to our reception via WhatsApp.
          </p>
        </div>
        <div className="bg-card border border-border rounded-3xl p-6 sm:p-10 shadow-lg">
          <BookingForm />
        </div>
      </section>

      {/* FAQs */}
      <section className="container mx-auto px-4 md:px-6 max-w-4xl mb-16">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-playfair">Frequently Asked Questions</h2>
          <p className="text-xs text-muted-foreground">Everything you need to know before calling us.</p>
        </div>
        <FAQSection faqs={callFaqs} />
      </section>

      <SEOKeywords />
    </div>
  );
}
