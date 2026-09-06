import type { Metadata } from "next";
import { Sparkles, Phone, MessageCircle, Clock, MapPin, ShieldCheck, Award, CalendarCheck } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

export const metadata: Metadata = {
  title: "Book Spa & Massage Appointment | Bahria Town Phase 7",
  description:
    "Schedule your massage or spa appointment at Best Spa Islamabad in Bahria Town Phase 7. Instant WhatsApp confirmation, certified therapists, private suites. Open till 4:40 AM & 24h weekends.",
  alternates: {
    canonical: "https://bestspaislamabad.com/book",
  },
  openGraph: {
    title: "Book Appointment | Best Spa Islamabad",
    description: "Book certified full body, Swedish, and deep tissue therapy in Bahria Town Phase 7. Fast WhatsApp reservation.",
    url: "https://bestspaislamabad.com/book",
  },
};

const bookFaqs = [
  {
    question: "How fast is my appointment confirmed?",
    answer:
      "When you submit the booking form, it formats your request directly into WhatsApp. Our front desk responds within 2–5 minutes to lock in your suite and therapist.",
  },
  {
    question: "What if I need to reschedule or cancel?",
    answer:
      "You can reschedule or cancel at any time by messaging us on WhatsApp or calling +92 370 0802980 at least 1 hour prior to your session with zero cancellation fee.",
  },
  {
    question: "Can I request a specific therapist gender?",
    answer:
      "Yes, we have certified male and female therapists. Please indicate your preference during reservation.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We accept Cash, JazzCash, EasyPaisa, Bank Transfer, and all major Credit/Debit Cards upon arrival.",
  },
];

export default function BookPage() {
  return (
    <div className="min-h-screen bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
            <CalendarCheck className="h-3.5 w-3.5" />
            <span>Instant Reservation &bull; Bahria Town Phase 7</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold font-playfair tracking-tight text-foreground">
            Book Your Spa & Massage Session
          </h1>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Select your preferred treatment and time. Your reservation details will be sent directly to our on-duty front desk for immediate confirmation.
          </p>

          <div className="flex items-center justify-center gap-6 pt-2 text-xs font-medium text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-emerald-600" />
              <span>Mon–Fri till 4:40 AM</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>24h Weekends</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-emerald-600" />
              <span>Near Wallayat Complex</span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto bg-card border border-border rounded-3xl p-6 sm:p-10 shadow-lg mb-16">
          <BookingForm />
        </div>

        {/* Direct WhatsApp Callout */}
        <div className="max-w-2xl mx-auto mb-16 p-6 rounded-2xl bg-emerald-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-bold text-lg font-playfair">Prefer to chat directly?</h3>
            <p className="text-xs text-emerald-200">Our receptionist is active right now on WhatsApp.</p>
          </div>
          <div className="flex gap-2 shrink-0">
            <a
              href="/whatsapp"
              className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-xs transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+923700802980"
              className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/20 transition-all flex items-center gap-1.5"
            >
              <Phone className="h-3.5 w-3.5 text-emerald-400" />
              Call
            </a>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold font-playfair">Booking FAQs</h2>
            <p className="text-xs text-muted-foreground">Clear details on reservation policies and scheduling.</p>
          </div>
          <FAQSection faqs={bookFaqs} />
        </div>
      </div>

      <SEOKeywords />
    </div>
  );
}
