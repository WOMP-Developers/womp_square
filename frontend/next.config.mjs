/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.evetech.net'
      },
      {
        protocol: 'https',
        hostname: 'image.eveonline.com'
      }
    ]
  }
}

export default nextConfig
