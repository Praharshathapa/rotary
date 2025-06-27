import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "build",
  generateBuildId: () => {
    return `${Date.now()}`;
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
