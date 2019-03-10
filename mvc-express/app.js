var express = require('express');
var app = express();
var controller = require('./controllers/controller.js');
//配置模板引擎
app.set("view engine","ejs");
//路由表，中间件
app.get("/",controller.showIndex);
app.get("/:number",controller.showResult)
app.use(express.static("public"));
app.listen(3000);