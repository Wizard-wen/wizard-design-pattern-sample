

/**
 * 观察者对象
 */
exports.Observer = function(){
    // 防止消息队列暴漏而被篡改，将消息容器作为静态私有变量保存
    var __messages = {}; //消息容器

    return {
       /**
        * 订阅消息方法
        * @param {*} type 
        * @param {*} fn 
        */
        regist: function(type, fn){
            // 如果此消息不存在则应该创建一个该消息类型
            if(typeof __messages[type] === 'undefined'){
                __messages[type] = [fn]
            } else {
                // 将动作方法推入该消息对应的动作执行序列中
                __messages[type].push(fn)
            }
        },
        /**
         * 发布信息方法
         * @param {*} type 消息类型
         * @param {*} args 动作执行时需要传递的参数
         */
        fire: function(type, args){
            console.log(this)
            if(!__messages[type]) 
                return
            // 定义消息信息
            var events = {
                type: type, //消息类型
                args: args || {}, //消息携带数据
            },
            i = 0, //消息动作循环变量
            len = __messages[type].length; //消息动作长度
            // 遍历消息动作
            for(; i < len; i++){
                // 依次执行注册的消息对应的动作序列
                __messages[type][i].call(this, events)
            }
        }, 
        remove: function(type, fn){
            // 如果消息动作队列存在
            if(__messages[type] instanceof Array){
                // 从最后一个消息动作遍历
                var i = __messages[type].length - 1;
                for(; i >= 0; i--){
                    // 如果存在该动作则在消息动作序列中移除相应动作
                    __messages[type][i] === fn && __messages[type].splice(i, 1)
                }
            }
        } //移除信息方法
    }
}

// console.log(Observer)