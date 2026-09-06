import Link from "next/link";
import { MessageCircle, MapPin, Phone, Mail, Flower2, Clock, CalendarCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-24 md:pb-12 border-t border-stone-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 text-white">
              <Flower2 className="h-7 w-7 text-emerald-500" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-playfair tracking-tight leading-tight">
                  Best Spa
                </span>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  Rawalpindi &bull; Bahria Phase 7
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-stone-300 max-w-sm">
              Bahria Town and Rawalpindi's premier luxury wellness destination offering authentic Swedish, Thai, Deep Tissue, Aromatherapy, and Couples massage therapies by certified professionals in a private, hospital-grade hygienic environment.
            </p>

            <div className="pt-2 text-xs text-stone-300 space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <Clock className="h-4 w-4" />
                <span>Verified Operating Hours:</span>
              </div>
              <p>• Monday – Friday: 10:00 AM – 4:40 AM (Late-Night Sessions)</p>
              <p>• Saturday & Sunday: 24 Hours Open (Round-the-Clock)</p>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <Link
                href="/book"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow transition-all"
              >
                <CalendarCheck className="h-3.5 w-3.5" />
                Book Appointment
              </Link>
              <a
                href="/whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold border border-stone-700 transition-all"
              >
                <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base tracking-wide">Spa & Massage</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/full-body-massage" className="text-stone-300 hover:text-white transition-colors">Full Body Massage</Link></li>
              <li><Link href="/body-massage" className="text-stone-300 hover:text-white transition-colors">Body Massage</Link></li>
              <li><Link href="/massage-services" className="text-stone-300 hover:text-white transition-colors">Massage Services</Link></li>
              <li><Link href="/spa-services" className="text-stone-300 hover:text-white transition-colors">Spa Services</Link></li>
              <li><Link href="/services#swedish" className="text-stone-300 hover:text-white transition-colors">Swedish Massage</Link></li>
              <li><Link href="/services#deep-tissue" className="text-stone-300 hover:text-white transition-colors">Deep Tissue Relief</Link></li>
              <li><Link href="/services#couples" className="text-stone-300 hover:text-white transition-colors">Couples Suite Spa</Link></li>
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base tracking-wide">Locations</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/bahria-town" className="text-stone-300 hover:text-white transition-colors">Bahria Town</Link></li>
              <li><Link href="/bahria-town-phase-7" className="text-stone-300 hover:text-white transition-colors">Bahria Town Phase 7</Link></li>
              <li><Link href="/massage-center-bahria-town" className="text-stone-300 hover:text-white transition-colors">Massage Bahria Town</Link></li>
              <li><Link href="/spa-bahria-town-phase-7" className="text-stone-300 hover:text-white transition-colors">Spa Bahria Phase 7</Link></li>
              <li><Link href="/massage-center-rawalpindi" className="text-stone-300 hover:text-white transition-colors">Rawalpindi Massage</Link></li>
              <li><Link href="/spa-rawalpindi" className="text-stone-300 hover:text-white transition-colors">Spa Rawalpindi</Link></li>
              <li><Link href="/location" className="text-stone-300 hover:text-white transition-colors">Location & Directions</Link></li>
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base tracking-wide">Company & Contact</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="text-stone-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/why-choose-us" className="text-stone-300 hover:text-white transition-colors">Why Choose Us</Link></li>
              <li><Link href="/call-us-now" className="text-amber-400 font-bold hover:text-amber-300 transition-colors">Call Us Now (Hotline)</Link></li>
              <li><Link href="/massage-in-urdu" className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors">مساج سروسز (اردو ورژن)</Link></li>
              <li><Link href="/blog" className="text-stone-300 hover:text-white transition-colors">Wellness Blog</Link></li>
              <li><Link href="/contact" className="text-stone-300 hover:text-white transition-colors">Contact Page</Link></li>
              <li><Link href="/whatsapp" className="text-stone-300 hover:text-white transition-colors">WhatsApp Contact</Link></li>
            </ul>

            {/* Direct Contact Details */}
            <div className="mt-6 pt-6 border-t border-stone-800 space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Bahria Town Phase 7, Near Nando's & Wallayat Complex, Rawalpindi 46000</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                <a href="tel:+923700802980" className="hover:text-emerald-400 transition-colors font-medium text-sm">
                  0370 0802980
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                <a href="mailto:info@bestspaislamabad.com" className="hover:text-emerald-400 transition-colors">
                  info@bestspaislamabad.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Best Spa Islamabad. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-stone-200 transition-colors">Privacy Policy</Link>
            <Link href="/whatsapp" className="text-emerald-400 hover:underline">Direct WhatsApp</Link>
            <Link href="/sitemap.xml" className="hover:text-stone-200 transition-colors">XML Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
