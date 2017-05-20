module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    //Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            //All files with ts' or tsx files will be handled by awesome typescript loader
            {test: /\.tsx?$/, loader: "awesome-typescript-loader"},
            //All output js files will have sourcemaps re-processed by source map loader
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
            ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
}