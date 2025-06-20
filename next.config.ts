import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "dummyimage.com",
        pathname: "**"
      }
    ],
  },
};

export default nextConfig;
