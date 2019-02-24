const path = require("path");
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    mode: 'development',

    entry: {
        baseApp: './site/templates/base/base.js',
        homeApp: './site/home/templates/home/index.js',
        blogApp: './site/blog/templates/blog/index.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve('./site/static/bundles/'),
    },

    plugins: [
        new BundleTracker({filename: './webpack.config/webpack-stats.json'}),
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
                            limit: 8192
                        }
                    }
                ]
            }

        ]
    },
};

