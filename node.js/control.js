var getDieroll = function(dieSize) {
	var result = Math.ceil(dieSize * Math.random());
	return result;
}; 

var roll = getDieroll(6);

while (roll < 4) {
	console.log(roll);
	roll = getDieroll(6);	
}

do {
	roll = getDieroll(6);
	console.log(roll);
	} 
	
while (roll > 4)

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