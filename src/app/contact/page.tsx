import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import ContactForm from "./ContactForm";
import { JsonLd } from "@/components/JsonLd";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "RoadAssist Pro",
  image: "https://roadassistpro.com/opengraph-image",
  telephone: "1-800-ROAD-HELP",
  email: "support@roadassistpro.com",
  url: "https://roadassistpro.com",
  description:
    "Professional roadside assistance with AI-powered dispatch, real-time GPS tracking, and 15-minute average response times. Available 24/7 nationwide.",
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
};

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the RoadAssist Pro team. Schedule a demo, ask about pricing, or request emergency service. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={localBusinessJsonLd} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </div>
        <Container className="relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Response within 24 hours
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Let's Talk</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Whether you're ready for a demo, have questions about pricing, or want to discuss a custom enterprise solution — we're here.
          </p>
        </Container>
      </section>

      {/* Form + Info */}
      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">

            {/* Left: form (3/5) */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-500 mb-8">Fill out the form and a team member will get back to you within 24 hours.</p>
              <ContactForm />
            </div>

            {/* Right: contact info (2/5) */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Direct Contact</h3>
                <div className="space-y-4">
                  <a href="mailto:lross@paintbrushmarketing.net" className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide">Email</p>
                      <p className="font-medium text-gray-900 text-sm">lross@paintbrushmarketing.net</p>
                      <p className="text-gray-500 text-xs">Ross — Digital Marketer</p>
                    </div>
                  </a>

                  <a href="tel:813-399-4779" className="flex items-start gap-3 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group">
                    <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-green-600 font-semibold uppercase tracking-wide">Phone</p>
                      <p className="font-medium text-gray-900 text-sm">813-399-4779</p>
                      <p className="text-gray-500 text-xs">Mon–Fri, 9 AM – 6 PM ET</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Emergency Service?</h3>
                <p className="text-blue-100 text-sm mb-4">
                  If you're currently stranded and need immediate assistance, don't fill out a form — call us directly.
                </p>
                <a href="tel:1-800-ROAD-HELP" className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-4 py-2 rounded-lg text-sm hover:bg-blue-50 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  1-800-ROAD-HELP
                </a>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">What to Expect</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    "Response within 24 hours on business days",
                    "Demo slots available Mon–Fri, 9 AM – 5 PM ET",
                    "Custom enterprise proposals within 2 business days",
                    "No sales pressure — we'll let the platform speak for itself",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
