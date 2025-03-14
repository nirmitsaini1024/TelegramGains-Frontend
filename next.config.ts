/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Disables ESLint during build
  },
};

module.exports = nextConfig;
