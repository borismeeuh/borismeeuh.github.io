const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "bundle.min.js",
        path: path.resolve(__dirname, "docs/static/js"),
        publicPath: "/static/js",
        clean: true,
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
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true,
                    },
                },
            }),
        ],
    },
};
