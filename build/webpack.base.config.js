const HtmlWebpackPlugin = require('html-webpack-plugin')
// fork-ts-checker-webpack-plugin 类型检查
// awesome-typescript-loader 和ts-loader同类只是内部集成了类型检查 并可以在独立进程中进行的
// babel
module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true // 快速构建不检查类型
                    }
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        })
    ],
    devtool: 'hidden-source-map'
}
