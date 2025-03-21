/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    domains: ['i.imgur.com'],
    unoptimized: true
  },
}

module.exports = nextConfig 