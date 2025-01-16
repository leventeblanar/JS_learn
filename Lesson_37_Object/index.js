// Object = A collection of related properties and/or methods(functions)
//          Can represent real world object (people, products, places)
//          object = {key:value,
//                    function()}


const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I'm Spongebob!")},
    eat: function(){console.log("I am eating a Krabby Patty.")},
}

const person2 = {
    firstName: "Patric",
    lastName: "Star",
    age: 42,
    isEmployed: false, 
    sayHello: () => console.log("Hey! I'm Patric..."),
    eat: () => console.log("I'm eating rost beef, chicken and pizza"),
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);


person1.sayHello();
person2.sayHello();

person1.eat();
person2.eat();