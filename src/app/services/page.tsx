import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from 'next';
import { MessageCircle, Phone } from "lucide-react";
import { FAQSection } from "@/components/ui/accordion";
import { MapSection } from "@/components/shared/MapSection";
import { SEOKeywords } from "@/components/shared/SEOKeywords";
import { BookingForm } from "@/components/shared/BookingForm";

export const metadata: Metadata = {
    title: "Spa & Massage Services Rawalpindi • Bahria Town | Best Spa",
    description: "We offer a wide range of professional spa and massage services in Rawalpindi and Bahria Town Phase 7 designed for relaxation, stress relief, and wellness improvement.",
};

const services = [
    {
        id: "swedish",
        name: "Full Body Massage Rawalpindi",
        price: "PKR 5,000",
        duration: "60 Min",
        description: "Our full body massage service in Bahria Town Rawalpindi helps reduce stress, improve blood circulation, relax muscles, and refresh your body. Professional massage techniques combined with premium oils create a relaxing spa experience.",
        image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=720&auto=format&fit=crop"
    },
    {
        id: "deep-tissue",
        name: "Deep Tissue Massage Rawalpindi",
        price: "PKR 6,000",
        duration: "60 Min",
        description: "Deep tissue massage focuses on muscle pain, stiffness, and tension using advanced therapeutic techniques that help provide long-lasting relief and relaxation in Rawalpindi.",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=720&auto=format&fit=crop"
    },
    {
        id: "thai",
        name: "Thai Massage Rawalpindi",
        price: "PKR 5,500",
        duration: "60/90 Min",
        description: "Experience traditional Thai massage in Bahria Town Rawalpindi using stretching and pressure point therapy to improve flexibility, release tension, and increase energy levels.",
        image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?q=80&w=720&auto=format&fit=crop"
    },
    {
        id: "aromatherapy",
        name: "Aromatherapy Massage Rawalpindi",
        price: "PKR 6,500",
        duration: "60 Min",
        description: "Relax your body and mind with aromatherapy massage using natural essential oils that promote stress relief, better sleep, and emotional wellness.",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=720&auto=format&fit=crop"
    },
    {
        id: "hot-stone",
        name: "Hot Stone Therapy Rawalpindi",
        price: "PKR 7,000",
        duration: "75 Min",
        description: "Smooth, water-heated stones are placed on specific points on the body to promote deep muscle relaxation and melt away stress. Perfect for deep relaxation therapy in Bahria Town.",
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=720&auto=format&fit=crop"
    },
    {
        id: "reflexology",
        name: "Foot Reflexology",
        price: "PKR 3,500",
        duration: "45 Min",
        description: "Application of pressure to specific points on the feet that correspond to organs and systems of the body. Promotes holistic wellness and natural healing.",
        image: "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=720&auto=format&fit=crop"
    },
    {
        id: "head-shoulder",
        name: "Head, Neck & Shoulders",
        price: "PKR 3,000",
        duration: "30 Min",
        description: "A quick but effective treatment targeting the most common areas of tension. Perfect for a lunch break destress session and immediate stress relief.",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=720&auto=format&fit=crop"
    },
    {
        id: "couples",
        name: "Couples Spa Rawalpindi",
        price: "PKR 12,000",
        duration: "60 Min",
        description: "Enjoy a luxury couples spa experience in Bahria Town Rawalpindi with private relaxing massage sessions designed for comfort, peace, and memorable moments together.",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=720&auto=format&fit=crop"
    }
];

