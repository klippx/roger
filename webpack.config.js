module.exports = {
   entry: './public/js/app.jsx',
   output: {
     path: './public',
     filename: 'bundle.js',
   },
   module: {
     loaders: [{
       test: /\.jsx?$/,
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['es2015']
       }
     }]
   }
 }
