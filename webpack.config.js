module.exports = [
  {
    name: 'client',
    entry: './client/index.js',
    output: {
      path: './public',
      filename: 'client-bundle.js',
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        }
      ]
    }
  }
]
