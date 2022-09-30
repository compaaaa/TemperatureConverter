// 1. (MOST MODERN) USE ANONYMOUS (no name) function
let originalInput;
let convertButton;
let output;

document.addEventListener("DOMContentLoaded", ()=>{
    //ADD OUR DEFERRED CODE HERE
    originalInput = document.getElementById("originalInput");
    convertButton = document.getElementById("convertButton");
    output = document.getElementById("output");

    convertButton.addEventListener("click", ()=>{
        output.value = (Number(originalInput.value) * (9 / 5)) + 32
    });
});

/*
// 2. (halfway modern) WE CAN USE ANONYMOUS FUNCTIONS WITH THE CLASSIC ONLOAD ALSO
window.onload = ()=>{
    //ADD OUR DEFERRED CODE HERE

}

// 3. (old school)    
function init(){
    //ADD OUR DIFFERED CODE HERE

}
window.onload = init;
*/