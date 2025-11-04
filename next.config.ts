import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Optimize images for production
  images: {
    unoptimized: false,
    remotePatterns: [],
  },

  // Set the workspace root to silence warning
  outputFileTracingRoot: path.join(__dirname),

  // Optimize for production
  reactStrictMode: true,
};

export default nextConfig;
