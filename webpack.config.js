const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    watch: true,
    entry: './react/index.jsx',
    output: {
        path: path.join(__dirname, 'dist/public'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
           { test: /\.jsx$/, loader: 'babel-loader', exclude: /(node_modules)/ },
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}