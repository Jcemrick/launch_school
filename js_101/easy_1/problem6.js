let rlSync = require('readline-sync');

// define sum
let sum;

// get user input for integer
console.log("Please enter an integer greater than 0: ");
let num = parseInt(rlSync.prompt());

// get user input for sum or product
console.log("Enter 's' to compute the sum, or 'p' to compute the product: ");
let userSelection = rlSync.prompt().toLowerCase();

// if statement to determine if sum or product was recieved
if (userSelection === "s") {
  sum = 0;
  // sum for loop iterating from 1 to the number input
  for (let i = 1; i <= num; i++) {
    // sum += i
    sum += i
  }
    // log the final value of sum 
  console.log(`The sum of the integers between 1 and ${num} is ${sum}.`)
} else if (userSelection === "p") {
  sum = 1;
  // product for loop iterating from 1 to the number input
  for (let i = 1; i <= num; i++) {
    // sum *= i
    sum = (sum * i);
  }
    // log the final value of product
  console.log(`The product of the integers between 1 and ${num} is ${sum}.`)
}