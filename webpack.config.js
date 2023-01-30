const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const modeEnv = process.env.NODE_ENV === 'production' ? 'production' : 'development'
console.log(',.......', process.env.NODE_ENV)

module.exports={
    mode: modeEnv, 
    entry: "./index.js", 
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.[hash].js"
    },
    target: "web",
    devServer: {
        historyApiFallback: true, // 導向router
        port: "4203",
        contentBase: path.resolve(__dirname, 'public'),
        open: true,
        hot: true ,
        proxy: {
            '/api': 'http://localhost:60216'
        }
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js','.jsx', '.css', '.less','.json'],
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,    //kind of file extension this rule should look for and apply in test
                exclude: /node_modules/, //folder to be excluded
                use:  'babel-loader' //loader which we are going to use
            },
            // {
            //     test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?((v=\d+\.\d+\.\d+)|(\w*)))?$/,
            //     use: { loader: "file-loader?name=/[hash].[ext]" }
            // },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                include: path.resolve(__dirname, './node_modules/bootstrap-icons/font/fonts'),
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'webfonts',
                        publicPath: '../webfonts',
                    },
                }
            },
            {
                test: /\.(sass|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                // loaders: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'main.[hash].css',
        }),
        // 創建實例 (第二步)
        new HtmlWebpackPlugin({
          // 配置 HTML 模板路徑與生成名稱 (第三步)
          template: './src/index.html',
        }),
        new CleanWebpackPlugin(),
    ],
}