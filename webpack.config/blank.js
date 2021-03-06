const path = require("path");
const BundleTracker = require('webpack-bundle-tracker');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',

    entry: {
        homeApp: './site/home/templates/home/root.js',
        blogApp: './site/blog/templates/blog/root.js',
        authApp: './site/accounts/templates/auth/root.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve('./site/static/test/'),
        publicPath: '/static/test/'
    },

    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //     },
    // },

    plugins: [
        new BundleTracker({filename: './site/webpack-stats-test.json'}),
        // new MiniCssExtractPlugin({ filename: "style.css",}),

        new HTMLWebpackPlugin({
            // hash: true,
            // title: 'My Awesome application',
            // myPageHeader: 'Hello World',
            // template: './site/templates/index.html',
            filename: './index.txt' //relative to root of the application
        })

    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'] // to transform JSX into JS
            },

            // {
            //     test: /\.css$/,
            //     // use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader']
            //     use: ['style-loader', 'css-loader']
            // },

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
                            limit: 8192,
                            name: 'img/[name].[ext]'
                        }
                    }
                ]
            }

        ]
    },
};

