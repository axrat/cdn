module.exports = {
  entry: './index.js',
  output: {
    path:　__dirname + '/dist/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:{
          presets:['es2015']
        }
      }
    ]
  }
};