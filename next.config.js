/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  swcMinify: true,
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig
