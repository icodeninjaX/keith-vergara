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

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
