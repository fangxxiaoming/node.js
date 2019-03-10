var http = require('http');

var server = http.createServer((req,res)=>{
	res.setHeader("Content-type","text/html;charset=utf-8");
	if(req.url=='/') {
		res.end('首页')
	}else if(req.url=="/music"){
		res.end('音乐频道');
	}else if(req.url=="/news"){
		res.end('新闻频道');
	}else if(/\/student\/[\d]{6}/.test(req.url)){
		var reg=/\/student\/([\d]{6})/;
		var xuehao = reg.exec(req.url)[1]
		res.end('<h1>学生信息,学号：'+xuehao+"</h1>")
	}else {
		res.end('对不起，没有这个页面')
	}
	
}).listen(3000);
console.log("服务器已经运行在3000端口");

