/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['file.alinhadat.vn','alinhadat.sgp1.vultrobjects.com','gflloduvpvueaqfyjsos.supabase.co'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'alinhadat.vn',
                pathname: '**',
            },
        ],
    },
    publicRuntimeConfig: {
        apiUrl: 'https://son-minh-land.vercel.app/',
      },
}

module.exports = nextConfig
