




const Observer = require('./index.js').Observer()



Observer.regist('test', function(e){
    console.log(e.type, e.args.msg)
})

Observer.fire('test', {msg: '传递参数'}) // test 传递参数
