/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    LAUNCHDARKLY_SDK_CLIENT_SIDE_ID: process.env.LAUNCHDARKLY_SDK_CLIENT_SIDE_ID,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
