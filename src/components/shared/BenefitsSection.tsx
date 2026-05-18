"use client";

import { CheckCircle2 } from "lucide-react";

const benefits = [
    {
        title: "Professional Massage Therapists",
        description: "Our experienced therapists use professional massage techniques designed to reduce stress, improve circulation, relax muscles, and refresh your body and mind."
    },
    {
        title: "Luxury Spa Environment",
        description: "We provide a peaceful and luxurious spa atmosphere designed for complete relaxation and wellness enhancement."
    },
    {
        title: "Clean & Hygienic Rooms",
        description: "All treatment rooms are thoroughly sanitized and maintained to the highest hygiene standards for your safety and comfort."
    },
    {
        title: "Affordable Spa Packages",
        description: "We offer competitive pricing and luxury spa packages that provide exceptional value for premium massage and wellness services."
    },
    {
        title: "Private Couples Spa Sessions",
        description: "Enjoy romantic couples massage treatments in private suites designed for special occasions and intimate relaxation experiences."
    },
    {
        title: "Easy Booking & Friendly Staff",
        description: "Our friendly staff makes booking simple and convenient, ensuring your spa experience is stress-free from start to finish."
    }
];

export function BenefitsSection() {
    return (
        <section className="py-20 bg-muted/20">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Why Choose Best Spa Islamabad?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        At Best Spa Islamabad, we focus on comfort, wellness, hygiene, and customer satisfaction. Our experienced therapists use professional massage techniques designed to reduce stress, improve circulation, relax muscles, and refresh your body and mind.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-2xl shadow-sm border border-border">
                            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-100 to-orange-100 flex items-center justify-center text-emerald-600 mb-4">
                                <CheckCircle2 className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
