// String slicing = creating a substring froma  portion of another string
//                  string.slice(start, end)

const fullName = "Levente Blanar";

/*
let firstName = fullName.slice(0, 7);
let lastName = fullName.slice(8, 14);

let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);

console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);
*/


/*
let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1); //+1 means find the first space and start from the next char

console.log(firstName);
console.log(lastName);
*/

const email = "levente.blanar@gmail.com";

let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(userName);
console.log(extension);