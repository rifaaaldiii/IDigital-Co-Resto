// Slider functionality
const sliderItems = document.querySelectorAll('.slider__item');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
    sliderItems.forEach(item => item.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));
    
    sliderItems[index].style.display = 'block';
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % sliderItems.length;
    showSlide(currentSlide);
}

// Initialize slider
showSlide(0);

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);

// Add click events to dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});