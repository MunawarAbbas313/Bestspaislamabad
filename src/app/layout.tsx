import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { WhatsAppWidget } from "@/components/shared/WhatsAppWidget";
import { PromoBadge } from "@/components/shared/PromoBadge";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-poppins" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });


export const metadata: Metadata = {
  title: "Best Spa Islamabad | Luxury Spa & Massage Services",
  description: "Looking for the best spa in Islamabad? Enjoy luxury massage, Thai massage, deep tissue therapy, aromatherapy, and couples spa services at Best Spa Islamabad.",
  keywords: "Best Spa Islamabad, Spa in Islamabad, Massage Center Islamabad, Thai Massage Islamabad, Full Body Massage Islamabad, Luxury Spa Islamabad, Swedish Massage Islamabad, Deep Tissue Massage Islamabad, Aromatherapy Islamabad, Couples Spa Islamabad, Gulberg Spa Islamabad, Wellness Center Islamabad, Relaxation Spa Islamabad, Professional Massage Islamabad, Best Massage Islamabad, Spa Treatment Islamabad, Therapeutic Massage Islamabad, Massage Therapy Islamabad, Luxury Wellness Islamabad, Spa and Massage Islamabad, Islamabad Spa Services, F-10 Spa Islamabad, F-11 Spa Islamabad, DHA Spa Islamabad, Bahria Town Spa Islamabad, Blue Area Spa Islamabad, Certified Massage Therapists Islamabad, Organic Spa Islamabad, Safe Spa Islamabad, Licensed Spa Islamabad, Professional Spa Islamabad, Female Massage Islamabad, Male Massage Islamabad, Couples Massage Islamabad, Sports Massage Islamabad, Hot Stone Massage Islamabad, Pregnancy Massage Islamabad, Corporate Wellness Islamabad, Spa Packages Islamabad, Massage Deals Islamabad, Affordable Spa Islamabad, Premium Spa Islamabad, Best Spa Near Me, Islamabad Massage Center, Pakistani Spa Islamabad, Islamic Spa Islamabad, Halal Spa Islamabad",
  icons: {
    icon: "/favicon.png",       // your image path in public folder
    shortcut: "/favicon.png",   // optional
    apple: "/favicon.png",      // optional for Apple devices
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${playfair.variable} font-sans min-h-screen flex flex-col bg-background text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
          <WhatsAppWidget />
          <PromoBadge />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
