let count=1;

function getInput(id) {
    let inputValue=document.getElementById(id).value;
    return inputValue;   
}
function getText(id) {
    let inputValue=document.getElementById(id).innerText;
    return inputValue; 
    
}

function showElement(id) {
    document.getElementById("add-money").classList.add("hidden");
    document.getElementById("cash-out-money").classList.add("hidden");
    document.getElementById("transiction").classList.add("hidden");
    document.getElementById(id).classList.remove("hidden");
}


const pageWidth = window.innerWidth;
console.log(pageWidth);
if(pageWidth<=576){
    document.getElementById("d1").classList.remove("mockup-phone");
    document.getElementById("d2").classList.remove("mockup-phone-camera");
    document.getElementById("d3").classList.remove("mockup-phone-display");
    document.getElementById("main").classList.add("my-4");

}
