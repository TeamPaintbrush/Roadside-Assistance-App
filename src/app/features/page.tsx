import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { buttonVariants } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore RoadAssist Pro's platform features — AI-powered dispatch, real-time GPS tracking, technician app, and fleet management tools.",
};

const featureGroups = [
  {
    badge: { label: "For Customers", variant: "blue" as const },
    heading: "Help When You Need It Most",
    subheading: "A mobile experience built around speed, safety, and transparency",
    color: "blue",
    subPageHref: "/features/real-time-tracking",
    subPageLabel: "Deep dive: Real-Time Tracking →",
    features: [
      { title: "One-Tap Emergency Request", desc: "Auto-detects your GPS location. Select service type, add a photo, and submit in under 60 seconds.", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
      { title: "Real-Time Technician Tracking", desc: "Watch your technician's live location on the map with a live ETA countdown. No guessing.", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
      { title: "In-App Chat", desc: "Message your technician directly in the app. Share extra details or updates without a phone call.", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
      { title: "Service History & Receipts", desc: "All your past services with digital receipts are saved to your account. Access anytime.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
      { title: "Safety Sharing", desc: "Share your live location and technician's credentials with an emergency contact at any time.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
      { title: "Loyalty Rewards", desc: "Earn points on every service and redeem them for discounts. Frequent users get priority dispatch.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    ],
  },
  {
    badge: { label: "For Technicians", variant: "orange" as const },
    heading: "Built for the Technician in the Field",
    subheading: "Less admin, more service. Everything a technician needs in one mobile app.",
    color: "orange",
    subPageHref: "/features/technician-app",
    subPageLabel: "Deep dive: Technician App →",
    features: [
      { title: "Smart Job Queue", desc: "Jobs are assigned based on your location, skill set, and availability. No dispatcher calls needed.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
      { title: "Turn-by-Turn Navigation", desc: "Built-in routing to the customer's exact GPS pin. Traffic-aware rerouting keeps ETAs accurate.", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
      { title: "Digital Service Forms", desc: "Complete paperless service reports on your phone. Photos, signatures, and notes — all digital.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
      { title: "Parts Inventory Tracking", desc: "Log parts used per job. Inventory alerts tell you when it's time to restock your van.", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
      { title: "Performance Dashboard", desc: "See your response times, job completion rates, and customer ratings at a glance.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
      { title: "Offline Mode", desc: "Service forms, job details, and navigation work even without a cell signal. Data syncs when you reconnect.", icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" },
    ],
  },
  {
    badge: { label: "For Dispatch & Ops", variant: "green" as const },
    heading: "Intelligent Operations at Scale",
    subheading: "Give your dispatch team the tools to handle more calls, faster, with less effort.",
    color: "green",
    subPageHref: "/features/intelligent-dispatch",
    subPageLabel: "Deep dive: Intelligent Dispatch →",
    features: [
      { title: "AI Technician Matching", desc: "Dispatch engine factors in proximity, skill, current load, and traffic to assign the optimal technician in milliseconds.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
      { title: "Live Dispatch Map", desc: "See all active jobs, technician locations, and incoming requests on a single real-time map.", icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
      { title: "Priority Queue Management", desc: "Flag emergency, VIP, or SLA-bound requests for priority handling. Manual override available at all times.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
      { title: "SLA Monitoring", desc: "Real-time alerts when a job is at risk of missing its response time SLA. Automated escalation paths.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
      { title: "Analytics & Reporting", desc: "Daily, weekly, and monthly reports on response times, technician utilization, customer satisfaction, and revenue.", icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
      { title: "Multi-Channel Communication", desc: "Internal chat, customer relay messaging, and emergency broadcast — all in one hub.", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
    ],
  },
];

const bgMap: Record<string, string> = {
  blue: "bg-gradient-to-b from-blue-50 to-white",
  orange: "bg-white",
  green: "bg-gradient-to-b from-green-50 to-white",
};

const iconMap: Record<string, string> = {
  blue: "from-blue-500 to-indigo-600",
  orange: "from-orange-500 to-red-500",
  green: "from-green-500 to-emerald-600",
};

const quickLinks = [
  { href: "/features/intelligent-dispatch", label: "Intelligent Dispatch", icon: "M13 10V3L4 14h7v7l9-11h-7z", color: "from-green-500 to-emerald-600" },
  { href: "/features/real-time-tracking",   label: "Real-Time Tracking",   icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", color: "from-blue-500 to-indigo-600" },
  { href: "/features/technician-app",       label: "Technician App",       icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z", color: "from-orange-500 to-red-500" },
  { href: "/features/fleet-management",     label: "Fleet Management",     icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", color: "from-slate-600 to-gray-800" },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>
        <Container className="relative text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            One Platform. Three Experiences.
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Built specifically for customers, technicians, and dispatch operators — each with the tools they need to move fast and work smart.
          </p>
        </Container>
      </section>

      {/* Quick navigation */}
      <section className="py-8 bg-white border-b border-gray-100">
        <Container>
          <div className="flex flex-wrap justify-center gap-3">
            {quickLinks.map((ql) => (
              <Link
                key={ql.href}
                href={ql.href}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors"
              >
                <div className={`w-5 h-5 bg-gradient-to-br ${ql.color} rounded-md flex items-center justify-center`}>
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={ql.icon} />
                  </svg>
                </div>
                {ql.label}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Feature Groups */}
      {featureGroups.map((group) => (
        <Section key={group.badge.label} className={bgMap[group.color]}>
          <Container>
            <div className="text-center mb-16">
              <Badge variant={group.badge.variant} className="mb-4">{group.badge.label}</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{group.heading}</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">{group.subheading}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.features.map((feat) => (
                <div key={feat.title} className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-br ${iconMap[group.color]} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={feat.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feat.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href={group.subPageHref} className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                {group.subPageLabel}
              </Link>
            </div>
          </Container>
        </Section>
      ))}

      {/* Fleet Management callout */}
      <Section className="bg-gradient-to-b from-slate-50 to-white">
        <Container>
          <div className="bg-gradient-to-br from-slate-800 to-gray-900 rounded-3xl p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <Badge variant="green" className="mb-4">For Fleets &amp; Business</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Fleet Management Dashboard</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  Running a fleet? Get a dedicated dashboard with live vehicle status, response time analytics, cost reporting, SLA monitoring, and full service history — all in one place.
                </p>
                <Link href="/features/fleet-management" className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-6 py-3 rounded-xl hover:bg-slate-100 transition-colors">
                  Explore Fleet Management
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "42", label: "Vehicles monitored" },
                  { value: "98%", label: "SLA compliance" },
                  { value: "22%", label: "Cost savings reported" },
                  { value: "∞", label: "Service history retained" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/10 rounded-2xl p-5 text-center">
                    <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                    <div className="text-slate-400 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See Every Feature in Action</h2>
          <p className="text-blue-100 text-xl mb-8 max-w-xl mx-auto">Book a 30-minute demo and we'll walk through the platform with your specific use case.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className={buttonVariants({ variant: "primary", size: "lg" })} style={{ background: "white", color: "#2563eb" }}>
              Book a Demo
            </Link>
            <Link href="/pricing" className={buttonVariants({ variant: "outline-white", size: "lg" })}>
              View Pricing
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
