var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send('hell world');
})
	
app.get('/music',function(req,res){
	res.send('电影频道');
});
app.use("/jingtai",express.static('./public'));
app.listen(3000);
console.log("express 服务器已经连接");
	
