const path = require('path')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: `${__dirname}/public`,
        filename: 'bundle.js'
    },
    // publicPath: "/js/",
    devServer: {
        open: true,
        hot: true,
        contentBase: path.join(__dirname, 'dist')
    },
}