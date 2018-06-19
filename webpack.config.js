const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const port = process.env.PORT || 3010;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    
    output: {
        filename: 'bundle.[hash].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.s?css$/,  // scss & css files
                use: [ 'style-loader', 'css-loader' ]
                
            },
            {test: /\.(jpe?g|png|gif|svg)$/i, loader: "url-loader?name=src/[name].[ext]"},
            
        ] 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico'
        })
    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true
    }
}; 