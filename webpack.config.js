const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production' 
        || process.argv.slice(-1)[0] == '-p'
        || process.argv.some(arg => arg.indexOf('webpack-dev-server') >= 0);

const webpackReport = process.env.WEBPACK_REPORT ==='true'; 

console.log(`Environment: ${process.env.NODE_ENV}`);
console.log(`Production Environment: ${isProd}`);
console.log(`Generated report: ${webpackReport}`);

function getPlugins() {
    const plugins = [];

    // pass env to webpack
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
    }));

    if(isProd) {
        plugins.push(new webpack.optimize.UglifyJsPlugin({
            uglifyOptions: {
                mangle: false
            }
        }));
    }
    if(webpackReport) {
        plugins.push(new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        }))
    }

    return plugins.concat([
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        }),
        // copy static assets from source dist
        new CopyWebpackPlugin([{
            from: 'src/public',
            to:   '../public'
        },{
            from: 'src/server',
            to:   '../server'
        }])
    ]);
}

module.exports = {
    watch: true,
    entry: {
        vendor: ['react', 'react-dom', 'axios'],
        index: './src/react/index.jsx',
    },
    output: {
        path: path.join(__dirname, 'dist/public'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            { test: /\.js.?$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.json$/, loader: 'json-loader' }
        ],
    },
    plugins: getPlugins()
}