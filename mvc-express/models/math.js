exports.cal = function(number){
	var resultsArr = [];
	for(var i = 1;i<number; i++){
		if(number % i == 0){
			resultsArr.push(i);
		}
	}
	return resultsArr;
}