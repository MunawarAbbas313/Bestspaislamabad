"use client";

import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star, MapPin, Phone, Clock, ArrowRight, Check, Heart, Sparkles, Users, Award, Calendar, MessageCircle, PhoneCall } from "lucide-react";
import { ReviewsCarousel } from "@/components/testimonials/ReviewsCarousel";
import { FAQSection } from "@/components/ui/accordion";
import { MapSection } from "@/components/shared/MapSection";
import { BenefitsSection } from "@/components/shared/BenefitsSection";
import { WhySpaNeeded } from "@/components/home/WhySpaNeeded";
import { SEOKeywords } from "@/components/shared/SEOKeywords";
import { useState, useEffect } from "react";

const faqs = [
  {
    question: "What should I wear for my massage therapy session at Best Spa Islamabad?",
    answer: "We recommend wearing loose, comfortable clothing for your professional massage therapy session. For full-body massages including Swedish massage, deep tissue massage, and hot stone therapy, you will be properly draped with premium sheets/towels at all times to ensure your complete privacy, comfort, and relaxation. Our certified therapists maintain professional standards throughout your treatment."
  },
  {
    question: "Do I need to book an appointment for massage therapy at Best Spa Islamabad?",
    answer: "Yes, we highly recommend booking your massage therapy appointment in advance to ensure availability, especially during peak evenings and weekends. Best Spa Islamabad offers convenient online booking and direct phone/WhatsApp booking at 0370 0802980. Walk-ins are welcome but subject to therapist availability."
  },
  {
    question: "What if I have a medical condition before my massage treatment?",
    answer: "Please inform our certified massage therapists about any medical conditions, injuries, allergies, pregnancy, or health concerns before your massage therapy session begins. Our professional therapists are trained to customize treatments including Swedish massage, deep tissue massage, and aromatherapy to ensure your safety and maximum therapeutic benefits. Your health and wellness are our top priorities at Best Spa Islamabad."
  },
  {
    question: "Are there female massage therapists available in Islamabad?",
    answer: "Yes, we have a team of professional certified male and female massage therapists available at our luxury spa in Bahria Town Phase 7. You can request your preferred therapist gender at the time of booking your massage therapy appointment. All our therapists are highly trained, experienced, and maintain the highest professional standards for Swedish massage, deep tissue massage, Thai massage, and other wellness treatments."
  },
  {
    question: "What is your cancellation policy for spa appointments in Islamabad?",
    answer: "We request reasonable advance notice for cancellations or rescheduling of your massage therapy appointments. We understand emergencies happen and will work with you to reschedule your spa appointment at the earliest convenience. Contact us at 0370 0802980 for any changes."
  },
  {
    question: "What is the best massage for stress relief and relaxation in Islamabad?",
    answer: "Swedish massage and aromatherapy massage are excellent for stress relief and deep relaxation. Our professional Swedish massage uses long, flowing strokes to relax tense muscles and improve circulation, while aromatherapy combines therapeutic essential oils to calm your mind and enhance your wellness experience. Both treatments are available with certified therapists specializing in stress management and relaxation therapy."
  },
  {
    question: "How much does professional massage therapy cost in Islamabad?",
    answer: "Our affordable luxury massage prices start from PKR 5,000 for professional Swedish massage (60 minutes). Deep tissue massage therapy is PKR 6,000 (75 minutes), hot stone therapy is PKR 7,000 (90 minutes), and Thai massage is PKR 6,500 (90 minutes). We offer the best competitive spa prices in Islamabad with premium quality service, certified therapists, and luxury treatment rooms. Couples massage packages are available at PKR 12,000 for 90 minutes of romantic relaxation."
  },
  {
    question: "Which is the best luxury spa with certified therapists in Islamabad?",
    answer: "Best Spa Islamabad is the premier luxury spa center in Islamabad, conveniently located in Bahria Town Phase 7 near Nando's and Wallayat Complex. We offer internationally certified massage therapists, private luxury treatment rooms, affordable premium prices, and an exceptional 4.9/5 customer satisfaction rating with over 5000 happy clients. Experience the best luxury spa treatments including Swedish massage, deep tissue massage, hot stone therapy, aromatherapy, and couples massage in our serene wellness sanctuary."
  },
  {
    question: "Do you offer romantic couples massage packages in Islamabad?",
    answer: "Yes, we offer luxurious romantic couples massage packages in our private couples suite. The couples retreat package includes side-by-side professional massage treatments for 90 minutes at PKR 12,000. Perfect for anniversaries, romantic dates, wedding celebrations, or special occasions. Enjoy aromatherapy, Swedish massage, or deep tissue massage together in our beautifully decorated couples suite with enhanced privacy and romantic ambiance."
  },
  {
    question: "What professional spa services do you offer for DHA Islamabad residents?",
    answer: "Our luxury spa is located in Bahria Town Phase 7, just minutes from DHA Islamabad Phases 1 & 2. We proudly serve all Islamabad areas including DHA, Bahria Town, Gulberg Greens, PWD, Blue Area, F-10, F-11, and surrounding communities. We offer comprehensive professional massage therapy services including Swedish massage, deep tissue massage, Thai massage, hot stone therapy, aromatherapy massage, luxury facials, and complete wellness packages."
  },
  {
    question: "Is your spa hygienic, safe, and professionally maintained in Islamabad?",
    answer: "Absolutely! We maintain hospital-grade hygiene standards and professional safety protocols. All treatment rooms are private, thoroughly sanitized, and equipped with sterilized professional equipment. We use premium clean Egyptian cotton linens for every client and follow strict cleanliness protocols. Your safety, comfort, and wellness are our highest priorities at Best Spa Islamabad."
  },
  {
    question: "What are your professional spa operating hours and timing in Islamabad?",
    answer: "Our luxury spa operates Monday to Friday from 10:00 AM to 4:40 AM for late-night wellness sessions, and is open 24 Hours round-the-clock on Saturday and Sunday. You can book professional massage therapy appointments anytime by calling or messaging 0370 0802980."
  },
  {
    question: "Do you have convenient parking available at your luxury spa in Islamabad?",
    answer: "Yes, we provide ample free secure parking available at our luxury spa location in Bahria Town Phase 7 near Wallayat Complex. Our wellness center is easily accessible from DHA, Bahria Town, Gulberg Greens, and all major twin city routes with convenient transportation links."
  },
  {
    question: "What makes your luxury spa the best choice for massage therapy in Islamabad?",
    answer: "Best Spa Islamabad stands out as Islamabad's premier luxury spa destination with internationally certified professional massage therapists, affordable luxury prices, private treatment suites, late-night hours until 4:40 AM and 24h weekends, and a 100% satisfaction guarantee. With over 5000 happy clients and a 4.9/5 rating, we offer unmatched professional massage therapy in our serene wellness sanctuary."
  },
  {
    question: "Can I get same-day professional massage therapy appointments in Islamabad?",
    answer: "Yes, we accommodate same-day massage therapy appointments subject to therapist availability. We recommend calling us immediately at 0370 0802980 to check real-time availability and book your preferred massage therapy session. Our friendly staff will help you secure the earliest available slot for Swedish massage, deep tissue massage, hot stone therapy, or other professional wellness treatments."
  },
  {
    question: "What types of professional massage therapy do you offer in Islamabad?",
    answer: "Our luxury spa offers comprehensive professional massage therapy services including Swedish massage for relaxation, deep tissue massage for muscle tension relief, Thai massage for flexibility, hot stone therapy for deep relaxation, aromatherapy massage for stress relief, sports massage for athletes, reflexology for holistic wellness, couples massage for romantic experiences, and customized therapeutic massage treatments."
  },
  {
    question: "Do you offer special packages and deals for spa treatments in Islamabad?",
    answer: "Yes, we offer exclusive spa packages and seasonal deals at Best Spa Islamabad. Our popular packages include couples massage retreats, weekend wellness specials, corporate wellness programs, bridal beauty packages, and birthday celebration spa treatments. We provide affordable luxury spa experiences with premium services designed for maximum value and relaxation."
  }
];

// Animated Counter Component
function AnimatedCounter({ target, duration = 2000, suffix = "" }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Modern Hero Section with Video Background */}
      <section className="relative min-h-screen py-24 sm:py-28 lg:py-0 flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/85 via-emerald-900/70 to-teal-950/85 z-20" />
          <Image
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"
            alt="Best Spa Islamabad - Luxury Massage Therapy Wellness Center"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [-20, 20], rotate: [-5, 5] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
            className="absolute top-20 left-10 w-20 h-20 bg-emerald-400/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{ y: [20, -20], rotate: [5, -5] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            className="absolute bottom-20 right-10 w-32 h-32 bg-teal-400/20 rounded-full blur-xl"
          />
        </div>

        <div className="container relative z-30 px-4 md:px-6 text-center text-white space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                Best Spa &bull; Bahria Town Phase 7 Rawalpindi
              </motion.div>

              {/* Urdu Hero Banner */}
              <motion.a
                href="https://wa.me/923700802980?text=ہیلو،%20مجھے%20مساج%20کے%20لیے%20اپوائنٹمنٹ%20بک%20کروانی%20ہے۔"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-emerald-950/90 hover:bg-emerald-900 backdrop-blur-md border-2 border-emerald-400/70 text-amber-300 hover:text-amber-200 text-xs sm:text-sm font-bold shadow-lg transition-all"
                dir="rtl"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>مساج سینٹر بحریہ ٹاؤن — ابھی رابطہ کریں</span>
              </motion.a>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-playfair tracking-tight leading-none">
              <span className="block bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent">
                Best Spa & Massage Center
              </span>
              <span className="block text-4xl md:text-6xl lg:text-7xl italic text-emerald-300 mt-2">
                Rawalpindi &bull; Bahria Town
              </span>
            </h1>

            {/* Prominent Urdu Callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="pt-2"
            >
              <a
                href="https://wa.me/923700802980?text=ہیلو،%20مجھے%20مساج%20کے%20لیے%20اپوائنٹمنٹ%20بک%20کروانی%20ہے۔"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2 rounded-2xl bg-amber-400/20 border border-amber-300/40 hover:bg-amber-400/30 text-amber-300 hover:text-amber-200 backdrop-blur-sm transition-all shadow-md group"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400 animate-bounce" />
                <span className="text-base sm:text-xl font-bold tracking-wide" dir="rtl">
                  مساج سینٹر بحریہ ٹاؤن — ابھی رابطہ کریں
                </span>
                <span className="text-xs uppercase bg-amber-400 text-stone-950 font-extrabold px-2.5 py-0.5 rounded-full ml-1">
                  WhatsApp Direct
                </span>
              </a>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-base sm:text-xl md:text-2xl max-w-4xl mx-auto text-white/90 font-light leading-relaxed"
          >
            Welcome to Best Spa, the premier luxury massage center and day spa in Bahria Town Phase 7, Rawalpindi. 
            We provide professional Swedish massage, deep tissue therapy, Thai stretching, aromatherapy, and couples spa treatments in private, clinical-grade suites near Wallayat Complex.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 justify-center items-center pt-6"
          >
            {/* Primary Phone Call CTA - Main Intention to Get Calls */}
            <a 
              href="tel:+923700802980" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-emerald-600 to-emerald-700 hover:from-amber-600 hover:to-emerald-800 text-white font-bold px-8 py-3.5 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 transform active:scale-95 group border border-amber-300/40"
              aria-label="Direct Phone Call 0370 0802980"
            >
              <div className="relative">
                <PhoneCall className="h-5 w-5 text-white animate-bounce" />
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-200 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
                </span>
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-amber-100 font-semibold">Call For Instant Booking</span>
                <span className="text-base sm:text-lg font-extrabold tracking-wide">0370 0802980</span>
              </div>
            </a>

            {/* Direct WhatsApp CTA Button */}
            <a 
              href="https://wa.me/923700802980?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20a%20massage%20appointment%20or%20call%20you"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 sm:py-4 text-base sm:text-lg rounded-full shadow-xl hover:shadow-emerald-600/30 transition-all duration-300 active:scale-95 group border border-emerald-400/40"
              aria-label="Chat or Call on WhatsApp"
            >
              <MessageCircle className="h-5 w-5 text-emerald-100 group-hover:scale-110 transition-transform" />
              <span>Chat on WhatsApp</span>
            </a>

            {/* Secondary Book Online */}
            <Link 
              href="/book" 
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }), 
                "w-full sm:w-auto bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 px-7 py-3.5 sm:py-4 text-base rounded-full"
              )}
            >
              Book Online
            </Link>
          </motion.div>

          {/* Quick Trust / Availability Sub-Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-5 text-xs sm:text-sm font-medium text-emerald-200/90 pt-3"
          >
            <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/15">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Reception Active Right Now
            </span>
            <span>Mon–Fri till 4:40 AM &bull; 24h Weekends</span>
            <span className="hidden md:inline text-white/40">•</span>
            <span className="hidden md:inline">Bahria Town Phase 7, Near Wallayat Complex</span>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: "Happy Clients", value: 5000, suffix: "+" },
              { icon: Award, label: "Expert Therapists", value: 25, suffix: "+" },
              { icon: Heart, label: "Treatments", value: 50, suffix: "+" },
              { icon: Star, label: "Years Experience", value: 10, suffix: "+" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto text-white shadow-lg">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <div className="text-3xl md:text-4xl font-bold text-emerald-900">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Location-Based Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-playfair mb-6">Best Spa & Massage Center in Rawalpindi & Bahria Town</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Discover Rawalpindi's premier wellness destination. Located in Bahria Town Phase 7 near Wallayat Complex, 
              we serve all areas including Bahria Town Phase 1–8, DHA, PWD, Gulraiz, Chaklala, Saddar, and throughout the twin cities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Massage Center Rawalpindi",
                desc: "Professional massage therapy center in Rawalpindi offering Swedish, Deep Tissue, Thai, and Hot Stone massages in Bahria Town Phase 7 near Wallayat Complex.",
                keywords: ["Massage Center Rawalpindi", "Massage Rawalpindi", "Full Body Massage Rawalpindi", "Swedish Massage Rawalpindi", "Deep Tissue Rawalpindi"],
                image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
              },
              {
                title: "Luxury Spa Bahria Town Rawalpindi",
                desc: "Premium spa services in Bahria Town Phase 7, Rawalpindi with couple suites, steam rooms, and expert certified therapists. Best spa experience in Bahria Town.",
                keywords: ["Spa Bahria Town", "Massage Bahria Town", "Spa Rawalpindi", "Couples Spa Bahria", "Bahria Phase 7 Spa"],
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
              },
              {
                title: "Wellness Sanctuary Bahria Phase 7",
                desc: "Complete wellness and therapeutic bodywork solutions serving Bahria Town Phases 1–8, DHA, and Rawalpindi with holistic treatments and late-night appointments.",
                keywords: ["Wellness Center Rawalpindi", "Spa Bahria Phase 7", "Relaxation Spa Rawalpindi", "Massage Center Bahria", "Holistic Spa Rawalpindi"],
                image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
              }
            ].map((location, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border group"
              >
                <a
                  href={`https://wa.me/923700802980?text=${encodeURIComponent(`Hello, I am interested in your ${location.title} services. Please share details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-48 overflow-hidden group cursor-pointer relative"
                  aria-label={`Inquire about ${location.title} on WhatsApp`}
                >
                  <img
                    src={location.image}
                    alt={location.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3.5 py-1.5 rounded-full bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg">
                      <MessageCircle className="h-3.5 w-3.5" /> Chat on WhatsApp
                    </span>
                  </div>
                </a>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold font-playfair">{location.title}</h3>
                  <p className="text-muted-foreground">{location.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {location.keywords.map((keyword, j) => (
                      <span key={j} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                        {keyword}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/923700802980?text=${encodeURIComponent(`Hello, I am interested in your ${location.title} services. Please share details.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow transition-all active:scale-95"
                    >
                      <MessageCircle className="h-3.5 w-3.5" /> Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Services Keywords Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-playfair mb-6">Complete Spa Services Rawalpindi & Bahria Town</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              From traditional massages to modern wellness therapies, we offer comprehensive spa services 
              tailored to your needs. Best spa experience in Rawalpindi and Bahria Town with affordable prices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "Massage Therapies",
                services: [
                  "Swedish Massage Rawalpindi",
                  "Deep Tissue Massage Rawalpindi", 
                  "Thai Massage Rawalpindi",
                  "Hot Stone Massage Rawalpindi",
                  "Aromatherapy Massage Rawalpindi",
                  "Sports Massage Rawalpindi",
                  "Massage Bahria Town Rawalpindi",
                  "Professional Massage Rawalpindi"
                ]
              },
              {
                category: "Beauty & Skincare",
                services: [
                  "Facial Treatment Rawalpindi",
                  "Body Scrub Rawalpindi",
                  "Body Wrap Rawalpindi",
                  "Anti-aging Treatment Rawalpindi",
                  "Skin Whitening Rawalpindi",
                  "Acne Treatment Rawalpindi",
                  "Skincare Bahria Town Rawalpindi",
                  "Beauty Spa Rawalpindi"
                ]
              },
              {
                category: "Wellness Packages",
                services: [
                  "Couples Spa Package Rawalpindi",
                  "Weekend Spa Deal Rawalpindi",
                  "Corporate Wellness Rawalpindi",
                  "Bridal Package Rawalpindi",
                  "Birthday Spa Package Rawalpindi",
                  "Group Spa Booking Rawalpindi",
                  "Wellness Bahria Town Rawalpindi",
                  "Spa Packages Rawalpindi"
                ]
              },
              {
                category: "Specialized Treatments",
                services: [
                  "Reflexology Rawalpindi",
                  "Cupping Therapy Rawalpindi",
                  "Pain Relief Massage Rawalpindi",
                  "Stress Management Rawalpindi",
                  "Detox Program Rawalpindi",
                  "Meditation & Yoga Rawalpindi",
                  "Therapy Bahria Town Rawalpindi",
                  "Specialized Spa Rawalpindi"
                ]
              }
            ].map((category: { category: string; services: string[] }, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100"
              >
                <h3 className="text-xl font-bold font-playfair mb-4 text-emerald-700">{category.category}</h3>
                <ul className="space-y-2">
                  {category.services.map((service, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-playfair mb-6">
              Best Spa & Massage Center Rawalpindi – Bahria Town Luxury Relaxation
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Experience the difference at Rawalpindi's most trusted spa center in Bahria Town Phase 7. Professional certified therapists, 
              affordable prices, and guaranteed satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Certified Professional Therapists",
                desc: "All our massage therapists are certified and experienced in various massage techniques. Best professional massage therapists in Rawalpindi and Bahria Town.",
                icon: Award,
                keywords: ["Certified Massage Rawalpindi", "Professional Therapists Rawalpindi", "Expert Massage Bahria", "Certified Therapists Rawalpindi", "Professional Massage Bahria Town"]
              },
              {
                title: "Affordable Spa Prices",
                desc: "Luxury spa experience at reasonable prices. Best spa deals in Rawalpindi and Bahria Town Phase 7 with transparent pricing.",
                icon: Heart,
                keywords: ["Affordable Spa Rawalpindi", "Cheap Massage Rawalpindi", "Spa Deals Rawalpindi", "Best Price Spa", "Affordable Spa Bahria Town", "Bahria Spa Deals"]
              },
              {
                title: "Private & Hygienic Environment",
                desc: "Clean, private treatment rooms with hospital-grade sterilization. Safe spa experience in Rawalpindi and Bahria Town.",
                icon: Users,
                keywords: ["Hygienic Spa Rawalpindi", "Private Massage Rooms", "Safe Spa Rawalpindi", "Clean Spa Center", "Hygienic Spa Bahria Town", "Private Spa Bahria"]
              },
              {
                title: "Convenient Location & Parking",
                desc: "Located in Bahria Town Phase 7 near Wallayat Complex with easy access from Bahria Phases 1–8, DHA, PWD, GT Road, and ample secure parking.",
                icon: MapPin,
                keywords: ["Spa Near Me Rawalpindi", "Bahria Town Rawalpindi Spa", "DHA Spa Rawalpindi", "Spa with Parking", "Best Spa Location Rawalpindi", "Bahria Town Spa Center"]
              },
              {
                title: "Late Night & Weekend Timing",
                desc: "Open Monday to Friday 10:00 AM to 4:40 AM for late-night sessions, and open 24 Hours on Saturday & Sunday. Best spa with flexible timing in Rawalpindi.",
                icon: Clock,
                keywords: ["24/7 Spa Rawalpindi", "Spa Open Now Rawalpindi", "Late Night Spa Rawalpindi", "Weekend Spa Rawalpindi", "Bahria Spa Timing", "Spa Open Bahria Town"]
              },
              {
                title: "Customer Satisfaction Guaranteed",
                desc: "5000+ happy customers with 4.9/5 rating. Best-rated spa in Rawalpindi and Bahria Town with verified reviews and professional service.",
                icon: Star,
                keywords: ["Best Rated Spa Rawalpindi", "Top Spa Rawalpindi", "5 Star Spa Rawalpindi", "Customer Reviews", "Best Rated Spa Bahria Town", "Bahria Spa Reviews"]
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white mb-6">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-playfair mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground mb-4">{benefit.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {benefit.keywords.map((keyword, j) => (
                    <span key={j} className="px-2 py-1 bg-emerald-50 text-emerald-600 rounded text-xs font-medium">
                      {keyword}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Showcase */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-playfair mb-6 bg-gradient-to-r from-emerald-600 to-orange-500 bg-clip-text text-transparent">
              Our Sanctuary
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Step into a world of tranquility and luxury. Every corner of our spa in Bahria Town Phase 7 is designed to transport you to a state of pure bliss. Our expert therapists combine ancient healing techniques with modern wellness practices to deliver transformative spa experiences that rejuvenate your body, calm your mind, and restore your natural balance.
            </p>
            <div className="mt-8 max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover the perfect harmony of nature and science at Best Spa, conveniently located in Bahria Town Phase 7 near Wallayat Complex, Rawalpindi. Every treatment is meticulously crafted to address your unique wellness needs with soothing aromatherapy scents, calming music, and temperature-controlled environments designed to optimize your relaxation journey.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                title: "Professional Swedish Massage Therapy - Bahria Town Phase 7 Rawalpindi",
                span: "row-span-2"
              },
              { 
                image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                title: "Relaxation Lounge Spa Rawalpindi & Bahria Town",
                span: "col-span-2"
              },
              { 
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                title: "Aromatherapy Session Bahria Town Rawalpindi"
              },
              { 
                image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                title: "Couples Massage Suite Bahria Town Rawalpindi"
              },
              { 
                image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
                title: "Professional Massage Therapy Bahria Town Phase 7",
                span: "row-span-2"
              },
              { 
                image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                title: "Serene Spa Ambiance Bahria Town Rawalpindi",
                span: "col-span-2"
              }
            ].map((item, i) => (
              <motion.a
                key={i}
                href={`https://wa.me/923700802980?text=${encodeURIComponent(`Hello, I am interested in ${item.title} at Best Spa Bahria Town. Please share details and availability.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={cn(
                  "relative overflow-hidden rounded-2xl group cursor-pointer block shadow-lg hover:shadow-2xl transition-all",
                  item.span
                )}
                aria-label={`Inquire about ${item.title} on WhatsApp`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 z-15 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-xl">
                    <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-white text-lg sm:text-xl font-semibold">{item.title}</h3>
                  <span className="text-emerald-300 text-xs flex items-center gap-1 mt-1 font-medium">
                    <MessageCircle className="h-3 w-3" /> Click to Inquire on WhatsApp
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-playfair mb-6">Signature Treatments</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hand-crafted therapies designed to rejuvenate your body, mind, and soul.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Swedish Relaxation",
                desc: "Classic European technique with long, flowing strokes to improve circulation and deep relaxation.",
                image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                price: "PKR 5,000",
                duration: "60 min",
                features: ["Stress Relief", "Improved Circulation", "Muscle Relaxation"]
              },
              {
                title: "Deep Tissue Therapy",
                desc: "Intense pressure targeting deep muscle layers to release chronic tension and knots.",
                image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
                price: "PKR 6,000",
                duration: "75 min",
                features: ["Chronic Pain Relief", "Injury Recovery", "Posture Correction"]
              },
              {
                title: "Aromatherapy Bliss",
                desc: "Healing touch combined with therapeutic essential oils for complete mind-body harmony.",
                image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
                price: "PKR 5,500",
                duration: "60 min",
                features: ["Stress Reduction", "Better Sleep", "Emotional Balance"]
              },
              {
                title: "Hot Stone Therapy",
                desc: "Smooth heated stones placed on key points to melt away tension and improve energy flow.",
                image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                price: "PKR 7,000",
                duration: "90 min",
                features: ["Deep Relaxation", "Pain Relief", "Improved Circulation"]
              },
              {
                title: "Couples Retreat",
                desc: "Share a romantic spa experience in our private couples suite with side-by-side treatments.",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                price: "PKR 12,000",
                duration: "90 min",
                features: ["Private Suite", "Romantic Setting", "Quality Time"]
              },
              {
                title: "Thai Massage",
                desc: "Ancient healing art combining acupressure, stretching, and energy line work.",
                image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                price: "PKR 6,500",
                duration: "90 min",
                features: ["Flexibility", "Energy Balance", "Stress Relief"]
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <a
                  href={`https://wa.me/923700802980?text=${encodeURIComponent(`Hello, I want to book the ${service.title} (${service.price}, ${service.duration}) at Best Spa.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative h-56 overflow-hidden cursor-pointer group"
                  aria-label={`Book ${service.title} on WhatsApp`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow">
                    <span className="text-sm font-semibold text-emerald-600">{service.price}</span>
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3.5 py-1.5 rounded-full bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg">
                      <MessageCircle className="h-3.5 w-3.5" /> Book on WhatsApp
                    </span>
                  </div>
                </a>
                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold font-playfair">{service.title}</h3>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 flex flex-col sm:flex-row gap-2.5">
                    <a
                      href={`https://wa.me/923700802980?text=${encodeURIComponent(`Hello, I want to book the ${service.title} (${service.price}, ${service.duration}) at Best Spa.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
                      aria-label={`Book ${service.title} on WhatsApp`}
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Book on WhatsApp</span>
                    </a>
                    <a
                      href="tel:+923700802980"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold transition-all"
                      aria-label={`Call to book ${service.title}`}
                    >
                      <Phone className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Call</span>
                    </a>
                  </div>
                  <Link 
                    href="/services" 
                    aria-label={`View full details for ${service.title}`}
                    className="block text-center text-xs font-medium text-emerald-700 dark:text-emerald-400 hover:underline pt-1"
                  >
                    View details &amp; benefits &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Spa Information Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-playfair mb-6">Why Choose Best Spa in Bahria Town Rawalpindi?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference that makes us Rawalpindi & Bahria Town's most trusted wellness destination
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                <h3 className="text-2xl font-bold font-playfair text-emerald-600 mb-4">Expert Therapists</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our team of certified massage therapists brings years of expertise and a deep understanding of anatomy and wellness techniques. Each therapist undergoes rigorous training in multiple modalities including Swedish massage, deep tissue therapy, Thai massage, and specialized aromatherapy treatments. We continuously invest in advanced education to ensure our clients receive the most effective and innovative spa treatments available in Rawalpindi and Bahria Town.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                <h3 className="text-2xl font-bold font-playfair text-orange-500 mb-4">Premium Quality Products</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We source only the finest organic essential oils, therapeutic-grade massage oils, and natural skincare products from around the world. Our commitment to quality means every treatment uses products that are free from harmful chemicals, parabens, and synthetic fragrances. From our imported Swedish massage oils to our custom-blended aromatherapy essences, every product is selected for its therapeutic properties and ability to enhance your spa experience.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                <h3 className="text-2xl font-bold font-playfair text-emerald-600 mb-4">Luxurious Environment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Step into our meticulously designed spa sanctuary where every detail contributes to your relaxation journey. Our treatment rooms feature soundproof walls, temperature-controlled environments, premium linens, and ambient lighting that creates the perfect atmosphere for healing and rejuvenation. The gentle aroma of essential oils, soothing background music, and comfortable heated tables ensure your complete comfort from arrival to departure.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                <h3 className="text-2xl font-bold font-playfair text-orange-500 mb-4">Personalized Wellness</h3>
                <p className="text-muted-foreground leading-relaxed">
                  At Best Spa Bahria Town, we understand that every individual has unique wellness needs. Our therapists begin each session with a comprehensive consultation to understand your specific concerns, health conditions, and relaxation goals. Whether you're seeking relief from chronic pain, stress reduction, athletic recovery, or simply a moment of tranquility, we customize every aspect of your treatment to deliver optimal results and a truly personalized spa experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Certification Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-orange-50">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-playfair mb-6 bg-gradient-to-r from-emerald-600 to-orange-500 bg-clip-text text-transparent">
              Safe & Certified Spa Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your safety and trust are our highest priorities. We maintain the highest standards of professionalism, hygiene, and certification.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto text-white mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-emerald-700">Licensed & Certified</h3>
              <p className="text-muted-foreground text-sm">
                Fully licensed spa operation with certified massage therapists and wellness practitioners
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto text-white mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-orange-700">Hospital-Grade Hygiene</h3>
              <p className="text-muted-foreground text-sm">
                Medical-grade sterilization protocols and disposable materials for maximum safety
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto text-white mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-emerald-700">Secure & Private</h3>
              <p className="text-muted-foreground text-sm">
                Private treatment rooms with secure facilities and confidential client information
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto text-white mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-orange-700">Professional Standards</h3>
              <p className="text-muted-foreground text-sm">
                International spa standards with continuous training and quality assurance programs
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-emerald-100">
              <h3 className="text-2xl font-bold font-playfair text-emerald-700 mb-6 text-center">Our Certifications & Compliance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-700">Government Licensed Spa</h4>
                    <p className="text-sm text-muted-foreground">Licensed by Islamabad Capital Territory Health Department</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-700">Certified Massage Therapists</h4>
                    <p className="text-sm text-muted-foreground">All therapists hold international massage therapy certifications</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-700">ISO 9001:2015 Quality Management</h4>
                    <p className="text-sm text-muted-foreground">International quality management system certification</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-700">Health & Safety Compliant</h4>
                    <p className="text-sm text-muted-foreground">Full compliance with local health and safety regulations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection />
      <WhySpaNeeded />

      {/* Enhanced CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1593941707882-a5bac6861d75?q=80&w=1200&auto=format&fit=crop"
            alt="Best Spa Islamabad Booking"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 to-teal-950/90" />
        </div>
        
        <div className="container relative z-10 px-4 md:px-6 mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-playfair">
              Ready to Transform Your Wellness Journey?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Take the first step towards ultimate relaxation and rejuvenation. 
              Our expert certified therapists are ready to create a personalized experience just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="tel:+923700802980" className="flex items-center gap-3 text-white/90 hover:text-emerald-300 transition-colors">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span className="font-semibold">0370 0802980</span>
              </a>
              <div className="flex items-center gap-3 text-white/90">
                <Calendar className="w-5 h-5 text-emerald-400" />
                <span>Mon–Fri: 10AM – 4:40AM | Sat–Sun: 24 Hours</span>
              </div>
            </div>
            <Link 
              href="/contact" 
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white text-emerald-600 hover:bg-emerald-50 px-12 py-4 text-lg font-semibold shadow-2xl hover:shadow-white/25 transition-all duration-300 group"
              )}
            >
              Book Your Appointment Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <ReviewsCarousel />

      {/* FAQ Section */}
      <section className="py-24 bg-card">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-playfair mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know before your visit.</p>
          </motion.div>
          <FAQSection items={faqs} />
        </div>
      </section>

      <MapSection />
      <SEOKeywords />
    </div>
  );
}
