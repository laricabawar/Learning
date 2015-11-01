var getDieRoll = function(dieSize){
	var result = Math.ceil (dieSize* Math.random());
	return result;
};

var die = {
	size: 5
};

console.log(die);
console.log(die.size);

die.size = 6;
console.log(die);
console.log(die.size);