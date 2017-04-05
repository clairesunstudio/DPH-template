var webpack = require('webpack')

module.exports = {
  entry: './index.js',
  devServer: {
      inline:true,
      port: 7000
    },
  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: '/'
  },
  debug: true,
  devtool: "#eval-source-map",
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      // { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      // { test: /\.json$/, loader: 'json-loader' }
    ]
  }
}
