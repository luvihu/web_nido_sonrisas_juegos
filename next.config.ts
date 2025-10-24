import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    formats: ['image/webp', 'image/avif'],
    qualities: [90, 75, 50],
    // Optimización para producción
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Otras optimizaciones
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
