import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ignoreBuildErrors: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.spoonacular.com",
      },
    ]
  }
};

export default nextConfig;
