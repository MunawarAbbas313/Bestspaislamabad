"use client";

import Link from "next/link";

const featuredLinks = [
  { label: "Massage Center Bahria Town", href: "/massage-center-bahria-town" },
  { label: "Massage Center Bahria Phase 7", href: "/massage-center-bahria-town-phase-7" },
  { label: "Spa Bahria Town Phase 7", href: "/spa-bahria-town-phase-7" },
  { label: "Spa Bahria Town", href: "/spa-bahria-town" },
  { label: "Massage Center Rawalpindi", href: "/massage-center-rawalpindi" },
  { label: "Spa Rawalpindi", href: "/spa-rawalpindi" },
  { label: "اردو مساج سینٹر (Urdu)", href: "/massage-in-urdu" },
  { label: "Call Us Now (0370 0802980)", href: "/call-us-now" },
  { label: "Bahria Town Wellness", href: "/bahria-town" },
  { label: "Bahria Town Phase 7", href: "/bahria-town-phase-7" },
  { label: "Full Body Massage Therapy", href: "/full-body-massage" },
  { label: "Body Massage & Rehabilitation", href: "/body-massage" },
  { label: "Massage Services Menu", href: "/massage-services" },
  { label: "Complete Spa Services", href: "/spa-services" },
  { label: "Online Appointment Booking", href: "/book" },
  { label: "WhatsApp Direct Desk", href: "/whatsapp" },
  { label: "Location & Directions", href: "/location" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Swedish Massage Therapy", href: "/services#swedish" },
  { label: "Deep Tissue Therapy", href: "/services#deep-tissue" },
  { label: "Traditional Thai Massage", href: "/services#thai" },
  { label: "Hot Stone Basalt Therapy", href: "/services#hot-stone" },
  { label: "Couples Massage Suite", href: "/services#couples" },
  { label: "Aromatherapy Organic Oils", href: "/services#aromatherapy" },
  { label: "Wellness Blog & Guides", href: "/blog" },
];

const serviceAreas = [
  "Bahria Town Phase 7 Rawalpindi",
  "Bahria Town Phase 8 Rawalpindi",
  "Bahria Phase 1–6 Rawalpindi",
  "Wallayat Complex Bahria 7",
  "Civic Center Bahria Town",
  "DHA Islamabad / Rawalpindi Phase 1 & 2",
  "PWD Housing Society",
  "Gulraiz Housing Scheme Rawalpindi",
  "Chaklala Scheme 3 Rawalpindi",
  "Saddar Cantt Rawalpindi",
  "Askari 14 Rawalpindi",
  "Morgah Rawalpindi",
];

export function SEOKeywords() {
  return (
    <section aria-label="Local wellness directory" className="py-12 bg-stone-100 dark:bg-stone-900/60 border-t border-border">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center space-y-8">
          {/* Internal Links Hub */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-800 dark:text-emerald-400">
              Explore Our Specialized Local Wellness Hubs
            </h3>
            <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
              {featuredLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-emerald-600 hover:text-emerald-700 dark:hover:text-emerald-400 hover:shadow-sm transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-wider">
              Serving Clients Across Rawalpindi & Bahria Town
            </h4>
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="text-[11px] text-stone-600 dark:text-stone-400 px-2.5 py-1 rounded-md bg-stone-200/60 dark:bg-stone-800/80"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* NAP Footnote */}
          <p className="text-xs text-stone-700 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed">
            <strong>Best Spa Islamabad</strong> — Bahria Town Phase 7, Near Nando's & Wallayat Complex, Rawalpindi 46000.
            Open Monday to Friday 10:00 AM – 4:40 AM and 24 Hours on Weekends.
            Direct Bookings: <a href="tel:+923700802980" className="text-emerald-700 dark:text-emerald-400 font-semibold underline">0370 0802980</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
