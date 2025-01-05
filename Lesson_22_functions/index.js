// function = a section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute that code.


/*
function happyBirthday(username, age){
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${username}`);
    console.log("Happy Birthday to you!");
    console.log(`You are ${age} years old.`)
}

happyBirthday("Levente", 31);
happyBirthday("Alajos", 25);
*/

function add(x, y){
    let result = x + y;
    return result;
}

let answer = add(2, 3);
console.log(answer);

// EASIER VERSION

function subtract(z, w){
    return z - w;
}

console.log(subtract(4, 6));



function isEven(number){

    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isEven(12));



function isValidEmail(email){
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}

console.log(isValidEmail("levente.blanar@gmail.com"));