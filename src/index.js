/*
* @Author: ThinkPad
* @Date:   2017-10-21 15:16:57
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-10-21 15:42:46
*/
import _ from 'lodash';

function component(){
    var element = document.createElement('div');
    //lodash,目前通过一个script脚本引入，对于这一执行是必须的
    //现在是通过import引入
    element.innerHTML = _.join(['hello','webpack'],'');

    return element;
}

document.body.appendChild(component());