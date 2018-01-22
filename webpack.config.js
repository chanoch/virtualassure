const path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//     template: 'public/index.html',
//     filename: 'index.html',
//     inject: 'body'
// });

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CopyFiles = new CopyWebpackPlugin([
    {from: './public', to: './public'},
]);

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'app'),
        filename: 'index_bundle.js'
    },
    /*
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /(node_modules)/ },
        ]
    },
    */
    plugins: [
        //HtmlWebpackPluginConfig, 
        CopyFiles
    ]
}