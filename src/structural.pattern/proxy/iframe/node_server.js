'use strict';

//通过require将http库包含到程序中
const http = require('http');

const fs = require('fs');

//创建新的HTTP服务器
var server = http.createServer();

var cs1 = fs.readFileSync(__dirname + '/cs1.html');
var cs3 = fs.readFileSync(__dirname + '/cs3.html');


//通过request事件来响应request请求
server.on('request',function(req, res){


    console.log(req.url)
    if(req.url == '/cs1.html'){
        res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
        res.write(cs1, 'utf-8')
        res.end();  
    } 
    if(req.url == '/cs3.html' || req.url == '/'){
        res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
        res.write(cs3, 'utf-8')
        res.end();  
    }
        
});

//监听8080端口
server.listen('8078');

//用于提示我们服务器启动成功
console.log('Server running!');
