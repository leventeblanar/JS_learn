

const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}];


fruits[0].name

console.log(fruits[3].name);
console.log(fruits[3].color);
console.log(fruits[3].calories);


fruits.push({name: "grapes", color: "purple", calories: 62});

console.log(fruits);

// fruits.pop();

// fruits.splice(1, 2);

fruits.forEach(fruit => console.log(fruit.name));
fruits.forEach(fruit => console.log(fruit.color));

const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);



console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const loCalFruits = fruits.filter(fruit => fruit.calories < 100);
const hiCalFruits = fruits.filter(fruit => fruit.calories > 100);



console.log(yellowFruits);
console.log(loCalFruits);
console.log(hiCalFruits);



// reduce()

const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ?
                                                fruit : max);

                                                console.log(maxFruit);

const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ?
                                                fruit : min);

                                                console.log(minFruit);