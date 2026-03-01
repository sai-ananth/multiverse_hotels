import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/multiverse_hotels",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
