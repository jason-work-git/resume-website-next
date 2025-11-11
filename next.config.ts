import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    minimumCacheTTL: 31536000,
    qualities: [25, 50, 75, 100],
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      // {protocol: 'https', hostname: 'cloud.aulianza.com'},
    ],
  },
};

export default nextConfig;
