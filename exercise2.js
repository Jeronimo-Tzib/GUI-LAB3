const swatches = document.querySelectorAll('.swatch');

function applyColor(){
    this.style.backgroundColor = this.dataset.color;
}

swatches.forEach(function(swatch){
    swatch.addEventListener('click', applyColor);
});