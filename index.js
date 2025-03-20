//slideshow

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

//initializer
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){

    if(slides.length > 0){
        slides[slideIndex].classList.add("displayslide")
        intervalId = setInterval(nextslide, 5000);
}
  
}
function showslide(index){

if(index >= slides.length){
slideIndex = 0;
}
else if(index < 0){
slideIndex = slides.length - 1;
}

    slides.forEach(slide => {
        slide.classList.remove("displayslide");
    });
    slides[slideIndex].classList.add("displayslide");
}
function prevslide(){
slideIndex--;
showslide(slideIndex);
}
function nextslide(){
slideIndex++; 
showslide(slideIndex);

}