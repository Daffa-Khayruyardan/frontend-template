const path = require('path');
const miniCssPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/ts/main.ts',
    mode: 'production',
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'dist')
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["ts-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [miniCssPlugin.loader,"css-loader","sass-loader"]
            }
        ]
    },
    resolve: {
        extensions: ['.ts','.js']
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './views/index.html'
        }),
        new miniCssPlugin()
    ]
}