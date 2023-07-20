/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  webpack(config, options) {
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
