import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { WhatsAppWidget } from "@/components/shared/WhatsAppWidget";
import { MobileStickyCTA } from "@/components/shared/MobileStickyCTA";
import { PromoBadge } from "@/components/shared/PromoBadge";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bestspaislamabad.com"),
  title: {
    default: "Best Spa Islamabad | Luxury Massage & Wellness Center",
    template: "%s | Best Spa Islamabad",
  },
  description:
    "Looking for the best spa in Islamabad? Experience luxury Swedish, Thai, Deep Tissue, Aromatherapy, and Couples massages with certified therapists at Best Spa Islamabad. Open Mon-Fri until 4:40 AM and 24 hours on weekends.",
  keywords: [
    "Best Spa Islamabad",
    "Spa in Islamabad",
    "Massage Center Islamabad",
    "Spa Bahria Town Phase 7",
    "Massage Bahria Town",
    "Massage Center Bahria Town Phase 7",
    "Massage Center Rawalpindi",
    "Thai Massage Islamabad",
    "Full Body Massage Islamabad",
    "Deep Tissue Massage Islamabad",
    "Swedish Massage Islamabad",
    "Couples Spa Islamabad",
    "Hot Stone Massage Islamabad",
    "Aromatherapy Massage Islamabad",
    "Late Night Spa Islamabad",
    "24 Hours Spa Islamabad",
    "Aura Spa Islamabad",
    "Sukoon Spa Bahria Town",
    "Bella Spa Bahria",
    "Go Glam Spa",
    "Safe Spa Islamabad",
    "Certified Massage Therapists Islamabad",
    "Gulberg Greens Spa",
    "DHA Islamabad Spa",
    "Blue Area Massage",
    "F-10 Massage Center",
    "F-11 Spa Islamabad",
    "PWD Massage Center",
    "Wallayat Complex Spa",
  ],
  alternates: {
    canonical: "https://bestspaislamabad.com",
  },
  openGraph: {
    title: "Best Spa Islamabad | Luxury Massage & Wellness Center",
    description:
      "Islamabad's premier luxury spa & massage center. Certified therapists, private suites, hospital-grade hygiene, and late-night sessions until 4:40 AM.",
    url: "https://bestspaislamabad.com",
    siteName: "Best Spa Islamabad",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Best Spa Islamabad - Luxury Massage Therapy",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Spa Islamabad | Luxury Massage & Wellness Center",
    description:
      "Luxury Swedish, Thai, Deep Tissue, and Couples massages in Islamabad & Bahria Town. Certified therapists and late-night wellness.",
    images: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["DaySpa", "HealthAndBeautyBusiness", "LocalBusiness"],
      "@id": "https://bestspaislamabad.com/#business",
      name: "Best Spa Islamabad",
      alternateName: ["Best Spa Rawalpindi", "Best Spa Bahria Town Phase 7"],
      url: "https://bestspaislamabad.com",
      telephone: "+923700802980",
      email: "info@bestspaislamabad.com",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
      logo: "https://bestspaislamabad.com/icon.png",
      priceRange: "PKR 5,000 - PKR 18,000",
      currenciesAccepted: "PKR",
      paymentAccepted: "Cash, Bank Transfer, EasyPaisa, JazzCash, Debit Card",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bahria Town Phase 7, Near Nando's & Wallayat Complex",
        addressLocality: "Rawalpindi",
        addressRegion: "Punjab",
        postalCode: "46000",
        addressCountry: "PK",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.54958,
        longitude: 73.12232,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "10:00",
          closes: "04:40",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      areaServed: [
        { "@type": "City", name: "Islamabad" },
        { "@type": "City", name: "Rawalpindi" },
        { "@type": "AdministrativeArea", name: "Bahria Town Phase 7" },
        { "@type": "AdministrativeArea", name: "Bahria Town Phase 8" },
        { "@type": "AdministrativeArea", name: "DHA Islamabad" },
        { "@type": "AdministrativeArea", name: "Gulberg Greens Islamabad" },
        { "@type": "AdministrativeArea", name: "Blue Area Islamabad" },
        { "@type": "AdministrativeArea", name: "F-10 Islamabad" },
        { "@type": "AdministrativeArea", name: "F-11 Islamabad" },
        { "@type": "AdministrativeArea", name: "PWD Housing Society" },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "184",
        bestRating: "5",
        worstRating: "1",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Luxury Massage & Spa Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Swedish Massage Therapy",
              description: "60-90 minute classic stress-relief massage with rhythmic gliding strokes.",
            },
            price: "5000",
            priceCurrency: "PKR",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Deep Tissue Massage Therapy",
              description: "75 minute intense myofascial therapy targeting chronic muscle knots and sciatica.",
            },
            price: "6000",
            priceCurrency: "PKR",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Traditional Thai Massage",
              description: "90 minute acupressure and assisted yoga stretching therapy.",
            },
            price: "6500",
            priceCurrency: "PKR",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Hot Stone Basalt Therapy",
              description: "90 minute thermal massage with heated volcanic basalt stones.",
            },
            price: "7000",
            priceCurrency: "PKR",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Romantic Couples Massage Retreat",
              description: "90 minute synchronized couple's therapy in a private luxury suite.",
            },
            price: "12000",
            priceCurrency: "PKR",
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${playfair.variable} font-sans min-h-screen flex flex-col bg-background text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow pt-24 sm:pt-28">{children}</main>
          <Footer />
          <WhatsAppWidget />
          <MobileStickyCTA />
          <PromoBadge />
        </ThemeProvider>
      </body>
    </html>
  );
}
