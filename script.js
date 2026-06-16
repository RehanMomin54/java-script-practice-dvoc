//event bubbling and event capturing


let parentEl = document.querySelector("#parent");
let childEl = document.querySelector("#child");

parentEl.addEventListener("click", (event) => {
    alert("Parent Element has been clicked")
    event.stopPropagation()
})


childEl.addEventListener("click", (event) => {
    alert("Child Element has been clicked")
    event.stopPropagation()

})