/* 
- create a function named isOdd that takes one argument
- determine if the input is divisble by 2
- output if true or false
*/

let isOdd = (num) => num % 2 != 0 ? true:false

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true