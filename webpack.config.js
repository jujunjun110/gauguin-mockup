const path = require('path')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    devServer: {
        open: true,
        hot: true,
        contentBase: path.join(__dirname, 'dist'),
        watchContentBase: true
    },
}