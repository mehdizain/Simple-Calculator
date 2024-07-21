let display = document.querySelector("input");
display.value="";
let buttons = document.querySelectorAll("button");
//now a is an array containing all buttons and further elements
Array.from(buttons).forEach(function (element) {
    element.addEventListener("click", function (e) {
        updateDisplay(element.innerText);
    }
    );
})
function updateDisplay(text) {
    if (text != '=') {
        if(text=='x')
        {
            text='*';
        }
        display.value += text;
    }
    else {
        display.value=eval(display.value);
    }
}