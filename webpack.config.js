module.exports = {
   entry: './lib/app.jsx',
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
