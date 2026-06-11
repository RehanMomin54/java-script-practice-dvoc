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


// changing the headline
const heading = document.querySelector("#headline")
function changeHeading(){
    if (heading.textContent == "Append Example")
    {
        heading.textContent = "Append Example Changed"
    }else
    {
        heading.textContent = "Append Example"
    }
}