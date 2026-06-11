export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  gradient: string;
  iconGradient: string;
  iconPath: string;
  included: string[];
  steps: { title: string; desc: string }[];
  responseTime: string;
  priceFrom: string;
  availability: string;
  relatedSlugs: string[];
}

export const services: Service[] = [
  {
    slug: "battery-jumpstart",
    title: "Battery Jumpstart",
    shortDesc: "Professional roadside battery jump service",
    fullDesc:
      "Dead battery? Our certified technicians arrive with commercial-grade portable jump starters to get you back on the road fast. We test your battery and alternator on-site so you know exactly what condition your vehicle is in.",
    gradient: "from-yellow-50 to-orange-50",
    iconGradient: "from-yellow-500 to-orange-500",
    iconPath:
      "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    included: [
      "On-site battery voltage test",
      "Professional jump start with commercial-grade equipment",
      "Alternator output check",
      "Battery health report",
      "Recommendation for replacement if needed",
    ],
    steps: [
      { title: "Request via App or Call", desc: "Select Battery Jumpstart and confirm your GPS location" },
      { title: "Technician Dispatched", desc: "The nearest certified technician is assigned and en route within minutes" },
      { title: "Jump & Diagnose", desc: "Your vehicle is jumped and battery health is tested on the spot" },
    ],
    responseTime: "Avg 15 min",
    priceFrom: "From $49",
    availability: "24/7 Nationwide",
    relatedSlugs: ["emergency-diagnostics", "fuel-delivery"],
  },
  {
    slug: "fuel-delivery",
    title: "Fuel Delivery",
    shortDesc: "Emergency fuel delivered straight to your location",
    fullDesc:
      "Running on empty? We deliver enough fuel to get you to the nearest gas station. No need to leave your vehicle or call a tow truck. Our team brings petrol or diesel directly to wherever you're stranded.",
    gradient: "from-blue-50 to-cyan-50",
    iconGradient: "from-blue-500 to-cyan-500",
    iconPath:
      "M3 10h2a1 1 0 000-2H3a1 1 0 000 2zm0 4h2a1 1 0 000-2H3a1 1 0 000 2zm14-8l-1-1H8L7 6v12l1 1h9l1-1V6zM9 7h6v10H9V7z",
    included: [
      "Up to 3 gallons of fuel delivered (petrol or diesel)",
      "Safe roadside fuel transfer",
      "Vehicle restart assistance",
      "Nearest gas station navigation provided",
    ],
    steps: [
      { title: "Specify Fuel Type", desc: "Select petrol or diesel and confirm your location in the app" },
      { title: "Fuel on Its Way", desc: "A technician loads the correct fuel and heads to you immediately" },
      { title: "Topped Up & Rolling", desc: "Enough fuel to reach the nearest station — you're back on the road" },
    ],
    responseTime: "Avg 20 min",
    priceFrom: "From $59",
    availability: "24/7 Nationwide",
    relatedSlugs: ["battery-jumpstart", "emergency-diagnostics"],
  },
  {
    slug: "lockout-assistance",
    title: "Car Lockout Assistance",
    shortDesc: "Professional unlocking without damaging your vehicle",
    fullDesc:
      "Locked out? Our certified locksmiths use specialized tools and techniques to safely unlock your vehicle without causing any damage to your car's locks, windows, or paint. Available for all makes and models.",
    gradient: "from-green-50 to-emerald-50",
    iconGradient: "from-green-500 to-emerald-500",
    iconPath:
      "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
    included: [
      "Professional lockout service for all vehicle makes and models",
      "Damage-free entry techniques",
      "Slim-jim and air wedge tools",
      "Key-in-ignition assistance",
      "Locksmith referral if replacement keys needed",
    ],
    steps: [
      { title: "Confirm Your Vehicle", desc: "Provide make, model, and year so the technician brings the right tools" },
      { title: "Certified Locksmith En Route", desc: "A licensed automotive locksmith is dispatched to your location" },
      { title: "Safe Entry, Zero Damage", desc: "Your vehicle is opened professionally without any marks or damage" },
    ],
    responseTime: "Avg 18 min",
    priceFrom: "From $65",
    availability: "24/7 Nationwide",
    relatedSlugs: ["battery-jumpstart", "emergency-diagnostics"],
  },
  {
    slug: "flat-tire-change",
    title: "Flat Tire Change",
    shortDesc: "Roadside spare tire installation or puncture repair",
    fullDesc:
      "Flat tire stranding you? Our technicians handle everything from spare tire installation to on-site puncture repair. We carry standard tools for all vehicle types and can assess whether your tire can be safely patched or needs replacement.",
    gradient: "from-purple-50 to-pink-50",
    iconGradient: "from-purple-500 to-pink-500",
    iconPath:
      "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4",
    included: [
      "Spare tire mounting and torque check",
      "Flat tire inspection and assessment",
      "Puncture repair when possible",
      "Tire pressure check on all four tires",
      "Nearest tire shop recommendation if replacement needed",
    ],
    steps: [
      { title: "Confirm Tire Location", desc: "Note which tire is flat and whether you have a spare in the app" },
      { title: "Technician Arrives Equipped", desc: "Our tech brings jack, torque wrench, and repair kit" },
      { title: "Tire Changed & Checked", desc: "Spare installed, torqued properly, and all four tires pressure-checked" },
    ],
    responseTime: "Avg 20 min",
    priceFrom: "From $55",
    availability: "24/7 Nationwide",
    relatedSlugs: ["towing", "emergency-diagnostics"],
  },
  {
    slug: "towing",
    title: "Towing Service",
    shortDesc: "24/7 flatbed and tow truck service nationwide",
    fullDesc:
      "When your vehicle can't be fixed on the roadside, our towing network provides fast, safe transport to your preferred repair facility or any location. We offer flatbed towing for all vehicle types including luxury, AWD, and low-clearance vehicles.",
    gradient: "from-red-50 to-rose-50",
    iconGradient: "from-red-500 to-rose-500",
    iconPath:
      "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    included: [
      "Flatbed towing for all vehicle types",
      "Up to 25 miles included (extended towing available)",
      "Secure vehicle loading and tie-down",
      "Real-time tow truck tracking",
      "Drop-off at any licensed repair facility or address",
    ],
    steps: [
      { title: "Confirm Destination", desc: "Tell us where you'd like your vehicle taken — nearest shop or your home" },
      { title: "Flatbed Truck Dispatched", desc: "The nearest available flatbed is assigned and on its way" },
      { title: "Safe Transport, End-to-End", desc: "Vehicle is loaded securely and delivered to your chosen destination" },
    ],
    responseTime: "Avg 30 min",
    priceFrom: "From $89",
    availability: "24/7 Nationwide",
    relatedSlugs: ["flat-tire-change", "emergency-diagnostics"],
  },
  {
    slug: "emergency-diagnostics",
    title: "Emergency Diagnostics",
    shortDesc: "On-site vehicle diagnostics with advanced tools",
    fullDesc:
      "Check engine light on? Strange noise? Our mobile diagnostic technicians bring professional OBD-II scanners and diagnostic equipment to your location. Get a clear picture of what's wrong with your vehicle before committing to a repair shop.",
    gradient: "from-indigo-50 to-purple-50",
    iconGradient: "from-indigo-500 to-purple-500",
    iconPath:
      "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    included: [
      "OBD-II diagnostic scan (reads all fault codes)",
      "Live data analysis (sensor readings, fuel trims, misfires)",
      "Clear explanation of results in plain English",
      "Written diagnostic report via app",
      "Repair priority recommendation (urgent vs. can wait)",
    ],
    steps: [
      { title: "Describe the Symptom", desc: "Tell us what you're experiencing — warning light, noise, or behavior" },
      { title: "Mobile Diagnostic Unit Arrives", desc: "A trained technician with professional scan tools is dispatched" },
      { title: "Full Report Delivered", desc: "You receive a clear diagnosis and recommended next steps on-site" },
    ],
    responseTime: "Avg 22 min",
    priceFrom: "From $79",
    availability: "24/7 Nationwide",
    relatedSlugs: ["battery-jumpstart", "towing"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
