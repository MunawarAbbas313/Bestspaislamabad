import Link from "next/link";
import { MessageCircle, ArrowLeft, Flower2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex p-4 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600">
          <Flower2 className="h-12 w-12" />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold font-playfair tracking-tight">404 - Page Not Found</h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            The page you are looking for might have been moved or does not exist. Let us guide you back to pure relaxation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold transition-all"
          >
            <ArrowLeft className="h-4 w-4" /> Return to Homepage
          </Link>

          <a
            href="/whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-sm font-semibold transition-all"
          >
            <MessageCircle className="h-4 w-4 text-emerald-400" /> Book via WhatsApp
          </a>
        </div>

        <div className="border-t border-border pt-6 text-xs text-muted-foreground">
          <p className="font-medium text-foreground mb-2">Popular Wellness Pages:</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/services" className="hover:underline text-emerald-600">Services Menu</Link> •
            <Link href="/massage-center-bahria-town-phase-7" className="hover:underline text-emerald-600">Bahria Phase 7</Link> •
            <Link href="/contact" className="hover:underline text-emerald-600">Contact & Directions</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
