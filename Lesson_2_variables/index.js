// variable =  A container that stores a value
//              Behaves as if it were the value it contains

// The process
// 1. declaration       let x;
// 2. assignment        x = 100;


/* declaration separately or joint
let x;
x = 123;
let y = 150;

console.log(x);
console.log(y);
*/

/* displaying variables
let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(age);
console.log(price);
console.log(gpa);

console.log(typeof age);
console.log(typeof price);
console.log(typeof gpa);
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`)
console.log(`Your gpa is ${gpa}`)
*/


/* STRINGS
let firstName = "Levente";
let favouriteFood = "pizza";
let email = "levente.blanar@gmail.com"

console.log(typeof firstName);
console.log(firstName);
console.log(`Your name is ${firstName}`);
console.log(`You like ${favouriteFood}`);
console.log(`Your email is ${email}`);
*/

/* BOOLEAN
let online = true;
let forSale = false;
let isStudent = true;

console.log(typeof online);
console.log(`Levente is online: ${online}`);
console.log(`Is this car for sale: ${forSale}`);
console.log(`Enrolled: ${isStudent}`);
*/

let fullName = "Levente Blanár";
let age = 31;
let isStudent = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `Your age is: ${age}`;
document.getElementById("p3").textContent = `You are a student ${isStudent}`;
