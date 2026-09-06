import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Phone, Clock, MapPin, CheckCircle2, ShieldCheck, ArrowRight, Calendar, Sparkles } from "lucide-react";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

export const metadata: Metadata = {
  title: "Contact & WhatsApp Booking | Best Spa Bahria Town Rawalpindi",
  description:
    "Connect directly with our reception on WhatsApp (+92 370 0802980) to book your massage therapy at Best Spa in Bahria Town Phase 7, Rawalpindi. Instant replies, late-night appointments.",
  alternates: {
    canonical: "https://bestspaislamabad.com/whatsapp",
  },
  openGraph: {
    title: "WhatsApp & Instant Booking | Best Spa Bahria Town",
    description: "Chat with Best Spa reception directly on WhatsApp for instant session confirmation and inquiries.",
    url: "https://bestspaislamabad.com/whatsapp",
  },
};

const whatsappFaqs = [
  {
    question: "How quickly do you reply on WhatsApp?",
    answer:
      "Our reception typically replies within 2 to 5 minutes during operating hours (Monday to Friday 10:00 AM – 4:40 AM and 24 Hours on weekends).",
  },
  {
    question: "Can I book a late-night session on WhatsApp?",
    answer:
      "Yes! You can message us anytime up to 4:40 AM on weekdays or 24/7 on weekends to secure an immediate private suite.",
  },
  {
    question: "Can I request my preferred therapist gender via WhatsApp?",
    answer:
      "Absolutely. We have certified male and female therapists available. Please mention your preference when messaging.",
  },
  {
    question: "What information should I provide when messaging?",
    answer:
      "Simply share your name, preferred service (e.g. Swedish, Deep Tissue, Thai, Couples), requested date, and approximate time.",
  },
];

export default function WhatsAppPage() {
  const whatsappUrl = "https://wa.me/923700802980?text=Hi!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20massage%20session%20at%20Best%20Spa.";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-emerald-950/20 via-background to-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Direct WhatsApp Reception • Online Now</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold font-playfair tracking-tight text-foreground">
            Connect with Best Spa on WhatsApp
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            The fastest, most convenient way to check therapist availability, ask questions, or reserve your private suite in Bahria Town Phase 7, Rawalpindi.
          </p>

          {/* Big Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat directly on WhatsApp"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-base shadow-xl hover:shadow-emerald-700/30 transition-all active:scale-95"
            >
              <MessageCircle className="h-6 w-6 text-white" />
              <span>Open WhatsApp Chat Now</span>
            </a>

            <a
              href="tel:+923700802980"
              aria-label="Direct call to spa front desk"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-stone-900 dark:bg-stone-800 hover:bg-stone-800 text-white font-semibold text-base transition-all active:scale-95"
            >
              <Phone className="h-5 w-5 text-emerald-400" />
              <span>Call 0370 0802980</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap justify-center items-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-emerald-600" /> Mon–Fri: 10AM – 4:40AM | Sat–Sun: 24h
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-600" /> 100% Client Privacy Guaranteed
            </span>
          </div>
        </div>
      </section>

      {/* Appointment Process */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold font-playfair text-center mb-10">
            How WhatsApp Booking Works in 3 Simple Steps
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border space-y-3">
              <div className="h-9 w-9 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-sm">
                1
              </div>
              <h3 className="font-bold text-base">Send Your Requirements</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Click the button above to start a chat. Mention your preferred service, duration, and time slot.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border space-y-3">
              <div className="h-9 w-9 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-sm">
                2
              </div>
              <h3 className="font-bold text-base">Receive Real-Time Confirmation</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Our front desk confirms therapist availability, assigns your private suite, and shares directions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border space-y-3">
              <div className="h-9 w-9 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-sm">
                3
              </div>
              <h3 className="font-bold text-base">Arrive & Relax</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Arrive at our Bahria Phase 7 facility, park in our secure on-site lot, and enjoy complete tranquility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Reference */}
      <section className="py-16 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-playfair">Popular Treatments You Can Book</h2>
            <p className="text-xs sm:text-sm text-muted-foreground">All prices transparent. No hidden charges.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-card border border-border flex justify-between items-center">
              <div>
                <p className="font-semibold text-sm">Full Body Swedish Massage</p>
                <p className="text-xs text-muted-foreground">60 mins • Classic relaxation</p>
              </div>
              <span className="font-bold text-emerald-700 dark:text-emerald-400">PKR 5,000</span>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border flex justify-between items-center">
              <div>
                <p className="font-semibold text-sm">Deep Tissue Therapy</p>
                <p className="text-xs text-muted-foreground">75 mins • Back pain & sciatica relief</p>
              </div>
              <span className="font-bold text-emerald-700 dark:text-emerald-400">PKR 6,000</span>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border flex justify-between items-center">
              <div>
                <p className="font-semibold text-sm">Traditional Thai Massage</p>
                <p className="text-xs text-muted-foreground">90 mins • Assisted stretching & energy lines</p>
              </div>
              <span className="font-bold text-emerald-700 dark:text-emerald-400">PKR 6,500</span>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border flex justify-between items-center">
              <div>
                <p className="font-semibold text-sm">Romantic Couples Suite</p>
                <p className="text-xs text-muted-foreground">90 mins • Private suite with candlelight</p>
              </div>
              <span className="font-bold text-emerald-700 dark:text-emerald-400">PKR 12,000</span>
            </div>
          </div>

          <div className="text-center pt-2">
            <Link href="/services" className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline inline-flex items-center gap-1">
              View Complete Services Menu <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Verified Location */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center space-y-4">
          <div className="inline-flex p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600">
            <MapPin className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold font-playfair">Visit Us in Bahria Town Phase 7</h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Bahria Town Phase 7, Near Nando's & Wallayat Complex, Rawalpindi 46000, Pakistan.
            Easily reachable from Islamabad Expressway, DHA Phase 1 & 2, and PWD.
          </p>
          <div className="pt-2">
            <Link href="/location" className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline">
              View Turn-by-Turn Driving Directions & Parking &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/10 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold font-playfair">WhatsApp FAQs</h2>
            <p className="text-xs sm:text-sm text-muted-foreground">Common questions about messaging our reception.</p>
          </div>
          <FAQSection items={whatsappFaqs} />
        </div>
      </section>

      <SEOKeywords />
    </div>
  );
}
