"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Flower2,
  Sparkles,
  Clock,
  MessageCircle,
  Phone,
  PhoneCall,
  ChevronDown,
  CalendarCheck,
  Building2,
  Compass,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const serviceLinks = [
  { name: "Full Body Massage", href: "/full-body-massage", desc: "60–90 min head-to-toe Swedish relaxation" },
  { name: "Body Massage", href: "/body-massage", desc: "Targeted myofascial & back pain therapy" },
  { name: "Massage Services Menu", href: "/massage-services", desc: "Complete modalities, pricing & durations" },
  { name: "Spa Services & Rituals", href: "/spa-services", desc: "Aromatherapy, scrubs & hydrotherapy" },
  { name: "Couples & Executive", href: "/services", desc: "Romantic suites & bespoke executive packages" },
];

const locationLinks = [
  { name: "Bahria Town (Phases 1–8)", href: "/bahria-town", desc: "Comprehensive community wellness" },
  { name: "Bahria Town Phase 7", href: "/bahria-town-phase-7", desc: "Near Nando's & Wallayat Complex" },
  { name: "Massage Center Bahria Town", href: "/massage-center-bahria-town", desc: "Private suites & certified therapists" },
  { name: "Spa Bahria Town Phase 7", href: "/spa-bahria-town-phase-7", desc: "Luxury day spa & wellness retreat" },
  { name: "Rawalpindi Center", href: "/massage-center-rawalpindi", desc: "Convenient access via GT Road" },
  { name: "Location & Directions", href: "/location", desc: "Map, parking, and arrival instructions" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Upper Announcement Bar */}
      <div className="bg-stone-950 text-stone-200 border-b border-stone-800 text-xs py-1.5 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs">
            <Clock className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
            <span>
              <strong className="text-emerald-400">Mon–Fri:</strong> 10:00 AM – 4:40 AM &nbsp;|&nbsp;
              <strong className="text-emerald-400">Sat–Sun:</strong> 24 Hours Open
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-medium">
            <Link
              href="/massage-in-urdu"
              className="inline-flex items-center gap-1 bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 hover:text-emerald-200 px-2 py-0.5 rounded-full text-[11px] font-bold border border-emerald-500/40 transition-colors"
              aria-label="اردو میں معلومات - Massage in Urdu"
            >
              <span>اردو پیج</span>
            </Link>

            <Link
              href="/call-us-now"
              className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-bold transition-colors"
              aria-label="Call Us Now Page"
            >
              <PhoneCall className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
              <span>0370 0802980</span>
            </Link>

            <a
              href="/whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-600 text-white px-2.5 py-0.5 rounded-full transition-colors text-[11px] font-semibold shadow"
              aria-label="Direct WhatsApp Booking"
            >
              <MessageCircle className="h-3 w-3" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        ref={dropdownRef}
        className={cn(
          "transition-all duration-300 ease-in-out border-b",
          scrolled
            ? "bg-stone-900/95 dark:bg-stone-950/95 backdrop-blur-xl shadow-lg border-stone-800 py-2.5"
            : "bg-stone-900/90 dark:bg-stone-950/90 backdrop-blur-md border-stone-800/80 py-3"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5" aria-label="Best Spa Islamabad Home">
            <div className="relative">
              <Flower2 className="h-9 w-9 text-emerald-400 transition-transform duration-500 group-hover:rotate-45" />
              <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-amber-400 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-playfair font-bold text-xl sm:text-2xl tracking-tight text-white leading-tight">
                Best Spa
              </span>
              <span className="font-semibold text-[10px] sm:text-[11px] tracking-wider text-emerald-400 uppercase">
                Rawalpindi &bull; Bahria Phase 7
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-4 2xl:gap-6">
            <Link
              href="/"
              className={cn(
                "text-xs 2xl:text-sm font-semibold transition-colors hover:text-emerald-400 py-1",
                pathname === "/" ? "text-emerald-400 font-bold" : "text-stone-200"
              )}
            >
              Home
            </Link>

            {/* Direct Navbar Link: Massage Center */}
            <Link
              href="/massage-center-bahria-town"
              className={cn(
                "text-xs 2xl:text-sm font-semibold transition-colors hover:text-emerald-400 py-1 flex items-center gap-1",
                pathname === "/massage-center-bahria-town" ? "text-emerald-400 font-bold" : "text-stone-200"
              )}
            >
              <span>Massage Center</span>
            </Link>

            {/* Direct Navbar Link: Spa Phase 7 */}
            <Link
              href="/spa-bahria-town-phase-7"
              className={cn(
                "text-xs 2xl:text-sm font-semibold transition-colors hover:text-emerald-400 py-1 flex items-center gap-1",
                pathname === "/spa-bahria-town-phase-7" ? "text-emerald-400 font-bold" : "text-stone-200"
              )}
            >
              <span>Spa Phase 7</span>
            </Link>

            {/* Services Dropdown (Ultra High Contrast Dark Container) */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("services")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
                className={cn(
                  "flex items-center gap-1 text-xs 2xl:text-sm font-semibold transition-colors hover:text-emerald-400 py-1",
                  pathname.startsWith("/service") || pathname === "/full-body-massage" || pathname === "/body-massage" || pathname === "/massage-services" || pathname === "/spa-services"
                    ? "text-emerald-400 font-bold"
                    : "text-stone-200"
                )}
                aria-expanded={openDropdown === "services"}
              >
                <span>Services</span>
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 text-emerald-400" />
              </button>

              <AnimatePresence>
                {openDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-stone-950 text-stone-100 border-2 border-emerald-500/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-2.5 z-50"
                  >
                    <div className="space-y-1">
                      {serviceLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block p-3 rounded-xl hover:bg-stone-900 transition-colors group border border-transparent hover:border-emerald-500/30"
                        >
                          <div className="text-xs font-bold text-white group-hover:text-emerald-400 flex items-center justify-between">
                            <span>{item.name}</span>
                          </div>
                          <p className="text-[11px] text-stone-300 group-hover:text-stone-200 mt-0.5 leading-tight">{item.desc}</p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Locations Dropdown (Ultra High Contrast Dark Container) */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("locations")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === "locations" ? null : "locations")}
                className={cn(
                  "flex items-center gap-1 text-xs 2xl:text-sm font-semibold transition-colors hover:text-emerald-400 py-1",
                  pathname.startsWith("/bahria") || pathname.startsWith("/location") || pathname.includes("rawalpindi")
                    ? "text-emerald-400 font-bold"
                    : "text-stone-200"
                )}
                aria-expanded={openDropdown === "locations"}
              >
                <span>Locations</span>
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 text-emerald-400" />
              </button>

              <AnimatePresence>
                {openDropdown === "locations" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-stone-950 text-stone-100 border-2 border-emerald-500/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-2.5 z-50"
                  >
                    <div className="space-y-1">
                      {locationLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block p-3 rounded-xl hover:bg-stone-900 transition-colors group border border-transparent hover:border-emerald-500/30"
                        >
                          <div className="text-xs font-bold text-white group-hover:text-emerald-400 flex items-center justify-between">
                            <span>{item.name}</span>
                          </div>
                          <p className="text-[11px] text-stone-300 group-hover:text-stone-200 mt-0.5 leading-tight">{item.desc}</p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/why-choose-us"
              className={cn(
                "text-xs 2xl:text-sm font-semibold transition-colors hover:text-emerald-400 py-1",
                pathname === "/why-choose-us" ? "text-emerald-400 font-bold" : "text-stone-200"
              )}
            >
              Why Us
            </Link>

            <Link
              href="/blog"
              className={cn(
                "text-xs 2xl:text-sm font-semibold transition-colors hover:text-emerald-400 py-1",
                pathname.startsWith("/blog") ? "text-emerald-400 font-bold" : "text-stone-200"
              )}
            >
              Blog
            </Link>

            {/* Direct Urdu Page Link */}
            <Link
              href="/massage-in-urdu"
              className={cn(
                "text-xs 2xl:text-sm font-bold transition-colors text-emerald-300 hover:text-emerald-200 py-1 px-2 rounded-md bg-emerald-950/60 border border-emerald-500/40",
                pathname === "/massage-in-urdu" ? "ring-1 ring-emerald-400 font-extrabold" : ""
              )}
            >
              اردو
            </Link>

            {/* Direct Navbar Link: Call Us Now */}
            <Link
              href="/call-us-now"
              className={cn(
                "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-bold text-xs bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-md transition-all active:scale-95",
                pathname === "/call-us-now" ? "ring-2 ring-amber-300" : ""
              )}
            >
              <PhoneCall className="h-3.5 w-3.5 animate-bounce" />
              <span>Call Us Now</span>
            </Link>

            {/* Direct Navbar Link: Book Appointment */}
            <Link
              href="/book"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full font-bold text-xs bg-emerald-700 hover:bg-emerald-600 text-white shadow-md transition-all active:scale-95"
            >
              <CalendarCheck className="h-3.5 w-3.5" />
              <span>Book Appointment</span>
            </Link>
          </nav>

          {/* Mobile Quick Action Buttons & Hamburger */}
          <div className="flex items-center gap-2 xl:hidden">
            <Link
              href="/call-us-now"
              className="p-2 rounded-lg bg-amber-500 text-stone-950 font-bold flex items-center gap-1 text-xs"
              aria-label="Call Us Now"
            >
              <PhoneCall className="h-4 w-4" />
              <span className="hidden sm:inline">Call Us</span>
            </Link>

            <a
              href="/whatsapp"
              className="p-2 rounded-lg bg-emerald-700 text-white"
              aria-label="WhatsApp quick chat"
            >
              <MessageCircle className="h-4 w-4" />
            </a>

            <button
              type="button"
              className="p-2 rounded-lg border border-stone-700 text-white hover:bg-stone-800 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden bg-stone-950/98 backdrop-blur-2xl border-b border-stone-800 text-white shadow-2xl overflow-y-auto max-h-[85vh]"
          >
            <div className="flex flex-col p-4 gap-2">
              <Link
                href="/"
                className={cn(
                  "text-sm font-semibold px-4 py-2.5 rounded-xl transition-all",
                  pathname === "/" ? "text-emerald-400 bg-stone-900 font-bold" : "text-stone-200"
                )}
              >
                Home
              </Link>

              {/* Direct Primary Links */}
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/massage-center-bahria-town"
                  className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 text-xs font-bold text-white hover:text-emerald-400 flex items-center gap-1.5"
                >
                  <Building2 className="h-4 w-4 text-emerald-400" />
                  <span>Massage Center</span>
                </Link>

                <Link
                  href="/spa-bahria-town-phase-7"
                  className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 text-xs font-bold text-white hover:text-emerald-400 flex items-center gap-1.5"
                >
                  <Compass className="h-4 w-4 text-emerald-400" />
                  <span>Spa Phase 7</span>
                </Link>
              </div>

              {/* Services Mobile Group */}
              <div className="rounded-xl border border-stone-800 p-3 bg-stone-900/60 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block px-1">
                  Services
                </span>
                <div className="grid grid-cols-1 gap-1">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="text-xs font-medium py-1.5 px-2 rounded-lg text-stone-200 hover:bg-stone-800 hover:text-white transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Locations Mobile Group */}
              <div className="rounded-xl border border-stone-800 p-3 bg-stone-900/60 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block px-1">
                  Locations
                </span>
                <div className="grid grid-cols-1 gap-1">
                  {locationLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="text-xs font-medium py-1.5 px-2 rounded-lg text-stone-200 hover:bg-stone-800 hover:text-white transition-colors"
                    >
                      {l.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/why-choose-us"
                className="text-sm font-semibold px-4 py-2 rounded-xl text-stone-200 hover:bg-stone-900 transition-all"
              >
                Why Choose Us
              </Link>

              <Link
                href="/blog"
                className="text-sm font-semibold px-4 py-2 rounded-xl text-stone-200 hover:bg-stone-900 transition-all"
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="text-sm font-semibold px-4 py-2 rounded-xl text-stone-200 hover:bg-stone-900 transition-all"
              >
                Contact
              </Link>

              <Link
                href="/massage-in-urdu"
                className="text-sm font-bold px-4 py-2.5 rounded-xl text-emerald-300 bg-emerald-950/50 border border-emerald-500/40 hover:bg-emerald-900/60 transition-all flex items-center justify-between"
              >
                <span>اردو زبان میں معلومات (Urdu)</span>
                <span className="text-xs bg-emerald-700 text-white px-2 py-0.5 rounded-full">نیا</span>
              </Link>

              <div className="pt-2 flex flex-col gap-2">
                <Link
                  href="/call-us-now"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold py-3 rounded-xl text-center flex items-center justify-center gap-2 text-sm shadow-md"
                >
                  <PhoneCall className="h-4 w-4 animate-bounce" />
                  Call Us Now (0370 0802980)
                </Link>

                <a
                  href="/whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl text-center flex items-center justify-center gap-2 text-sm shadow-md"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>

                <Link
                  href="/book"
                  className="w-full bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold py-2.5 rounded-xl text-center text-xs"
                >
                  Book Online Form
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
