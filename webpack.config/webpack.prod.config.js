const path = require("path");
const BundleTracker = require('webpack-bundle-tracker');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'production',

    entry: {
        baseApp: './site/templates/base/base.js',
        homeApp: './site/home/templates/home/index.js',
        blogApp: './site/blog/templates/blog/index.js'
    },

    output: {
        filename: "[name].js",
        path: path.resolve('./site/static/dist/'),
    },

    plugins: [
        new MiniCssExtractPlugin({ filename: "style.css",}),
        new BundleTracker({filename: './webpack.config/webpack-stats-prod.json'}),
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
                use:  ['style-loader', MiniCssExtractPlugin.loader, 'css-loader']
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

