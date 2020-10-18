/**
 * 外观模式实现事件绑定都得封装
 * @param {*} dom 
 * @param {*} type 
 * @param {*} fn 
 */


export addEvent(dom, type, fn){
    if(dom.addEventListener){
        // 对于支持DOM二级事件绑定程序addEventListener方法的浏览器
        dom.addEventListener(type, fn, false);
    } else if(dom.attachEvent){
        // 对于不支持addEventListener但是支持attachEvent方法的浏览器
        dom.attachEvent('on' + type, fn);
    } else {
        // 
        dom['on' + type] = fn
    }
}

/**
 * 获取事件对象
 */
export getEvent(event){
    // 标准浏览器返回event，ie下window.event
    return event || window.event;
}

/**
 * 获取元素
 */
export getTarget(event){
    var event = getEvent(event);
    // 标准浏览器返回event.target，IE下event.srcElement
    return event.target || event.srcElement;
}


/**
 * 阻止默认行为
 */
export preventDefault(event){
    var event = getEvent(event);

    if(event.preventDefault){
        // 标准浏览器
        event.preventDefault();
    } else {
        // ie浏览器
        event.returnValue = false;
    }
}






export const domOperator = {
    g(id){
        return document.getElementById(id);
    },
    css(id, key, value){
        return document.getElementById(id).style[key] = value;
    },
    attr(id, key, value){
        return document.getElementById(id)[key] = value;
    },
    html(id, html){
        document.getElementById(id).innerHTML = html;
    },
    on(id, type, fn){
        document.getElementById(id)['on'+type] = fn;
    }
}