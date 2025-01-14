// Function declaration = define a reusable block of code
//                        that performs a specific task

/*
function hello(){
    console.log("Hello");
}
*/

// Function expressions = a way to define functions as values or variables

// These expressions are used in: 1. Callbacks in asynchronous operations
//                                2. Higher-order Functions
//                                3. Closures
//                                4. Event Listeners

/*
const hello = function(){
    console.log("Hello");
}
*/

// setTimeout(hello, 3000) // perform it within 3000 ms = 3s

/*
setTimeout(function(){
    console.log("Hello");
}, 3000);
*/


const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function (element){
    return Math.pow(element, 2);
}); // this version is a proper function expression
const cubes = numbers.map(function (element){
    return Math.pow(element, 3);
});
const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});
const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
});
const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
});

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);