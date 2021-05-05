const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = {
  plugins: [
    new BrotliPlugin({ //brotli plugin
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    }), 
    new BundleAnalyzerPlugin()
  ]
}
