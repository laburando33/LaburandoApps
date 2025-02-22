const { withExpo } = require("@expo/next-adapter")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "react-native",
    "react-native-web",
    "expo",
    "expo-modules-core",
    "expo-notifications",
    "@expo/vector-icons",
    "@chakra-ui/react",
    "@emotion/react",
    "@emotion/styled",
    "framer-motion",
  ],
  experimental: {
    forceSwcTransforms: true,
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web",
    }
    config.resolve.extensions = [".web.js", ".web.jsx", ".web.ts", ".web.tsx", ...config.resolve.extensions]
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    return config
  },
}

module.exports = withExpo(nextConfig)

