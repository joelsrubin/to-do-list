const path = require('path');

module.exports = {
  entry: './client/index.js',
  mode: "development",
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public'),
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  }
}