/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/f3-nrir.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/f3-nrir.github.io/' : '',
}

export default nextConfig
