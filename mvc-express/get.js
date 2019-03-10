var http =require('http');
var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');
var url = require('url');
var serve = serveStatic('public',{'index':['index.html','index.htm']});
var server = http.createServer(function onRequest(req,res){
	serve(req,res,finalhandler(req,res));
	res.setHeader("Content-type","text/html;charset=utf-8");
	var pathname = url.parse(req.url).pathname;
	if(pathname == '/addstudent'){
		var queryJSON = url.parse(req.url,true).query;
		console.log(queryJSON.name);
		console.log(queryJSON.age);
		console.log(queryJSON.sex);
		res.end('您好');
	}
}).listen(3000);
console.log('服务器已经运行在3000端口')