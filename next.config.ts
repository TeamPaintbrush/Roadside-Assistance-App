import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Static export removed — site now targets Vercel (enables API routes, image optimization, ISR)
  // To deploy: connect repo to Vercel dashboard and set env vars
};

export default nextConfig;
