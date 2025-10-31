import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.creativewebo.com',
        port: '',
        pathname: '/assets/images/**',
      },
    ],
  },
};

export default nextConfig;
