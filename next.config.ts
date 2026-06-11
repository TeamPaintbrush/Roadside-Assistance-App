import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  basePath: "/Roadside-Assistance-App",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
