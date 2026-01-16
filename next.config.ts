import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/Roadside-Assistance-App',
  assetPrefix: '/Roadside-Assistance-App/',
};

export default nextConfig;
