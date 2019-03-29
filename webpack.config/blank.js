///////////////////////////////////////////////
//                 BABEL.RC                  //
///////////////////////////////////////////////

// {
//     "presets": [
//         "@babel/preset-env", "@babel/preset-react"
//     ],
//     "plugins": [
//         "react-hot-loader/babel",
//         "transform-class-properties"
//     ]
// }

///////////////////////////////////////////////
///////////////////////////////////////////////


const path = require("path");
const BundleTracker = require('webpack-bundle-tracker');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'production',

    entry: {
        homeApp: './site/home/templates/home/root.js',
        blogApp: './site/blog/templates/blog/root.js',
        authApp: './site/accounts/templates/auth/root.js'
    },

    output: {
        filename: "[name].js",
        path: path.resolve('./site/static/prod/'),
        publicPath: '/static/prod/'
    },

    plugins: [
        // new MiniCssExtractPlugin({ filename: "style.css",}),

        // // removes a lot of debugging code in React
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('production')
        //     }}),
        //
        // // keeps hashes consistent between compilations
        // new webpack.optimize.OccurenceOrderPlugin(),
        //
        // // minifies your code
        // new webpack.optimize.UglifyJsPlugin({
        //     compressor: {
        //         warnings: false
        //     }
        // }),

        new BundleTracker({filename: './site/webpack-stats-prod.json'}),
    ],

    module: {
        rules: [
            // {
            //     test: /\.(js|jsx)$/,
            //     // include: [
            //     //     path.resolve(__dirname, 'site')
            //     // ],
            //     exclude: /node_modules/,
            //     use: [{
            //         loader: 'babel-loader',
            //         options: {
            //             cacheDirectory: true,
            //             babelrc: false,
            //             presets: [
            //                 "@babel/preset-env",
            //                 "@babel/preset-react",
            //                 ["@babel/env", {
            //                     "targets": {
            //                         'browsers': ['Chrome >=59']
            //                     },
            //                     "modules":false,
            //                     "loose":true
            //                 }],
            //                 "@babel/react"
            //             ],
            //
            //             plugins: [
            //                 "react-hot-loader/babel",
            //                 "transform-class-properties",
            //                 ["import",
            //                     {
            //                         libraryName: "antd",
            //                         style: "css"
            //                     }],
            //                 "@babel/proposal-object-rest-spread"
            //
            //             ]
            //         }
            //     }
            //     ]
            //
            // },
            {
                test: /\.(js|jsx)$/,

                exclude: /node_modules/,
                loader: "babel-loader",
                query:
                    {
                        presets:[
                            '@babel/react',
                            // "@babel/preset-env",
                            // "@babel/preset-react"
                        ]
                    },

                // exclude: /node_modules/,
                // use: ['babel-loader'] // to transform JSX into JS
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
                            limit: 8192,
                            name: 'img/[name].[ext]'
                        }
                    }
                ]
            }

        ]

        // rules: [
        //     {
        //         test: /\.(js|jsx)$/,
        //         exclude: /node_modules/,
        //         use: ['babel-loader'] // to transform JSX into JS
        //     },
        //     {
        //         test: /\.css$/,
        //         use:  ['style-loader', MiniCssExtractPlugin.loader, 'css-loader']
        //     },
        //     {
        //         test: /\.(png|jpg|gif)$/i,
        //         use: [
        //             {
        //                 loader: 'url-loader',
        //                 options: {
        //                     limit: 8192,
        //                     name: 'img/[name].[ext]'
        //                 }
        //             }
        //         ]
        //     }
        // ]

    },
};
