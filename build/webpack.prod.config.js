const path = require('path');

module.exports = {
  mode: "production",
  entry: {
    "Patrick": path.resolve(__dirname, '../src/index.tsx')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].min.js',
    publicPath: "../dist/",
    libraryTarget: 'commonjs2', // 这里按 commonjs2 模块规范打包
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
     },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          { loader: 'postcss-loader' }
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "less-loader",
            options: {
              strictMath: true,
              noIeCompat: true
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  // 打包忽略react 
  externals: { 
    react: 'react'
  }
}