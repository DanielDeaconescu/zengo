console.log('Hello there');

// Carousel code
let slideIndex = 0;

function carousel() {
    const x = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("actual-button");
    for(let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > x.length) {slideIndex = 1}
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active-dot", "");
    }
    x[slideIndex - 1].style.display = "flex";
    dots[slideIndex-1].className += " active-dot";
    setTimeout(carousel, 2000);
}

carousel();
// Carousel code
