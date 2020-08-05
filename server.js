// const express = require("express");
// const app = express();

// app.get(
//   "/news",
//   (req,res,next) => {
//   console.log("1");
//   res.status(200);
//   res.end();
//   next();
//   },
//   (req,res,next) => {
//     console.log("2");
//     next();
//   });

// app.get("/news",(req,res,next) => {
//   console.log("3");
//   next();
// })

// const port = 3000;
// app.listen(port, () => {
//   console.log(`server listen on ${port}`);
// })




// var http = require('http');
// var fs = require('fs');
// const express = require('express')
// const app = express()
// const port = 3000

// app.use(express.static('public'))
// // app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
































// http.createServer(function (request, response) {


//     console.log(request.httpVersion);
//     console.log(request.headers);
//     console.log(request.method);
//     console.log(request.url);
//     console.log(request.trailers);
//     console.log(request.complete);

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain

//     if(request.url === '/'){
//       fs.readFile('./index3.html',function(err,data){
//         if (err) {
//           response.setHeader('Content-Type', 'text/plain; charset=utf-8')
//           response.end('文件读取失败，请稍后重试！')
//         } else {
//           // data 默认是二进制数据，可以通过 .toString 转为咱们能识别的字符串
//           // res.end() 支持两种数据类型，一种是二进制，一种是字符串
//           // 图片就不需要指定编码了，因为我们常说的编码一般指的是：字符编码
//           response.setHeader('Content-Type', 'text/html')
//           response.end(data);
//         }
//       })
//     }

//     if(request.url === '/register'){
//       fs.readFile('./index.html',function(err,data){
//         if (err) {
//           response.setHeader('Content-Type', 'text/plain; charset=utf-8')
//           response.end('文件读取失败，请稍后重试！')
//         } else {
//           // data 默认是二进制数据，可以通过 .toString 转为咱们能识别的字符串
//           // res.end() 支持两种数据类型，一种是二进制，一种是字符串
//           // 图片就不需要指定编码了，因为我们常说的编码一般指的是：字符编码
//           response.setHeader('Content-Type', 'text/html')
//           response.end(data);
//         }
//       })
//     }
//     if(request.url === '/login'){
//       fs.readFile('./index2.html',function(err,data){
//         if (err) {
//           response.setHeader('Content-Type', 'text/plain; charset=utf-8')
//           response.end('文件读取失败，请稍后重试！')
//         } else {
//           // data 默认是二进制数据，可以通过 .toString 转为咱们能识别的字符串
//           // res.end() 支持两种数据类型，一种是二进制，一种是字符串
//           // 图片就不需要指定编码了，因为我们常说的编码一般指的是：字符编码
//           response.setHeader('Content-Type', 'text/html')
//           response.end(data);
//         }
//       })
//     }
// }).listen(9999);

// var fs = require('fs');
// fs.readFile('./static/index.js','utf8',function(error,content){
//     if(error){
//         throw error;
//     }else{
//         response.write(content);
//         response.end();
//     }
// })

// var path = require('path');
// var url = require('url');
// var server = http.createServer( function(request,response){
//     var staticPath=path.join(__dirname,'static')
//     var urlObj = url.parse(request.url)
//     if(urlObj.pathname === '/'){
//         urlObj.pathname+='index.html'
//     }
// })


// // 终端打印如下信息
// console.log('Server running at http://127.0.0.1:9999/');


// var http = require('http');
// var fs = require('fs');
// var url = require('url');
 
 
// // 创建服务器
// http.createServer( function (request, response) {  
//    // 解析请求，包括文件名
//    var pathname = url.parse(request.url).pathname;
   
//    // 输出请求的文件名
//    console.log("Request for " + pathname + " received.");
   
//    // 从文件系统中读取请求的文件内容
//    fs.readFile(pathname.substr(1), function (err, data) {
//       if (err) {
//          console.log(err);
//          // HTTP 状态码: 404 : NOT FOUND
//          // Content Type: text/html
//          response.writeHead(404, {'Content-Type': 'text/html'});
//       }else{             
//          // HTTP 状态码: 200 : OK
//          // Content Type: text/html
//          response.writeHead(200, {'Content-Type': 'text/html'});    
         
