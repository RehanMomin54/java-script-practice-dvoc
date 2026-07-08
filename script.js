// let username = "Rehan";


// if (username.length !== 0) {
//     console.log(`Welcome ${username}`)
// } else {
//     console.log("Username not found")
// }

// 2. Movie Ticket Price

// A movie theater charges:

// Under 12 → ₹150
// 12–59 → ₹250
// 60 and above → ₹180

// Given:
// let age = 65;

// Print the correct ticket price.
// Practice: if...else if

// let age = 23;

// if (age>0 && age < 12) {
// console.log("Your ticket price is ₹150");}
// else if (age>= 12 && age <= 59) {
// console.log("Your ticket price is ₹250");}
// else if (age >= 60) {
//     console.log("Your ticket price is ₹180");
// } else {
//     console.log("Enter valid age")
// }

// 3. Shopping Discount

// A customer buys items worth:

// let total = 3200;

// Rules:
// Above ₹5000 → 20% discount
// Above ₹2000 → 10% discount
// Otherwise → No discount

// Print the final amount.

// Practice: Conditions + arithmetic

// let total = 3200;

// if (total > 5000) {
//   console.log("Above ₹5000 → 20% discount");
// } else if (total > 2000) {
//   console.log("Above ₹2000 → 10% discount");
// } else {
//   console.log("Otherwise → No discount");
// }

// 4. Password Strength Checker

// Given:

// let password = "hello123";

// Rules:

// Less than 8 characters → Weak
// Contains at least 8 characters → Strong

// Bonus: Check whether it contains a number.
// Practice: Strings

// let password = "hello123";
// console.log(typeof password);
// if (password.length < 8) {
//     console.log("Weak Password")
// }
// else if (password.length >=8)
// {
//     console.log("strong password")
// }
// else if( password(typeof()))

// 5. Traffic Light

// Given:

// let light = "red";

// Print:

// Red → Stop
// Yellow → Ready
// Green → Go

// Practice: switch

// let light = prompt("Enter the color of the signal : ")

// switch (light) {
//   case "red":
//     console.log("STOP");
//     break;
//   case "yellow":
//     console.log("READY");
//         break;
//     case 'green':
//         console.log("GO")
//         break;
//     default:
//         console.log("Enter a valid color for Signal")
// }

// 6. Student Result

// Given:

// let marks = 78;

// Print:

// 90+ → A
// 75–89 → B
// 60–74 → C
// Below 60 → Fail

// let marks = prompt("Enter your marks: ")

// if (marks >= 90)
// {
//     console.log("A")
// }
// else if (marks > 75 && marks <= 89) {
//     console.log("B")
// }
// else if (marks > 60 && marks <= 74) {
//     console.log("C")
// }
// else if (marks < 60) {
//     console.log("Fail")
// }
// else {
//     console.log("Enter valid marks")
// }

// 7. Online Store Cart

// Given:

// let cartItems = 4;

// Print:

// You have 4 items in your cart.
// If there are 0 items:
// Your cart is empty.
// Practice: Conditions
// let cartItems = 4;

// let cartIems = prompt("Enter items in cart :")
// if (cartItems > 0) {
//   console.log(`You have ${cartIems} in your cart`);
// } else {
//   console.log("cart is empty");
// }

// 9. Guess the Number

// Secret number:

// let secret = 7;
// let guess = 5;

// Print:
// Too High
// Too Low
// Correct!

// let secret = 7;
// let guess = 5;

// if (guess > secret) {
//   console.log("Too High");
// } else if (guess < secret) {
//   console.log("Too Low");
// } else {
//   console.log("Correct!");
// }

// Functions

// Question 2: Calculate Discount

// Create a function that accepts the price.

// Rules:

// Above ₹5000 → 20% discount
// Otherwise → No discount

// Example:

// calculateDiscount(6000);

// Output:

// Final Price: 4800

// function calculateDiscount(price) {
//   let finalPrice;
//   if (price > 5000) {
//     finalPrice = price * 0.8; // 20% off
//   } else {
//     finalPrice = price; // no discount
//   }
//   console.log("Final Price: " + finalPrice);
// }

// calculateDiscount(6000);

// Question 3: Even or Odd
// Create a function:
// checkEvenOdd(27);

// Output
// Odd

// function checkEvenOdd(number) {
//   if (number % 2 == 0) {
//     console.log("the numbe is even");
//   } else {
//     console.log("the number is odd");
//   }
// }

// checkEvenOdd(13);

// Question 5: Total Cart Price

// Given

// let cart = [200, 500, 300, 100];

// Find the total amount.

// Expected Output

// 1100

// Question 5: Total Cart Price

// let cart = [200, 500, 300, 100];

// let total = cart.reduce(function (sum, price) {
//   return sum + price;
// }, 0);

// console.log("Total: " + total);

// Question 7: Reverse an Array
// Given

// let fruits = ["Apple", "Banana", "Orange"];
// Print
// Orange
// Banana
// Apple

// Without using .reverse()

// let fruits = ["Apple", "Banana", "Orange"];

// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(fruits[i]);
// }


let users = [
  { name: "Rehan", age: 22 },
  { name: "Ali", age: 18 },
  { name: "Sara", age: 25 },
];


function add(name = "", age = "") {
    let data = {
        name : "",
        age : ""
    }
    data.name = name;
    data.age = age;
    return data;
}

let newValue = add("gunjan", 33)

console.log(newValue)


users.push(newValue)
console.log(users)
