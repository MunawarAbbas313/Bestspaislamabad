import { Metadata } from 'next';
import { MapSection } from "@/components/shared/MapSection";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

export const metadata: Metadata = {
    title: "About Best Spa Islamabad",
    description: "Best Spa Islamabad is one of the leading luxury spa and massage centers in Islamabad offering premium wellness and relaxation services. Our mission is to provide a calm and refreshing experience where clients can relax their body and mind away from daily stress.",
};

const aboutFaqs = [
    {
        question: "How long have you been in business?",
        answer: "Best Spa Islamabad was established in 2015. We have been serving the community with top-notch wellness services for over a decade."
    },
    {
        question: "Is your staff certified?",
        answer: "Yes, every member of our therapy team is certified from reputable wellness institutes and undergoes regular training to maintain high standards."
    }
];

export default function AboutPage() {
    return (
        <div className="bg-background min-h-screen">
            <section className="py-20 container mx-auto px-4 md:px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-8 text-center">About Best Spa Islamabad</h1>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                        <strong>Best Spa Islamabad</strong> is one of the leading luxury spa and massage centers in Islamabad offering premium wellness and relaxation services. Our mission is to provide a calm and refreshing experience where clients can relax their body and mind away from daily stress.
                    </p>

                    <p>
                        We specialize in full body massage, Thai massage, deep tissue therapy, aromatherapy, and couples spa treatments. Every service is designed to improve relaxation, reduce body pain, and promote wellness.
                    </p>

                    <p>
                        Our spa center in Islamabad is known for its peaceful atmosphere, professional therapists, privacy, hygiene, and customer care. Whether you need stress relief or complete body relaxation, we are here to provide the best spa experience in Islamabad.
                    </p>

                    <div className="mt-8 p-8 bg-primary/5 rounded-3xl border border-primary/10">
                        <h3 className="text-2xl font-bold text-primary mb-4 font-playfair">Our Commitment to Excellence</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Since our establishment, Best Spa Islamabad has been dedicated to setting the highest standards in wellness and spa services. We believe that true relaxation comes from the perfect combination of skilled practitioners, premium products, and an environment that nurtures both body and soul. Our commitment extends beyond providing exceptional treatments – we strive to create lasting wellness journeys that transform our clients' lives through the healing power of touch, aromatherapy, and mindful relaxation techniques.
                        </p>
                    </div>

                    <div className="mt-12 space-y-6">
                        <h2 className="text-2xl font-bold text-foreground font-playfair">Our Philosophy</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            At Best Spa Islamabad, we embrace a holistic approach to wellness that recognizes the intricate connection between physical health, mental clarity, and emotional balance. Our philosophy is rooted in the belief that regular spa treatments are not merely luxuries, but essential components of a healthy lifestyle. We combine ancient healing wisdom with modern scientific understanding to create treatments that address both immediate relaxation needs and long-term wellness goals.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Every aspect of our spa – from the carefully selected essential oils to the temperature-controlled treatment rooms – is designed to support your body's natural healing processes and promote deep, lasting relaxation. We honor the trust our clients place in us by maintaining the highest standards of hygiene, professionalism, and personalized care in every interaction.
                        </p>
                    </div>

                    <div className="mt-12 p-8 bg-emerald-50 rounded-3xl border border-emerald-100">
                        <h3 className="text-2xl font-bold text-emerald-700 mb-6 font-playfair">Licenses & Certifications</h3>
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-2xl border border-emerald-200">
                                <h4 className="text-lg font-semibold text-emerald-600 mb-3">Government Licenses</h4>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                                        </div>
                                        <div>
                                            <strong>Islamabad Capital Territory Health Department License</strong>
                                            <p className="text-sm">License No: ICT/HD/SPA/2024/00123</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                                        </div>
                                        <div>
                                            <strong>Pakistan Tourism Development Corporation Approved</strong>
                                            <p className="text-sm">Registered wellness tourism provider</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-orange-200">
                                <h4 className="text-lg font-semibold text-orange-600 mb-3">Professional Certifications</h4>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
                                        </div>
                                        <div>
                                            <strong>International Massage Therapy Association (IMTA)</strong>
                                            <p className="text-sm">All therapists certified by IMTA standards</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
                                        </div>
                                        <div>
                                            <strong>ISO 9001:2015 Quality Management System</strong>
                                            <p className="text-sm">Certified for spa operations and customer service</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
                                        </div>
                                        <div>
                                            <strong>Occupational Safety and Health Administration (OSHA) Compliant</strong>
                                            <p className="text-sm">International workplace safety standards</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-emerald-200">
                                <h4 className="text-lg font-semibold text-emerald-600 mb-3">Health & Safety Standards</h4>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                                        </div>
                                        <div>
                                            <strong>Hospital-Grade Sterilization Protocols</strong>
                                            <p className="text-sm">Medical-grade equipment sterilization and disposable materials</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                                        </div>
                                        <div>
                                            <strong>Regular Health Inspections</strong>
                                            <p className="text-sm">Monthly inspections by health department officials</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                                        </div>
                                        <div>
                                            <strong>Certified Organic Products</strong>
                                            <p className="text-sm">All oils and products certified organic and therapeutic grade</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-bold font-playfair text-center mb-10">About Us FAQ</h2>
                    <FAQSection items={aboutFaqs} />
                </div>
            </section>

            <MapSection />

            <SEOKeywords />
        </div>
    );
}
