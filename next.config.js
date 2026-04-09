/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io', 'e00-elmundo.uecdn.es'],
  },
}

module.exports = nextConfig
