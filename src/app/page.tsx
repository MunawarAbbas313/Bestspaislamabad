"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star, MapPin, Phone, Clock, ArrowRight, Check, Heart, Sparkles, Users, Award, Calendar } from "lucide-react";
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
    question: "Do I need to book an appointment for massage therapy in Gulberg Islamabad?",
    answer: "Yes, we highly recommend booking your massage therapy appointment in advance to ensure availability, especially on weekends and holidays. Our luxury spa in Gulberg Islamabad offers convenient online booking and phone booking at 0327 17877754. Walk-ins are welcome but subject to therapist availability. We recommend booking your preferred massage therapy session at least 24 hours in advance for the best experience."
  },
  {
    question: "What if I have a medical condition before my massage treatment?",
    answer: "Please inform our certified massage therapists about any medical conditions, injuries, allergies, pregnancy, or health concerns before your massage therapy session begins. Our professional therapists are trained to customize treatments including Swedish massage, deep tissue massage, and aromatherapy to ensure your safety and maximum therapeutic benefits. Your health and wellness are our top priorities at Best Spa Islamabad."
  },
  {
    question: "Are there female massage therapists available in Islamabad?",
    answer: "Yes, we have a team of professional certified male and female massage therapists available at our luxury spa in Gulberg Islamabad. You can request your preferred therapist gender at the time of booking your massage therapy appointment. All our therapists are highly trained, experienced, and maintain the highest professional standards for Swedish massage, deep tissue massage, Thai massage, and other wellness treatments."
  },
  {
    question: "What is your cancellation policy for spa appointments in Islamabad?",
    answer: "We request at least 24 hours notice for cancellations or rescheduling of your massage therapy appointments. Late cancellations (less than 24 hours) may incur a fee as our certified therapists' time is reserved specifically for your treatment. We understand emergencies happen and will work with you to reschedule your spa appointment at the earliest convenience. Contact us at 0327 17877754 for any changes."
  },
  {
    question: "What is the best massage for stress relief and relaxation in Islamabad?",
    answer: "Swedish massage and aromatherapy massage are excellent for stress relief and deep relaxation. Our professional Swedish massage uses long, flowing strokes to relax tense muscles and improve circulation, while aromatherapy combines therapeutic essential oils to calm your mind and enhance your wellness experience. Both treatments are available at our luxury spa in Gulberg Islamabad with certified therapists specializing in stress management and relaxation therapy."
  },
  {
    question: "How much does professional massage therapy cost in Islamabad?",
    answer: "Our affordable luxury massage prices in Islamabad start from PKR 5,000 for professional Swedish massage (60 minutes). Deep tissue massage therapy is PKR 6,000 (75 minutes), hot stone therapy is PKR 7,000 (90 minutes), and Thai massage is PKR 6,500 (90 minutes). We offer the best competitive spa prices in Islamabad with premium quality service, certified therapists, and luxury treatment rooms. Couples massage packages are available at PKR 12,000 for 90 minutes of romantic relaxation."
  },
  {
    question: "Which is the best luxury spa with certified therapists in Islamabad?",
    answer: "Best Spa Islamabad is the premier luxury spa center in Islamabad, now conveniently located in Gulberg Islamabad. We offer internationally certified massage therapists, private luxury treatment rooms, affordable premium prices, and an exceptional 4.9/5 customer satisfaction rating with over 5000 happy clients. Experience the best luxury spa treatments including Swedish massage, deep tissue massage, hot stone therapy, aromatherapy, and couples massage in our serene wellness sanctuary."
  },
  {
    question: "Do you offer romantic couples massage packages in Islamabad?",
    answer: "Yes, we offer luxurious romantic couples massage packages in our private couples suite at our spa in Gulberg Islamabad. The couples retreat package includes side-by-side professional massage treatments for 90 minutes at PKR 12,000. Perfect for anniversaries, romantic dates, wedding celebrations, or special occasions. Enjoy aromatherapy, Swedish massage, or deep tissue massage together in our beautifully decorated couples suite with enhanced privacy and romantic ambiance."
  },
  {
    question: "What professional spa services do you offer for DHA Islamabad residents?",
    answer: "While our luxury spa is located in Gulberg Islamabad, we proudly serve all Islamabad areas including DHA, Bahria Town, Gulraiz, Westridge, Chaklala, and surrounding communities. We offer comprehensive professional massage therapy services including Swedish massage, deep tissue massage, Thai massage, hot stone therapy, aromatherapy massage, luxury facials, body scrubs, body wraps, and complete wellness packages with convenient appointment scheduling."
  },
  {
    question: "Is your spa hygienic, safe, and professionally maintained in Islamabad?",
    answer: "Absolutely! We maintain hospital-grade hygiene standards and professional safety protocols at our luxury spa in Gulberg Islamabad. All treatment rooms are private, thoroughly sanitized, and equipped with sterilized professional equipment. We use premium clean linens for every client and follow strict cleanliness protocols. Your safety, comfort, and wellness are our highest priorities at Best Spa Islamabad, where professional excellence meets luxury relaxation."
  },
  {
    question: "What are your professional spa operating hours and timing in Islamabad?",
    answer: "Our luxury spa in Gulberg Islamabad is open 7 days a week from 10:00 AM to 10:00 PM for your convenience. You can book professional massage therapy appointments anytime during our operating hours. We also offer late evening and weekend appointments for working professionals. Call us at 0327 17877754 to book your preferred time slot. Our certified therapists are available to provide exceptional massage therapy services throughout the week."
  },
  {
    question: "Do you have convenient parking available at your luxury spa in Islamabad?",
    answer: "Yes, we provide ample free secure parking available at our luxury spa location in Gulberg Islamabad. Our wellness center is easily accessible from DHA, Bahria Town, Gulraiz, Westridge, and all major Islamabad areas with convenient transportation links. We offer a safe, comfortable parking environment for our clients to ensure your spa experience is completely stress-free from arrival to departure."
  },
  {
    question: "What makes your luxury spa the best choice for massage therapy in Islamabad?",
    answer: "Best Spa Islamabad stands out as Islamabad's premier luxury spa destination with internationally certified professional massage therapists, affordable luxury prices, private treatment suites, 24/7 customer support, flexible scheduling, and a 100% satisfaction guarantee. With over 5000 happy clients, 10+ years of excellence, and a 4.9/5 rating, we offer unmatched professional massage therapy including Swedish massage, deep tissue massage, hot stone therapy, aromatherapy, and couples massage in our serene wellness sanctuary."
  },
  {
    question: "Can I get same-day professional massage therapy appointments in Islamabad?",
    answer: "Yes, we accommodate same-day massage therapy appointments subject to therapist availability at our luxury spa in Gulberg Islamabad. We recommend calling us immediately at 0327 17877754 to check real-time availability and book your preferred massage therapy session. Our friendly staff will help you secure the earliest available slot for Swedish massage, deep tissue massage, hot stone therapy, or other professional wellness treatments for your immediate relaxation needs."
  },
  {
    question: "What types of professional massage therapy do you offer in Gulberg Islamabad?",
    answer: "Our luxury spa in Gulberg Islamabad offers comprehensive professional massage therapy services including Swedish massage for relaxation, deep tissue massage for muscle tension relief, Thai massage for flexibility, hot stone therapy for deep relaxation, aromatherapy massage for stress relief, sports massage for athletes, reflexology for holistic wellness, couples massage for romantic experiences, and customized therapeutic massage treatments tailored to your specific wellness needs and preferences."
  },
  {
    question: "Do you offer special packages and deals for spa treatments in Islamabad?",
    answer: "Yes, we offer exclusive spa packages and seasonal deals at Best Spa Islamabad in Gulberg. Our popular packages include couples massage retreats, weekend wellness specials, corporate wellness programs, bridal beauty packages, birthday celebration spa treatments, and group booking discounts. We provide affordable luxury spa experiences with premium services including Swedish massage, facials, body treatments, and complete wellness packages designed for maximum value and relaxation."
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-emerald-800/60 to-teal-900/80 z-20" />
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Best Spa Islamabad - Luxury Massage Therapy Wellness Center"
            className="w-full h-full object-cover"
            loading="eager"
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
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium"
            >
              <Sparkles className="w-4 h-4" />
              Welcome to Best Spa Islamabad
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-playfair tracking-tight leading-none">
              <span className="block bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent">
                Best Spa in Islamabad
              </span>
              <span className="block text-5xl md:text-7xl lg:text-8xl italic text-emerald-300 mt-2">
                Luxury Massage & Relaxation
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 font-light leading-relaxed"
          >
            Welcome to Best Spa Islamabad, where relaxation meets luxury. 
            We provide professional spa and massage services including full body massage, Thai massage, deep tissue therapy, aromatherapy, and couples spa treatments in a peaceful environment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          >
            <Link 
              href="/contact" 
              className={cn(
                buttonVariants({ size: "lg" }), 
                "bg-gradient-to-r from-emerald-600 to-orange-500 hover:from-emerald-700 hover:to-orange-600 text-white border-0 px-10 py-4 text-lg shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 group"
              )}
            >
              Book Your Session
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/services" 
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }), 
                "bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 px-10 py-4 text-lg"
              )}
            >
              Explore Services
            </Link>
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
            <h2 className="text-4xl md:text-6xl font-bold font-playfair mb-6">Best Spa in Islamabad</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Discover Islamabad's premier wellness destination. Located in Gulberg Islamabad, 
              we serve all areas including DHA, Bahria Town, Gulraiz, Westridge, Chaklala, and throughout the twin cities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Massage Center Islamabad",
                desc: "Professional massage therapy center in Islamabad offering Swedish, Deep Tissue, Thai, and Hot Stone massages. Now in Gulberg Islamabad.",
                keywords: ["Swedish Massage Islamabad", "Deep Tissue Massage Islamabad", "Thai Massage Islamabad", "Massage Gulberg Islamabad", "Professional Massage Islamabad"],
                image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
              },
              {
                title: "Luxury Spa Gulberg Islamabad",
                desc: "Premium spa services in Gulberg Islamabad with couple suites, steam rooms, and expert therapists. Best spa experience.",
                keywords: ["Spa Gulberg Islamabad", "Luxury Spa Islamabad", "Couples Massage Islamabad", "Gulberg Spa Center", "Best Spa Gulberg"],
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
              },
              {
                title: "Wellness Center DHA Islamabad",
                desc: "Complete wellness solutions serving DHA Islamabad and Gulberg with holistic treatments and relaxation therapies.",
                keywords: ["Wellness Center DHA", "Spa DHA Islamabad", "Relaxation Spa Islamabad", "Wellness Gulberg Islamabad", "Holistic Spa Islamabad"],
                image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
              }
            ].map((location, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold font-playfair">{location.title}</h3>
                  <p className="text-muted-foreground">{location.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {location.keywords.map((keyword, j) => (
                      <span key={j} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                        {keyword}
                      </span>
                    ))}
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
            <h2 className="text-4xl md:text-6xl font-bold font-playfair mb-6">Complete Spa Services Islamabad</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              From traditional massages to modern wellness therapies, we offer comprehensive spa services 
              tailored to your needs. Best spa experience in Islamabad with affordable prices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "Massage Therapies",
                services: [
                  "Swedish Massage Islamabad",
                  "Deep Tissue Massage Islamabad", 
                  "Thai Massage Islamabad",
                  "Hot Stone Massage Islamabad",
                  "Aromatherapy Massage Islamabad",
                  "Sports Massage Islamabad",
                  "Massage Gulberg Islamabad",
                  "Professional Massage Islamabad"
                ]
              },
              {
                category: "Beauty & Skincare",
                services: [
                  "Facial Treatment Islamabad",
                  "Body Scrub Islamabad",
                  "Body Wrap Islamabad",
                  "Anti-aging Treatment Islamabad",
                  "Skin Whitening Islamabad",
                  "Acne Treatment Islamabad",
                  "Skincare Gulberg Islamabad",
                  "Beauty Spa Islamabad"
                ]
              },
              {
                category: "Wellness Packages",
                services: [
                  "Couples Spa Package Islamabad",
                  "Weekend Spa Deal Islamabad",
                  "Corporate Wellness Islamabad",
                  "Bridal Package Islamabad",
                  "Birthday Spa Package Islamabad",
                  "Group Spa Booking Islamabad",
                  "Wellness Gulberg Islamabad",
                  "Spa Packages Islamabad"
                ]
              },
              {
                category: "Specialized Treatments",
                services: [
                  "Reflexology Islamabad",
                  "Cupping Therapy Islamabad",
                  "Pain Relief Massage Islamabad",
                  "Stress Management Islamabad",
                  "Detox Program Islamabad",
                  "Meditation & Yoga Islamabad",
                  "Therapy Gulberg Islamabad",
                  "Specialized Spa Islamabad"
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
            <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6">
              Best Spa in Islamabad – Luxury Massage & Relaxation Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Experience the difference at Islamabad's most trusted spa center. Professional therapists, 
              affordable prices, and guaranteed satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Certified Professional Therapists",
                desc: "All our massage therapists are certified and experienced in various massage techniques. Best professional massage therapists in Islamabad and Gulberg.",
                icon: Award,
                keywords: ["Certified Massage Islamabad", "Professional Therapists Islamabad", "Expert Massage Islamabad", "Certified Therapists Gulberg", "Professional Massage Gulberg"]
              },
              {
                title: "Affordable Spa Prices",
                desc: "Luxury spa experience at reasonable prices. Best spa deals in Islamabad and Gulberg with transparent pricing.",
                icon: Heart,
                keywords: ["Affordable Spa Islamabad", "Cheap Massage Islamabad", "Spa Deals Islamabad", "Best Price Spa", "Affordable Spa Gulberg", "Gulberg Spa Deals"]
              },
              {
                title: "Private & Hygienic Environment",
                desc: "Clean, private treatment rooms with hospital-grade sterilization. Safe spa experience in Islamabad and Gulberg.",
                icon: Users,
                keywords: ["Hygienic Spa Islamabad", "Private Massage Rooms", "Safe Spa Islamabad", "Clean Spa Center", "Hygienic Spa Gulberg", "Private Spa Gulberg"]
              },
              {
                title: "Convenient Location & Parking",
                desc: "Located in Gulberg Islamabad with easy access from DHA, Bahria Town, Gulraiz, and ample parking available. Best location in Islamabad.",
                icon: MapPin,
                keywords: ["Spa Near Me Islamabad", "Gulberg Islamabad Spa", "DHA Islamabad Spa", "Spa with Parking", "Best Spa Location Islamabad", "Gulberg Spa Center"]
              },
              {
                title: "7 Days a Week Service",
                desc: "Open daily from 10 AM to 10 PM. Book your appointment anytime. Best spa with flexible timing in Islamabad and Gulberg.",
                icon: Clock,
                keywords: ["24/7 Spa Islamabad", "Spa Open Now", "Late Night Spa Islamabad", "Weekend Spa Islamabad", "Gulberg Spa Timing", "Spa Open Gulberg"]
              },
              {
                title: "Customer Satisfaction Guaranteed",
                desc: "5000+ happy customers with 4.9/5 rating. Best-rated spa in Islamabad and Gulberg with excellent reviews and professional service.",
                icon: Star,
                keywords: ["Best Rated Spa Islamabad", "Top Spa Islamabad", "5 Star Spa Islamabad", "Customer Reviews", "Best Rated Spa Gulberg", "Gulberg Spa Reviews"]
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
                    <span key={j} className="px-2 py-1 bg-emerald-50 text-emerald-600 rounded text-xs">
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
              Step into a world of tranquility and luxury. Every corner of our spa is designed to transport you to a state of pure bliss. Our expert therapists combine ancient healing techniques with modern wellness practices to deliver transformative spa experiences that rejuvenate your body, calm your mind, and restore your natural balance.
            </p>
            <div className="mt-8 max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover the perfect harmony of nature and science at Best Spa Islamabad, where every treatment is meticulously crafted to address your unique wellness needs. From the moment you enter our serene sanctuary, you'll be enveloped in an atmosphere of pure tranquility, featuring soothing aromatherapy scents, calming music, and temperature-controlled environments designed to optimize your relaxation journey.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                title: "Professional Swedish Massage Therapy - Best Spa Gulberg Islamabad",
                span: "row-span-2"
              },
              { 
                image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                title: "Relaxation Lounge Islamabad Spa",
                span: "col-span-2"
              },
              { 
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                title: "Aromatherapy Session Islamabad"
              },
              { 
                image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                title: "Couples Massage Suite Islamabad"
              },
              { 
                image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
                title: "Professional Massage Therapy Islamabad",
                span: "row-span-2"
              },
              { 
                image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                title: "Serene Spa Ambiance Islamabad",
                span: "col-span-2"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={cn(
                  "relative overflow-hidden rounded-2xl group cursor-pointer",
                  item.span
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                </div>
              </motion.div>
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
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-emerald-600">{service.price}</span>
                  </div>
                </div>
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
                  <Link 
                    href="/contact" 
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "w-full mt-6 border-emerald-200 text-emerald-600 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-colors"
                    )}
                  >
                    Book This Treatment
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
            <h2 className="text-4xl md:text-6xl font-bold font-playfair mb-6">Why Choose Best Spa Islamabad?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference that makes us Islamabad's most trusted wellness destination
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                <h3 className="text-2xl font-bold font-playfair text-emerald-600 mb-4">Expert Therapists</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our team of certified massage therapists brings years of expertise and a deep understanding of anatomy and wellness techniques. Each therapist undergoes rigorous training in multiple modalities including Swedish massage, deep tissue therapy, Thai massage, and specialized aromatherapy treatments. We continuously invest in advanced education to ensure our clients receive the most effective and innovative spa treatments available in Islamabad.
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
                  At Best Spa Islamabad, we understand that every individual has unique wellness needs. Our therapists begin each session with a comprehensive consultation to understand your specific concerns, health conditions, and relaxation goals. Whether you're seeking relief from chronic pain, stress reduction, athletic recovery, or simply a moment of tranquility, we customize every aspect of your treatment to deliver optimal results and a truly personalized spa experience.
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
            src="https://images.unsplash.com/photo-1593941707882-a5bac6861d75?q=80&w=2070&auto=format&fit=crop"
            alt="Book Now"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-teal-900/90" />
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
              Our expert therapists are waiting to create a personalized experience just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-4 text-white/80">
                <Phone className="w-5 h-5" />
                <span>0327 17877754</span>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <Calendar className="w-5 h-5" />
                <span>Open Daily: 10AM - 10PM</span>
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
