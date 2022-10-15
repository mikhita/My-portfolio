// let arrowLeft = document.getElementsByClassName("arrowLeft")[0];
// let arrowRight = document.getElementsByClassName("arrowRight")[0];
// let sliderMainDiv = document.querySelector(".sliderMainDiv");
// let pattern = /-?\d+/gm;
// const sliderLength = document.querySelector('.sliderMainDiv').childElementCount;
// console.log(sliderLength)


// arrowLeft.addEventListener('click', function(){
//     let currentTranslateX = parseInt(sliderMainDiv.getAttribute("style").match(pattern)[1]);
//     console.log(currentTranslateX);

//     if(currentTranslateX < 0 ){
//         sliderMainDiv.style.transform = `translate3d(0,0,0)`
//     }else{
//         sliderMainDiv.style.transform = `translate3d(${currentTranslateX+(100 / sliderLength )}%,0,0)`
//     }
// });

// arrowRight.addEventListener('click', function(){
//     let currentTranslateX = parseInt(sliderMainDiv.getAttribute("style").match(pattern)[1]);
//     console.log(currentTranslateX);
//     if(currentTranslateX === -Math.floor(100 / sliderLength) ){
//         sliderMainDiv.style.transform = `translate3d(0,0,0)`
//     }else{
//         sliderMainDiv.style.transform = `translate3d(${currentTranslateX-(100 / sliderLength)}%,0,0)`
//     }
// });

let arrowLeft = document.getElementsByClassName("arrowLeft")[0];
let arrowRight = document.getElementsByClassName("arrowRight")[0];
let sliderMainDiv = document.querySelector(".sliderMainDiv");
let currentSlide = 0;

arrowLeft.addEventListener('click', () => {
    currentSlide++;
    const sliderLength = parseInt(window.getComputedStyle(sliderMainDiv.children[0]).width);
    const translateX = (50 + sliderLength) * currentSlide;
    const halfSize = parseInt(window.getComputedStyle(sliderMainDiv).width) / 2;
    if(translateX <= halfSize){
        console.log(translateX, halfSize - sliderLength)
        sliderMainDiv.style.transform = `translateX(${translateX}px)` 
    }else {
        currentSlide = 0;
        sliderMainDiv.style.transform = `translateX(-${halfSize - sliderLength / 2}px)` 
    }
})

arrowRight.addEventListener('click', () => {
    currentSlide--;
    const sliderLength = parseInt(window.getComputedStyle(sliderMainDiv.children[0]).width);
    const translateX = (50 + sliderLength) * currentSlide;
    const halfSize = parseInt(window.getComputedStyle(sliderMainDiv).width) / 2;
    if(-translateX <= halfSize){
        console.log(-translateX, halfSize - sliderLength)
        sliderMainDiv.style.transform = `translateX(${translateX}px)` 
    }else {
        currentSlide = 0;
        sliderMainDiv.style.transform = `translateX(${halfSize - sliderLength / 2}px)` 
    }
})