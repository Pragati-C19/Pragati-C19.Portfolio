// next config

/** @type {import('next').NextConfig} */

const nextConfig = {
  productionBrowserSourceMaps: true,
  output: 'export',
  images: {
    unoptimized: true, // Required if you use Next.js Image component for static export
  },
};

export default nextConfig;
