var path = require("path")

module.exports = {
  entry: "./app/entry.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js",
    publicPath: "/assets/"
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: "babel", include: path.join(__dirname, 'app')}
    ]
  }
};
