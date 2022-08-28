const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StatoscopeWebpackPlugin = require('@statoscope/webpack-plugin').default;
const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'production',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new StatoscopeWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 
          {
            loader:'css-loader',
            options: {
                importLoaders: 1
            }
          },
        ],
        sideEffects: true,
      },
      {
        test: /\.(svg|avif|woff2)$/,
        type: 'asset/resource',
      }
    ]
  },
};