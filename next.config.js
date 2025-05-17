/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require('next-pwa/cache');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com', 'firebasestorage.googleapis.com', 'github.com', 'camo.githubusercontent.com', 'media2.dev.to'],
  },
}

module.exports = withPWA({
  ...nextConfig,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
    runtimeCaching,
  }
})
