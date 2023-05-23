/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    swcMinify: true,
    optimizeFonts: true,
    images:{
        remotePatterns : [
          {
            protocol : "https",
            hostname: "bayut-production.s3.eu-central-1.amazonaws.com"
          }
        ],
        minimumCacheTTL: 1500000,
    }
}

module.exports = nextConfig
