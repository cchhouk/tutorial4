/* Tutorial 4
   Example 3 JavaScript code
*/

let numInput1 = Number(prompt("Please enter your first number:"));
let numInput2 = Number(prompt("Please enter your second number:"));

let addition = (numInput1 + numInput2);
let subtraction = (numInput1 - numInput2);
let multiplication = (numInput1 * numInput2);
let division = (numInput1 / numInput2);
let modulo = (numInput1 % numInput2);

console.log(`
Addition: ${addition}\n
Subtraction: ${subtraction}\n
Multiplication: ${multiplication}\n
Division: ${division}\n
Modulo: ${modulo}`);
