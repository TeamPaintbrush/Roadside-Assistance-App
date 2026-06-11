"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

const Step1Schema = z.object({
  name:    z.string().min(2, "Name is required"),
  email:   z.string().email("Valid email required"),
  phone:   z.string().optional(),
  company: z.string().min(1, "Company name required"),
});

const Step2Schema = z.object({
  fleetSize: z.enum(["1-5", "6-25", "26-100", "100+"], "Select a fleet size"),
  interest:  z.string().min(1, "Select your primary interest"),
  heardFrom: z.string().optional(),
  notes:     z.string().optional(),
});

const FullSchema = Step1Schema.merge(Step2Schema);
type FormData = z.infer<typeof FullSchema>;

const FLEET_SIZES = ["1-5", "6-25", "26-100", "100+"] as const;
const INTERESTS = [
  "Customer-facing app",
  "Technician app & dispatch",
  "Fleet management & analytics",
  "Full platform (all features)",
];
const HEARD_FROM = ["Google search", "LinkedIn", "Referral", "Industry event", "Paintbrush Marketing", "Other"];

const steps = ["Your Info", "Your Needs", "Confirm"];

export default function DemoRequestForm() {
  const [step, setStep]         = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");
  const [saved, setSaved]       = useState<Partial<FormData>>({});

  const form1 = useForm<z.infer<typeof Step1Schema>>({
    resolver: zodResolver(Step1Schema),
    defaultValues: { name: saved.name ?? "", email: saved.email ?? "", phone: saved.phone ?? "", company: saved.company ?? "" },
  });

  const form2 = useForm<z.infer<typeof Step2Schema>>({
    resolver: zodResolver(Step2Schema),
    defaultValues: { fleetSize: saved.fleetSize, interest: saved.interest ?? "", heardFrom: saved.heardFrom ?? "", notes: saved.notes ?? "" },
  });

  const handleStep1 = form1.handleSubmit(data => {
    setSaved(prev => ({ ...prev, ...data }));
    setStep(2);
  });

  const handleStep2 = form2.handleSubmit(data => {
    setSaved(prev => ({ ...prev, ...data }));
    setStep(3);
  });

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(saved),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Something went wrong");
      setSubmitted(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">You're on the list!</h3>
        <p className="text-gray-500 max-w-sm mx-auto">
          {saved.name?.split(" ")[0]}, expect an email from Ross within one business day to schedule your personalized demo.
        </p>
        <p className="text-sm text-gray-400 mt-4">
          Questions? <a href="mailto:lross@paintbrushmarketing.net" className="text-blue-600 hover:underline">lross@paintbrushmarketing.net</a>
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Step progress */}
      <div className="flex items-center mb-10">
        {steps.map((label, i) => {
          const n = i + 1;
          const done    = step > n;
          const current = step === n;
          return (
            <div key={label} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center">
                <div className={cn(
                  "w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all",
                  done    ? "bg-blue-600 border-blue-600 text-white" :
                  current ? "bg-white border-blue-600 text-blue-600" :
                            "bg-white border-gray-200 text-gray-400"
                )}>
                  {done ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : n}
                </div>
                <span className={cn(
                  "text-xs mt-1.5 font-medium whitespace-nowrap",
                  current ? "text-blue-600" : done ? "text-gray-700" : "text-gray-400"
                )}>
                  {label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={cn("flex-1 h-0.5 mx-2 mb-5 transition-all", step > n ? "bg-blue-600" : "bg-gray-200")} />
              )}
            </div>
          );
        })}
      </div>

      {/* ── Step 1: Contact Info ── */}
      {step === 1 && (
        <form onSubmit={handleStep1} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                {...form1.register("name")}
                placeholder="Alex Johnson"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {form1.formState.errors.name && (
                <p className="text-red-500 text-xs mt-1">{form1.formState.errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company *</label>
              <input
                {...form1.register("company")}
                placeholder="Acme Fleet Co."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {form1.formState.errors.company && (
                <p className="text-red-500 text-xs mt-1">{form1.formState.errors.company.message}</p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Work Email *</label>
            <input
              {...form1.register("email")}
              type="email"
              placeholder="alex@company.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {form1.formState.errors.email && (
              <p className="text-red-500 text-xs mt-1">{form1.formState.errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone <span className="text-gray-400 font-normal">(optional)</span></label>
            <input
              {...form1.register("phone")}
              type="tel"
              placeholder="(813) 555-0100"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button type="submit" className={cn(buttonVariants({ variant: "primary", size: "md" }), "w-full justify-center mt-2")}>
            Next: Your Needs
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </form>
      )}

      {/* ── Step 2: Use Case ── */}
      {step === 2 && (
        <form onSubmit={handleStep2} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Fleet / vehicle count *</label>
            <div className="grid grid-cols-4 gap-2">
              {FLEET_SIZES.map(size => (
                <label key={size} className="cursor-pointer">
                  <input type="radio" value={size} {...form2.register("fleetSize")} className="sr-only peer" />
                  <div className="text-center py-3 rounded-xl border-2 text-sm font-semibold transition-all border-gray-200 text-gray-600 peer-checked:border-blue-600 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:border-gray-300">
                    {size}
                  </div>
                </label>
              ))}
            </div>
            {form2.formState.errors.fleetSize && (
              <p className="text-red-500 text-xs mt-1">{form2.formState.errors.fleetSize.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Primary interest *</label>
            <div className="space-y-2">
              {INTERESTS.map(opt => (
                <label key={opt} className="flex items-center gap-3 p-3 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-gray-300 transition-all has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50">
                  <input type="radio" value={opt} {...form2.register("interest")} className="accent-blue-600" />
                  <span className="text-sm text-gray-700">{opt}</span>
                </label>
              ))}
            </div>
            {form2.formState.errors.interest && (
              <p className="text-red-500 text-xs mt-1">{form2.formState.errors.interest.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us? <span className="text-gray-400 font-normal">(optional)</span></label>
            <select
              {...form2.register("heardFrom")}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="">Select…</option>
              {HEARD_FROM.map(h => <option key={h} value={h}>{h}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Anything we should know? <span className="text-gray-400 font-normal">(optional)</span></label>
            <textarea
              {...form2.register("notes")}
              rows={3}
              placeholder="Specific use cases, timeline, current tools you're using…"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-5 py-3 text-sm font-medium text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
            >
              ← Back
            </button>
            <button type="submit" className={cn(buttonVariants({ variant: "primary", size: "md" }), "flex-1 justify-center")}>
              Review Request
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </form>
      )}

      {/* ── Step 3: Confirm ── */}
      {step === 3 && (
        <div className="space-y-5">
          <div className="bg-gray-50 rounded-2xl p-5 space-y-3">
            <h4 className="font-semibold text-gray-900 text-sm">Review your request</h4>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {[
                { label: "Name",      value: saved.name     },
                { label: "Company",   value: saved.company  },
                { label: "Email",     value: saved.email    },
                { label: "Phone",     value: saved.phone || "—" },
                { label: "Fleet size",value: saved.fleetSize },
                { label: "Interest",  value: saved.interest },
                ...(saved.heardFrom ? [{ label: "Heard via", value: saved.heardFrom }] : []),
              ].map(row => (
                <div key={row.label}>
                  <span className="text-gray-400">{row.label}: </span>
                  <span className="text-gray-800 font-medium">{row.value}</span>
                </div>
              ))}
            </div>
            {saved.notes && (
              <div className="pt-2 border-t border-gray-200">
                <p className="text-gray-400 text-xs mb-1">Notes</p>
                <p className="text-gray-700 text-sm">{saved.notes}</p>
              </div>
            )}
          </div>

          <div className="bg-blue-50 rounded-xl p-4 text-sm text-blue-700">
            <strong>What happens next:</strong> Ross will reach out within one business day to schedule a 30-minute personalized walkthrough.
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="px-5 py-3 text-sm font-medium text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
            >
              ← Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={cn(buttonVariants({ variant: "primary", size: "md" }), "flex-1 justify-center")}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Sending…
                </>
              ) : (
                <>
                  Request My Demo
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
