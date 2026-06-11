import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "RoadAssist Pro Privacy Policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  const updated = "June 8, 2026";
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-28 pb-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
            <p className="text-gray-500 mb-12">Last updated: {updated}</p>

            <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
                <p>RoadAssist Pro ("we," "us," or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform, mobile application, or website.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
                <p className="mb-3">We may collect the following types of information:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Account Information:</strong> Name, email address, phone number, and password.</li>
                  <li><strong>Location Data:</strong> GPS coordinates when you request a service or use our app. This is essential for matching you with nearby technicians.</li>
                  <li><strong>Payment Information:</strong> Processed securely through our payment provider. We do not store full card numbers.</li>
                  <li><strong>Service History:</strong> Records of services you've requested and received.</li>
                  <li><strong>Device Information:</strong> Device type, operating system, and app version for troubleshooting.</li>
                  <li><strong>Communications:</strong> Messages between you and technicians through our in-app chat.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>To dispatch a technician to your location in response to a service request</li>
                  <li>To process payments and send receipts</li>
                  <li>To provide customer support</li>
                  <li>To improve our platform and services</li>
                  <li>To send service-related notifications (which you may opt out of)</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">4. Sharing Your Information</h2>
                <p className="mb-3">We share your information only in the following circumstances:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>With Technicians:</strong> Your name, location, and service request details are shared with the assigned technician so they can assist you.</li>
                  <li><strong>With Service Partners:</strong> When a tow truck or specialist is dispatched, relevant information is shared with them.</li>
                  <li><strong>With Payment Processors:</strong> Payment data is processed by our PCI-compliant payment partner.</li>
                  <li><strong>For Legal Reasons:</strong> If required by law or to protect our rights and the safety of others.</li>
                </ul>
                <p className="mt-3">We do not sell your personal information to third parties for marketing purposes.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">5. Data Retention</h2>
                <p>We retain your account data for as long as your account is active or as needed to provide services. Service history is retained for 7 years for legal and financial compliance. You may request deletion of your account at any time.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">6. Your Rights</h2>
                <p className="mb-3">Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Object to or restrict certain processing</li>
                  <li>Data portability</li>
                </ul>
                <p className="mt-3">To exercise these rights, contact us at <a href="mailto:privacy@roadassistpro.com" className="text-blue-600 hover:underline">privacy@roadassistpro.com</a>.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">7. Security</h2>
                <p>We implement industry-standard security measures including encryption in transit (TLS), encrypted storage, and access controls. No system is 100% secure — if you believe your account has been compromised, contact us immediately.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">8. Changes to This Policy</h2>
                <p>We may update this policy periodically. We'll notify you of significant changes via email or in-app notice. Continued use of the platform after changes constitutes your acceptance.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">9. Contact Us</h2>
                <p>For privacy-related questions or requests: <a href="mailto:privacy@roadassistpro.com" className="text-blue-600 hover:underline">privacy@roadassistpro.com</a></p>
              </section>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
