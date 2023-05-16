const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.jpg'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        // loader: 'awesome-typescript-loader'  //使用此loader，react router會有問題
        loader: 'ts-loader'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // 小于 8KB 的图像将转换为 base64 格式
              name: 'images/[name].[contenthash].[ext]', // 输出文件名的格式
            },
          },
        ],
      },
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
//   optimization: {
//     runtimeChunk: 'single',
//   },
};