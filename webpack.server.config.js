const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './server/index.tsx',
  output: {
    path: path.resolve(__dirname),
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ["env", "react"],
              plugins: [
                "transform-object-rest-spread",
                "transform-decorators-legacy",
                "syntax-dynamic-import",
                "dynamic-import-node",
                "react-loadable/babel", ["transform-runtime", {
                  "helpers": false,
                  "polyfill": false,
                  "regenerator": true,
                  "moduleName": "babel-runtime"
                }]
              ]
            }
          },
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.server.json"
            }
          }
        ]
      },
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
  externals: [webpackNodeExternals()],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx"]
  }
};