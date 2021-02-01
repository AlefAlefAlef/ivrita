// babel loader, testing for files that have a .js(x) extension
// (except for files in our node_modules folder!).
const babelLoader = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    compact: true, // because I want readable output
  },
};

module.exports = [{
  // entry is the "main" source file we want to include/import
  entry: './src/element.js',
  devtool: 'source-map',
  // output tells webpack where to put the bundle it creates
  output: {
    // in the case of a "plain global browser library", this
    // will be used as the reference to our module that is
    // hung off of the window object.
    library: 'Ivrita',
    // We want webpack to build a UMD wrapper for our module
    libraryTarget: 'umd',
    // the destination file name
    filename: 'ivrita.min.js',
    libraryExport: 'default',
  },
  module: {
    rules: [
      babelLoader,
    ],
  },
}, {
  entry: './src/ui/index.js',
  devtool: 'source-map',
  output: {
    library: ['Ivrita', 'ui'],
    libraryTarget: 'umd',
    filename: 'ivrita.ui.min.js',
    libraryExport: 'default',
  },
  externals: {
    '../element': 'Ivrita',
  },
  module: {
    rules: [
      babelLoader,
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      { // Keep font files the same, in the dist/fonts directory
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
}];
