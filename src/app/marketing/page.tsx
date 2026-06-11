import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { buttonVariants } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "RoadAssist Pro",
      url: "https://roadassistpro.com",
      logo: "https://roadassistpro.com/opengraph-image",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "1-800-ROAD-HELP",
        contactType: "customer service",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      name: "RoadAssist Pro",
      url: "https://roadassistpro.com",
    },
  ],
};

export const metadata: Metadata = {
  title: "RoadAssist Pro — Help Arrives Faster When Seconds Count",
  description:
    "Revolutionary roadside assistance powered by intelligent dispatch technology. Real-time tracking, instant connections, and 15-minute average response times.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={homeJsonLd} />
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 opacity-95" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available 24/7 · Nationwide Coverage
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Help Arrives Faster
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-400">
              When Seconds Count
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Revolutionary roadside assistance powered by intelligent dispatch technology.
            Real-time tracking, instant connections, and the fastest response times in the industry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className={buttonVariants({ variant: "primary", size: "lg" })}
              style={{ background: "white", color: "#2563eb" }}
            >
              Get Help Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/demo"
              className={buttonVariants({ variant: "outline-white", size: "lg" })}
            >
              Watch Demo
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { value: "15 min", label: "Avg Response" },
              { value: "99.9%", label: "Uptime" },
              { value: "4.9★", label: "Customer Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem / Solution ──────────────────────────────────── */}
      <Section className="bg-gradient-to-br from-gray-50 to-blue-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionizing Roadside Assistance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming traditional roadside services into a modern, digital-first experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Challenge</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Traditional roadside assistance is fragmented, opaque, and slow — leaving drivers stranded and frustrated when they need help most.
              </p>
              <div className="space-y-4">
                {[
                  { color: "red", label: "Lack of Transparency", desc: "No real-time data, status updates, or ETA visibility" },
                  { color: "orange", label: "Slow Response Times", desc: "Poor dispatch coordination leads to 30–60 min waits" },
                  { color: "yellow", label: "Unstructured Networks", desc: "Reliance on ad-hoc partner networks with no quality control" },
                  { color: "purple", label: "Limited Accessibility", desc: "Service gaps in rural and underserved areas" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start space-x-4">
                    <div className={`w-8 h-8 bg-${item.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <svg className={`w-4 h-4 text-${item.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.label}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">The Solution</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  A seamless digital platform that streamlines booking, tracking, payments, and service delivery — putting transparency and speed first.
                </p>
                <div className="space-y-3">
                  {[
                    "Improved customer satisfaction & trust",
                    "Operational efficiency for service providers",
                    "Real-time tracking & full transparency",
                    "AI-powered matching in milliseconds",
                  ].map((point) => (
                    <div key={point} className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 pointer-events-none" />
            </div>
          </div>

          <div className="text-center">
            <blockquote className="text-2xl font-medium text-gray-700 italic mb-3">
              "Turning roadside emergencies into effortless recoveries"
            </blockquote>
            <p className="text-gray-500">— Paintbrush Marketing</p>
          </div>
        </Container>
      </Section>

      {/* ── Services Offered ────────────────────────────────────── */}
      <Section id="services-offered" className="bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Services Offered
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive roadside assistance solutions available wherever you are, whenever you need them
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                gradient: "from-yellow-50 to-orange-50",
                iconGradient: "from-yellow-500 to-orange-500",
                title: "Battery Jumpstart",
                desc: "Professional roadside battery jump service. Our technicians arrive quickly with portable jump starters to get you back on the road.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                ),
              },
              {
                gradient: "from-blue-50 to-cyan-50",
                iconGradient: "from-blue-500 to-cyan-500",
                title: "Fuel Delivery",
                desc: "Fast fuel delivery straight to your location. Never get stranded with an empty tank again.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l7 7m-7-7h18M14 5l7 7m0 0l-7 7m7-7H3" />
                ),
              },
              {
                gradient: "from-green-50 to-emerald-50",
                iconGradient: "from-green-500 to-emerald-500",
                title: "Car Lockout Assistance",
                desc: "Professional unlocking service without damaging your vehicle. Certified technicians with specialized tools for safe entry.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                ),
              },
              {
                gradient: "from-purple-50 to-pink-50",
                iconGradient: "from-purple-500 to-pink-500",
                title: "Flat Tire Change",
                desc: "Roadside puncture repair or spare tire installation. We handle most tire issues with all standard sizes on hand.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                ),
              },
              {
                gradient: "from-red-50 to-rose-50",
                iconGradient: "from-red-500 to-rose-500",
                title: "Towing Service",
                desc: "24/7 flatbed or tow truck service. Safe vehicle transport to the nearest repair facility or your preferred location.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                ),
              },
              {
                gradient: "from-indigo-50 to-purple-50",
                iconGradient: "from-indigo-500 to-purple-500",
                title: "Emergency Diagnostics",
                desc: "On-site vehicle diagnostics to identify issues quickly. Advanced tools to diagnose problems and provide repair recommendations.",
                icon: (
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </>
                ),
              },
            ].map((service) => (
              <div
                key={service.title}
                className={`group bg-gradient-to-br ${service.gradient} p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.iconGradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {service.icon}
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Value Props ──────────────────────────────────────────── */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose RoadAssist Pro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've reimagined roadside assistance from the ground up with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                gradient: "from-blue-50 to-indigo-50",
                iconGradient: "from-blue-600 to-indigo-600",
                title: "Lightning Fast",
                desc: "AI-powered dispatch finds the nearest technician in seconds. No waiting, no delays—just instant help when you need it most.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
              },
              {
                gradient: "from-green-50 to-emerald-50",
                iconGradient: "from-green-600 to-emerald-600",
                title: "Always Secure",
                desc: "Verified technicians, real-time tracking, and encrypted communications. Your safety is our top priority, every time.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
              },
              {
                gradient: "from-purple-50 to-pink-50",
                iconGradient: "from-purple-600 to-pink-600",
                title: "Transparent Pricing",
                desc: "Know the cost upfront, pay securely through the app. No hidden fees, no surprises—just honest service at fair prices.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
              },
            ].map((vp) => (
              <div
                key={vp.title}
                className={`group bg-gradient-to-br ${vp.gradient} p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${vp.iconGradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {vp.icon}
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{vp.title}</h3>
                <p className="text-gray-600 leading-relaxed">{vp.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Features ────────────────────────────────────────────── */}
      <Section id="features" className="bg-gradient-to-b from-gray-50 to-white">
        <Container>

          {/* Intelligent Dispatch */}
          <div className="mb-28">
            <div className="text-center mb-16">
              <Badge variant="green" className="mb-4">Intelligent Dispatch</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The Brain Behind the Service
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Powered by AI algorithms that match the right technician to every job in milliseconds
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-12 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 pointer-events-none" />
              <div className="relative grid lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Request Management",
                    items: ["Incoming request queue", "Priority assignment (emergency, VIP)", "Automated technician matching", "Manual override capabilities"],
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />,
                  },
                  {
                    title: "Technician Management",
                    items: ["Real-time availability tracking", "Skill-based assignment", "Performance metrics", "Shift management"],
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
                  },
                  {
                    title: "Communication Hub",
                    items: ["Internal chat system", "Customer communication relay", "Emergency alerts", "Status updates"],
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
                  },
                ].map((card) => (
                  <div key={card.title} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {card.icon}
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">{card.title}</h3>
                    </div>
                    <ul className="space-y-3 text-green-50">
                      {card.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* For Technicians */}
          <div className="mb-28">
            <div className="text-center mb-16">
              <Badge variant="orange" className="mb-4">For Technicians</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Powerful Tools at Your Fingertips
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to provide exceptional service efficiently
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  iconGradient: "from-orange-500 to-red-500",
                  title: "Job Management",
                  subtitle: "Complete job lifecycle management from assignment to completion",
                  items: ["Assignment notifications", "Job details and customer info", "Service completion workflow"],
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />,
                },
                {
                  iconGradient: "from-blue-500 to-indigo-500",
                  title: "Navigation & Tracking",
                  subtitle: "Advanced GPS navigation and real-time location services",
                  items: ["Turn-by-turn directions", "Customer location marking", "GPS tracking for dispatch"],
                  icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>,
                },
                {
                  iconGradient: "from-green-500 to-emerald-500",
                  title: "Service Tools",
                  subtitle: "Digital tools to streamline your service delivery",
                  items: ["Digital service forms", "Photo documentation", "Parts inventory tracking"],
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
                },
              ].map((card) => (
                <div key={card.title} className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${card.iconGradient} rounded-2xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform flex-shrink-0`}>
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {card.icon}
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{card.title}</h3>
                      <p className="text-gray-600">{card.subtitle}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* For Customers */}
          <div>
            <div className="text-center mb-16">
              <Badge variant="blue" className="mb-4">For Customers</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Help at Your Fingertips
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get emergency assistance with just one tap. Track your technician in real-time and stay connected every step of the way.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  iconGradient: "from-red-500 to-orange-500",
                  title: "Emergency Assistance Request",
                  subtitle: "One-tap emergency call with automatic GPS detection",
                  items: ["Service type selection", "Photo upload for issues"],
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />,
                },
                {
                  iconGradient: "from-blue-500 to-indigo-500",
                  title: "Service Tracking",
                  subtitle: "Real-time technician location and service updates",
                  items: ["Real-time ETA updates", "Chat with technician", "Status notifications"],
                  icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>,
                },
                {
                  iconGradient: "from-purple-500 to-pink-500",
                  title: "Account Management",
                  subtitle: "Complete profile and payment management",
                  items: ["Profile creation", "Payment methods", "Service history", "Loyalty rewards"],
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />,
                },
                {
                  iconGradient: "from-green-500 to-emerald-500",
                  title: "Safety Features",
                  subtitle: "Advanced security features for peace of mind",
                  items: ["Emergency contact sharing", "Live location sharing", "Verified technician credentials", "Service verification codes"],
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
                },
              ].map((card) => (
                <div key={card.title} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${card.iconGradient} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform flex-shrink-0`}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {card.icon}
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{card.title}</h3>
                      <p className="text-gray-600 text-sm">{card.subtitle}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── How It Works ─────────────────────────────────────────── */}
      <Section id="how-it-works" className="bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple, fast, and reliable roadside assistance</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { n: 1, title: "Request Help", desc: "Tap the emergency button or call for immediate assistance" },
              { n: 2, title: "AI Dispatch", desc: "Our system automatically assigns the nearest available technician" },
              { n: 3, title: "Track Progress", desc: "Watch the technician's live location and receive real-time updates" },
              { n: 4, title: "Service Complete", desc: "Rate your experience and pay securely through the app" },
            ].map((step, i) => (
              <div key={step.n} className="relative text-center">
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-200 -z-10" />
                )}
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200">
                  <span className="text-white text-2xl font-bold">{step.n}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Advanced Dispatch ────────────────────────────────────── */}
      <Section id="dispatch" className="bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Advanced Dispatch System</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intelligent dispatch technology that optimizes response times and technician efficiency
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Smart Assignment Algorithm</h3>
              <ul className="space-y-6">
                {[
                  { title: "Geographic Optimization", desc: "Assigns technicians based on proximity and real-time traffic conditions" },
                  { title: "Skill Matching", desc: "Matches service requests with technicians' certified expertise" },
                  { title: "Real-time Re-assignment", desc: "Continuous monitoring and automatic re-routing as conditions change" },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl border border-blue-100">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">System Performance</h4>
              <div className="space-y-4">
                {[
                  { label: "Average Response Time", value: "15 minutes" },
                  { label: "Technician Utilization", value: "85%" },
                  { label: "Customer Satisfaction", value: "4.8 / 5.0" },
                  { label: "System Uptime", value: "99.9%" },
                ].map((stat) => (
                  <div key={stat.label} className="flex justify-between items-center py-3 border-b border-blue-100 last:border-0">
                    <span className="text-gray-600">{stat.label}</span>
                    <span className="font-bold text-green-600">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── CTA Banner ───────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Roadside Assistance?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join the future of roadside assistance. Connect customers, dispatchers, and technicians in one seamless platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className={buttonVariants({ variant: "primary", size: "lg" })}
                style={{ background: "white", color: "#2563eb" }}
              >
                Schedule a Demo
              </Link>
              <Link
                href="/contact"
                className={buttonVariants({ variant: "outline-white", size: "lg" })}
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Competitive Analysis ─────────────────────────────────── */}
      <Section id="competitive-analysis" className="bg-gradient-to-br from-gray-50 to-blue-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Market Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we differentiate ourselves in the competitive roadside assistance landscape
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Competitive Advantages</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { label: "AI-Powered Dispatch:", desc: "Lightning-fast technician matching in milliseconds" },
                  { label: "Real-Time Tracking:", desc: "Complete transparency with live GPS updates" },
                  { label: "Mobile-First Experience:", desc: "Seamless booking and tracking on any device" },
                  { label: "Nationwide Coverage:", desc: "Dedicated service reaching underserved markets" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">{item.label}</strong>
                      <span className="text-gray-600 ml-1">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Market Position</h3>
              </div>
              <div className="space-y-4">
                {[
                  { bg: "from-blue-50 to-indigo-50", title: "Industry Growth", desc: "Roadside assistance market growing at 4.1% CAGR globally (2022–2030)" },
                  { bg: "from-green-50 to-emerald-50", title: "Market Opportunity", desc: "Millions of drivers face roadside emergencies with limited access to reliable help" },
                  { bg: "from-purple-50 to-pink-50", title: "Our Opportunity", desc: "Fill the gap with technology-driven, transparent, and accessible service" },
                ].map((item) => (
                  <div key={item.title} className={`bg-gradient-to-r ${item.bg} p-4 rounded-xl`}>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">How We Compare</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-500">Traditional Players</th>
                    <th className="text-center py-4 px-4 font-semibold text-blue-600">RoadAssist Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Response Time", them: "30–60 minutes", us: "15 minutes avg" },
                    { feature: "Real-time Tracking", them: "Limited", us: "Full GPS tracking" },
                    { feature: "Mobile Experience", them: "Basic apps", us: "AI-powered platform" },
                    { feature: "Coverage", them: "Spotty in rural areas", us: "Nationwide focus" },
                  ].map((row) => (
                    <tr key={row.feature} className="border-b border-gray-100 last:border-0">
                      <td className="py-4 px-4 font-medium text-gray-900">{row.feature}</td>
                      <td className="py-4 px-4 text-center text-gray-500">{row.them}</td>
                      <td className="py-4 px-4 text-center text-green-600 font-semibold">{row.us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
