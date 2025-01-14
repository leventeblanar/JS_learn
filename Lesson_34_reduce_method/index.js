// .reduce() = reduce the elements of an array to a single value

const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

// Accumulator - the value that stores the reduction on each iteration
// in our case the first iteration is 5 + 30, where result is 35
// the next iteration is 35 (the previous result - accumulator) + 10 
// and this goes until the reduction is complete

function sum(accumulator, element){ //accumulator - previous element, element - next element
    return accumulator + element;
}


// 2nd example

const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);


console.log(maximum);
console.log(minimum);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}