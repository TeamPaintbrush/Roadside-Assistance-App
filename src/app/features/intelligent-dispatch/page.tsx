import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { buttonVariants } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Intelligent Dispatch",
  description:
    "AI-powered technician matching that analyzes proximity, skill set, workload, and traffic to assign the optimal technician in milliseconds — every time.",
};

const steps = [
  {
    n: "01",
    title: "Request Received",
    desc: "A service request lands in the dispatch engine with GPS coordinates, service type, and any customer notes.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    n: "02",
    title: "Field Analysis",
    desc: "The AI scores every available technician on four dimensions: geographic proximity, skill certification, current workload, and live traffic ETA.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    n: "03",
    title: "Optimal Match Selected",
    desc: "The highest-scoring technician is assigned. If they decline or go offline, the next best is promoted automatically — no dispatcher intervention needed.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    n: "04",
    title: "Customer Notified",
    desc: "Within 2 seconds of assignment, the customer receives a push notification with the technician's name, photo, rating, and live ETA.",
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  },
];

const matchFactors = [
  {
    label: "Geographic Proximity",
    desc: "Straight-line distance combined with live routing via traffic APIs. The nearest tech by drive time, not crow-flies distance.",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    weight: "35%",
    color: "from-blue-500 to-indigo-600",
  },
  {
    label: "Skill Certification",
    desc: "Each technician has a certified skill set. Battery jobs go to battery-certified techs; towing goes to tow-truck operators — never the wrong person.",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    weight: "30%",
    color: "from-green-500 to-emerald-600",
  },
  {
    label: "Current Workload",
    desc: "Techs with active jobs are de-prioritized. The algorithm respects work-in-progress and prevents over-assignment that degrades response times.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    weight: "20%",
    color: "from-orange-500 to-red-500",
  },
  {
    label: "Performance Rating",
    desc: "Higher-rated technicians receive a scoring bonus. Consistently excellent techs get prioritized, creating a built-in quality feedback loop.",
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
    weight: "15%",
    color: "from-purple-500 to-indigo-600",
  },
];

const stats = [
  { value: "1.8s", label: "Average match time" },
  { value: "99.2%", label: "First-assignment acceptance" },
  { value: "85%", label: "Technician utilization" },
  { value: "0", label: "Manual dispatches needed" },
];

const otherFeatures = [
  { href: "/features/real-time-tracking", label: "Real-Time Tracking", desc: "Live GPS visibility from dispatch to arrival.", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
  { href: "/features/technician-app", label: "Technician App", desc: "The mobile toolkit every field technician needs.", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
  { href: "/features/fleet-management", label: "Fleet Management", desc: "Analytics and reporting for your whole fleet.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
];

export default function IntelligentDispatchPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-green-600 via-emerald-700 to-teal-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>
        <Container className="relative">
          <Link href="/features" className="inline-flex items-center gap-1.5 text-sm font-medium text-green-200 hover:text-white transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Features
          </Link>
          <div className="max-w-3xl">
            <Badge variant="green" className="mb-6">For Dispatch & Ops</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Intelligent Dispatch
            </h1>
            <p className="text-xl text-green-100 leading-relaxed mb-10">
              AI-powered technician matching that analyzes proximity, skill set, workload, and traffic to assign the optimal technician in milliseconds — every time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/demo" className={buttonVariants({ variant: "primary", size: "lg" })} style={{ background: "white", color: "#059669" }}>
                See It in Action
              </Link>
              <Link href="/contact" className={buttonVariants({ variant: "outline-white", size: "lg" })}>
                Talk to Sales
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-14 bg-green-700">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-black text-white mb-1">{s.value}</div>
                <div className="text-green-200 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Dispatch Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From the moment a request is submitted to the moment the technician gets the job — here's the full pipeline.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-green-100" />
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.n} className="relative text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-green-200 relative z-10">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={step.icon} />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Step {step.n}</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Matching factors */}
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Matching Algorithm</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every assignment is a weighted score across four factors. No black boxes — here's exactly how it works.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {matchFactors.map((factor) => (
              <div key={factor.label} className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 bg-gradient-to-br ${factor.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={factor.icon} />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-bold text-gray-900">{factor.label}</h3>
                      <span className="text-sm font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{factor.weight}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{factor.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Priority & Override */}
      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="orange" className="mb-4">Priority Queue</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Manual Control When You Need It
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                The AI handles 99%+ of assignments automatically. But for emergencies, VIP accounts, or SLA-critical jobs, dispatchers can intervene at any time — reassign a job, bump priority, or manually override the algorithm.
              </p>
              <ul className="space-y-4">
                {[
                  { title: "Emergency Flag", desc: "One click elevates any job to the front of the queue, overriding all normal scoring." },
                  { title: "VIP Priority", desc: "Enterprise and fleet accounts get dedicated priority lanes with guaranteed response SLAs." },
                  { title: "Manual Reassignment", desc: "Any dispatcher can reassign a job mid-route — the new technician gets instant notification." },
                  { title: "Broadcast Mode", desc: "Send a job to all available technicians at once and accept the first response — useful in sparse coverage zones." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">{item.title} — </span>
                      <span className="text-gray-600">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-3xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Live Dispatch Dashboard</h3>
              <div className="space-y-3">
                {[
                  { label: "Active Jobs", value: "12", color: "text-blue-600" },
                  { label: "Available Technicians", value: "8", color: "text-green-600" },
                  { label: "Pending Assignment", value: "2", color: "text-orange-600" },
                  { label: "Avg Current ETA", value: "14 min", color: "text-gray-900" },
                  { label: "SLA Compliance Today", value: "100%", color: "text-green-600" },
                  { label: "Auto-assigned (no manual)", value: "100%", color: "text-green-600" },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center py-3 border-b border-green-100 last:border-0">
                    <span className="text-sm text-gray-600">{row.label}</span>
                    <span className={`font-bold text-sm ${row.color}`}>{row.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4 text-center">Sample dispatch dashboard data</p>
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
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See Intelligent Dispatch in Action</h2>
          <p className="text-green-100 text-xl mb-8 max-w-xl mx-auto">
            The interactive simulator on our demo page shows exactly how the algorithm works in real time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className={buttonVariants({ variant: "primary", size: "lg" })} style={{ background: "white", color: "#059669" }}>
              Try the Simulator
            </Link>
            <Link href="/demo" className={buttonVariants({ variant: "outline-white", size: "lg" })}>
              Book a Demo
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
