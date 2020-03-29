const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MpPlugin = require('mp-webpack-plugin')

var isOptimize = true

module.exports = {
  mode: 'production',

  entry: {
    index: path.resolve(__dirname, '../src/index/main.mp.js')
  },

  output: {
    path: path.resolve(__dirname, '../dist/mp/common'),
    filename: '[name].js',
    library: 'createApp',
    libraryExport: 'default',
    libraryTarget: 'window'
  },

  target: 'web',

  optimization: {
    runtimeChunk: false,
    splitChunks: {
      chunks: 'all',
      minSize: 1000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 100,
      maxInitialRequests: 100,
      automaticNameDelimiter: "~",
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    minimizer: isOptimize ? [
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.(css|wxss)$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', {
            discardComments: {
              removeAll: true,
            },
            minifySelectors: false
          }]
        },
        canPrint: false
      }),
  
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        parallel: true
      })
    ] : [],
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.vue', '.json']
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].wxss'
    }),
    new VueLoaderPlugin(),
    new MpPlugin(require('./miniprogram.config.js'))
  ]
}