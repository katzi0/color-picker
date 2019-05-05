const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    // entry: {
    //     colorPicker: './src/color-picker.js',
    //     index:'./src/index.js'
    // },
    // output: {
    //     filename: 'main.js',
    //     path: path.resolve(__dirname, 'dist')
    // },
    devServer: {
        open: true,
        contentBase: './dist'
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    }
}
