const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: {
    'index': './src/index.js',
    'loader': './src/usage/loader.js',
    'calendar': './src/weird/calendar.js',
    'lunar': './src/weird/lunar.js',
    'container': './src/public/container.js',
  },
  output: {
    filename: '[name].js',
    library: 'sageUtils', // 指定库的全局变量
    libraryTarget: 'umd', // 支持库的引入方式
    libraryExport: 'default' // 默认道出
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ // webpack4之后，mode=production时默认开启压缩
        include: /\.min\.js$/, // 匹配min.js结尾的文件进行压缩
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}