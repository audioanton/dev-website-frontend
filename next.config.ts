import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/mail',
        destination: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080/mail",
      },
    ]
  },
};


export default nextConfig;
