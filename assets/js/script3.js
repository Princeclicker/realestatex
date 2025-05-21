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
const testimonialDots = document.querySelectorAll('#testimonialsDots .testimonial-dot');
const prevTestimonial = document.getElementById('prevTestimonial');
const nextTestimonial = document.getElementById('nextTestimonial');
let currentTestimonial = 0;
let testimonialInterval;

function updateTestimonialSlider() {
    testimonialsTrack.style.transform = `translateX(-${currentTestimonial * 50}%)`;
    
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
        currentTestimonial = (currentTestimonial + 1) % testimonialDots.length;
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
if (prevTestimonial && nextTestimonial) {
    prevTestimonial.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonialDots.length) % testimonialDots.length;
        updateTestimonialSlider();
        resetTestimonialInterval();
    });
    
    nextTestimonial.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonialDots.length;
        updateTestimonialSlider();
        resetTestimonialInterval();
    });
}

// Tours Slider
const toursTrack = document.getElementById('toursTrack');
const tourDots = document.querySelectorAll('#toursDots .tour-dot');
const prevTour = document.getElementById('prevTour');
const nextTour = document.getElementById('nextTour');
let currentTour = 0;
let tourInterval;

function updateTourSlider() {
    if (toursTrack) {
        toursTrack.style.transform = `translateX(-${currentTour * 33.333}%)`;
        
        tourDots.forEach((dot, index) => {
            if (index === currentTour) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
}

function startTourInterval() {
    tourInterval = setInterval(() => {
        currentTour = (currentTour + 1) % tourDots.length;
        updateTourSlider();
    }, 6000);
}

function resetTourInterval() {
    clearInterval(tourInterval);
    startTourInterval();
}

// Initialize tour slider
if (toursTrack) {
    startTourInterval();
    
    // Add event listeners to tour dots
    tourDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentTour = index;
            updateTourSlider();
            resetTourInterval();
        });
    });
    
    // Add event listeners to tour arrows
    if (prevTour && nextTour) {
        prevTour.addEventListener('click', () => {
            currentTour = (currentTour - 1 + tourDots.length) % tourDots.length;
            updateTourSlider();
            resetTourInterval();
        });
        
        nextTour.addEventListener('click', () => {
            currentTour = (currentTour + 1) % tourDots.length;
            updateTourSlider();
            resetTourInterval();
        });
    }
}

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

// Search Tabs
const searchTabs = document.querySelectorAll('.search-tab');

searchTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        searchTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// Featured Filters
const featuredFilters = document.querySelectorAll('.featured-filter');

featuredFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        featuredFilters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');
    });
});

// Chart Filters
const chartFilters = document.querySelectorAll('.chart-filter');

chartFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        chartFilters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');
    });
});