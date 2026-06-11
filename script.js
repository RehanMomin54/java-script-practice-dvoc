// append example ---->
// const button = document.getElementById("addBtn");
// const list = document.getElementById("list");

// button.addEventListener("click", () => {
//     const li = document.createElement("li");
//     li.textContent = "New Item has been addded";
//     list.append(li);
// });


// function changeColor() {
//     document.getElementById("headline").style.color = "blue";
// }


// queryselector example --->
// const addButton = document.querySelector("#addBtn");
// const colorButton = document.querySelector("#colorBtn");
// const list = document.querySelector("#list");
// const heading = document.querySelector("h2");

// // Add a new list item
// addButton.addEventListener("click", () => {
//     const li = document.createElement("li");
//     li.textContent = "New Item";

//     list.append(li);
// });

// // Change heading color

// function changeColor() {
//     document.getElementById("headline").style.color = "blue";
// }

// querySelector All
// const buttons = document.querySelectorAll("button");
// const heading = document.querySelector("#headline");
// const list = document.querySelector("#list");

// buttons.forEach((btn) => {
//    // style all buttons
//     btn.style.padding = "10px";
//     btn.style.margin = "5px";

//     btn.addEventListener("click", () => {

//         // Add Item button
//         if (btn.id === "addBtn") {
//             const li = document.createElement("li");
//             li.textContent = "New Item";
//             list.append(li);
//         }

//         // Change Color button (this is the onclick button)
//         if (btn.textContent === "Change Color") {
//             heading.style.color = "red";
//         }
//     });
// });


// // changing the headline
// const heading = document.querySelector("#headline")
// function changeHeading(){
//     if (heading.textContent == "Append Example")
//     {
//         heading.textContent = "Append Example Changed"
//     }else
//     {
//         heading.textContent = "Append Example"
//     }
// }

// callback function
// function greet(name, callback) {
//             alert("Hello " + name);
//             callback();
//         }

//         function goodbye() {
//             alert("Goodbye!");
//         }

//         function startGreeting() {
//             greet("Rehan", goodbye);
//         }


// spread operators
// const addBtn = document.querySelector("#addBtn");
// const mergeBtn = document.querySelector("#mergeBtn");
// const list = document.querySelector("#list");
// const output = document.querySelector("#output");

// // Base array
// let items = ["Apple", "Banana"];

// // Show initial list
// function renderList() {
//     list.innerHTML = "";

//     items.forEach((item) => {
//         const li = document.createElement("li");
//         li.textContent = item;
//         list.append(li);
//     });
// }

// renderList();

// // 1. ADD ITEM using spread operator
// addBtn.addEventListener("click", () => {
//     const newItem = "Orange";

//     // spread operator creates NEW array
//     items = [...items, newItem];

//     renderList();
// });

// // 2. MERGE ARRAYS using spread operator
// mergeBtn.addEventListener("click", () => {
//     const moreItems = ["Mango", "Grapes"];

//     const merged = [...items, ...moreItems];

//     output.textContent = "Merged: " + merged.join(", ");
// });


//rest operators

// const sumBtn = document.querySelector("#sumBtn");
// const showBtn = document.querySelector("#showBtn");
// const output = document.querySelector("#output");

// // 1. REST OPERATOR in function
// function sum(...numbers) {
//     let total = 0;

//     for (let num of numbers) {
//         total += num;
//     }

//     return total;
// }

// // 2. Show values using rest
// function showValues(...values) {
//     return values.join(", ");
// }

// // Button 1: calculate sum
// sumBtn.addEventListener("click", () => {
//     const result = sum(10, 20, 30, 40);

//     output.textContent = "Sum = " + result;
// });

// // Button 2: show values
// showBtn.addEventListener("click", () => {
//     const result = showValues("Apple", "Banana", "Mango");

//     output.textContent = "Values: " + result;
// });