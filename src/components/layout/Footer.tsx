import Link from "next/link";

const services = [
  { name: "Battery Jumpstart", href: "/services/battery-jumpstart" },
  { name: "Fuel Delivery", href: "/services/fuel-delivery" },
  { name: "Car Lockout", href: "/services/car-lockout" },
  { name: "Flat Tire Change", href: "/services/flat-tire-change" },
  { name: "Towing Service", href: "/services/towing-service" },
  { name: "Emergency Diagnostics", href: "/services/emergency-diagnostics" },
];

const company = [
  { name: "About Us",     href: "/about"        },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Pricing",      href: "/pricing"      },
  { name: "Live Demo",    href: "/demo"         },
  { name: "Contact",      href: "/contact"      },
];

const legal = [
  { name: "Privacy Policy", href: "/legal/privacy-policy" },
  { name: "Terms of Service", href: "/legal/terms-of-service" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <span className="text-lg font-bold">
                RoadAssist <span className="text-blue-400">Pro</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Professional roadside assistance powered by AI dispatch technology. Available 24/7, nationwide.
            </p>
            <div className="flex gap-3">
              {/* Twitter/X */}
              <a href="#" aria-label="Twitter" className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.name}>
                  <Link href={s.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.name}>
                  <Link href={c.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@roadassistpro.com
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                1-800-ROAD-HELP
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                24/7 Emergency Line
              </li>
              <li className="pt-1">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Schedule a Demo
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} RoadAssist Pro. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legal.map((l) => (
              <Link key={l.name} href={l.href} className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
