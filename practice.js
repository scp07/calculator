
var string = '';
let buttons = document.querySelectorAll('input[type="button"]');
let input = document.querySelector('.input');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(button)=>{
        let value = button.target.value;
        if(value == "="){
           string = eval(string)
           input.value = string;
        }else if (value == "AC") {
            string = '';
            input.value = string;
        }else if (value == "DEL") {
            string = string.substring(0,string.length-1)
            input.value = string;
        }else{
            string += value;
            input.value = string;
        }
    })
});