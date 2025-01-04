// string methods = allow you to manipulate and work with text (strings)

let userName = "Levente";


// console.log(userName.charAt(4)); - return a character from text based on index (0 is 1)
// console.log(userName.indexOf("v")); - what is the index of a character in the text
// console.log(userName.lastIndexOf("e")); - return the index of the last instance of requested character
// console.log(userName.length); - lenght of string

/* TRIM WHITESPACES
userName = "Blanár Levente";
userName = userName.trim();
console.log(userName);
*/

/* UPPER CASE METHOD
userName = userName.toUpperCase();
console.log(userName);
*/

/* LOWER CASE METHOD
userName = userName.toLowerCase();
console.log(userName);
*/

/* REPEATE THE STRING
userName = userName.repeat(50);
console.log(userName);
*/

/* START WITH METHOD --- it's "pair" is the ENDS WITH - same thing but checks strings end
let result = userName.startsWith(" ");
if(result){
    console.log("Your username can't begin with ' '");
}
else {
    console.log(userName);
}
*/

/* INCLUDES METHOD
let result = userName.includes(" ");
if(result){
    console.log("Your username can't include with ' '");
}
else {
    console.log(userName);
}
*/

/* REPLACE CHARACTERS METHOD
let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", "/");
console.log(phoneNumber);
*/

/* PAD START - Adds characters to the beggining of the String till the desired character number is reached - PADEND 
let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.padStart(15, "0");
console.log(phoneNumber);
*/
