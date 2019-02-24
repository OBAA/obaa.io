const path = require("path");
const BundleTracker = require('webpack-bundle-tracker');
const webpack = require('webpack');

module.exports = {
    mode: 'development',

    entry: {
        baseApp: './site/templates/base/base.js',
        homeApp: './site/home/templates/home/index.js',
        blogApp: './site/blog/templates/blog/index.js',
        devServer: 'webpack-dev-server/client?http://localhost:5000'
    },

    output: {
        filename: "[name].js",
        path: path.resolve('./site/static/bundles/'),
        publicPath: 'http://localhost:5000/site/static/bundles/', // override django's STATIC_URL with webpack bundles
    },

    plugins: [
        // new BundleTracker({filename: './webpack.config/webpack-stats.json'}),
        new BundleTracker({filename: './webpack-stats.json'}),
        new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: {
        contentBase: './site/static/bundles',
        hot: true
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                // use: ['react-hot-loader/webpack', 'babel-loader'] // to transform JSX into JS
                use: ['babel-loader'] // to transform JSX into JS
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    }]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }

        ]
    },
};

