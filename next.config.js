/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  experimental: {
    images: {
      unoptimized: true
    }
  },
  images: {
    domains: [
      'images.unsplash.com',
      'i.ytimg.com'
    ]
  }
}
