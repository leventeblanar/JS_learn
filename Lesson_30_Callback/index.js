// callback = a function that is passed as an argument
//            to another function

//             used to handle asynchronous opreations:
//             1. reading a file
//             2. network requests
//             3. interacting with databases

//             "Hey, when you are done, call this next."


hello(wait); // using callback garantees that the function set as a parameter will be performed
             // next, after the first one

function hello(callback){ // matching parameter
    console.log("Hello!");
    callback();
}

function wait(){
    console.log("Wait!");
}

function leave(){
    console.log("Leave!");
}

function goodbye(){
    console.log("Goodbye!");
}


// 2nd example

sum(displayPage, 1, 2)

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}