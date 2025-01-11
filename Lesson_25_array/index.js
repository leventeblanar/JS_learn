// array = a variable like structure that can hold more than 1 value;

let fruits = ["apple", "orange", "banana"];

fruits[3] = "coconut";

//fruits.sort(); - alphabetical order
//fruits.sort().reverse(); - reversed alphabetical order

//fruits.push("coconut"); - pushes element to the end of the array
//fruits.pop(); - removes last element
//fruits.unshift("mango"); - adds element to the beginning of the array
//fruits.shift(); - remove element from the beginning

/*
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
*/

// let numOfFruits = fruits.length; - number of elements in array 
//let index = fruits.indexOf("coconut"); - index of given element (-1 means missing element)

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for(let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}

