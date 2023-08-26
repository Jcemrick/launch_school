let rlSync = require('readline-sync');

console.log("What is the bill? ");
let bill = parseInt(rlSync.prompt());

console.log("What is the tip percentage? ");
let tipPercentage = parseInt(rlSync.prompt());

let tipTotal = (bill * (tipPercentage/100));
let billTotal = (bill + tipTotal);

console.log(`The tip is $${tipTotal.toFixed(2)}`);
console.log(`The total is $${billTotal.toFixed(2)}`);