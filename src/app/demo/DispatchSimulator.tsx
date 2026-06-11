"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

type Phase = "idle" | "searching" | "assigned" | "arriving";

const SERVICES = [
  { id: "battery", label: "Battery Jumpstart", icon: "⚡" },
  { id: "fuel",    label: "Fuel Delivery",     icon: "⛽" },
  { id: "lockout", label: "Car Lockout",        icon: "🔑" },
  { id: "tire",    label: "Flat Tire",          icon: "🔧" },
  { id: "towing",  label: "Towing Service",     icon: "🚗" },
];

const TECHNICIANS = [
  { id: 1, name: "James R.",  rating: 4.9, vehicle: "White Ford Transit",    x: 16, y: 22, initials: "JR" },
  { id: 2, name: "Maria S.",  rating: 4.8, vehicle: "Gray Toyota Tundra",    x: 76, y: 18, initials: "MS" },
  { id: 3, name: "Carlos M.", rating: 5.0, vehicle: "Black Chevy Silverado", x: 68, y: 60, initials: "CM" },
  { id: 4, name: "Tony K.",   rating: 4.7, vehicle: "White RAM 1500",        x: 18, y: 70, initials: "TK" },
  { id: 5, name: "Lisa P.",   rating: 4.9, vehicle: "Silver Ford F-150",     x: 43, y: 12, initials: "LP" },
  { id: 6, name: "David W.",  rating: 4.8, vehicle: "Red Dodge Ram",         x: 83, y: 75, initials: "DW" },
];

const SELECTED = TECHNICIANS[2]; // Carlos M. — closest to center

function MapBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" fill="#edf1f7" />

      {/* Quadrant blocks */}
      <rect x="0"  y="0"  width="48" height="48" fill="#e5ecf5" />
      <rect x="52" y="0"  width="48" height="48" fill="#e5ecf5" />
      <rect x="0"  y="52" width="48" height="48" fill="#e5ecf5" />
      <rect x="52" y="52" width="48" height="48" fill="#e5ecf5" />

      {/* Park — top-left */}
      <rect x="1" y="1" width="21" height="21" fill="#cce5cc" />
      <circle cx="6"  cy="7"  r="2.5" fill="#aad5aa" />
      <circle cx="15" cy="13" r="2"   fill="#aad5aa" />
      <circle cx="8"  cy="18" r="2"   fill="#aad5aa" />

      {/* Water — bottom-right */}
      <ellipse cx="84" cy="84" rx="13" ry="9" fill="#c0dff0" />

      {/* Sub-block grid lines per quadrant */}
      <rect x="23" y="0"  width="1" height="48" fill="#d8e3ef" />
      <rect x="0"  y="23" width="48" height="1" fill="#d8e3ef" />
      <rect x="74" y="0"  width="1" height="48" fill="#d8e3ef" />
      <rect x="52" y="23" width="48" height="1" fill="#d8e3ef" />
      <rect x="23" y="52" width="1" height="48" fill="#d8e3ef" />
      <rect x="0"  y="74" width="48" height="1" fill="#d8e3ef" />
      <rect x="74" y="52" width="1" height="48" fill="#d8e3ef" />
      <rect x="52" y="74" width="48" height="1" fill="#d8e3ef" />

      {/* Secondary roads */}
      <rect x="24" y="0"  width="1.5" height="100" fill="#d2dcea" />
      <rect x="74" y="0"  width="1.5" height="100" fill="#d2dcea" />
      <rect x="0"  y="24" width="100" height="1.5"  fill="#d2dcea" />
      <rect x="0"  y="74" width="100" height="1.5"  fill="#d2dcea" />

      {/* Main arterials — intersect at (50, 50) */}
      <rect x="0"    y="48.5" width="100" height="3" fill="#c8d4e4" />
      <rect x="48.5" y="0"    width="3" height="100" fill="#c8d4e4" />

      {/* Centre-line dashes */}
      {[6, 16, 36, 62, 78, 88, 95].map((x) => (
        <rect key={`ch-${x}`} x={x} y="49.7" width="4" height="0.6" fill="#b8c8da" />
      ))}
      {[6, 16, 36, 62, 78, 88, 95].map((y) => (
        <rect key={`cv-${y}`} x="49.7" y={y} width="0.6" height="4" fill="#b8c8da" />
      ))}
    </svg>
  );
}

