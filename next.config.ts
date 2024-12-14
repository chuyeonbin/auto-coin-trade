/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: false,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    staleTimes: {
      dynamic: 0,
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
