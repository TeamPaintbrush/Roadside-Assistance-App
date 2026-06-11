import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { buttonVariants } from "@/components/ui/Button";
import DispatchSimulator from "./DispatchSimulator";
import DemoRequestForm from "./DemoRequestForm";
import PlatformTabs from "./PlatformTabs";

export const metadata: Metadata = {
  title: "See RoadAssist Pro in Action",
  description:
    "Try the interactive AI dispatch simulator, explore platform screenshots, and book a personalized demo. No signup required.",
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </div>
        <Container className="relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Interactive demo — no account needed
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            See It Work in Real Time
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Watch AI dispatch find the nearest technician in seconds. The simulator below mirrors exactly how the live platform behaves.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#simulator" className={buttonVariants({ variant: "primary", size: "lg" })} style={{ background: "white", color: "#2563eb" }}>
              Try the Simulator
            </a>
            <a href="#request-demo" className={buttonVariants({ variant: "outline-white", size: "lg" })}>
              Book a Personal Demo
            </a>
          </div>
        </Container>
      </section>

      {/* ── Dispatch Simulator ── */}
      <Section id="simulator" className="bg-white">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              AI Dispatch Simulator
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Pick a Service. Watch Dispatch Happen.
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Select what you need, hit Request, and the AI finds the nearest certified technician — just like the real platform does.
            </p>
          </div>
          <DispatchSimulator />

          {/* How it maps to real tech */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: "🛰️", title: "Real GPS matching", desc: "In production, tech positions update every 3 seconds via WebSocket." },
              { icon: "🧠", title: "Skill-based routing", desc: "AI considers certification, current load, and proximity simultaneously." },
              { icon: "⚡", title: "Sub-2-second dispatch", desc: "Average match time across all live service types is 1.8 seconds." },
            ].map(item => (
              <div key={item.title} className="text-center p-5 bg-gray-50 rounded-2xl">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm">{item.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Platform Screens ── */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              The Platform
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Four Interfaces. One Unified System.
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Every stakeholder gets their own tailored experience — all connected in real time.
            </p>
          </div>
          <PlatformTabs />
        </Container>
      </Section>

      {/* ── Trust strip ── */}
      <section className="py-14 bg-white border-y border-gray-100">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "1.8s",   label: "Avg dispatch time" },
              { value: "15 min", label: "Avg response time"  },
              { value: "4.9★",   label: "Technician rating"  },
              { value: "99.9%",  label: "Platform uptime"    },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-3xl font-black text-blue-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Demo Request Form ── */}
      <Section id="request-demo" className="bg-gradient-to-br from-gray-50 to-blue-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">

            {/* Left — pitch */}
            <div className="lg:pt-4">
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
                Book a Demo
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                Get a Guided Walkthrough Tailored to You
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                The simulator shows the basics — a live demo with Ross goes deeper: your fleet size, your dispatch workflows, your questions. 30 minutes, no sales pressure.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: "📋", title: "Custom agenda",       desc: "We focus on the features most relevant to your use case." },
                  { icon: "🎯", title: "Live Q&A",            desc: "Ask anything — platform capabilities, pricing, roadmap." },
                  { icon: "🤝", title: "No obligation",       desc: "The demo is free. No contract, no pressure." },
                  { icon: "⏱️", title: "30 minutes",          desc: "Efficient, focused, and worth every minute." },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-2">Your Demo Host</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    R
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Ross</p>
                    <p className="text-gray-500 text-xs">Paintbrush Marketing · Digital Marketer</p>
                    <a href="mailto:lross@paintbrushmarketing.net" className="text-blue-600 text-xs hover:underline">
                      lross@paintbrushmarketing.net
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <DemoRequestForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Bottom CTA ── */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700">
        <Container className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Have a quick question first?
          </h2>
          <p className="text-blue-100 mb-7 max-w-md mx-auto">
            No need to book a demo just to ask. Reach out directly and get a reply the same day.
          </p>
          <Link href="/contact" className={buttonVariants({ variant: "primary", size: "lg" })} style={{ background: "white", color: "#2563eb" }}>
            Contact Us
          </Link>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
