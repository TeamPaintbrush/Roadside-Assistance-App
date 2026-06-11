"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "customer",  label: "Customer App"       },
  { id: "tech",      label: "Technician App"      },
  { id: "dispatch",  label: "Dispatch Dashboard"  },
  { id: "analytics", label: "Analytics"           },
];

function CustomerMockup() {
  return (
    <div className="flex justify-center">
      <div className="w-64 bg-gray-900 rounded-3xl p-2 shadow-2xl">
        <div className="bg-white rounded-2xl overflow-hidden">
          {/* Status bar */}
          <div className="bg-blue-600 px-4 pt-4 pb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white text-xs font-bold">9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-2 bg-white/60 rounded-sm" />
                <div className="w-1 h-2 bg-white/60 rounded-sm" />
              </div>
            </div>
            <p className="text-blue-100 text-xs mb-1">Good afternoon, Alex</p>
            <p className="text-white font-bold text-sm">What do you need?</p>
          </div>
          {/* Service buttons */}
          <div className="p-3 grid grid-cols-2 gap-2">
            {[
              { icon: "⚡", label: "Battery",  bg: "bg-yellow-50", text: "text-yellow-700" },
              { icon: "⛽", label: "Fuel",     bg: "bg-blue-50",   text: "text-blue-700"   },
              { icon: "🔑", label: "Lockout",  bg: "bg-green-50",  text: "text-green-700"  },
              { icon: "🔧", label: "Tire",     bg: "bg-purple-50", text: "text-purple-700" },
              { icon: "🚗", label: "Tow",      bg: "bg-red-50",    text: "text-red-700"    },
              { icon: "🔍", label: "Diagnose", bg: "bg-gray-50",   text: "text-gray-700"   },
            ].map(s => (
              <button key={s.label} className={cn("flex flex-col items-center gap-1 p-2.5 rounded-xl text-xs font-semibold", s.bg, s.text)}>
                <span className="text-base">{s.icon}</span>
                {s.label}
              </button>
            ))}
          </div>
          {/* Emergency button */}
          <div className="px-3 pb-4">
            <div className="w-full bg-red-500 text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Emergency — One Tap Help
            </div>
          </div>
          {/* Recent */}
          <div className="px-3 pb-4 border-t border-gray-100 pt-3">
            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-2">Recent</p>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-7 h-7 bg-yellow-100 rounded-full flex items-center justify-center text-sm">⚡</div>
              <div>
                <p className="font-semibold text-gray-800">Battery Jump</p>
                <p className="text-gray-400">Carlos M. · 4.9★ · Jun 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TechMockup() {
  return (
    <div className="flex justify-center">
      <div className="w-64 bg-gray-900 rounded-3xl p-2 shadow-2xl">
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="bg-green-600 px-4 pt-4 pb-5">
            <div className="flex justify-between items-center mb-3">
              <span className="text-white text-xs font-bold">9:41</span>
              <span className="text-green-200 text-[10px] font-semibold">● Online</span>
            </div>
            <p className="text-white font-bold text-sm">Hey, Carlos 👋</p>
            <p className="text-green-100 text-xs">3 jobs today · $284 earned</p>
          </div>
          <div className="p-3 space-y-2">
            {/* Active job */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-bold text-green-700 uppercase">Active Job</span>
                <span className="text-[10px] bg-green-500 text-white px-1.5 py-0.5 rounded-full">En Route</span>
              </div>
              <p className="text-xs font-semibold text-gray-900">Battery Jumpstart</p>
              <p className="text-[10px] text-gray-500">1420 Tampa St · 4 min away</p>
              <div className="mt-2 flex gap-1.5">
                <div className="flex-1 bg-green-500 text-white text-[10px] font-bold py-1.5 rounded-lg text-center">Navigate</div>
                <div className="flex-1 border border-gray-200 text-gray-600 text-[10px] font-bold py-1.5 rounded-lg text-center">Call</div>
              </div>
            </div>
            {/* Pending */}
            <div className="border border-gray-200 rounded-xl p-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-semibold text-gray-500 uppercase">Upcoming</span>
                <span className="text-[10px] text-gray-400">2:30 PM</span>
              </div>
              <p className="text-xs font-semibold text-gray-900">Flat Tire Change</p>
              <p className="text-[10px] text-gray-500">820 Nebraska Ave</p>
            </div>
            {/* Earnings mini */}
            <div className="bg-gray-50 rounded-xl p-3 flex justify-between items-center">
              <div>
                <p className="text-[10px] text-gray-500">This week</p>
                <p className="text-sm font-bold text-gray-900">$1,240</p>
              </div>
              <div className="flex gap-0.5 items-end">
                {[40, 60, 35, 80, 55, 90, 45].map((h, i) => (
                  <div key={i} className="w-2 bg-green-400 rounded-sm" style={{ height: `${h * 0.4}px` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DispatchMockup() {
  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl max-w-xl mx-auto">
      {/* Toolbar */}
      <div className="bg-gray-800 px-4 py-2 flex items-center gap-3 border-b border-gray-700">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-gray-400 text-xs font-medium">RoadAssist Pro — Dispatch Console</span>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-green-400 text-[10px]">Live</span>
        </div>
      </div>
      <div className="flex h-64">
        {/* Map */}
        <div className="flex-1 bg-[#edf1f7] relative overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 70">
            <rect width="100" height="70" fill="#edf1f7" />
            <rect x="0" y="33" width="100" height="2" fill="#c8d4e4" />
            <rect x="48" y="0" width="2" height="70" fill="#c8d4e4" />
            <rect x="0" y="17" width="100" height="1.2" fill="#d2dcea" />
            <rect x="0" y="50" width="100" height="1.2" fill="#d2dcea" />
            <rect x="24" y="0" width="1.2" height="70" fill="#d2dcea" />
            <rect x="74" y="0" width="1.2" height="70" fill="#d2dcea" />
          </svg>
          {/* Job pins */}
          {[
            { x: "25%", y: "35%", color: "bg-green-500", label: "A" },
            { x: "60%", y: "20%", color: "bg-yellow-500", label: "B" },
            { x: "75%", y: "60%", color: "bg-blue-500",  label: "C" },
          ].map(pin => (
            <div key={pin.label} className={cn("absolute w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-md border border-white", pin.color)}
              style={{ left: pin.x, top: pin.y, transform: "translate(-50%,-50%)" }}>
              {pin.label}
            </div>
          ))}
          <div className="absolute bottom-1 right-1 text-[8px] text-gray-400 bg-white/70 px-1 rounded">Tampa, FL</div>
        </div>
        {/* Queue */}
        <div className="w-44 bg-gray-900 border-l border-gray-700 p-2.5 space-y-2">
          <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Active Jobs (3)</p>
          {[
            { label: "A", service: "Battery", eta: "4m", color: "bg-green-500", status: "En Route" },
            { label: "B", service: "Fuel",    eta: "9m", color: "bg-yellow-500",status: "Dispatch" },
            { label: "C", service: "Towing",  eta: "12m",color: "bg-blue-500",  status: "Pending"  },
          ].map(job => (
            <div key={job.label} className="bg-gray-800 rounded-lg p-2 border border-gray-700">
              <div className="flex items-center gap-1.5 mb-1">
                <div className={cn("w-4 h-4 rounded-full text-white text-[9px] font-bold flex items-center justify-center flex-shrink-0", job.color)}>
                  {job.label}
                </div>
                <span className="text-white text-[10px] font-semibold">{job.service}</span>
                <span className="ml-auto text-gray-400 text-[9px]">{job.eta}</span>
              </div>
              <span className="text-[9px] text-gray-400">{job.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnalyticsMockup() {
  const weeks = [
    { day: "Mon", pct: 55 }, { day: "Tue", pct: 72 }, { day: "Wed", pct: 88 },
    { day: "Thu", pct: 65 }, { day: "Fri", pct: 93 }, { day: "Sat", pct: 80 }, { day: "Sun", pct: 47 },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-xl mx-auto">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
        <p className="text-white font-bold">Weekly Overview</p>
        <p className="text-blue-200 text-xs">June 2 – June 8, 2026</p>
      </div>
      <div className="p-5">
        {/* Stat row */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { label: "Total Jobs", value: "284", delta: "+12%", up: true },
            { label: "Avg ETA",    value: "14m",  delta: "-2m",  up: true },
            { label: "Rating",     value: "4.89", delta: "+0.1", up: true },
          ].map(s => (
            <div key={s.label} className="bg-gray-50 rounded-xl p-3">
              <p className="text-xs text-gray-500 mb-1">{s.label}</p>
              <p className="text-xl font-black text-gray-900">{s.value}</p>
              <p className={cn("text-xs font-semibold", s.up ? "text-green-600" : "text-red-500")}>{s.delta}</p>
            </div>
          ))}
        </div>
        {/* Bar chart */}
        <p className="text-xs text-gray-500 font-semibold mb-3">Jobs per Day</p>
        <div className="flex items-end gap-2 h-24">
          {weeks.map(w => (
            <div key={w.day} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full bg-blue-500 rounded-t-md transition-all"
                style={{ height: `${w.pct}%` }}
              />
              <span className="text-[9px] text-gray-400">{w.day}</span>
            </div>
          ))}
        </div>
        {/* Service breakdown */}
        <div className="mt-5">
          <p className="text-xs text-gray-500 font-semibold mb-3">By Service</p>
          {[
            { label: "Battery Jumpstart", pct: 34, color: "bg-yellow-400" },
            { label: "Flat Tire",         pct: 26, color: "bg-purple-400" },
            { label: "Towing",            pct: 21, color: "bg-red-400"    },
            { label: "Fuel Delivery",     pct: 12, color: "bg-blue-400"   },
            { label: "Other",             pct:  7, color: "bg-gray-300"   },
          ].map(s => (
            <div key={s.label} className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] text-gray-600 w-32 flex-shrink-0">{s.label}</span>
              <div className="flex-1 bg-gray-100 rounded-full h-2">
                <div className={cn("h-2 rounded-full", s.color)} style={{ width: `${s.pct}%` }} />
              </div>
              <span className="text-[11px] text-gray-500 w-6 text-right">{s.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PlatformTabs() {
  const [active, setActive] = useState("customer");

  return (
    <div>
      {/* Tab bar */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-semibold transition-all",
              active === tab.id
                ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div>
        {active === "customer"  && <CustomerMockup  />}
        {active === "tech"      && <TechMockup      />}
        {active === "dispatch"  && <DispatchMockup  />}
        {active === "analytics" && <AnalyticsMockup />}
      </div>
    </div>
  );
}
