import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/contact-form",
        destination:
          process.env.NEXT_PUBLIC_BACKEND_URL ||
          "http://localhost:8881/contact-form",
      },
    ];
  },
};

export default nextConfig;
