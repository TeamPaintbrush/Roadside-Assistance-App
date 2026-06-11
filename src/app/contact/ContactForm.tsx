"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const serviceOptions = [
  "Battery Jumpstart",
  "Fuel Delivery",
  "Car Lockout Assistance",
  "Flat Tire Change",
  "Towing Service",
  "Emergency Diagnostics",
  "General Inquiry / Demo",
];

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      {children}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

const inputClass = (hasError: boolean) =>
  cn(
    "w-full px-4 py-3 border rounded-xl text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm",
    hasError ? "border-red-300 bg-red-50" : "border-gray-200 hover:border-gray-300"
  );

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-green-50 rounded-2xl border border-green-100">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600 mb-6">Thanks for reaching out. We'll get back to you within 24 hours.</p>
        <button onClick={() => setStatus("idle")} className="text-blue-600 text-sm font-medium hover:underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full Name *" error={errors.name?.message}>
          <input
            {...register("name")}
            placeholder="Jane Smith"
            className={inputClass(!!errors.name)}
          />
        </Field>
        <Field label="Email Address *" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            placeholder="jane@company.com"
            className={inputClass(!!errors.email)}
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Phone Number" error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            placeholder="(555) 000-0000"
            className={inputClass(!!errors.phone)}
          />
        </Field>
        <Field label="Company / Fleet Name" error={errors.company?.message}>
          <input
            {...register("company")}
            placeholder="Acme Fleet Co."
            className={inputClass(!!errors.company)}
          />
        </Field>
      </div>

      <Field label="I'm interested in..." error={errors.service?.message}>
        <select {...register("service")} className={inputClass(!!errors.service)}>
          <option value="">Select a service or topic</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </Field>

      <Field label="Message *" error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Tell us about your situation, fleet size, or questions..."
          className={inputClass(!!errors.message)}
        />
      </Field>

      {status === "error" && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full justify-center py-4 text-base"
      >
        {status === "loading" ? (
          <>
            <svg className="w-4 h-4 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </>
        )}
      </Button>

      <p className="text-xs text-gray-400 text-center">
        We respond within 24 hours. For emergencies, call <a href="tel:813-399-4779" className="text-blue-600 hover:underline">813-399-4779</a>.
      </p>
    </form>
  );
}
