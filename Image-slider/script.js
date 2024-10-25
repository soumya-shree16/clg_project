
const slides = document.querySelectorAll(".slide");
let firstIndex = 0
function imageSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}


imageSlide(firstIndex)
setInterval(() => {
    firstIndex = (firstIndex + 1) % slides.length; 
    imageSlide(firstIndex);
}, 3000); 



