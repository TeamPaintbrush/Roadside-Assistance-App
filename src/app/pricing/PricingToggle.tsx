"use client";

import { useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Personal",
    monthlyPrice: 29,
    annualPrice: 23,
    desc: "Perfect for individual drivers who want peace of mind on every trip.",
    cta: "Get Started",
    ctaHref: "/contact",
    highlighted: false,
    features: [
      "Up to 4 service calls per year",
      "Battery, fuel, lockout & tire services",
      "15-min average response time",
      "Real-time technician tracking",
      "In-app chat & service history",
      "Digital receipts",
    ],
    notIncluded: ["Towing service", "Emergency diagnostics", "Priority dispatch", "Fleet dashboard"],
  },
  {
    name: "Professional",
    monthlyPrice: 79,
    annualPrice: 63,
    desc: "For small businesses, fleets, and power users who need unlimited coverage.",
    cta: "Start Free Trial",
    ctaHref: "/contact",
    highlighted: true,
    badge: "Most Popular",
    features: [
      "Unlimited service calls",
      "All 6 services including towing",
      "Priority dispatch (front of queue)",
      "Emergency diagnostics included",
      "Fleet dashboard (up to 10 vehicles)",
      "Dedicated account manager",
      "Monthly usage report",
      "SLA guarantee: 20-min max response",
    ],
    notIncluded: [],
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    annualPrice: null,
    desc: "Custom coverage for large fleets, insurers, and enterprise partners.",
    cta: "Contact Sales",
    ctaHref: "/contact",
    highlighted: false,
    features: [
      "Unlimited vehicles & service calls",
      "Custom SLA agreements",
      "White-label option available",
      "API access & webhooks",
      "Dedicated support team & SLA",
      "Custom reporting & analytics",
      "On-site technician training",
      "Volume pricing",
    ],
    notIncluded: [],
  },
];

export default function PricingToggle() {
  const [annual, setAnnual] = useState(false);

  return (
    <div>
      {/* Billing Toggle */}
      <div className="flex items-center justify-center gap-4 mb-16">
        <span className={cn("text-sm font-medium", !annual ? "text-gray-900" : "text-gray-400")}>Monthly</span>
        <button
          onClick={() => setAnnual(!annual)}
          className={cn(
            "relative w-14 h-7 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
            annual ? "bg-blue-600" : "bg-gray-200"
          )}
          aria-label="Toggle billing period"
        >
          <span
            className={cn(
              "absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200",
              annual ? "translate-x-8" : "translate-x-1"
            )}
          />
        </button>
        <span className={cn("text-sm font-medium flex items-center gap-2", annual ? "text-gray-900" : "text-gray-400")}>
          Annual
          <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">Save 20%</span>
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={cn(
              "rounded-2xl p-8 transition-all duration-300",
              tier.highlighted
                ? "bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl scale-105"
                : "bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1"
            )}
          >
            {tier.badge && (
              <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                {tier.badge}
              </span>
            )}

            <h3 className={cn("text-2xl font-bold mb-2", tier.highlighted ? "text-white" : "text-gray-900")}>
              {tier.name}
            </h3>
            <p className={cn("text-sm mb-6 leading-relaxed", tier.highlighted ? "text-blue-100" : "text-gray-500")}>
              {tier.desc}
            </p>

            {/* Price */}
            <div className="mb-8">
              {tier.monthlyPrice ? (
                <>
                  <div className="flex items-end gap-1">
                    <span className={cn("text-5xl font-black", tier.highlighted ? "text-white" : "text-gray-900")}>
                      ${annual ? tier.annualPrice : tier.monthlyPrice}
                    </span>
                    <span className={cn("text-sm mb-2", tier.highlighted ? "text-blue-200" : "text-gray-400")}>/month</span>
                  </div>
                  {annual && (
                    <p className={cn("text-xs mt-1", tier.highlighted ? "text-blue-200" : "text-gray-400")}>
                      Billed ${(tier.annualPrice! * 12).toLocaleString()} annually
                    </p>
                  )}
                </>
              ) : (
                <div className={cn("text-3xl font-black", tier.highlighted ? "text-white" : "text-gray-900")}>
                  Custom Pricing
                </div>
              )}
            </div>

            {/* CTA */}
            <Link
              href={tier.ctaHref}
              className={cn(
                "w-full justify-center mb-8",
                tier.highlighted
                  ? buttonVariants({ variant: "primary", size: "md" }) + " bg-white text-blue-600 hover:bg-blue-50"
                  : buttonVariants({ variant: "primary", size: "md" })
              )}
              style={!tier.highlighted ? undefined : { background: "white", color: "#2563eb" }}
            >
              {tier.cta}
            </Link>

            {/* Features */}
            <ul className="space-y-3">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <svg className={cn("w-4 h-4 flex-shrink-0 mt-0.5", tier.highlighted ? "text-green-300" : "text-green-500")} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className={cn("text-sm", tier.highlighted ? "text-blue-50" : "text-gray-600")}>{f}</span>
                </li>
              ))}
              {tier.notIncluded.map((f) => (
                <li key={f} className="flex items-start gap-2.5 opacity-40">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-sm text-gray-500">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
