import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
        search: "",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
        search: "",
        port: "",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/**",
        search: "",
        port: "",
      },
    ],
  },
};

export default nextConfig;
