import { withExpo } from '@expo/next-adapter';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    }
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      '.ios.js',
      '.android.js',
      '.js',
      '.ts',
      '.tsx',
      '.json',
      ...config.resolve.extensions,
    ]
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules(?!\/(@expo\/vector-icons|react-native|@react-native-community|@react-navigation|expo-modules-core))/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript', 'babel-preset-expo'],
            plugins: [
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              ['@babel/plugin-proposal-private-methods', { loose: true }],
              ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
              'react-native-web',
            ],
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config
  },
}

export default withExpo(nextConfig);