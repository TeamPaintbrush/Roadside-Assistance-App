import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "RoadAssist Pro Terms of Service — the rules and conditions for using our platform.",
};

export default function TermsPage() {
  const updated = "June 8, 2026";
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-28 pb-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
            <p className="text-gray-500 mb-12">Last updated: {updated}</p>

            <div className="space-y-8 text-gray-600 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
                <p>By accessing or using the RoadAssist Pro platform ("Platform"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Platform.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">2. Description of Service</h2>
                <p>RoadAssist Pro is a technology platform that connects vehicle owners who need roadside assistance with independent, certified service technicians. We are a technology intermediary — we do not directly provide roadside services.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">3. User Accounts</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You must be 18 years or older to create an account.</li>
                  <li>You are responsible for all activity under your account.</li>
                  <li>You agree to provide accurate, current, and complete information.</li>
                  <li>You must notify us immediately of any unauthorized use of your account.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">4. Service Requests</h2>
                <p className="mb-3">When you submit a service request:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You authorize us to share your location and contact information with the assigned technician.</li>
                  <li>Response times are estimates and may vary due to traffic, weather, or technician availability.</li>
                  <li>You agree to be present at or near your vehicle when the technician arrives.</li>
                  <li>Cancellations made less than 5 minutes after dispatch may incur a cancellation fee.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">5. Payments and Fees</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>All prices are displayed before you confirm a service request.</li>
                  <li>Payment is processed after service completion.</li>
                  <li>Subscription fees are billed monthly or annually as selected.</li>
                  <li>We reserve the right to adjust pricing with 30 days' notice to subscribers.</li>
                  <li>Refunds are handled case-by-case. Contact support within 48 hours of service if you have a concern.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">6. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law, RoadAssist Pro is not liable for: indirect, incidental, or consequential damages; vehicle damage caused by the technician (technicians carry their own insurance); delays caused by circumstances beyond our control; or inaccurate location data provided by the user.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">7. Prohibited Uses</h2>
                <p className="mb-2">You may not use the Platform to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Submit false or fraudulent service requests</li>
                  <li>Harass, threaten, or abuse technicians or staff</li>
                  <li>Reverse engineer or scrape our platform</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">8. Termination</h2>
                <p>We reserve the right to suspend or terminate your account for violations of these Terms. You may close your account at any time from your account settings.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">9. Governing Law</h2>
                <p>These Terms are governed by the laws of the State of Florida, USA, without regard to conflict of law principles.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">10. Contact</h2>
                <p>For questions about these Terms: <a href="mailto:legal@roadassistpro.com" className="text-blue-600 hover:underline">legal@roadassistpro.com</a></p>
              </section>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
