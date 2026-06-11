import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { buttonVariants } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Technician App",
  description:
    "The mobile app built for technicians in the field — job queue, turn-by-turn navigation, digital service forms, parts tracking, and offline mode in one seamless tool.",
};

const appSections = [
  {
    title: "Job Queue",
    badge: "Core Workflow",
    badgeColor: "bg-orange-100 text-orange-700",
    desc: "Jobs are automatically pushed to the technician's app based on AI dispatch. One screen shows everything: job details, customer info, location, and service type.",
    features: [
      "New job notifications with one-tap accept/decline",
      "Full customer details and service notes before arrival",
      "Job history and completed service log",
      "Real-time queue updates as jobs are assigned or re-routed",
    ],
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
  },
  {
    title: "Navigation",
    badge: "Getting There",
    badgeColor: "bg-blue-100 text-blue-700",
    desc: "Turn-by-turn routing takes the technician directly to the customer's GPS pin. Traffic-aware rerouting keeps ETAs accurate even in congested areas.",
    features: [
      "Built-in routing to the customer's exact GPS location",
      "Traffic-aware rerouting — ETAs stay accurate",
      "Technician location shared with dispatch and customer",
      "Offline maps for coverage in low-signal zones",
    ],
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
  },
  {
    title: "Service Forms",
    badge: "On-Site",
    badgeColor: "bg-green-100 text-green-700",
    desc: "Paperless service documentation. Technicians complete digital forms, capture photos, collect e-signatures, and submit reports directly from the app.",
    features: [
      "Digital service report with photo upload",
      "Customer e-signature collection on-screen",
      "Automatic report delivery to customer via email",
      "Repair notes and technician comments synced to dispatch",
    ],
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50",
  },
  {
    title: "Parts & Inventory",
    badge: "Supply Management",
    badgeColor: "bg-purple-100 text-purple-700",
    desc: "Log parts used on every job. Inventory alerts fire automatically when supplies run low, so technicians never show up unprepared.",
    features: [
      "Parts logging per job — synced to ops dashboard",
      "Low-stock alerts before the next shift",
      "Part lookup by service type or SKU",
      "Fleet-level parts consumption reporting",
    ],
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    gradient: "from-purple-500 to-indigo-600",
    bgGradient: "from-purple-50 to-indigo-50",
  },
];

const additionalFeatures = [
  {
    title: "Performance Dashboard",
    desc: "Technicians see their own metrics: response times, job completion rates, customer ratings, and monthly earnings.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Offline Mode",
    desc: "Service forms, job details, and navigation work without cell signal. Data queues locally and syncs automatically when connection is restored.",
    icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0",
    color: "from-green-500 to-teal-600",
  },
  {
    title: "In-App Customer Chat",
    desc: "Message the customer directly through the app — no personal number required. Share ETAs, ask clarifying questions, or send arrival alerts.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Shift Management",
    desc: "Clock in and out, set availability, and manage working hours directly in the app. Dispatch only assigns jobs during active availability windows.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "from-purple-500 to-pink-600",
  },
];

const stats = [
  { value: "< 30s", label: "Time to accept a job" },
  { value: "100%", label: "Paperless — zero forms" },
  { value: "Offline", label: "Works without signal" },
  { value: "4.8★", label: "Technician app rating" },
];

const otherFeatures = [
  { href: "/features/intelligent-dispatch", label: "Intelligent Dispatch", desc: "AI-powered technician matching in milliseconds.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { href: "/features/real-time-tracking", label: "Real-Time Tracking", desc: "Live GPS visibility from dispatch to arrival.", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
  { href: "/features/fleet-management", label: "Fleet Management", desc: "Analytics and reporting for your whole fleet.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
];

export default function TechnicianAppPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-orange-500 via-red-600 to-rose-800 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>
        <Container className="relative">
          <Link href="/features" className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-200 hover:text-white transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Features
          </Link>
          <div className="max-w-3xl">
            <Badge variant="orange" className="mb-6">For Technicians</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Technician App
            </h1>
            <p className="text-xl text-orange-100 leading-relaxed mb-10">
              Everything a field technician needs in a single mobile app — job queue, navigation, digital forms, parts tracking, and offline mode. Less admin. More service.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/demo" className={buttonVariants({ variant: "primary", size: "lg" })} style={{ background: "white", color: "#ea580c" }}>
                See the Platform
              </Link>
              <Link href="/contact" className={buttonVariants({ variant: "outline-white", size: "lg" })}>
                Talk to Sales
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-14 bg-orange-600">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-black text-white mb-1">{s.value}</div>
                <div className="text-orange-200 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* App Sections */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Four Core Workflows</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The app is organized around how technicians actually work — not around what's convenient for the office.
            </p>
          </div>
          <div className="space-y-16">
            {appSections.map((section, i) => {
              const isEven = i % 2 === 1;
              return (
                <div key={section.title} className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? "lg:grid-flow-dense" : ""}`}>
                  <div className={isEven ? "lg:col-start-2" : ""}>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${section.badgeColor} mb-4`}>
                      {section.badge}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{section.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{section.desc}</p>
                    <ul className="space-y-3">
                      {section.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={isEven ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <div className={`bg-gradient-to-br ${section.bgGradient} rounded-3xl p-12 flex flex-col items-center justify-center text-center`}>
                      <div className={`w-20 h-20 bg-gradient-to-br ${section.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={section.icon} />
                        </svg>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-800">{section.title}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Additional features */}
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything Else That's Built In</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These features come standard — no add-ons required.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {additionalFeatures.map((feat) => (
              <div key={feat.title} className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex gap-5">
                <div className={`w-14 h-14 bg-gradient-to-br ${feat.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={feat.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feat.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Explore More */}
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
      <section className="py-20 bg-gradient-to-br from-orange-500 to-red-600">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See the Technician App Live</h2>
          <p className="text-orange-100 text-xl mb-8 max-w-xl mx-auto">
            Book a demo and we'll walk through the technician workflow from job assignment to service completion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className={buttonVariants({ variant: "primary", size: "lg" })} style={{ background: "white", color: "#ea580c" }}>
              View the Platform Demo
            </Link>
            <Link href="/demo" className={buttonVariants({ variant: "outline-white", size: "lg" })}>
              Book a Live Demo
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
