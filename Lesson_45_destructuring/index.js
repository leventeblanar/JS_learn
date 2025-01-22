// destructuring = extract values from arrays and objects,
//                 the assign them toa  variable in a convenient way
//                 [] = to perform an array destructuring 
//                 {} = to perform object destructuring 
//                 5 examples


// EXAMPLE 1
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

// EXAMPLE 2
// SAWP 2 ELEMENTS IN AN ARRAY

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);


// EXAMPLE 3
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// EXAMPLE 4
// EXTRACT VALUE FROM OBJECTS

const person1 = {
    firstName: "Spongebob",
    lastName: "SquerPants",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Patric",
    lastName: "Star",
    age: 34,
}

const {firstName, lastName, age, job} = person1;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

function displayPerson({firstName, lastName, age, job = "unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`)
}

displayPerson(person2);