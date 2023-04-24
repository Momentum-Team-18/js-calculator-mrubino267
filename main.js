let buttons=
document.querySelectorAll(".button")
console.log (buttons);

// clears all the values
function clearScreen() {
    document.getElementById("result").value = "";
    // console.log (clearScreen)
}
    
    //  values
    function display(value) {
    document.getElementById("result").value += value;
    
    }
    
    // This is where the calc gets calcin'
    function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;

 
    }
    
    for (let button of buttons) {
        button.addEventListener("click", (event) => {
            display(event.target.value);
        })
    }