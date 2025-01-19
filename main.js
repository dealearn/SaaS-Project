/**
 * This file demonstrates basic JavaScript concepts, including data types, variables, 
 * operators, control flow, functions, arrays, and objects.
 */

// Data Types
const number = 42; // Number
const string = "Hello, world!"; // String
const boolean = true; // Boolean
const nullValue = null; // Null
const undefinedValue = undefined; // Undefined
const object = { name: "John", age: 30 }; // Object
const array = [1, 2, 3, "apple", true]; // Array

// Variables
let mutableVariable = 10; // Variable that can be reassigned
mutableVariable = 20;

const immutableVariable = 5; // Constant variable, cannot be reassigned

// Operators
const sum = number + 5; // Addition
const difference = number - 5; // Subtraction
const product = number * 2; // Multiplication
const quotient = number / 2; // Division
const modulus = number % 3; // Modulus (remainder)

// Control Flow
if (number > 10) {
  console.log("Number is greater than 10");
} else {
  console.log("Number is less than or equal to 10");
}

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Functions
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice"));

// Array Methods
const numbers = [1, 4, 2, 5, 3];

numbers.sort(); // Sorts the array in ascending order
console.log(numbers); // Output: [1, 2, 3, 4, 5]

const filteredNumbers = numbers.filter(number => number > 2); // Filters numbers greater than 2
console.log(filteredNumbers); // Output: [3, 4, 5]

const doubledNumbers = numbers.map(number => number * 2); // Maps each number to its double
console.log(doubledNumbers); // Output: [2, 4, 6, 10, 6]

const sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
console.log(sumOfNumbers); // Output: 15 

// Object Methods
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName()); // Output: "John Doe"

// Example of a class (ES6)
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    console.log("Car started.");
  }
}

const myCar = new Car("Toyota", "Camry");
myCar.start();
