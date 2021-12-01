const colors =require ('colors');

console.log("hello".red);
const http = require('http'); // create server request and responese has been handle by this in node

http.createServer((req, res)=>{
    res.write("<h1>Hello Himanshu Rai<h1>");
    res.end();
}).listen(4500);
