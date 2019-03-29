const path = require("path");
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    mode: 'development',

    entry: {
        homeApp: './site/home/templates/home/root.js',
        blogApp: './site/blog/templates/blog/root.js',
        authApp: './site/accounts/templates/auth/root.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve('./site/static/bundles/'),
        publicPath: '/static/bundles/'
    },

    plugins: [
        new BundleTracker({filename: './site/webpack-stats.json'}),
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'] // to transform JSX into JS
            },
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader']
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

