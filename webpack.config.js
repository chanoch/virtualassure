const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HwpIndexConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    chunks: ['index'],
    filename: 'index.html',
    inject: 'body'
});

const HwpContactConfig = new HtmlWebpackPlugin({
    template: './public/contact.html',
    chunks: ['contact'],
    filename: 'contact.html',
    inject: 'body'
});

module.exports = {
    watch: true,
    entry: {
        index: './react/index.jsx',
        contact: './react/contact.jsx'
    },
    output: {
        path: path.join(__dirname, 'dist/public'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
           { test: /\.jsx$/, loader: 'babel-loader', exclude: /(node_modules)/ },
        ]
    },
    plugins: [HwpIndexConfig, HwpContactConfig]
}