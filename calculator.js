// Define the numbers and the operation here
const prompt = require("prompt-sync")({ sigint: true });

let num1 = parseInt(prompt("Give me the first number: "));
let num2 = parseInt(prompt("Give me the second number: "));
let op = prompt("+, -, *, /?");

if (op === "+") console.log(num1 + num2);
else if (op === "-") console.log(num1 - num2);
else if (op === "*") console.log(num1 * num2);
else if (op === "/") console.log(num1 / num2);
else console.log("You provided an incorrect operation!");
