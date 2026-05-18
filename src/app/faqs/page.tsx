import { Metadata } from 'next';
import { FAQSection } from "@/components/ui/accordion";
import { MapSection } from "@/components/shared/MapSection";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

export const metadata: Metadata = {
    title: "Frequently Asked Questions | Best Spa Islamabad",
    description: "Find answers to common questions about our spa services, booking, pricing, and what to expect during your visit to Best Spa Islamabad.",
};

const comprehensiveFaqs = [
    {
        question: "Which is the best spa in Islamabad?",
        answer: "Best Spa Islamabad provides luxury spa and massage services including Thai massage, deep tissue massage, aromatherapy, and couples spa sessions. Our certified therapists, premium facilities, and exceptional customer service make us the top choice for relaxation and wellness in Islamabad."
    },
    {
        question: "Do you offer couples spa services?",
        answer: "Yes, we provide private couples spa and massage services in Islamabad. Our couples retreat includes a private double suite with two Swedish massages, complimentary tea, and a romantic atmosphere perfect for special occasions or quality time together."
    },
    {
        question: "What are the benefits of massage therapy?",
        answer: "Massage therapy helps reduce stress, improve blood circulation, relieve muscle pain, and promote relaxation. Additional benefits include better sleep quality, enhanced immune function, reduced anxiety, improved flexibility, and accelerated recovery from injuries."
    },
    {
        question: "Do I need an appointment?",
        answer: "Appointments are recommended for the best spa experience and availability. While we welcome walk-ins, booking in advance ensures you get your preferred time slot and therapist. You can book by calling 0327 17877754 or through our website."
    },
    {
        question: "What should I wear for my massage therapy session at Best Spa Islamabad?",
        answer: "We recommend wearing loose, comfortable clothing for your professional massage therapy session. For full-body massages including Swedish massage, deep tissue massage, and hot stone therapy, you will be properly draped with premium sheets/towels at all times to ensure your complete privacy, comfort, and relaxation."
    },
    {
        question: "Do I need to book an appointment for massage therapy in Gulberg Islamabad?",
        answer: "Yes, we highly recommend booking your massage therapy appointment in advance to ensure availability, especially on weekends and holidays. Our luxury spa in Gulberg Islamabad offers convenient online booking and phone booking at 0327 17877754."
    },
    {
        question: "What if I have a medical condition before my massage treatment?",
        answer: "Please inform our certified massage therapists about any medical conditions, injuries, allergies, pregnancy, or health concerns before your massage therapy session begins. Our professional therapists are trained to customize treatments to ensure your safety and maximum therapeutic benefits."
    },
    {
        question: "Are there female massage therapists available in Islamabad?",
        answer: "Yes, we have a team of professional certified male and female massage therapists available at our luxury spa in Gulberg Islamabad. You can request your preferred therapist gender at the time of booking your massage therapy appointment."
    },
    {
        question: "How early should I arrive for my spa appointment?",
        answer: "We recommend arriving 15 minutes before your scheduled appointment time. This allows you to check in, change into comfortable attire, and begin relaxing before your treatment begins. Early arrival ensures you get the full benefit of your scheduled session time."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit/debit cards, cash payments, and mobile banking transfers. Payment is required at the time of service. We also offer gift certificates that can be purchased for yourself or as gifts for others."
    },
    {
        question: "Do you offer membership packages or discounts?",
        answer: "Yes, we offer monthly and yearly membership packages that provide significant discounts on regular treatments. We also have seasonal specials, corporate wellness programs, and group booking discounts. Ask our front desk for current promotions and membership benefits."
    },
    {
        question: "Can I customize my massage?",
        answer: "Absolutely. Our expert therapists are trained to adjust pressure and focus areas based on your specific needs and preferences. Whether you prefer gentle relaxation or deep tissue work, we customize each treatment to address your individual requirements."
    },
    {
        question: "Is parking available at your spa location?",
        answer: "Yes, we have a dedicated parking area for our clients right in front of the spa. Our Gulberg Islamabad location is easily accessible with ample parking space, making your visit convenient and stress-free."
    },
    {
        question: "What makes Best Spa Islamabad different from other spas?",
        answer: "Our commitment to excellence sets us apart. We combine certified professional therapists, premium organic products, luxurious facilities, and personalized care to create an unmatched spa experience. Our attention to detail, hygiene standards, and customer satisfaction make us Islamabad's premier wellness destination."
    },
    {
        question: "Do you accept credit cards?",
        answer: "Yes, we accept all major credit/debit cards as well as cash payments and mobile banking options for your convenience."
    },
    {
        question: "Are your products organic and safe?",
        answer: "Yes, we use only premium, organic, and cruelty-free oils and lotons for your safety and comfort. All our products are carefully selected for their therapeutic properties and are free from harmful chemicals and synthetic fragrances."
    },
    {
        question: "How long are your massage sessions?",
        answer: "We offer various session lengths including 30, 45, 60, 75, and 90-minute treatments. Session duration depends on the type of service you choose. Popular options like Swedish and deep tissue massages are typically 60 minutes, while specialized treatments may vary."
    },
    {
        question: "What areas of Islamabad do you serve?",
        answer: "We welcome clients from all areas of Islamabad including F-10, F-11, DHA, Bahria Town, Blue Area, Gulberg, and surrounding areas. Our convenient Gulberg location makes us easily accessible from throughout Islamabad and Rawalpindi."
    },
    {
        question: "Do you offer gift certificates?",
        answer: "Yes, we offer beautiful gift certificates that can be purchased for any amount or specific treatments. These make perfect gifts for birthdays, anniversaries, or special occasions. Gift certificates can be purchased in-person or over the phone."
    },
    {
        question: "What should I expect during my first visit?",
        answer: "During your first visit, you'll complete a brief health consultation, discuss your preferences with your therapist, and receive a personalized treatment. We'll explain the process, answer any questions, and ensure you're comfortable throughout your experience."
    },
    {
        question: "Is Best Spa Islamabad licensed and certified?",
        answer: "Yes, Best Spa Islamabad is fully licensed by the Islamabad Capital Territory Health Department (License No: ICT/HD/SPA/2024/00123) and approved by the Pakistan Tourism Development Corporation. We maintain ISO 9001:2015 quality management certification and all our therapists hold international massage therapy certifications from IMTA."
    },
    {
        question: "What safety and hygiene protocols do you follow?",
        answer: "We maintain hospital-grade sterilization protocols, use disposable materials where appropriate, and conduct regular health inspections. All treatment rooms are private and sanitized between each client. Our products are certified organic and therapeutic grade, ensuring maximum safety and effectiveness."
    },
    {
        question: "Are your massage therapists certified?",
        answer: "Yes, all our massage therapists are internationally certified by the International Massage Therapy Association (IMTA) and undergo continuous training in the latest spa and wellness techniques. They are also trained in anatomy, safety protocols, and client consultation procedures."
    },
    {
        question: "Do you have insurance coverage?",
        answer: "Yes, Best Spa Islamabad is fully insured with comprehensive liability coverage. We maintain all necessary business licenses, professional liability insurance, and worker's compensation coverage to ensure complete protection for our clients and staff."
    },
    {
        question: "How do you ensure privacy and confidentiality?",
        answer: "We maintain strict privacy protocols with private treatment rooms, secure client records, and confidential handling of all personal information. Our privacy policy complies with international data protection standards, and we never share client information without explicit consent."
    }
];

