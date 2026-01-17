import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Only apply basePath for production builds (GitHub Pages)
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/Roadside-Assistance-App',
    assetPrefix: '/Roadside-Assistance-App/',
  }),
};

export default nextConfig;
