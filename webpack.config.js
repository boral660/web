const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, "public"),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  watch: true,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ["transform-class-properties"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', {
          loader: 'css-loader',
           options: { modules: true }
        }]
      }
    ]
  }
};