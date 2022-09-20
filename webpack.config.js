const { join, resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        bundle: resolve(__dirname, "src/index.js"),
    },
    output: {
        path: join(__dirname, "dist"),
        filename: "[name].bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: join(__dirname, "src/index.html"),
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    },
};
