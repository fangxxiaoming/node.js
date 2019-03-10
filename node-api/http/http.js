var http = require('http');
var count = 0;
http.createServer((req,res)=>{
    count++;
    res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
    res.end('我接受了'+count+'个请求');
    console.log(typeof(res.end))
    console.log(req)

}).listen(3000);