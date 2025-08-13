import path from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  transpilePackages: ['lucide-react'],
  // Turbopack configuration (moved from experimental as recommended)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  experimental: {
    // Performance optimizations
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-accordion',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-select',
      '@radix-ui/react-toast',
      '@radix-ui/react-sheet',
      '@radix-ui/react-slot',
      'recharts',
      '@supabase/supabase-js',
      'react-hook-form',
      '@hookform/resolvers',
      'zod',
      'clsx',
      'tailwind-merge',
      'class-variance-authority'
    ],
    scrollRestoration: true,
    webVitalsAttribution: ['CLS', 'LCP', 'INP', 'FCP', 'TTFB'],
    // Enhanced performance features
    optimisticClientCache: true,
  },
  // Enhanced webpack configuration for better performance
  webpack: (config, { dev, isServer, webpack }) => {
    // Optimize bundle splitting for better caching
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        chunks: 'all',
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          vendor: {
            test: /[\/]node_modules[\/]/,
            name: 'vendor',
            priority: 10,
            reuseExistingChunk: true,
            chunks: 'all',
          },
          common: {
            name: 'common',
            minChunks: 2,
            priority: 5,
            reuseExistingChunk: true,
            chunks: 'all',
          },
          lucide: {
            test: /[\/]node_modules[\/]lucide-react[\/]/,
            name: 'lucide',
            priority: 15,
            reuseExistingChunk: true,
            chunks: 'all',
          },
        },
      };
    }

    // Optimize module resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(process.cwd(), './'),
    };

    return config;
  },
  serverExternalPackages: [],
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: process.env.NODE_ENV === 'development',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig
