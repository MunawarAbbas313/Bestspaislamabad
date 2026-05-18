import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy | Best Spa Islamabad",
    description: "Privacy policy for Best Spa Islamabad. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
    return (
        <div className="bg-background min-h-screen py-20">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-8 text-center">Privacy Policy</h1>
                
                <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                        <strong>Effective Date:</strong> January 1, 2024<br />
                        <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
                    </p>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground font-playfair mb-4">Introduction</h2>
                        <p className="leading-relaxed">
                            At Best Spa Islamabad, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, store, and protect your data when you visit our website, book appointments, or use our spa services in Gulberg Islamabad.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground font-playfair mb-4">Information We Collect</h2>
                        
                        <h3 className="text-xl font-semibold text-foreground mb-3">Personal Information</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Name and contact details (phone number, email address)</li>
                            <li>Appointment booking information and preferences</li>
                            <li>Payment information (processed securely through third-party payment gateways)</li>
                            <li>Health information relevant to spa treatments</li>
                            <li>Communication preferences</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Technical Information</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>IP address and browser information</li>
                            <li>Device information and usage patterns</li>
                            <li>Cookies and similar tracking technologies</li>
                            <li>Pages visited and time spent on our website</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground font-playfair mb-4">How We Use Your Information</h2>
                        <p className="mb-4">We use your information to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Process and confirm your spa appointments</li>
                            <li>Provide personalized spa treatments and recommendations</li>
                            <li>Communicate with you about appointments and services</li>
                            <li>Process payments and manage billing</li>
                            <li>Improve our services and customer experience</li>
                            <li>Send promotional offers and newsletters (with your consent)</li>
                            <li>Respond to inquiries and provide customer support</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground font-playfair mb-4">Information Sharing</h2>
                        <p className="mb-4">We do not sell, rent, or trade your personal information. We may share your information only with:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Payment processors for transaction processing</li>
                            <li>Service providers who assist in operating our business</li>
                            <li>Legal authorities when required by law</li>
                            <li>Healthcare providers in emergency situations (with your consent)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground font-playfair mb-4">Data Security</h2>
                        <p className="leading-relaxed">
                            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security measures include SSL encryption, secure servers, and restricted access to sensitive data.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground font-playfair mb-4">Your Rights</h2>
                        <p className="mb-4">You have the right to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Access your personal information</li>
                            <li>Correct inaccurate information</li>
                            <li>Request deletion of your personal information</li>
                            <li>Opt-out of marketing communications</li>
                            <li>Restrict processing of your information</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground font-playfair mb-4">Cookies and Tracking</h2>
                        <p className="leading-relaxed">
                            Our website uses cookies to enhance your experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences. Disabling cookies may affect some website functionality.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground font-playfair mb-4">Third-Party Links</h2>
                        <p className="leading-relaxed">
                            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. Please review their privacy policies before providing personal information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground font-playfair mb-4">Children's Privacy</h2>
                        <p className="leading-relaxed">
                            Our services are not intended for children under 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it immediately.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground font-playfair mb-4">Changes to This Policy</h2>
                        <p className="leading-relaxed">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. Continued use of our services after such changes constitutes acceptance of the updated policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground font-playfair mb-4">Contact Us</h2>
                        <p className="leading-relaxed">
                            If you have questions about this Privacy Policy or need to exercise your rights, please contact us:
                        </p>
                        <div className="bg-muted p-6 rounded-2xl mt-4">
                            <p><strong>Best Spa Islamabad</strong></p>
                            <p>📍 Gulberg Islamabad, Pakistan</p>
                            <p>📞 0327 17877754</p>
                            <p>📧 info@bestspaislamabad.com</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