const serviceFaqs = [
    {
        question: "Do you offer membership packages?",
        answer: "Yes, we have monthly and yearly membership packages that offer significant discounts on regular treatments. Ask our front desk for details."
    },
    {
        question: "Can I customize my massage?",
        answer: "Absolutely. Our expert therapists are trained to adjust pressure and focus areas based on your specific needs and preferences."
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Header */}
            <section className="bg-primary/5 py-20 md:py-32 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6 text-foreground">Our Spa Services in Rawalpindi & Bahria Town</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        We offer a wide range of professional spa and massage services in Rawalpindi and Bahria Town Phase 7 designed for relaxation, stress relief, and wellness improvement.
                    </p>
                    <div className="mt-8 max-w-4xl mx-auto">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our comprehensive menu of spa services has been carefully curated to address the diverse wellness needs of our clients. Each treatment combines time-honored healing traditions with modern therapeutic techniques, delivered by our team of certified massage therapists who are dedicated to providing exceptional care and personalized attention to every client.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {services.map((service) => (
                            <div key={service.id} id={service.id} className="group flex flex-col items-center md:items-start md:flex-row gap-6 bg-card p-6 rounded-3xl border border-border hover:shadow-lg transition-all duration-300">
                                <a
                                    href={`https://wa.me/923700802980?text=${encodeURIComponent(`Hello, I want to book the ${service.name} (${service.price}, ${service.duration}) at Best Spa.`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full md:w-48 h-48 shrink-0 overflow-hidden rounded-2xl block relative group cursor-pointer"
                                    aria-label={`Book ${service.name} on WhatsApp`}
                                >
                                    <img src={service.image} alt={service.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="px-3 py-1 rounded-full bg-emerald-700 text-white font-bold text-[11px] flex items-center gap-1 shadow">
                                            <MessageCircle className="h-3 w-3" /> WhatsApp
                                        </span>
                                    </div>
                                </a>
                                <div className="flex-grow space-y-3 text-center md:text-left">
                                    <h2 className="text-2xl font-bold font-playfair text-foreground">{service.name}</h2>
                                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">{service.price}</span>
                                        <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">{service.duration}</span>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                                    <div className="pt-3 flex flex-wrap gap-2.5">
                                        <a
                                            href={`https://wa.me/923700802980?text=${encodeURIComponent(`Hello, I want to book the ${service.name} (${service.price}, ${service.duration}) at Best Spa.`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow active:scale-95"
                                            aria-label={`Book ${service.name} on WhatsApp`}
                                        >
                                            <MessageCircle className="h-3.5 w-3.5" />
                                            <span>WhatsApp Book</span>
                                        </a>
                                        <a
                                            href="tel:+923700802980"
                                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold transition-all"
                                            aria-label={`Call to book ${service.name}`}
                                        >
                                            <Phone className="h-3.5 w-3.5 text-emerald-400" />
                                            <span>Call</span>
                                        </a>
                                        <Link
                                            href="/book"
                                            className="inline-flex items-center px-3 py-2 rounded-full border border-border hover:bg-muted text-xs font-medium"
                                        >
                                            Book Online
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust & Safety Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Why Trust Our Services</h2>
                        <p className="text-xl text-muted-foreground">
                            Professional, safe, and certified spa treatments you can rely on
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-emerald-700">Certified Professionals</h3>
                            </div>
                            <p className="text-muted-foreground">
                                All our massage therapists are internationally certified and continuously trained in the latest spa and wellness techniques.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-orange-700">Premium Quality Products</h3>
                            </div>
                            <p className="text-muted-foreground">
                                We use only certified organic essential oils and therapeutic-grade products that are safe for all skin types.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-emerald-700">Safe & Hygienic</h3>
                            </div>
                            <p className="text-muted-foreground">
                                Hospital-grade sterilization protocols and private treatment rooms ensure your complete safety and comfort.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-orange-700">Licensed & Insured</h3>
                            </div>
                            <p className="text-muted-foreground">
                                Fully licensed by Islamabad Health Department and fully insured for complete peace of mind.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Form Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold font-playfair text-emerald-700 mb-4">
                                Book Your Massage Session
                            </h2>
                            <p className="text-muted-foreground">
                                Ready to experience our professional spa services? Fill out the form below and we'll send your booking request via WhatsApp for instant confirmation.
                            </p>
                        </div>
                        <BookingForm />
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-muted/20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-playfair text-center mb-10">Services FAQ</h2>
                    <FAQSection items={serviceFaqs} />
                </div>
            </section>

            <MapSection />

            <SEOKeywords />
        </div>
    );
}
