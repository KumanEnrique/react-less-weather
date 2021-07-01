const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCSSExtractPlugin = require('mini-css-extract-plugin')

const devMode = process.env.NODE_ENV !== 'production'
module.exports = {
    entry:"./src/app/index.js",
    output:{
        filename:"index.bundle.js",
        path:path.resolve(__dirname,"build")
    },
    mode:'development',
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader:'babel-loader'
            },
            {
                test:/\.css$/,
                use:[
                    devMode ? 'style-loader' : miniCSSExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    devServer:{
        port:3000
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new miniCSSExtractPlugin({
            filename:'style.bundle.css'
        })
    ]
}