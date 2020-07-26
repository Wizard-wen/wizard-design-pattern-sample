import { Observer } from ".";

function $(id){
    return document.getElementById(id)
}
/**
 * 用户追加评论
 */
;(function(){
    function addMsgItem(e){
        var text = e.args.text,
            ul = $('msg'),
            li = document.createElement('li'),
            span = document.createElement('span');
        li.innerHTML = text;
        span.onclick = function(){
            ul.removeChildd(li);
            Observer.fire('removeCommentMessage', {
                num: -1
            })
        }
        li.appendChild(span);
        ul.appendChild(li);
    }
    Observer.regist('addCommentMessage', addMsgItem)
}())

/**
 * 递增用户信息
 */
;(function(){
    function changeMsgNum(e){
        var num = e.args.num;

        $('msg_num').innerHTML = parseInt( $('msg_num').innerHTML) + num;
    }
    Observer
        .regist('addCommentMessage', changeMsgNum)
        .regist('removeCommentMessage', changeMsgNum)
}())
/**
 * 提交信息，触发发布信息功能
 */
;(function(){

    $('user_submit').onclick = function(){
        var text = $('user_input');
        if(text.value === ''){
            return
        }
        Observer.fire('addCommentMessage', {
            text: text.value,
            num: 1,
        })
        text.value = '';
    }

    
}())