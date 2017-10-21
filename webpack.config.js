/*
* @Author: ThinkPad
* @Date:   2017-10-21 16:00:46
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-10-21 16:46:11
*/

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};