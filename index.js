const slides = document.getElementsByClassName('carousel-item');
const texts = document.getElementsByClassName('carousel-text')
const pages = document.getElementsByClassName('carousel-page')
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);
for (let i=0; i<pages.length; i++){
    pages[i].addEventListener("click", moveToPage)
    pages[i].id = i
}
setInterval(moveToNextSlide, 3000)


function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
    for (let text of texts) {
        text.classList.remove("carousel-text-visible")
        text.classList.add("carousel-text-hidden")
    }
    for (let page of pages) {
        page.classList.remove("carousel-page-visible")
        page.classList.add("carousel-page-hidden")
    }
}

function moveToNextSlide() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    texts[slidePosition].classList.add("carousel-text-visible")
    pages[slidePosition].classList.add("carousel-page-visible")
}

function moveToPrevSlide() {
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    texts[slidePosition].classList.add("carousel-text-visible")
    pages[slidePosition].classList.add("carousel-page-visible")
}

function moveToPage(event) {
    const page = event.target.id
    hideAllSlides()
    slides[page].classList.add("carousel-item-visible");
    texts[page].classList.add("carousel-text-visible")
    pages[page].classList.add("carousel-page-visible")
    
    
    // console.log(page)
    
}