import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { buttonVariants } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Fleet Management",
  description:
    "Analytics, reporting, and multi-vehicle management for fleets of any size. Track service history, monitor utilization, and control costs across your entire fleet from one dashboard.",
};

const dashboardModules = [
  {
    title: "Fleet Overview",
    desc: "A live snapshot of every vehicle in your fleet: current status, active jobs, recent service history, and any alerts that need attention.",
    stats: [
      { label: "Total vehicles", value: "42" },
      { label: "Active jobs", value: "7" },
      { label: "Service calls today", value: "12" },
      { label: "Alerts", value: "1" },
    ],
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Response Time Analytics",
    desc: "See average response times by vehicle, time of day, service type, and region. Identify patterns and hold your service provider accountable.",
    stats: [
      { label: "Avg response", value: "14 min" },
      { label: "SLA compliance", value: "98.2%" },
      { label: "Fastest response", value: "8 min" },
      { label: "Within SLA", value: "127/129" },
    ],
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Cost Reporting",
    desc: "Monthly and annual service cost breakdowns by vehicle, service type, and technician. Export to CSV or PDF for finance and insurance reporting.",
    stats: [
      { label: "MTD spend", value: "$4,280" },
      { label: "Avg cost/service", value: "$62" },
      { label: "Most costly service", value: "Towing" },
      { label: "YTD savings vs prev", value: "22%" },
    ],
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Service History",
    desc: "Complete searchable history of every service call for every vehicle. Filter by date, service type, technician, or cost. Exportable for compliance or insurance.",
    stats: [
      { label: "Total records", value: "1,482" },
      { label: "Avg services/vehicle/yr", value: "4.2" },
      { label: "Most common service", value: "Battery" },
      { label: "Data retained", value: "Forever" },
    ],
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
  },
];

const fleetFeatures = [
  {
    title: "Multi-Vehicle Management",
    desc: "Add, remove, and manage vehicles in bulk. Assign vehicles to drivers, teams, or locations. Set priority levels per vehicle.",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "SLA Agreements",
    desc: "Set custom SLA targets for your fleet — guaranteed response times, dedicated dispatch priority, and automated SLA breach alerts.",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "API & Webhooks",
    desc: "Connect RoadAssist Pro to your fleet management software, telematics provider, or internal tools via REST API and real-time webhooks.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Bulk Service Requests",
    desc: "Schedule preventive service calls for multiple vehicles at once. Useful for scheduled battery checks, tire rotations, or fleet inspections.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Driver Notifications",
    desc: "Drivers receive the same real-time tracking and status updates as individual customers — without needing a company admin account.",
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
    color: "from-teal-500 to-cyan-600",
  },
  {
    title: "Custom Reporting",
    desc: "Build and schedule custom reports — weekly service summaries, monthly cost breakdowns, annual fleet utilization — emailed to any recipient.",
    icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    color: "from-pink-500 to-rose-600",
  },
];

const pricingTiers = [
  { name: "Professional", vehicles: "Up to 10 vehicles", price: "$79/mo", cta: "Start Free Trial", highlight: false },
  { name: "Enterprise", vehicles: "Unlimited vehicles", price: "Custom", cta: "Contact Sales", highlight: true },
];

const stats = [
  { value: "10+", label: "Vehicles supported" },
  { value: "22%", label: "Avg cost savings reported" },
  { value: "98%", label: "SLA compliance rate" },
  { value: "∞", label: "Service history retained" },
];

const otherFeatures = [
  { href: "/features/intelligent-dispatch", label: "Intelligent Dispatch", desc: "AI-powered technician matching in milliseconds.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { href: "/features/real-time-tracking", label: "Real-Time Tracking", desc: "Live GPS visibility from dispatch to arrival.", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
  { href: "/features/technician-app", label: "Technician App", desc: "The mobile toolkit every field technician needs.", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
];

export default function FleetManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-slate-700 via-slate-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        </div>
        <Container className="relative">
          <Link href="/features" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Features
          </Link>
          <div className="max-w-3xl">
            <Badge variant="green" className="mb-6">For Fleets & Business</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Fleet Management
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              Analytics, reporting, and multi-vehicle management for fleets of any size. Track costs, enforce SLAs, and see your entire operation from one dashboard.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/demo" className={buttonVariants({ variant: "primary", size: "lg" })} style={{ background: "white", color: "#1e293b" }}>
                See the Dashboard
              </Link>
              <Link href="/contact" className={buttonVariants({ variant: "outline-white", size: "lg" })}>
                Talk to Enterprise Sales
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-14 bg-slate-800">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-black text-white mb-1">{s.value}</div>
                <div className="text-slate-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Dashboard Modules */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Four Dashboard Modules</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every fleet manager gets four purpose-built views — each designed to answer a specific operational question.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {dashboardModules.map((module) => (
              <div key={module.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`${module.bgColor} p-6 border-b border-gray-100`}>
                  <div className={`w-10 h-10 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center mb-3`}>
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{module.title}</h3>
                  <p className="text-gray-600 text-sm">{module.desc}</p>
                </div>
                <div className="p-6 grid grid-cols-2 gap-4">
                  {module.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{stat.label}</p>
                      <p className="text-lg font-bold text-gray-900 mt-0.5">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">Sample data — your actual dashboard reflects live fleet activity</p>
        </Container>
      </Section>

      {/* Feature grid */}
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything Built Into Fleet</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every fleet feature comes standard on Professional and Enterprise plans. No per-feature pricing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleetFeatures.map((feat) => (
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

      {/* Pricing callout */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fleet Plans</h2>
            <p className="text-xl text-gray-600 max-w-xl mx-auto">
              Fleet management is available on Professional (up to 10 vehicles) and Enterprise (unlimited).
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 text-center ${tier.highlight ? "bg-gradient-to-br from-blue-600 to-indigo-700 text-white" : "bg-gray-50 border border-gray-200"}`}
              >
                <h3 className={`text-xl font-bold mb-1 ${tier.highlight ? "text-white" : "text-gray-900"}`}>{tier.name}</h3>
                <p className={`text-sm mb-4 ${tier.highlight ? "text-blue-200" : "text-gray-500"}`}>{tier.vehicles}</p>
                <p className={`text-4xl font-black mb-6 ${tier.highlight ? "text-white" : "text-gray-900"}`}>{tier.price}</p>
                <Link
                  href="/contact"
                  className={tier.highlight
                    ? `${buttonVariants({ variant: "primary", size: "md" })} w-full justify-center`
                    : `${buttonVariants({ variant: "primary", size: "md" })} w-full justify-center`}
                  style={tier.highlight ? { background: "white", color: "#2563eb" } : undefined}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center mt-6">
            <Link href="/pricing" className="text-blue-600 hover:underline text-sm font-medium">
              View full pricing comparison →
            </Link>
          </p>
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
      <section className="py-20 bg-gradient-to-br from-slate-800 to-gray-900">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Your Fleet Under Control?</h2>
          <p className="text-slate-300 text-xl mb-8 max-w-xl mx-auto">
            Schedule a demo and we'll show you the fleet dashboard with your specific vehicle count and use case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className={buttonVariants({ variant: "primary", size: "lg" })} style={{ background: "white", color: "#1e293b" }}>
              See the Fleet Dashboard
            </Link>
            <Link href="/contact" className={buttonVariants({ variant: "outline-white", size: "lg" })}>
              Talk to Enterprise Sales
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
