// How to accept user input

// 1 .EASY WAY = window prompt
// 2. Professional way = HTML textbox


// WINDOW PROMPT
/*
let username;

username = window.prompt("What's your username?")

console.log(username);
*/

let username;


document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myh2").textContent = `Hello ${username}`;
}