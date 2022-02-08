/* Tutorial 4
   Example 4 JavaScript code
*/

let password;
let attempt = 1;
let limit = 3;

for(attempt; attempt <= limit; attempt++){
  password = String(prompt("Pleae enter your password:"));
  if (password !== "secret")
  {
    if (attempt == limit){
      console.log(`You entered the correct password after ${limit} attempt(s).`);
      break;
    }
    continue;
  }
  else {
    console.log(`You entered the correct password after ${attempt} attempt(s).`)
    break;
  }
}

/* Prototype v.2 -- Best one so far
var userPassword;
let attempt = 1;
let limit = 3;

while (userPassword !== "secret" && attempt <= limit) {
  userPassword = String(prompt("Please enter password:"));
  attempt ++; 
  console.log(attempt - 1);
} best version so far
*/

/* Prototype v.1
let password = prompt("Please enter your password:");
let attempt = 1;

while (password !== "secret" && attempt < 3) {
  password = prompt("Please re-enter your password");
  attempt ++;
  if (password === "secret") {
    console.log(`You entered the correct password after # attempt(s).`)
    break;
  }
}
*/

/*
let password = prompt("Please enter your password:");

while (password !== "secret") {
  password = prompt("Please enter your password:")
}
console.log(`You entered the correct password after # attempt(s).`)
*/

/*
for (password != "secret"; number <= 2;) {
  password = prompt("Please enter your password:")
  number ++
}
console.log(`Your account is locked! You failed to enter the correct password ${number} times`);
*/

