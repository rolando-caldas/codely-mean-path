const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: { babelrc: true },
        exclude: /node_modules/
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { url: false, sourceMap: true }
          }
        ]
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/public/index.html' }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ],
  devServer: {
    contentBase: './src/public'
  }
}
