// .map() = accepts a callback and applies that function
//          to each element of an array, then return a new array (key difference to forEach - the returned new array)

const numbers = [1, 2, 3, 4, 5]
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(cubes);

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}


// 2nd example

const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);
console.log(studentsUpper);

function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}

// 3rd example

const dates = ["2024-01-10", "2025-2-20", "2026-3-30"];
const formatesDates = dates.map(formatDates);

console.log(formatesDates);


function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}

