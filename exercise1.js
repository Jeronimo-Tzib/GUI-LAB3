const buttons = document.querySelectorAll('.color-btn');

function changeColor(){
    this.style.backgroundColor = 'yellow';

}

buttons.forEach(function(button){
    button.addEventListener('click', changeColor);  
});