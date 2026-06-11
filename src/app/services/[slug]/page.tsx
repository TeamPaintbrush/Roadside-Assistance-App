import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { buttonVariants } from "@/components/ui/Button";
import { services, getService } from "@/lib/services";
import { JsonLd } from "@/components/JsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.fullDesc,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => service.relatedSlugs.includes(s.slug));

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.fullDesc,
    provider: {
      "@type": "Organization",
      name: "RoadAssist Pro",
      url: "https://roadassistpro.com",
    },
    url: `https://roadassistpro.com/services/${service.slug}`,
    areaServed: { "@type": "Country", name: "United States" },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={serviceJsonLd} />
      <Navbar />

      {/* Hero */}
      <section className={`relative pt-32 pb-20 bg-gradient-to-br ${service.gradient} overflow-hidden`}>
        <Container className="relative">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className={`w-20 h-20 bg-gradient-to-br ${service.iconGradient} rounded-3xl flex items-center justify-center flex-shrink-0 shadow-xl`}>
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.iconPath} />
              </svg>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">{service.title}</h1>
              <p className="text-xl text-gray-600">{service.shortDesc}</p>
              <div className="flex flex-wrap gap-4 mt-4">
                <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {service.responseTime}
                </span>
                <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {service.priceFrom}
                </span>
                <span className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {service.availability}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: detail */}
            <div className="lg:col-span-2 space-y-12">
              {/* Full description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Service</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{service.fullDesc}</p>
              </div>

              {/* What's included */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
                <ul className="space-y-3">
                  {service.included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className={`w-6 h-6 bg-gradient-to-br ${service.iconGradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How it works */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
                <div className="space-y-6">
                  {service.steps.map((step, i) => (
                    <div key={step.title} className="flex gap-5">
                      <div className={`w-10 h-10 bg-gradient-to-br ${service.iconGradient} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md`}>
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{step.title}</h3>
                        <p className="text-gray-600 mt-1">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: CTA card */}
            <div className="lg:col-span-1">
              <div className={`sticky top-24 bg-gradient-to-br ${service.gradient} p-8 rounded-2xl border border-gray-100 shadow-lg`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Request This Service</h3>
                <p className="text-gray-600 text-sm mb-6">
                  A certified technician can be with you in as little as 15 minutes.
                </p>
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Response Time</span>
                    <span className="font-semibold text-green-600">{service.responseTime}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Starting Price</span>
                    <span className="font-semibold text-gray-900">{service.priceFrom}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Availability</span>
                    <span className="font-semibold text-gray-900">{service.availability}</span>
                  </div>
                </div>
                <Link href="/contact" className={`${buttonVariants({ variant: "primary", size: "md" })} w-full justify-center`}>
                  Get Help Now
                </Link>
                <p className="text-center text-xs text-gray-500 mt-3">No sign-up required for emergency service</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Services */}
      {related.length > 0 && (
        <Section className="bg-gray-50">
          <Container>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className={`group bg-gradient-to-br ${s.gradient} p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block`}>
                  <div className={`w-12 h-12 bg-gradient-to-br ${s.iconGradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.iconPath} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.shortDesc}</p>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Footer />
    </div>
  );
}
