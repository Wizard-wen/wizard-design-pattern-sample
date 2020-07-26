var Count = (function(){
    // 缓存图片
    var _img = new Image();

    // 返回统计函数
    return function(param){

        var str = 'http://'
        // 拼接请求字符串
        for(var i in param ){
            str += i + '=' + param[i]
        }
        // 发送统计信息

        _img.src = str;
    }
})();