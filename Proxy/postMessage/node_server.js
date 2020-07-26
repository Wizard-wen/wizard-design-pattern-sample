'use strict';

//通过require将http库包含到程序中
const http = require('http');

const fs = require('fs');

//创建新的HTTP服务器
var server = http.createServer();

var a = fs.readFileSync(__dirname + '/a.html');
var b = fs.readFileSync(__dirname + '/b.html');
var iframe_cs2 = fs.readFileSync(__dirname + '/iframe_cs2.html');


//通过request事件来响应request请求
server.on('request',function(req, res){


    console.log(req.url)
    if(req.url == '/b.html'){
        res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
        res.write(b, 'utf-8')
        res.end();  
    } 

    if(req.url == '/iframe_cs2.html'){
        res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
        res.write(iframe_cs2, 'utf-8')
        res.end();  
    } 


    if(req.url == '/a.html' || req.url == '/'){
        res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
        res.write(a, 'utf-8')
        res.end();  
    }
    
        
});

//监听8080端口
server.listen('8079');

//用于提示我们服务器启动成功
console.log('Server running!');
