import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  images:{
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
