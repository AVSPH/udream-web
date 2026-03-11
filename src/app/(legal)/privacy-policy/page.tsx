import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Udream",
    description: "Privacy Policy for Udream Travels",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-slate-50/50">
            <div className="relative pt-32 pb-24 px-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                <div className="relative max-w-3xl mx-auto">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        Legal
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 pb-24 relative z-10 -mt-12">
                <div className="bg-white rounded-3xl shadow-xl shadow-border/50 border border-border/50 p-8 md:p-12 lg:p-16 prose prose-slate prose-headings:font-bold prose-headings:text-foreground prose-h2:text-2xl prose-h2:border-b prose-h2:border-border/50 prose-h2:pb-4 prose-h2:mt-12 prose-h2:mb-6 prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:marker:text-primary max-w-none">
                    <p>
                    At Udream Travels, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
                </p>

                <h2>1. Information We Collect</h2>
                <p>
                    We may collect the following types of information:
                </p>
                <ul>
                    <li><strong>Personal Information:</strong> such as your name, email address, and demographic information when you subscribe to our newsletter, contact us, or create an account.</li>
                    <li><strong>Usage Data:</strong> such as your IP address, browser type, pages visited, and time spent on our site, collected automatically through cookies and analytics tools.</li>
                </ul>

                <h2>2. How We Use Your Information</h2>
                <p>
                    We use the collected information for various purposes, including:
                </p>
                <ul>
                    <li>Providing and maintaining our website and services.</li>
                    <li>Improving user experience and analyzing site traffic.</li>
                    <li>Communicating with you, including sending newsletters or responding to inquiries (only if you have opted in).</li>
                    <li>Preventing fraud and ensuring the security of our platform.</li>
                </ul>

                <h2>3. Cookies and Tracking Technologies</h2>
                <p>
                    We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some parts of our site may not function properly.
                </p>

                <h2>4. Third-Party Services</h2>
                <p>
                    We may share your information with third-party vendors and service providers that perform services on our behalf (such as analytics or email delivery). These third parties have access to your personal data only to perform specific tasks and are obligated not to disclose or use it for any other purpose.
                </p>
                <p>
                    Our website may also contain links to external sites that are not operated by us. We have no control over and assume no responsibility for the content or privacy policies of any third-party sites.
                </p>

                <h2>5. Data Security</h2>
                <p>
                    The security of your data is important to us. We implement standard security measures to protect your personal information, but remember that no method of transmission over the Internet or electronic storage is 100% secure.
                </p>

                <h2>6. Your Rights</h2>
                <p>
                    Depending on your location, you may have the right to access, update, or delete the personal information we hold about you. If you wish to exercise any of these rights, please contact us.
                </p>

                <h2>7. Changes to This Privacy Policy</h2>
                <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
                </p>

                <h2>8. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at:
                    <br />
                    <strong>Email:</strong> privacy@udreamtravels.com
                </p>
                </div>
            </div>
        </div>
    );
}