export default function DispatchSimulator() {
  const [service, setService]     = useState("battery");
  const [phase, setPhase]         = useState<Phase>("idle");
  const [eta, setEta]             = useState(8);
  const [searchStep, setSearchStep] = useState(0);

  const handleRequest = () => {
    if (phase !== "idle") return;
    setPhase("searching");
    setSearchStep(0);
    setTimeout(() => setSearchStep(1), 600);
    setTimeout(() => setSearchStep(2), 1400);
    setTimeout(() => { setPhase("assigned"); setEta(8); }, 2200);
  };

  const handleReset = () => { setPhase("idle"); setEta(8); setSearchStep(0); };

  useEffect(() => {
    if (phase !== "assigned") return;
    const t = setInterval(() => {
      setEta(prev => {
        if (prev <= 1) { setPhase("arriving"); clearInterval(t); return 0; }
        return prev - 1;
      });
    }, 1200);
    return () => clearInterval(t);
  }, [phase]);

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-5">

        {/* ── MAP (3/5) ── */}
        <div className="lg:col-span-3 relative bg-[#edf1f7]">
          <div className="relative w-full h-[360px] lg:h-[480px]">
            <MapBackground />

            {/* Animated route line */}
            {(phase === "assigned" || phase === "arriving") && (
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid slice"
              >
                <line
                  x1={SELECTED.x} y1={SELECTED.y}
                  x2="50" y2="50"
                  stroke="#22c55e"
                  strokeWidth="0.9"
                  strokeDasharray="3 2"
                  className="animate-dash"
                />
              </svg>
            )}

            {/* Technician markers */}
            {TECHNICIANS.map(tech => {
              const chosen = tech.id === SELECTED.id;
              const active = phase !== "idle";
              return (
                <div
                  key={tech.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                  style={{ left: `${tech.x}%`, top: `${tech.y}%` }}
                >
                  {phase === "searching" && (
                    <div className="absolute -inset-2 rounded-full animate-ping opacity-20 bg-blue-400" />
                  )}
                  <div className={cn(
                    "w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md border-2 border-white transition-all duration-500",
                    chosen && active
                      ? "bg-green-500 scale-125 shadow-green-300 shadow-lg"
                      : active && !chosen
                      ? "bg-blue-400 opacity-50"
                      : "bg-blue-500 hover:scale-110"
                  )}>
                    {tech.initials}
                  </div>
                  {chosen && (phase === "assigned" || phase === "arriving") && (
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full shadow border border-green-200 whitespace-nowrap">
                      {tech.name}
                    </div>
                  )}
                </div>
              );
            })}

            {/* User marker */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ left: "50%", top: "50%" }}
            >
              {(phase === "assigned" || phase === "arriving") && (
                <div className="absolute -inset-3 rounded-full bg-blue-400 animate-ping opacity-20" />
              )}
              <div className="w-5 h-5 bg-blue-600 rounded-full border-2 border-white shadow-lg ring-2 ring-blue-300" />
              <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full shadow border border-blue-100 whitespace-nowrap">
                You
              </div>
            </div>

            {/* Search progress chip */}
            {phase === "searching" && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-xl px-4 py-2.5 flex items-center gap-3 border border-blue-100 z-20 whitespace-nowrap">
                <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-gray-900">
                    {searchStep < 1 ? "Detecting your location…" :
                     searchStep < 2 ? "Scanning 6 nearby technicians…" :
                     "Selecting best match…"}
                  </p>
                  <p className="text-[10px] text-gray-400">AI dispatch active</p>
                </div>
              </div>
            )}

            <div className="absolute bottom-2 right-2 text-[8px] text-gray-400 bg-white/70 px-1.5 py-0.5 rounded">
              Demo simulation
            </div>
          </div>
        </div>

        {/* ── CONTROLS (2/5) ── */}
        <div className="lg:col-span-2 p-7 flex flex-col min-h-[300px]">

          {phase === "idle" && (
            <>
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Live Dispatch Demo</h3>
                <p className="text-sm text-gray-500">Pick a service and hit Request — watch AI assign the nearest technician.</p>
              </div>

              <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Select Service</p>
              <div className="space-y-2 mb-6">
                {SERVICES.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setService(s.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all border-2",
                      service === s.id
                        ? "bg-blue-50 border-blue-500 text-blue-700"
                        : "bg-gray-50 border-transparent text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    <span>{s.icon}</span>
                    {s.label}
                    {service === s.id && (
                      <svg className="ml-auto w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={handleRequest}
                className={cn(buttonVariants({ variant: "primary", size: "md" }), "w-full justify-center mt-auto")}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Request Help Now
              </button>
            </>
          )}

          {phase === "searching" && (
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-5">
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 rounded-full border-4 border-blue-100 border-t-blue-500 animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">AI Dispatch Running</p>
                <p className="text-sm text-gray-500">
                  {searchStep < 1 ? "Detecting location…" :
                   searchStep < 2 ? "Scanning 6 nearby techs…" :
                   "Selecting best match…"}
                </p>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div
                  className="bg-blue-500 h-1.5 rounded-full transition-all duration-700"
                  style={{ width: `${(searchStep + 1) * 33}%` }}
                />
              </div>
            </div>
          )}

          {(phase === "assigned" || phase === "arriving") && (
            <div className="flex-1 flex flex-col gap-4">
              <div className={cn(
                "p-4 rounded-2xl border",
                phase === "arriving" ? "bg-green-50 border-green-200" : "bg-blue-50 border-blue-200"
              )}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={cn(
                    "w-2 h-2 rounded-full animate-pulse",
                    phase === "arriving" ? "bg-green-500" : "bg-blue-500"
                  )} />
                  <span className="text-[11px] font-bold uppercase tracking-wide text-gray-500">
                    {phase === "arriving" ? "Technician Arrived" : "Technician Assigned"}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0",
                    phase === "arriving" ? "bg-green-500" : "bg-blue-500"
                  )}>
                    {SELECTED.initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{SELECTED.name}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {SELECTED.rating} · {SELECTED.vehicle}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                {[
                  { label: "ETA",        value: phase === "arriving" ? "Arrived ✓" : `${eta} min`, blue: true },
                  { label: "Service",    value: SERVICES.find(s => s.id === service)?.label ?? "" },
                  { label: "Match time", value: "1.8 sec" },
                  { label: "Status",     value: phase === "arriving" ? "Complete" : "En Route", green: true },
                ].map(row => (
                  <div key={row.label} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-xs text-gray-500">{row.label}</span>
                    <span className={cn(
                      "text-sm font-semibold",
                      row.green ? "text-green-600" :
                      row.blue  ? "text-blue-600 text-base" :
                      "text-gray-800"
                    )}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleReset}
                className="mt-auto w-full py-2.5 text-sm font-medium text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
              >
                ↺ Try Again
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
