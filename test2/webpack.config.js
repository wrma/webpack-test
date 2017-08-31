/*
* @Author: ThinkPad
* @Date:   2017-08-30 10:11:57
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-09-01 00:02:08
*/

// 引用插件时用到了webpack的变量
var webpack = require('webpack');

var config = {
    entry: {
        common: "./src/common.js",
        page1: "./src/page1.js",
        page2: "./src/page2.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "js/[name].js"
    },
    plugins: [
        //提取公共模块到base.js中
        new webpack.optimize.CommonsChunkPlugin({
            //name : 公共模块的name
            name : 'common',
            //filename : 打包后输出的文件名
            filename : 'js/base.js'
        })
    ]
};

 module.exports = config;