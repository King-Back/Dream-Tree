const path = require('path');
const webpack = require("webpack");

module.exports = {
    entry: "./public/js/main.js",
    output: {
        path: path.resolve("./public/dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]

    }
};