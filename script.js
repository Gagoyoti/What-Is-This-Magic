// Sample JavaScript file
console.log("Hello, World!");

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to greet a user
function greet(name) {
    return `Hello, ${name}!`;
}

// Example usage
const sum = add(5, 3);
console.log(`5 + 3 = ${sum}`);

const greeting = greet("Developer");
console.log(greeting);

// Array operations
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);