document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const images = [
        'url("./image/background-slideshow/1.jpg")',
        'url("./image/background-slideshow/2.jpg")',
        'url("./image/background-slideshow/3.jpg")',
        'url("./image/background-slideshow/4.jpg")'
    ];
    
    // Set initial background images
    slides.forEach((slide, index) => {
        slide.style.backgroundImage = images[index];
    });

    let currentSlide = 0;

    function nextSlide() {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        
        // Move to next slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add active class to new slide
        slides[currentSlide].classList.add('active');
    }

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
});
