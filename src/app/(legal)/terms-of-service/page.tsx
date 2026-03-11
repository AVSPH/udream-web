import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Udream",
    description: "Terms of Service for Udream Travels",
};

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-slate-50/50">
            <div className="relative pt-32 pb-24 px-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                <div className="relative max-w-3xl mx-auto">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        Legal
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Terms of Service
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 pb-24 relative z-10 -mt-12">
                <div className="bg-white rounded-3xl shadow-xl shadow-border/50 border border-border/50 p-8 md:p-12 lg:p-16 prose prose-slate prose-headings:font-bold prose-headings:text-foreground prose-h2:text-2xl prose-h2:border-b prose-h2:border-border/50 prose-h2:pb-4 prose-h2:mt-12 prose-h2:mb-6 prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:marker:text-primary max-w-none">
                    <p>
                    Welcome to Udream Travels. Please read these Terms of Service carefully before using our website and services.
                </p>

                <h2>1. Acceptance of Terms</h2>
                <p>
                    By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you disagree with any part of these terms, you may not access the service.
                </p>

                <h2>2. Intellectual Property</h2>
                <p>
                    The website and its original content (including text, graphics, images, logos, and software) are the property of Udream Travels and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>

                <h2>3. User Conduct</h2>
                <p>
                    You agree not to use the website:
                </p>
                <ul>
                    <li>In any way that violates any applicable local, national, or international law or regulation.</li>
                    <li>To impersonate or attempt to impersonate Udream Travels, an employee, another user, or any other person or entity.</li>
                    <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website, or which may harm Udream Travels or users of the website.</li>
                </ul>

                <h2>4. Disclaimer of Warranties</h2>
                <p>
                    Our website is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. Udream Travels makes no representations or warranties of any kind, express or implied, as to the operation of their services, or the information, content, or materials included therein.
                </p>
                <p>
                    Travel information, costs, and visa requirements are subject to change. We do our best to provide accurate and up-to-date information, but we do not guarantee the completeness or accuracy of any content.
                </p>

                <h2>5. Limitation of Liability</h2>
                <p>
                    In no event shall Udream Travels, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
                </p>

                <h2>6. Links to Other Web Sites</h2>
                <p>
                    Our Service may contain links to third-party web sites or services that are not owned or controlled by Udream Travels.
                </p>
                <p>
                    Udream Travels has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Udream Travels shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
                </p>

                <h2>7. Changes to Terms</h2>
                <p>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
                </p>

                <h2>8. Contact Us</h2>
                <p>
                    If you have any questions about these Terms, please contact us at:
                    <br />
                    <strong>Email:</strong> legal@udreamtravels.com
                </p>
                </div>
            </div>
        </div>
    );
}
