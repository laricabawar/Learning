var getDieroll = function(dieSize) {
	var result = Math.ceil(dieSize * Math.random());
	return result;
}; 

var roll = getDieroll(6);

for (var i = 0; i < 5; i++){
	console.log(roll);
	roll = getDieroll(6);
	
}

if (roll >= 5){
	console.log("Fantastic!");
	}
else if (roll >=1 && roll <=2){
	console.log("Aww!")
}
else {
	console.log("Not bad!")
}

console.log(roll);