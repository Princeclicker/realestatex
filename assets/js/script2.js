// Header Scroll Effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
});

// Dropdown Menu for Mobile
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

if (window.innerWidth < 768) {
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdownMenu = toggle.nextElementSibling;
            
            if (dropdownMenu.style.display === 'block') {
                dropdownMenu.style.display = 'none';
            } else {
                dropdownMenu.style.display = 'block';
            }
        });
    });
}

// Testimonials Slider
const testimonialsTrack = document.getElementById('testimonialsTrack');
const testimonialDots = document.querySelectorAll('.testimonial-dot');
const prevTestimonial = document.getElementById('prevTestimonial');
const nextTestimonial = document.getElementById('nextTestimonial');
let currentTestimonial = 0;
let testimonialInterval;

function updateTestimonialSlider() {
    testimonialsTrack.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    testimonialDots.forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % 3;
        updateTestimonialSlider();
    }, 5000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Initialize testimonial slider
startTestimonialInterval();

// Add event listeners to testimonial dots
testimonialDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentTestimonial = index;
        updateTestimonialSlider();
        resetTestimonialInterval();
    });
});

// Add event listeners to testimonial arrows
prevTestimonial.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + 3) % 3;
    updateTestimonialSlider();
    resetTestimonialInterval();
});

nextTestimonial.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % 3;
    updateTestimonialSlider();
    resetTestimonialInterval();
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});