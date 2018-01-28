const path = require('path');
var { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
var webpack = require('webpack');

var noVisualization = process.env.NODE_ENV === 'production' 
        || process.argv.slice(-1)[0] == '-p'
|| process.argv.some(arg => arg.indexOf('webpack-dev-server') >= 0);

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HwpIndexConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body'
});

const HwpContactConfig = new HtmlWebpackPlugin({
    template: './public/contact.html',
    filename: 'contact.html',
    inject: 'body'
});

module.exports = {
    watch: true,
    entry: {
        vendor: ['react', 'react-dom', 'axios'],
        index: './react/index.jsx',
        contact: './react/contact.jsx'
    },
    output: {
        path: path.join(__dirname, 'dist/public'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        loaders: [
           { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        }),
        HwpIndexConfig, HwpContactConfig,
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        })
    ]
}