import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { buttonVariants } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Real-Time Tracking",
  description:
    "Live GPS tracking of your technician from dispatch to arrival. Watch their location update every few seconds, get push notifications at each status change, and never wonder 'where are they?' again.",
};

const trackingPhases = [
  {
    label: "Dispatched",
    color: "bg-blue-500",
    textColor: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    desc: "Technician accepts the job. GPS tracking activates. Customer receives notification with tech name, photo, and initial ETA.",
    icon: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18",
  },
  {
    label: "En Route",
    color: "bg-indigo-500",
    textColor: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    desc: "Live location updates every 3 seconds. ETA recalculates in real time based on traffic. Customer can watch the dot move on their map.",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    label: "Arrived",
    color: "bg-orange-500",
    textColor: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    desc: "When the technician is within 150m, an 'Almost Here' alert fires. On arrival, the customer is notified and the service timer starts.",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  },
  {
    label: "Service Complete",
    color: "bg-green-500",
    textColor: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    desc: "Technician marks the job complete. Customer receives digital receipt, rating prompt, and loyalty points credit — instantly.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const trackingFeatures = [
  {
    title: "Live Map with Technician Pin",
    desc: "Your technician's location updates every 3 seconds on a real-time map. Watch them move through traffic toward you in real time.",
    icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Traffic-Aware ETA",
    desc: "The ETA doesn't just calculate once at dispatch. It recalculates continuously as traffic conditions change, giving you an always-accurate arrival time.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Push Notifications at Every Step",
    desc: "Automated push alerts at each status transition: Dispatched → En Route → Almost There → Arrived → Complete. Always know what's happening.",
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "In-App Chat",
    desc: "Message your technician directly in the app once they're assigned. No phone calls, no hold music — just a direct text thread.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Safety Contact Sharing",
    desc: "Share your live tracking link with a friend or family member. They can watch the technician approach in real time — without needing the app.",
    icon: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z",
    color: "from-teal-500 to-cyan-600",
  },
  {
    title: "Verified Technician Badge",
    desc: "Before anyone arrives, you see their name, photo, rating, and certification badge. Know exactly who's coming — and verify their identity on arrival.",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    color: "from-pink-500 to-rose-600",
  },
];

const stats = [
  { value: "3s", label: "GPS update interval" },
  { value: "±50m", label: "Location accuracy" },
  { value: "98%", label: "ETA accuracy within 2 min" },
  { value: "4.9★", label: "Tracking experience rating" },
];

const otherFeatures = [
  { href: "/features/intelligent-dispatch", label: "Intelligent Dispatch", desc: "AI-powered technician matching in milliseconds.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { href: "/features/technician-app", label: "Technician App", desc: "The mobile toolkit every field technician needs.", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
  { href: "/features/fleet-management", label: "Fleet Management", desc: "Analytics and reporting for your whole fleet.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
];

export default function RealTimeTrackingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </div>
        <Container className="relative">
          <Link href="/features" className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-200 hover:text-white transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Features
          </Link>
          <div className="max-w-3xl">
            <Badge variant="blue" className="mb-6">For Customers</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Real-Time Tracking
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-10">
              Live GPS visibility of your technician from the moment they're dispatched to the moment they arrive. No more "where are they?" — just a moving dot getting closer.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/demo" className={buttonVariants({ variant: "primary", size: "lg" })} style={{ background: "white", color: "#2563eb" }}>
                See the Demo
              </Link>
              <Link href="/contact" className={buttonVariants({ variant: "outline-white", size: "lg" })}>
                Book a Demo
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-14 bg-blue-700">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-black text-white mb-1">{s.value}</div>
                <div className="text-blue-200 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tracking Phases */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Status at Every Step</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              You're never in the dark. From dispatch to completion, you receive a notification at each transition.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trackingPhases.map((phase, i) => (
              <div key={phase.label} className={`relative p-8 rounded-2xl border ${phase.bgColor} ${phase.borderColor}`}>
                {i < trackingPhases.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-200 z-10" />
                )}
                <div className={`w-12 h-12 ${phase.color} rounded-xl flex items-center justify-center mb-5 shadow-md`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={phase.icon} />
                  </svg>
                </div>
                <span className={`text-xs font-bold uppercase tracking-wider ${phase.textColor}`}>{phase.label}</span>
                <p className="text-gray-600 text-sm leading-relaxed mt-2">{phase.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Feature grid */}
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything That Comes With Tracking</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-time tracking isn't just a map — it's a complete transparency layer across the entire service experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trackingFeatures.map((feat) => (
              <div key={feat.title} className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-br ${feat.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={feat.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feat.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Privacy callout */}
      <Section className="bg-white">
        <Container>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Tracking That Respects Privacy</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Technician GPS tracking is active only during an active job — not before, not after. Location data is never stored beyond the service window and is never shared with third parties.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              {["Active jobs only", "Deleted after completion", "End-to-end encrypted", "Never sold to third parties"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Other Features */}
      <Section className="bg-gray-50">
        <Container>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore More Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherFeatures.map((f) => (
              <Link key={f.href} href={f.href} className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={f.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{f.label}</h3>
                <p className="text-gray-500 text-sm">{f.desc}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Try the Tracking Demo</h2>
          <p className="text-blue-100 text-xl mb-8 max-w-xl mx-auto">
            The simulator on our demo page shows live tracking in action — watch a technician move toward your location in real time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className={buttonVariants({ variant: "primary", size: "lg" })} style={{ background: "white", color: "#2563eb" }}>
              Try the Simulator
            </Link>
            <Link href="/contact" className={buttonVariants({ variant: "outline-white", size: "lg" })}>
              Book a Demo
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
