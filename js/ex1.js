/* Tutorial 4
   Example 1 JavaScript code
*/

console.log("Chhouk's Output from Tutorial 4 Example 1");

let nameEntered = String(prompt("Enter your name:"));
let gradeStanding = Number(prompt("Enter the number of units you've completed:"))

if (gradeStanding > 91) {
   let gradeStanding = 'Senior'; 
   console.log(`Hello ${nameEntered}\nYour grade standing is ${gradeStanding}`);
} else if ((gradeStanding >= 61) && (gradeStanding <= 90)) {
   let gradeStanding = 'Junior'; 
   console.log(`Hello ${nameEntered}\nYour grade standing is ${gradeStanding}`);
} else if ((gradeStanding >= 31) && (gradeStanding <= 60)) {
   let gradeStanding = 'Sophomore'; 
   console.log(`Hello ${nameEntered}\nYour grade standing is ${gradeStanding}`);
} else if ((gradeStanding >= 0) && (gradeStanding <= 30)) {
   let gradeStanding = 'Freshman'; 
   console.log(`Hello ${nameEntered}\nYour grade standing is ${gradeStanding}`);
} else {
   console.log(`Hello ${nameEntered}, you entered an incorrect value.`);
}