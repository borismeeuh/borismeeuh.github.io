const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "bundle.min.js",
        path: path.resolve(__dirname, "docs"),
        publicPath: "./",
        clean: true,
        assetModuleFilename: 'static/media/[name].[hash][ext]',
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
                use: [MiniCssExtractPlugin.loader, "css-loader"],
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
            new CssMinimizerPlugin(),
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ["imagemin-mozjpeg", { quality: 75 }],
                            ["imagemin-pngquant", { quality: [.65, .8]}],
                            [
                                "svgo",
                                {
                                    plugins: [
                                        {
                                            name: 'removeViewBox',
                                            active: true,
                                        },
                                    ]
                                }
                            ]
                        ]
                    }
                },
            }),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "static/css/styles.min.css"
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
            inject: "body",
        }),
    ]
};