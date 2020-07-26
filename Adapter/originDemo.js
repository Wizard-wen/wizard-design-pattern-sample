

var A = A || {};

A.g = function(id){
    return document.getElementById(id)
}

A.on = function(id, type, fn){
    // 如果传递的参数是字符串作为id处理，否则作为对象处理
    var dom = typeof id === 'string' ? this.g(id) : id;

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