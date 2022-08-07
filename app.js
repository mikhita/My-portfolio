let arrowLeft = document.getElementsByClassName("arrowLeft")[0];
let arrowRight = document.getElementsByClassName("arrowRight")[0];
let sliderMainDiv = document.querySelector(".sliderMainDiv");
let pattern = /-?\d+/gm;

arrowLeft.addEventListener('click', function(){
    let currentTranslateX = parseInt(sliderMainDiv.getAttribute("style").match(pattern)[1]);
    if(currentTranslateX===42){
        sliderMainDiv.style.transform = `translate3d(0,0,0)`
    }else{
        sliderMainDiv.style.transform = `translate3d(${currentTranslateX+21}%,0,0)`
    
    }
});

arrowRight.addEventListener('click', function(){
    let currentTranslateX = parseInt(sliderMainDiv.getAttribute("style").match(pattern)[1]);
    console.log(currentTranslateX);
    if(currentTranslateX===-42){
        sliderMainDiv.style.transform = `translate3d(0,0,0)`
    }else{
        sliderMainDiv.style.transform = `translate3d(${currentTranslateX-21}%,0,0)`
    
    }
    
});