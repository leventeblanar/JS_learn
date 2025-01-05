// variable scope = where a variable is recognized
//                  and accessible (local vs global)

/*
function2();

function function1(){
    let x = 1;
    console.log(y);
} // we cannot cross call these as x and y is declared locally

function function2(){
    let y = 2;
    console.log(x);
}
*/

let x = 3;
function1();

function function1(){
    console.log(x);
}

function function2(){
    console.log(x);
}

// if there are variables with the same name globally and locally
// the program will use the locally declared one