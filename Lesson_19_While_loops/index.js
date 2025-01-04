// while loop = repeat some code WHILE some condition is true

/*
let username = "";

while(username === "" ||username === null){
    username = window.prompt(`Enter your name: `)
}

console.log(`Hello ${username}`);
*/

// do-while loop is another variation - in this case if username is not defined, we have to put it
// in a do - while loop so the prompt is not getting skipped


let loggedIn = false;
let username;
let password;


while(!loggedIn){
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in");
    }
    else{
        console.log("Invalid credentials! Please try again");
    }
}
