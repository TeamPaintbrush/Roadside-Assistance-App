"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Helper to determine link href based on current page
  const getLink = (hash: string) => {
    if (pathname === "/marketing") {
      return hash;
    }
    return `/marketing${hash}`;
  };

  const navLinks = [
    { name: "Features", href: getLink("#features") },
    { name: "Services", href: getLink("#services-offered") },
    { name: "Market Position", href: getLink("#competitive-analysis") },
    { name: "How It Works", href: getLink("#how-it-works") },
    { name: "Dispatch System", href: getLink("#dispatch") },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/marketing" className="flex-shrink-0">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 truncate">RoadAssist Pro</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Back to App
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {!isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 mt-4 border-t border-gray-100">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-md font-medium hover:bg-blue-700"
            >
              Back to App
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
