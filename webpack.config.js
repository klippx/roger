module.exports = {
   entry: './lib/app.js',
   output: {
     path: './public',
     filename: 'bundle.js',
   },
   module: {
     loaders: [{
       test: /\.jsx?$/,
       exclude: /node_modules/,
       loader: 'babel-loader',
     }]
   }
 }
