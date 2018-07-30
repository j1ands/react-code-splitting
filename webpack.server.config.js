const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './server/index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ["env", "react"],
            plugins: [
              "transform-object-rest-spread",
              "transform-decorators-legacy",
              "syntax-dynamic-import",
              "dynamic-import-node",
              "react-loadable/babel",
              ["transform-runtime", {
                "helpers": false,
                "polyfill": false,
                "regenerator": true,
                "moduleName": "babel-runtime"
              }]
            ]
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  externals: [webpackNodeExternals()]
};