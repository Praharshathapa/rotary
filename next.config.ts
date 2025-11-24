import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "build",
  output: 'export',
  generateBuildId: () => {
    return `${Date.now()}`;
  },
  images: {
    unoptimized: true,
  },
    basePath: '/rotary',
  assetPrefix: '/rotary'
};

export default nextConfig;
