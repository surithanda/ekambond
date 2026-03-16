import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  images:{
        unoptimized: true,
        domains: ["placehold.co", "randomuser.me"],
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ]
  }
};

export default nextConfig;
