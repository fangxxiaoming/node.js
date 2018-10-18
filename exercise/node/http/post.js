var http = require('http');
var queryString = require('querystring');
var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
http.createServer((req,res)=>{
    var body ='';
    req.on('data',(chunk)=>{
        body+=chunk;
        console.log(chunk.toString('utf-8'))
        console.log(req)
    },'utf-8')
    req.on('end',()=>{
        body = queryString.parse(body);
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        if(body.name && body.url) { // 输出提交的数据
            res.write("网站名：" + body.name);
            res.write("<br>");
            res.write("网站 URL：" + body.url);
        } else {  // 输出表单
            res.write(postHTML);
        }
        res.end('测试end');
    })
    
}).listen(3000);