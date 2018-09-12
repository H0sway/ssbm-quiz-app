// Import dependencies
const path = require('path');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');

const config = {
  entry: './quiz_app/frontend/src/index.js',
    output: {
        path: path.resolve(__dirname,'quiz_app/frontend/static/frontend'),
        filename: 'bundle.js',
    },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s(a|c)ss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: 'css-loader!sass-loader',
          })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({filename: 'style.css'})
  ]
};

module.exports = config;