//          // 响应文件内容
//          response.write(data.toString());        
//       }
//       //  发送响应数据
//       response.end();
//    });   
// }).listen(8080);
 
// // 控制台会输出以下信息
// console.log('Server running at http://127.0.0.1:8080/');



// const http = require('http')
// const url = require('url')
// const fs = require('fs')
// const querystring = require('querystring')

// const server = http.createServer((req, res) => {
//   // 定义公共变量，存储请求方法、路径、数据
//   const method = req.method
//   let path = ''
//   let get = {}
//   let post = {}

//   // 判断请求方法为GET还是POST，区分处理数据
//   if (method === 'GET') {
//     // 使用url.parse解析get数据
//     const { pathname, query } = url.parse(req.url, true)

//     path = pathname
//     get = query

//     complete()
//   } else if (method === 'POST') {
//     path = req.url
//     let arr = []

//     req.on('data', (buffer) => {
//       // 获取POST请求的Buffer数据
//       arr.push(buffer)
//     })

//     req.on('end', () => {
//       // 将Buffer数据合并
//       let buffer = Buffer.concat(arr)

//       // 处理接收到的POST数据
//       post = JSON.parse(buffer.toString())

//       complete()
//     })
//   }

//   // 在回调函数中统一处理解析后的数据
//   function complete() {
//     try {
//       if (path === '/reg') {
//         // 获取get请求数据
//         const {
//           username,
//           password
//         } = get

//         // 读取user.json文件
//         fs.readFile('./static/users.json', (error, data) => {
//           if (error) {
//             res.writeHead(404)
//           } else {
//             // 读取用户数据
//             const users = JSON.parse(data.toString())
//             const usernameIndex = users.findIndex((item) => {
//               return username === item.username
//             })

//             // 判断用户名是否存在
//             if (usernameIndex >= 0) {
//               res.write(JSON.stringify({
//                 error: 1,
//                 msg: '此用户名已存在'
//               }))
//               res.end()
//             } else {
//               // 用户名不存在则在用户列表中增加一个用户
//               users.push({
//                 username,
//                 password
//               })

//               // 将新的用户列表保存到user.json文件中
//               fs.writeFile('./static/users.json', JSON.stringify(users), (error) => {
//                 if (error) {
//                   res.writeHead(404)
//                 } else {
//                   res.write(JSON.stringify({
//                     error: 0,
//                     msg: '注册成功'
//                   }))
//                 }
//                 res.end()
//               })
//             }
//           }
//         })
//       } else if (path === '/login') {
//         const {
//           username,
//           password
//         } = post

//         // 读取users.json
//         fs.readFile('./static/users.json', (error, data) => {
//           if (error) {
//             res.writeHead(404)
//           } else {
//             // 获取user列表数据
//             const users = JSON.parse(data.toString())
//             const usernameIndex = users.findIndex((item) => {
//               return username === item.username
//             })

//             if (usernameIndex >= 0) {
//               // 用户名存在，则校验密码是否正确
//               if (users[usernameIndex].password === password) {
//                 res.write(JSON.stringify({
//                   error: 0,
//                   msg: '登录成功'
//                 }))
//               } else {
//                 res.write(JSON.stringify({
//                   error: 1,
//                   msg: '密码错误'
//                 }))
//               }
//             } else {
//               res.write(JSON.stringify({
//                 error: 1,
//                 msg: '该用户不存在'
//               }))
//             }
//           }
//           res.end()
//         })
//       } else {
//         // 若不是注册或登录接口，则直接返回相应文件
//         fs.readFile(`.${path}`, (error, data) => {
//           if (error) {
//             res.writeHead(404)
//           } else {
//             res.write(data)
//           }
//           res.end()
//         })
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }
// })

// server.listen(8888);
// console.log('Server running at http://127.0.0.1:8888/');
