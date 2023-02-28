const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const { ProvidePlugin } = require('webpack');

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: 'dist',
        port: 3000,
        writeToDisk: true,
    },
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
      },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devtool: 'source-map',
    plugins: [
        new CopyWebpackPlugin([{
            from: 'build/assets',
            to: 'assets'
        }]),
        new HTMLWebpackPlugin({
            template: 'build/index.html',
            filename: 'index.html'
        }),
        new ProvidePlugin({
            'PIXI': 'pixi.js',
          })
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        devtoolModuleFilenameTemplate: 'file:///[absolute-resource-path]'
    },
}