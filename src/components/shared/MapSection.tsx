"use client";

import { MapPin } from "lucide-react";

export function MapSection() {
    return (
        <section className="py-16 bg-muted/30">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col md:flex-row gap-8 items-center bg-card rounded-3xl overflow-hidden shadow-sm border border-border">
                    <div className="relative w-full h-96 rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.54123456789!2d73.0934!3d33.5285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9304a3e83b8b%3A0x6b8f9e1e2c3d4e5f!2sWallayat+Complex%2C+Phase+7+Bahria+Town%2C+Rawalpindi!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                            className="w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Best Spa Bahria Town Phase 7 Rawalpindi Map"
                        ></iframe>

                        {/* Direct WhatsApp brand badge */}
                        <a
                            href="https://wa.me/923700802980?text=Hello%2C%20I%20need%20directions%20to%20Best%20Spa%20in%20Bahria%20Town%20Phase%207%20Rawalpindi."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-4 left-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-4 py-1.5 rounded-full cursor-pointer shadow-lg transition-all duration-300 text-xs sm:text-sm flex items-center gap-1.5"
                            title="Best Spa Bahria Town Phase 7 Rawalpindi"
                        >
                            Best Spa Rawalpindi &bull; Bahria Phase 7
                        </a>
                    </div>
                    <div className="w-full md:w-1/2 p-8 md:p-12 space-y-5">
                        <div className="inline-flex items-center justify-center p-3 bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 rounded-full mb-1">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-3 font-playfair">Visit Our Sanctuary in Bahria Town Phase 7 Rawalpindi</h2>
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                            Conveniently located in Bahria Town Phase 7, near Nando's &amp; Wallayat Complex, Rawalpindi. Easily accessible from Bahria Phases 1–8, DHA, PWD, and the GT Road. We provide dedicated secure parking and a quiet, clinical-grade luxury retreat.
                        </p>
                        <div className="space-y-1">
                            <p className="font-semibold text-sm">Physical Address:</p>
                            <p className="text-muted-foreground text-sm font-medium">Bahria Town Phase 7, Near Nando's &amp; Wallayat Complex, Rawalpindi, Punjab 46000, Pakistan</p>
                        </div>
                        <div className="space-y-1">
                            <p className="font-semibold text-sm">Operating Hours:</p>
                            <p className="text-muted-foreground text-sm">Mon–Fri: 10:00 AM – 4:40 AM (Late-night Sessions) | Sat–Sun: 24 Hours Open</p>
                        </div>
                        <div className="pt-2 flex flex-wrap gap-3">
                            <a
                                href="https://wa.me/923700802980?text=Hello%2C%20I%20am%20coming%20to%20Best%20Spa%20in%20Bahria%20Town%20Phase%207%20Rawalpindi.%20Please%20share%20location."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow transition-all active:scale-95"
                            >
                                WhatsApp Location
                            </a>
                            <a
                                href="tel:+923700802980"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs sm:text-sm transition-all"
                            >
                                Call 0370 0802980
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
