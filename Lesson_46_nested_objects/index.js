// nested objects = Objects inside of other objects
//                  Allows you to represent more complex data structures 
//                  Child Object is enclosed by a Parent Object

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}


const person = {
    fullName: "SpongeBob SquarePants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Water"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[1]);
console.log(person.address);
console.log(person.address.street);

for(const property in person.address){
    console.log(person.address[property])
}






class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}



class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters");
const person2 = new Person("Patric", 34, "128 Conch St.", "Bikini Bottom", "Int. Waters");
const person3 = new Person("Squidward", 45, "126 Conch St.", "Bikini Bottom", "Int. Waters");

console.log(person1.name);
console.log(person1.age);
console.log(person1.address.street);
console.log(person1.address.city);
console.log(person1.address.country);