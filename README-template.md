# Frontend Mentor - Single-page design portfolio solution

This is a solution to the [Single-page design portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/). Frontend Mentor challenges help me improve my coding skills by building realistic projects. 

## Table of contents


  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)



### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](./preview.jpg)


### Links

- Solution URL: [ solution URL here](https://github.com/mikhita/single-page-design-portfolio)
- Live Site URL: [ live site URL here](https://mikhita.github.io/single-page-design-portfolio/)

## My process
I start with mobile-first workflow and finish mark-up in 5 hours intensive job, it was super good and responsible but I lost a lot of time doing the slider for large div, because I didnot know the what is regex function, but after I use that it was more easy to write the logic of function for eventlistener.
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow




### What I learned

The more specific you are with your questions the more likely it is that another member of the community will give you feedback.
I learn also using regex and logic of creating slider.

To see how you can add code snippets, see below:


```js
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
```

### Useful resources

- [Resource 1](https://www.druckerhaus24.de/) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Resource 2](https://stackoverflow.com/questions/69287466/regex-take-third-element-from-a-space-separated-list) - This is an amazing article which helped me finally understand regex. I'd recommend it to anyone still learning this concept.


