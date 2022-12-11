const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist", "asserts"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: (/node_modules/),
            loader: "babel-loader"
        }]
    },
    devtool: "source-map"
};
