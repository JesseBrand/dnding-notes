const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      buffer: false
    }
    return config
  },
  staticPageGenerationTimeout: 300
})
