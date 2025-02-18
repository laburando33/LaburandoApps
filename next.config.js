const { withExpo } = require("@expo/next-adapter")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["expo", "expo-modules-core", "expo-notifications", "react-native", "react-native-web"],
  experimental: {
    forceSwcTransforms: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "react-native$": "react-native-web",
      }
    }
    config.resolve.extensions = [".web.js", ".web.jsx", ".web.ts", ".web.tsx", ...config.resolve.extensions]
    return config
  },
}

module.exports = withExpo(nextConfig)

