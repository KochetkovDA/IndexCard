const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/public/index.js',
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"
    },
    devServer: {
        publicPath: "/",
        contentBase: path.join(__dirname, "/dist"),
        hot: true,
        port: 9000,
        overlay: true,
        watchOptions: {
            aggregateTimeout: 600,
            poll: 1000,
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/public/index.html"
        })
    ],
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ]
    }
};