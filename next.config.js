module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack(config) {
    config.resolve.fallback = { fs: false };
    config.module.rules.push({
      
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};