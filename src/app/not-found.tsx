import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { buttonVariants } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-32 px-4">
        <div className="text-center max-w-lg">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <div className="text-8xl font-black text-gray-100 leading-none mb-4">404</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-500 text-lg mb-8">
            Looks like this road doesn't go anywhere. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className={buttonVariants({ variant: "primary", size: "md" })}>
              Go Home
            </Link>
            <Link href="/services" className={buttonVariants({ variant: "outline", size: "md" })}>
              Browse Services
            </Link>
            <Link href="/contact" className={buttonVariants({ variant: "ghost", size: "md" })}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
