// Ternary operator = a shorcut to if{} and else{} statements
//                    helps to assign a variable based on a condition
//                    condition? codeIfTrue : CodeIfFalse

/*
let age = 15;
let message = age >= 18 ? "You're an adult" : "You're a minor";
console.log(message);
*/

/*
let time = 16;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
console.log(greeting);
*/

/*
let isStudent = true;
let message = isStudent ? "You are a student." : "You are not a student.";
console.log(message);
*/

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`); 