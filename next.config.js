/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // Enables the styled-components SWC transform
  styledComponents: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
