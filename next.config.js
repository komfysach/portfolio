/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['getkomfy.net'],
  },
}

module.exports = nextConfig
