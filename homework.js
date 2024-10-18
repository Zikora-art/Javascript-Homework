// Step 1: Declare the calculator functions using modern arrow function syntax

// Function to add two numbers
const add = (num1, num2) => num1 + num2;

// Function to subtract one number from another
const subtract = (num1, num2) => num1 - num2;

// Function to multiply two numbers
const multiply = (num1, num2) => num1 * num2;

// Function to divide one number by another
const divide = (num1, num2) => num1 / num2;

// Function to get the modulus (remainder of division)
const modulus = (num1, num2) => num1 % num2;

// Step 2: Create a function that handles input and calls the appropriate operation
const calculate = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        case '%':
            return modulus(num1, num2);
        default:
            return 'Invalid operator';
    }
};

// Step 3: Example usage - logging to the console
console.log(calculate(60, 5, '+')); // Output: 65
console.log(calculate(10, 5, '-')); // Output: 5
console.log(calculate(90, 5, '*')); // Output: 450
console.log(calculate(10, 2, '/')); // Output: 5
console.log(calculate(10, 3, '%')); // Output: 1


let arr1 = [1, 82, 17];
arr1.push(876);  // Adds 4 to the end of the array
console.log(arr1);  // Output: [1, 82, 17, 876]

let arr2 = [1, 2, 3];
let lastElement = arr2.pop();  // Removes 3
console.log(arr2);  // Output: [1, 2]

let arr3 = [1, 2, 3];
let firstElement = arr3.shift();  // Removes 1
console.log(arr3);  // Output: [2, 3]

let arr4 = [2, 3];
arr4.unshift(1);  // Adds 1 at the beginning
console.log(arr4);  // Output: [1, 2, 3]

let arr5 = [1, 2, 3, 4, 5];
let newArrs = arr5.slice(1, 4);  // Extracts elements from index 1 to 3 (excludes index 4)
console.log(newArrs);  // Output: [2, 3, 4]


let arr6 = [1, 2, 3, 4, 5];
let evenNumbers = arr6.filter(x => x % 2 === 0);  // Filters out odd numbers
console.log(evenNumbers);  // Output: [2, 4]

let arr7 = [1, 2, 4, 5];
arr7.splice(2, 1, 99);  // Removes 1 element at index 2 and adds 10 at that position
console.log(arr7);  // Output: [1, 2, 99, 5]


let arr8 = [1, 3];
arr8.forEach(x => console.log(x * 2));  // Logs doubled values
// Output: 2, 6
