const path = require('path');

module.exports = {
  entry: './js/src/index.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, './js/dist'),
    filename: 'bundle.js'
  }
};
