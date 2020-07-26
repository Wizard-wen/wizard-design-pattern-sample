
import $ from 'jquery';

export const A = A || {
    g(id){
        return $(id).get(0);
    },
    on(id, type, fn){
        // 如果传递参数是字符串则以id处理，否则以元素对象处理
        var dom = typeof id === 'string'? $('#' + id) : $(id);
        dom.on(type, fn);
    }
};

