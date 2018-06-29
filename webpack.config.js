const {AngularCompilerPlugin} = require('@ngtools/webpack');
const path = require("path");

module.exports = {
    entry: path.resolve("./src/main.ts"),
    output: {
        filename: "[name].js",
        chunkFilename: "[id].chunk.js",
        path: path.resolve(__dirname, "dist")
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                loader: '@ngtools/webpack'
            }
        ]
    },

    plugins: [
        new AngularCompilerPlugin({
            tsConfigPath: path.resolve('./tsconfig.json'),
            entryModule: path.resolve('./src/app/app.module#AppModule'),
            sourceMap: true
        })
    ]
}