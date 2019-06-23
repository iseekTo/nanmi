const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

// 以下配置仅仅为本地开发所用 真实发布代码使用babel编译并输出到lib文件夹
module.exports = {
    mode: "development", // 开发模式
    entry: {
        app: ['./examples/App.tsx'],
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
            template: "./examples/index.html"
        }),
    ]
};