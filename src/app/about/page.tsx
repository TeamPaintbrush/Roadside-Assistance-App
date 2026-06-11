import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { buttonVariants } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about RoadAssist Pro — our mission, story, and the team behind the platform that's redefining roadside assistance.",
};

const values = [
  {
    title: "Speed Without Compromise",
    desc: "Every second matters in a roadside emergency. We obsess over response times because we know the difference between 15 minutes and 45 minutes is a customer who trusts us forever — or never calls again.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Radical Transparency",
    desc: "No surprises. Every customer knows who's coming, when they'll arrive, and what it costs before they confirm. Our goal is zero moments of 'I wonder what's going on.'",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Technician-First Culture",
    desc: "Our platform works great for customers because it works great for technicians first. Happy, well-equipped technicians deliver better service. We invest heavily in their tools, training, and working conditions.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Technology in Service of People",
    desc: "AI and automation are powerful, but they're tools — not the point. We build technology to make human connections faster and better, not to replace them.",
    icon: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18",
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Accessible for Everyone",
    desc: "Roadside emergencies don't only happen in major cities. We're committed to building coverage in rural and underserved areas where traditional providers don't go.",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    color: "from-teal-500 to-cyan-600",
  },
  {
    title: "Trust, Earned Every Call",
    desc: "Trust isn't given — it's built one service call at a time. Every rating, every review, every technician credential we verify is part of a long-term commitment to a platform people can count on.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    color: "from-pink-500 to-rose-600",
  },
];

const stats = [
  { value: "15 min", label: "Average response time" },
  { value: "99.9%", label: "Platform uptime" },
  { value: "4.9★", label: "Customer satisfaction" },
  { value: "24/7", label: "Always available" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </div>
        <Container className="relative text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Turning Emergencies Into<br className="hidden md:block" /> Effortless Recoveries
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            RoadAssist Pro was built because being stranded shouldn't be a crisis. It should be a solved problem.
          </p>
        </Container>
      </section>

      {/* Mission */}
      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Make Roadside Help as Reliable as Calling a Friend
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Traditional roadside assistance is slow, opaque, and fragmented. You call a number, wait on hold, get an ETA that's always wrong, and wonder whether anyone is actually coming.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We built RoadAssist Pro to fix that — from the ground up. AI dispatch, real-time GPS tracking, verified technicians, and transparent pricing. Not as buzzwords, but as a complete platform that actually delivers.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-3xl">
              <blockquote className="text-2xl font-medium text-gray-800 italic mb-6 leading-relaxed">
                "Roadside emergencies don't have to feel like emergencies. With the right technology, a breakdown is just a delay — not a disaster."
              </blockquote>
              <p className="text-gray-500 font-medium">— The RoadAssist Pro Team</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <section className="py-16 bg-blue-600">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-16">
            <span className="inline-block bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Stand For</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These aren't aspirations on a poster. They're the principles that drive every product decision we make.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-br ${v.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={v.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team placeholder */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">The Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built by People Who've Been Stranded</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our founding team combines deep experience in mobility, logistics, and software — united by a shared frustration with the status quo.
            </p>
          </div>
          <div className="bg-white border-2 border-dashed border-gray-200 rounded-3xl p-16 text-center">
            <div className="text-gray-400 text-lg">Team bios and headshots coming soon.</div>
            <p className="text-gray-400 text-sm mt-2">Want to join the team? <Link href="/contact" className="text-blue-600 hover:underline">Reach out.</Link></p>
          </div>
        </Container>
      </Section>

      {/* Built by Paintbrush */}
      <Section className="bg-white border-t border-gray-100">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-500 text-sm uppercase tracking-wide font-medium mb-3">Built & Designed By</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Paintbrush Marketing</h3>
            <p className="text-gray-600 mb-6">
              RoadAssist Pro is a product created and managed by Paintbrush Marketing — a digital agency specializing in technology-driven brand development.
            </p>
            <a href="mailto:lross@paintbrushmarketing.net" className="text-blue-600 hover:text-blue-700 font-medium">
              lross@paintbrushmarketing.net
            </a>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Want to Learn More?</h2>
          <p className="text-blue-100 text-xl mb-8 max-w-xl mx-auto">Schedule a demo and see the platform firsthand.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className={buttonVariants({ variant: "primary", size: "lg" })} style={{ background: "white", color: "#2563eb" }}>
              Book a Demo
            </Link>
            <Link href="/features" className={buttonVariants({ variant: "outline-white", size: "lg" })}>
              Explore Features
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
