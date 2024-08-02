const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        type: 'json'
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json']
  },
};
