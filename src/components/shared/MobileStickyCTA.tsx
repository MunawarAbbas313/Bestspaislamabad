"use client";

import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";

export function MobileStickyCTA() {
  const phoneNumber = "923700802980";
  const message = encodeURIComponent(
    "Hi Best Spa Islamabad! I would like to book an appointment."
  );

  return (
    <aside aria-label="Mobile quick actions" className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-lg border-t border-border shadow-2xl py-2 px-3">
      <div className="grid grid-cols-3 gap-2 text-center">
        {/* Call Now */}
        <a
          href="tel:+923700802980"
          aria-label="Call Best Spa Islamabad"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-muted/80 hover:bg-muted text-foreground transition-all active:scale-95"
        >
          <Phone className="h-5 w-5 text-emerald-600 mb-1" />
          <span className="text-[11px] font-semibold">Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${phoneNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with Best Spa Islamabad"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium shadow-md transition-all active:scale-95"
        >
          <MessageCircle className="h-5 w-5 mb-1 text-white" />
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>

        {/* Book Slot */}
        <Link
          href="/contact"
          aria-label="Book a massage appointment"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-medium shadow-md transition-all active:scale-95"
        >
          <Calendar className="h-5 w-5 mb-1 text-white" />
          <span className="text-[11px] font-bold">Book Slot</span>
        </Link>
      </div>
    </aside>
  );
}
