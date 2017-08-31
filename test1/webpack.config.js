/*
* @Author: ThinkPad
* @Date:   2017-08-30 10:11:57
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-08-31 22:14:47
*/
var config = {
    entry: {
        page2: ["./src/page3.js","./src/page2.js"]
    },
    output: {
        path: __dirname + "/dist",
        filename: "app.js"
    }
};

 module.exports = config;