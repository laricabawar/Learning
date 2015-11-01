var dice = require("./dice");
var die = dice.die;

die.size = 6;

console.log(die.roll());
//die.totalRolls = die.totalRolls + 1;

console.log(die.roll());
//die.totalRolls = die.totalRolls + 1;

console.log(die.roll());
//die.totalRolls = die.totalRolls + 1;

console.log("Total Rolls: " + die.totalRolls);
console.log(die);