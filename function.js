var getDieroll = function(dieSize) {
	var result = Math.ceil(dieSize * Math.random());
	return result;
}; 

var firstDie = getDieroll(6);
var secondDie = getDieroll(6);
var total = firstDie + secondDie;

var showResult = function() {
	console.log("Rolling.. " + firstDie);
	console.log("Rolling.. " + secondDie);
	console.log("Total:  " + total);
}

showResult();

