var getDieroll = function(dieSize) {
	var result = Math.ceil(dieSize * Math.random());
	return result;
}; 

for (var i = 0; i < process.argv.length; i++){
	console.log(process.argv[i]);
}

var roll = getDieroll(6);

for (var i = 0; i < roll; i++){
	console.log("*");
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