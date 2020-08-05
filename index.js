const express = require("express");
const app = express();
const path = require("path");
const cookieParser=require("cookie-parser");
const bodyParser = require('body-parser');
// const connection = require("./db");
const mysql = require("mysql2");
const ejs = require("ejs");
// const axios = require("axios")

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123123",
    database:"test"
});

connection.connect((err) => {
    if (err) { console.log("连接失败") }
    else { console.log("连接成功") }
})

app.engine('ejs',ejs.renderFile);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// 映射静态资源
const staticRoot = path.resolve(__dirname,"./public");
app.use(express.static(staticRoot));



app.get('/login',(req,res) => {
    let sql = "SELECT * FROM `user`;";
    let arr = [];
    connection.query(sql,(err,results) => {
        for(em of results){
            // console.log(em);
            let card = [em['username'],em['password']];
            arr.push(card);
        }
        // console.log(arr)
        console.log(req.query.username);
        console.log(req.query.password);
        for(let i=0;i<arr.length;i++){
            if(arr[i][0]==req.query.username && arr[i][1]==req.query.password){
                res.sendFile(path.join(__dirname, './public', 'login.html'));
                res.cookie("name","admin");
                return;
            }
        }
        res.sendFile(path.join(__dirname, './public', 'lose.html'));
        // res.render('list',{title:'列表页'});
        })       
    })   
    // console.log(req.query);

app.get('/register',(req,res) => {
    let arr = [];
    const value = [req.query.username,req.query.password];

    //检查用户名是否重复
    let sql2 = "SELECT * FROM `user`;";
    connection.query(sql2,(err,results) => {
        for(em of results){
            arr.push(em['username']);
        }
        for(let i=0;i<arr.length;i++){
            if(arr[i]==req.query.username){
                // res.status(200);
                res.sendFile(path.join(__dirname, './public', 'err.html'));
                return;
            }
        }
        //插入注册的用户
        let sql = "INSERT INTO `user`(`username`,`password`)VALUES(?,?);"
        connection.query(sql,value,(err,results) => {
            res.sendFile(path.join(__dirname, './public', 'register.html'));
        })       
    })
    

})
// app.get("/",(req,res) => {
//     console.log(req.body);
// })

//加入cookie-parser中间件
//加入之后，会在req对象中注入cookies属性，用于获取所有请求传递过来的cookie
//加入之后，会在res对象中注入cookie方法，用于设置cookie
// const cookieParser = require("cookie-parser");
// app.use(cookieParser());

//解析application/x-www-form-urlencoded格式的请求体
// app.use(express.urlencoded({ extended:true }));

//解析application/json 格式的请求体
// app.use(express.json());

//处理api请求
// app.use("/api/student",require("./api/student"));
// app.use("/api/admin",require("./api/admin"));



const port = 9999;
app.listen(port,() => {
    console.log(`server run on ${port}`);
})


