import stylexPlugin from '@stylexjs/nextjs-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  transpilePackages: [
    'solito',
    'react-native-web',
    'expo-linking',
    'expo-constants',
    'expo-modules-core',
    'react-native-safe-area-context',
    'react-native-reanimated',
    'react-native-gesture-handler',
  ],
};

export default stylexPlugin({
  rootDir: import.meta.url,
})(nextConfig);
