//teaching webpack to do these things
const path=require('path')
var webpack = require('webpack');
module.exports={
    entry: './src/app.js',
    output: {
        path:path.join(__dirname,'public'),//this must be full path
        filename:'bundle.js'
    },
    module:{
        rules:[{//rules for runing babel-loader
            loader:'babel-loader',
            test: /\.js$|jsx/,//only run babel-loader when file name ending with .js made some changes..but there is problem with enviroments which will be solved by .babelrc
            exclude:/node_modules/,   //excluding this files as they are already present there
            // use: {
            //     loader: 'babel-loader',
            // },
        }]
    },
    mode: 'none',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
}