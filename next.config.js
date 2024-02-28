/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_URL: 'http://localhost:3000',
    NEXTAUTH_SECRET: 'd41d8cd98f00b204e9800998ecf8427e',
  },
}

module.exports = nextConfig
