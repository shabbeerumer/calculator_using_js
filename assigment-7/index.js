var input = document.getElementById('input');
var button = document.querySelectorAll('button');

var arrays = Array.from(button)
let string =  '';
// console.log(array)   

arrays.forEach(function(btn) {
    btn.addEventListener('click',function (event) {
        if(event.target.innerHTML == '='){
            string =  eval(string);
            input.value = string;
        }else if(event.target.innerHTML == 'C'){
            string = '';
         input.value = string;
        }else if(event.target.innerHTML == 'Del'){
            string = string.substring(0,string.length - 1);
            input.value = string;
        }else{
            string =  string + event.target.innerHTML;
            input.value = string;
        }
        
        // console.log(event.target.innerHTML)
        
    })
})

