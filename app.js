let arrowLeft = document.getElementsByClassName("arrowLeft")[0];
let arrowRight = document.getElementsByClassName("arrowRight")[0];
let sliderMainDiv = document.querySelector(".sliderMainDiv");
let click = 0;
let clickRight = 0;

arrowLeft.addEventListener('click', function(){
    sliderMainDiv.style.transform = "translate3d(21%,0,0)"
    
});

arrowRight.addEventListener('click', function(){
    sliderMainDiv.style.transform = "translate3d(0,0,0)"
    
});