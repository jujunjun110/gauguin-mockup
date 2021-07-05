const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
            }, {
                loader: "css-loader",
                options: {
                    url: false,
                    sourceMap: true,
                },
            }, {
                loader: "sass-loader",
                options: {
                    implementation: require('sass'),
                    sassOptions: {
                        fiber: require('fibers'),
                    },
                    sourceMap: true,
                },
            },],
        },],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
    ],
    devServer: {
        open: true,
        hot: true,
        contentBase: path.join(__dirname, 'dist'),
        watchContentBase: true
    },
}