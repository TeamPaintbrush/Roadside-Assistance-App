import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://roadassistpro.com"),
  title: {
    default: "RoadAssist Pro — AI-Powered Roadside Assistance",
    template: "%s | RoadAssist Pro",
  },
  description:
    "Professional roadside assistance with AI-powered dispatch, real-time GPS tracking, and 15-minute average response times. Available 24/7 nationwide.",
  keywords: [
    "roadside assistance",
    "breakdown service",
    "towing service",
    "battery jumpstart",
    "emergency roadside help",
    "AI dispatch",
    "real-time tracking",
  ],
  openGraph: {
    type: "website",
    siteName: "RoadAssist Pro",
    title: "RoadAssist Pro — AI-Powered Roadside Assistance",
    description:
      "Professional roadside assistance with AI-powered dispatch, real-time GPS tracking, and 15-minute average response times.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
