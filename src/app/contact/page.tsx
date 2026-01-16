import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">RoadAssist Pro</h1>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/marketing#features" className="text-gray-700 hover:text-blue-600">Features</Link>
              <Link href="/marketing#how-it-works" className="text-gray-700 hover:text-blue-600">How It Works</Link>
              <Link href="/marketing#dispatch" className="text-gray-700 hover:text-blue-600">Dispatch System</Link>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </nav>
            <Link
              href="/"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Back to App
            </Link>
          </div>
        </div>
      </header>

      {/* Contact Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 opacity-95"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              📞 Get In Touch • We're Here to Help
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Contact Our Team
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your roadside assistance operations?
              Let's discuss how RoadAssist Pro can revolutionize your service delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule a demo or contact our sales team to learn more about RoadAssist Pro
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Card 1 */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Email Us</h3>
                  <p className="text-gray-600 mb-2">Send us an email and we'll get back to you within 24 hours</p>
                  <div className="text-sm text-gray-500 mb-4">
                    <strong>Ross</strong> - Digital Marketer
                  </div>
                  <a
                    href="mailto:lross@paintbrushmarketing.net"
                    className="text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    lross@paintbrushmarketing.net
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Card 2 */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Call Us</h3>
                  <p className="text-gray-600 mb-2">Speak directly with our sales team for immediate assistance</p>
                  <div className="text-sm text-gray-500 mb-4">
                    <strong>Ross</strong> - Digital Marketer
                  </div>
                  <a
                    href="tel:813-399-4779"
                    className="text-lg font-semibold text-green-600 hover:text-green-700 transition-colors"
                  >
                    813-399-4779
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Schedule a personalized demo to see how RoadAssist Pro can transform your roadside assistance operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/coming-soon"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Schedule Demo
                </Link>
                <a
                  href="mailto:lross@paintbrushmarketing.net?subject=Contact Sales"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">RoadAssist Pro</h3>
              <p className="text-gray-400">
                Professional roadside assistance with cutting-edge technology.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Towing</li>
                <li>Battery Jump Start</li>
                <li>Tire Change</li>
                <li>Emergency Fuel</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>lross@paintbrushmarketing.net</li>
                <li>813-516-6801</li>
                <li>24/7 Emergency Line</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RoadAssist Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}