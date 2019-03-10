var math = require('../models/math.js');
var file = require('../models/file.js')
exports.showIndex = function(req,res){
	res.render("index",{

	})
};
exports.showResult = function(req,res){
	var T1 = new Date()
	var number = req.params.number;
	//先命令文件进行读取
	file.read(number,function(resultsArr){
		if(resultsArr==-1){
			//命令模型（小兵）来计算
			var resultsArr = math.cal(number);
			file.save(number,resultsArr)
		};
		var T2 = new Date()
		res.render("result",{
		"number":number,
		"resultsArr":resultsArr,
		"during":T2-T1
	});
	})
	
	
	
}