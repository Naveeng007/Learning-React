const path=require('path')

module.exports={
    entry: './src/app.js',
    output: {
        path:path.join(__dirname,'public'),//this must be full path
        filename:'bundle.js'
    },
    mode: 'none'
}