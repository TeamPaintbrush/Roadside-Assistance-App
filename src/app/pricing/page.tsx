import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import PricingToggle from "./PricingToggle";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for individuals and businesses. Personal from $29/month, Professional from $79/month, Enterprise custom. No hidden fees.",
};

const faqs = [
  { q: "Is there a free trial?", a: "Yes — Professional plans include a 14-day free trial with full access. No credit card required to start." },
  { q: "Can I change plans at any time?", a: "Absolutely. Upgrade or downgrade at any time. Upgrades take effect immediately; downgrades apply at the start of your next billing cycle." },
  { q: "What happens if I exceed my service call limit?", a: "On the Personal plan, additional calls are available at $35 each. Professional and Enterprise plans have unlimited calls." },
  { q: "Does pricing include the towing service?", a: "Towing is included on Professional and Enterprise plans. Personal plan users can add towing as a pay-per-use service." },
  { q: "Are there setup fees?", a: "No setup fees on any plan. Enterprise plans may have a one-time onboarding and integration fee — we'll discuss this during your sales call." },
  { q: "What's the cancellation policy?", a: "Cancel any time with no penalty. Monthly plans end at your next billing date. Annual plans are non-refundable but we'll work with you if circumstances change." },
];

const pricingFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={pricingFaqJsonLd} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>
        <Container className="relative text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            No hidden fees. No confusing tiers. Just honest coverage for individuals, businesses, and enterprise fleets.
          </p>
        </Container>
      </section>

      {/* Pricing Toggle + Cards */}
      <Section className="bg-gray-50">
        <Container>
          <PricingToggle />
        </Container>
      </Section>

      {/* Trust Signals */}
      <section className="py-12 bg-white border-t border-gray-100">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            {[
              { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", label: "14-Day Free Trial", desc: "No credit card required" },
              { icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z", label: "No Setup Fees", desc: "Start immediately" },
              { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Cancel Anytime", desc: "No long-term contracts" },
              { icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z", label: "24/7 Support", desc: "Always here when you need us" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={t.icon} />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.label}</p>
                  <p className="text-gray-500 text-xs">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Pricing FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Enterprise CTA */}
      <Section className="bg-white">
        <Container>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              Large fleet? Insurance integration? White-label deployment? Let's build a plan that fits exactly what you need.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors text-lg">
              Talk to Enterprise Sales
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
