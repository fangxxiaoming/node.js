var express = require('express');
var app = express();

app.set("view engine","ejs");
app.get("/",function(req,res){
	res.render("shouye",{
		"dongxi":"8个手机",
		"qian":1000
	});
})
app.listen(3000)