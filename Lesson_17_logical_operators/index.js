// logical operators = used to combine or manipulate boolean values
//                     (true or false)

//                     AND = &&
//                     OR = ||
//                     NOT = !

const temp = 100;

// && OPERATOR
/*
if (temp > 0 && temp <= 30) {
    console.log("The weather is GOOD");
}
else {
    console.log("The weather is BAD");
}
*/


// || OPERATOR
/*
if(temp <= 0 || temp > 30){
    console.log("The weather is BAD");
}
else{
    console.log("The weather is GOOD");
}
*/

const isSunny = true;

// ! (NOT) OPERATOR
if(!isSunny){
    console.log("It is sunny.")
}
else {
    console.log("It is cloudy.")
}