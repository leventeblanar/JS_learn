// inheritance = allows a new class to ingerit properties and methods
//               from an 3existing class (parent - > child)
//               helpds with code reusability


class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal{
    name= "fish";

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}
class Hawk extends Animal{
    name = "hawk";

    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabbit.alive = false;

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run(); // this cannot be assigned to any other animals here as this method belongs to the rabbit

console.log(fish.alive);
fish.eat();
fish.sleep();

console.log(hawk.alive);
hawk.eat();
hawk.sleep();