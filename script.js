// 1. Show “Hello World” using alert, console.log, and document.write
alert("Hello World");
console.log("Hello World");
document.write("Hello World");

// 2. Create Variables
let name = "Ali";
let age = 20;
let isStudent = true;

// Show them using console.log
console.log("Name:", name);
console.log("Age:", age);
console.log("Is a student:", isStudent);

// 3. Basic Math Operations
let a = 20;
let b = 7;
let c = 12;

let sum = a + b;
let difference = a - b + c;
let product = a * b + c;
let quotient = a / b * c;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

// 4. Show Output in HTML using innerHTML
let outputElement = document.getElementById("output");
outputElement.innerHTML = `
  Name: ${name} <br>
  Age: ${age} <br>
  Is Student: ${isStudent} <br>
  Sum: ${sum} <br>
  Difference: ${difference} <br>
  Product: ${product} <br>
  Quotient: ${quotient}
`;

// 5. Button Function to show alert
function showAlert() {
  alert("Button was clicked!");
}
