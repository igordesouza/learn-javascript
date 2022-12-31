let num1 = 4
let num2 = 4
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

let sumEl = document.getElementById("sum-el")
let subEl = document.getElementById("sub-el")
let divEl = document.getElementById("div-el")
let mulEl = document.getElementById("mul-el")

function add(){
    let result = num1 + num2
    sumEl.textContent = 'Sum: ' + result 
}
function subtract(){
    let result = num1 - num2
    // subEl.textContent += result 
    sumEl.textContent = 'Sub: ' + result 

}
function divide(){
    let result = num1/num2
    sumEl.textContent = 'Div: ' + result 
}
function multiply(){
    let result = num1*num2
    sumEl.textContent = 'Mul: ' + result 
}
