var path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    app: ['./app/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'bundle'),
    publicPath: '/',
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          }, {
            loader: 'css-loader' // translates CSS into CommonJS
          }, {
            loader: 'sass-loader', // compiles Sass to CSS
            options: {
              includePaths: ['node_modules/foundation-sites/scss', 'node_modules/motion-ui/src']
            }
          }
        ]
      }
    ]
  }
};
