const path = require('path');
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/App.tsx'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use:[
                  {loader:'style-loader'},
                  {
                    loader:'css-loader',
                      options: {
                        importLoaders: 1
                      }
                  },
                  {loader:'postcss-loader'}
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
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html"
        }),
        
    ]
};