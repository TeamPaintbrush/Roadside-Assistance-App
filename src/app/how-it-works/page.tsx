import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { buttonVariants } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";

const howItWorksFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How quickly will someone arrive?", acceptedAnswer: { "@type": "Answer", text: "Our average response time is 15 minutes. In most metro areas it's under 12 minutes. Remote areas may take slightly longer — you'll see a live ETA the moment your technician is dispatched." } },
    { "@type": "Question", name: "Do I need to create an account to get help?", acceptedAnswer: { "@type": "Answer", text: "No. Emergency service can be requested with just a phone number. An account gives you service history, loyalty rewards, and saved payment methods, but it's never required in an emergency." } },
    { "@type": "Question", name: "What if my location doesn't have GPS signal?", acceptedAnswer: { "@type": "Answer", text: "You can type your address manually in the app, or our dispatch team can triangulate your location if you call. We also support What3Words location codes." } },
    { "@type": "Question", name: "Are technicians background-checked?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every RoadAssist Pro technician is certified, background-checked, and insured. You'll see their name, photo, ratings, and credential badge before they arrive." } },
    { "@type": "Question", name: "What payment methods are accepted?", acceptedAnswer: { "@type": "Answer", text: "All major credit/debit cards, Apple Pay, Google Pay, and PayPal. Cash is not accepted. Payment is processed securely after service is completed." } },
  ],
};

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how RoadAssist Pro works — from requesting help to service completion. AI dispatch, real-time tracking, and verified technicians in four simple steps.",
};

const steps = [
  {
    n: "01",
    title: "Request Help",
    subtitle: "One tap, and you're in the queue",
    desc: "Open the app or call our 24/7 dispatch line. Select your service type, confirm your GPS location, and optionally upload a photo of the issue. The entire request takes under 60 seconds.",
    customerActions: ["Tap 'Request Help' in the app", "Auto-detects your GPS location", "Choose service type (battery, fuel, tire, etc.)", "Add a note or photo of the issue", "Confirm and submit"],
    color: "blue",
    iconPath: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    n: "02",
    title: "AI Dispatch",
    subtitle: "The right technician, matched in milliseconds",
    desc: "Our AI dispatch engine analyzes proximity, skill set, current workload, and live traffic conditions to assign the best available technician. Manual override is always available to our dispatch operators.",
    customerActions: ["Instant confirmation with technician name and photo", "Real-time ETA displayed", "Technician credentials shown (certified, background-checked)", "Direct in-app chat opens immediately"],
    color: "green",
    iconPath: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18",
  },
  {
    n: "03",
    title: "Track in Real-Time",
    subtitle: "Full GPS visibility, every step of the way",
    desc: "Watch your technician's live location on the map. Receive push notifications at each status change. Chat directly with your technician through the app if you need to share additional details.",
    customerActions: ["Live map with technician's moving location", "Push notifications: Dispatched → En Route → Arrived → Complete", "Real-time ETA countdown", "In-app chat with technician", "Emergency contact sharing option"],
    color: "purple",
    iconPath: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    n: "04",
    title: "Service Complete",
    subtitle: "Back on the road — and we handled the rest",
    desc: "Once service is complete, you receive a digital service report and secure payment link. Rate your experience in the app and earn loyalty points for your next service.",
    customerActions: ["Digital service report emailed automatically", "Secure in-app payment (no cash needed)", "Rate your technician (1–5 stars)", "Service history saved to your account", "Loyalty rewards credited"],
    color: "orange",
    iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const colorMap: Record<string, { badge: string; icon: string; stepBg: string; num: string }> = {
  blue:   { badge: "bg-blue-100 text-blue-700",   icon: "bg-gradient-to-br from-blue-500 to-blue-600",   stepBg: "bg-blue-50",   num: "text-blue-600" },
  green:  { badge: "bg-green-100 text-green-700", icon: "bg-gradient-to-br from-green-500 to-emerald-600", stepBg: "bg-green-50", num: "text-green-600" },
  purple: { badge: "bg-purple-100 text-purple-700", icon: "bg-gradient-to-br from-purple-500 to-indigo-600", stepBg: "bg-purple-50", num: "text-purple-600" },
  orange: { badge: "bg-orange-100 text-orange-700", icon: "bg-gradient-to-br from-orange-500 to-red-500", stepBg: "bg-orange-50", num: "text-orange-600" },
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={howItWorksFaqJsonLd} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </div>
        <Container className="relative text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Help in Four Simple Steps
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            From the moment you tap "Request Help" to the moment you're back on the road — here's exactly what happens.
          </p>
        </Container>
      </section>

      {/* Steps */}
      <Section className="bg-white">
        <Container>
          <div className="space-y-24">
            {steps.map((step, i) => {
              const c = colorMap[step.color];
              const isEven = i % 2 === 1;
              return (
                <div key={step.n} className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? "lg:grid-flow-dense" : ""}`}>
                  {/* Text */}
                  <div className={isEven ? "lg:col-start-2" : ""}>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${c.badge} mb-4`}>
                      Step {step.n}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{step.title}</h2>
                    <p className="text-blue-600 font-medium mb-4">{step.subtitle}</p>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">{step.desc}</p>
                    <ul className="space-y-3">
                      {step.customerActions.map((action) => (
                        <li key={action} className="flex items-center gap-3 text-gray-700">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual card */}
                  <div className={isEven ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <div className={`${c.stepBg} rounded-3xl p-10 flex flex-col items-center justify-center text-center min-h-64`}>
                      <div className={`${c.icon} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.iconPath} />
                        </svg>
                      </div>
                      <div className={`text-7xl font-black ${c.num} opacity-20 leading-none`}>{step.n}</div>
                      <p className={`text-lg font-bold ${c.num} mt-2`}>{step.title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Common Questions</h2>
            <div className="space-y-6">
              {[
                { q: "How quickly will someone arrive?", a: "Our average response time is 15 minutes. In most metro areas it's under 12 minutes. Remote areas may take slightly longer — you'll see a live ETA the moment your technician is dispatched." },
                { q: "Do I need to create an account to get help?", a: "No. Emergency service can be requested with just a phone number. An account gives you service history, loyalty rewards, and saved payment methods, but it's never required in an emergency." },
                { q: "What if my location doesn't have GPS signal?", a: "You can type your address manually in the app, or our dispatch team can triangulate your location if you call. We also support What3Words location codes." },
                { q: "Are technicians background-checked?", a: "Yes. Every RoadAssist Pro technician is certified, background-checked, and insured. You'll see their name, photo, ratings, and credential badge before they arrive." },
                { q: "What payment methods are accepted?", a: "All major credit/debit cards, Apple Pay, Google Pay, and PayPal. Cash is not accepted. Payment is processed securely after service is completed." },
              ].map((faq) => (
                <div key={faq.q} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Try It?</h2>
          <p className="text-blue-100 text-xl mb-8 max-w-xl mx-auto">Request a demo or get help the moment you need it.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className={buttonVariants({ variant: "primary", size: "lg" })} style={{ background: "white", color: "#2563eb" }}>
              Get a Demo
            </Link>
            <Link href="/services" className={buttonVariants({ variant: "outline-white", size: "lg" })}>
              Browse Services
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