export default function FAQPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Header */}
            <section className="bg-primary/5 py-20 md:py-32 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6 text-foreground">Frequently Asked Questions</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Everything you need to know about Best Spa Islamabad services, booking, and what to expect during your visit.
                    </p>
                </div>
            </section>

            {/* FAQ Categories */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-card p-6 rounded-2xl border border-border">
                            <h3 className="text-xl font-bold font-playfair text-emerald-600 mb-3">Booking & Appointments</h3>
                            <p className="text-muted-foreground text-sm">
                                Learn about our booking process, appointment requirements, and scheduling options.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-2xl border border-border">
                            <h3 className="text-xl font-bold font-playfair text-orange-500 mb-3">Services & Treatments</h3>
                            <p className="text-muted-foreground text-sm">
                                Detailed information about our massage therapies, spa services, and treatment options.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-2xl border border-border">
                            <h3 className="text-xl font-bold font-playfair text-emerald-600 mb-3">Pricing & Payments</h3>
                            <p className="text-muted-foreground text-sm">
                                Information about our pricing, payment methods, membership packages, and special offers.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-2xl border border-border">
                            <h3 className="text-xl font-bold font-playfair text-orange-500 mb-3">Policies & Guidelines</h3>
                            <p className="text-muted-foreground text-sm">
                                Our spa policies, health guidelines, cancellation rules, and visitor information.
                            </p>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-3xl border border-border">
                        <h2 className="text-3xl font-bold font-playfair text-center mb-8">Common Questions</h2>
                        <FAQSection items={comprehensiveFaqs} />
                    </div>
                </div>
            </section>

            {/* Additional Information */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-playfair mb-4">Still Have Questions?</h2>
                        <p className="text-xl text-muted-foreground">
                            Our friendly staff is here to help with any additional questions you may have.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto text-white mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold mb-2">Call Us</h3>
                            <p className="text-muted-foreground">0327 17877754</p>
                            <p className="text-sm text-muted-foreground">Daily: 10AM - 10PM</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto text-white mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold mb-2">WhatsApp</h3>
                            <p className="text-muted-foreground">Chat with us</p>
                            <p className="text-sm text-muted-foreground">Instant responses</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto text-white mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold mb-2">Email</h3>
                            <p className="text-muted-foreground">info@bestspaislamabad.com</p>
                            <p className="text-sm text-muted-foreground">24/7 support</p>
                        </div>
                    </div>
                </div>
            </section>

            <MapSection />
            <SEOKeywords />
        </div>
    );
}
