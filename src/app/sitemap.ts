import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://roadassistpro.com";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                     priority: 1.0 },
    { url: `${base}/services`,       priority: 0.9 },
    { url: `${base}/features`,       priority: 0.8 },
    { url: `${base}/how-it-works`,   priority: 0.8 },
    { url: `${base}/pricing`,        priority: 0.8 },
    { url: `${base}/about`,          priority: 0.7 },
    { url: `${base}/demo`,           priority: 0.7 },
    { url: `${base}/contact`,        priority: 0.7 },
  ].map(({ url, priority }) => ({
    url,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages];
}
