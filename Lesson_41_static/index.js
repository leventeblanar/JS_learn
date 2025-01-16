// static = kayword that defines properties or methods that belong
//          to a class itself rather than the objects created
//          from that class (class owns anything static, not the objects)


class MathUtil{
    static PI = 3.14159;


    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return 2 * this.PI *radius;
    }
    static getArea(radius){
        return this.PI *radius * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));



class User{
    static userCount = 0;

    constructor(userName){
        this.userName = userName;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`)
    }
    sayHello(){
        console.log(`Hello, my username is ${this.userName}`);
    }
}

const user1 = new User("SpongeBob");
const user2 = new User("Patric");
const user3 = new User("Sandy");


console.log(user1.userName);
console.log(user2.userName);
console.log(user3.userName);
console.log(User.userCount);

user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();