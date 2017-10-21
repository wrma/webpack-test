/*
* @Author: ThinkPad
* @Date:   2017-10-21 15:16:57
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-10-21 16:55:49
*/
import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

function component(){
    var element = document.createElement('div');
    //lodash,目前通过一个script脚本引入，对于这一执行是必须的
    //现在是通过import引入
    element.innerHTML = _.join(['hello','webpack'],'');
    //添加样式
    element.classList.add('hello');

    //添加图像
    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());