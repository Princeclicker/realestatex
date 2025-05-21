// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        mobileToggle.innerHTML = '✕';
    } else {
        mobileToggle.innerHTML = '☰';
    }
});

// Close mobile menu when clicking a link
const navLinkItems = document.querySelectorAll('.nav-link, .nav-cta');
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.innerHTML = '☰';
    });
});

// Sticky Header
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Search Form Submission
const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Search submitted! In a real implementation, this would filter properties based on your criteria.');
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Success message
    alert('Thanks! We\'ll get back to you soon.');
    contactForm.reset();
});

// Testimonials Slider
const testimonialsSlider = document.getElementById('testimonialsSlider');
const controlDots = document.querySelectorAll('.control-dot');
let currentSlide = 0;

function showSlide(index) {
    testimonialsSlider.style.transform = `translateX(-${index * 100}%)`;
    
    // Update active dot
    controlDots.forEach(dot => dot.classList.remove('active'));
    controlDots[index].classList.add('active');
    
    currentSlide = index;
}

// Click on dots to change slide
controlDots.forEach(dot => {
    dot.addEventListener('click', function() {
        const slideIndex = parseInt(this.getAttribute('data-index'));
        showSlide(slideIndex);
    });
});

// Auto-slide every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % controlDots.length;
    showSlide(currentSlide);
}, 5000);