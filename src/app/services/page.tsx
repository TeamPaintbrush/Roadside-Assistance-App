import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { buttonVariants } from "@/components/ui/Button";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive roadside assistance services including battery jumpstart, fuel delivery, lockout help, flat tire change, towing, and emergency diagnostics — available 24/7.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </div>
        <Container className="relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            All services available 24/7
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Every Service You Need,<br className="hidden md:block" /> Right Where You Are
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            From a dead battery at 2 AM to a flat tire on the highway — our certified technicians handle it all, fast.
          </p>
        </Container>
      </section>

      {/* Services Grid */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Six Services, One Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select a service to learn exactly what's included, how it works, and what to expect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group bg-gradient-to-br ${service.gradient} p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.iconGradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.iconPath} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.shortDesc}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-600 font-semibold">{service.responseTime}</span>
                  <span className="text-gray-500 font-medium">{service.priceFrom}</span>
                </div>
                <div className="mt-4 flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all gap-1">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats Banner */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15 min", label: "Average Response Time" },
              { value: "99.9%", label: "System Uptime" },
              { value: "4.9★", label: "Customer Rating" },
              { value: "24/7", label: "Always Available" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-blue-600 to-indigo-700">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Help Right Now?
            </h2>
            <p className="text-blue-100 text-xl mb-8 max-w-xl mx-auto">
              Our dispatch team is standing by 24/7. Get a technician on their way in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className={buttonVariants({ variant: "primary", size: "lg" })} style={{ background: "white", color: "#2563eb" }}>
                Request Service Now
              </Link>
              <Link href="/how-it-works" className={buttonVariants({ variant: "outline-white", size: "lg" })}>
                How It Works
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
