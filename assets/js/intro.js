
// Demo Slider
const demoSlider = document.getElementById('demoSlider');
const demoSlides = document.querySelectorAll('.demo-slide');
const demoDots = document.querySelectorAll('.demo-dot');
const prevSlide = document.getElementById('prevSlide');
const nextSlide = document.getElementById('nextSlide');
let currentSlide = 0;
let slideInterval;

// Initialize slider
function initSlider() {
    // Set initial position
    updateSlider();
    
    // Start auto-sliding
    startSlideInterval();
    
    // Add event listeners to dots
    demoDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
            resetSlideInterval();
        });
    });
    
    // Add event listeners to arrows
    prevSlide.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + demoSlides.length) % demoSlides.length;
        updateSlider();
        resetSlideInterval();
    });
    
    nextSlide.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % demoSlides.length;
        updateSlider();
        resetSlideInterval();
    });
}

function updateSlider() {
    // Update slider position
    demoSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    demoDots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function startSlideInterval() {
    slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % demoSlides.length;
        updateSlider();
    }, 5000);
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    startSlideInterval();
}

// Fade-in Animation on Scroll
const fadeElements = document.querySelectorAll('.fade-in');

function checkFade() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100 && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
}

// Initialize on load
window.addEventListener('load', () => {
    initSlider();
    checkFade();
});

// Check fade on scroll
window.addEventListener('scroll', checkFade);
