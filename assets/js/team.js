
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

// Team Filters
const filterButtons = document.querySelectorAll('.filter-btn');
const teamCards = document.querySelectorAll('.team-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter value
        const filterValue = button.getAttribute('data-filter');
        
        // Show/hide team cards based on filter
        teamCards.forEach(card => {
            if (filterValue === 'all') {
                if (!card.classList.contains('hidden-member')) {
                    card.style.display = 'block';
                }
            } else {
                if (card.getAttribute('data-role') === filterValue || 
                    card.getAttribute('data-specialty') === filterValue) {
                    if (!card.classList.contains('hidden-member')) {
                        card.style.display = 'block';
                    }
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
});

// Show More Team Members
const showMoreBtn = document.getElementById('showMoreBtn');
const hiddenMembers = document.querySelectorAll('.hidden-member');

showMoreBtn.addEventListener('click', () => {
    hiddenMembers.forEach(member => {
        member.style.display = 'block';
        member.classList.remove('hidden-member');
    });
    
    // Hide the button after showing all members
    showMoreBtn.style.display = 'none';
    
    // Apply current filter
    const activeFilter = document.querySelector('.filter-btn.active');
    if (activeFilter) {
        const filterValue = activeFilter.getAttribute('data-filter');
        if (filterValue !== 'all') {
            teamCards.forEach(card => {
                if (card.getAttribute('data-role') !== filterValue && 
                    card.getAttribute('data-specialty') !== filterValue) {
                    card.style.display = 'none';
                }
            });
        }
    }
});

// Testimonials Slider
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const testimonialDots = document.querySelectorAll('.testimonial-dot');
const testimonialPrev = document.getElementById('testimonialPrev');
const testimonialNext = document.getElementById('testimonialNext');
let currentSlide = 0;

function showSlide(index) {
    // Hide all slides
    testimonialSlides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Remove active class from all dots
    testimonialDots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show current slide and activate current dot
    testimonialSlides[index].classList.add('active');
    testimonialDots[index].classList.add('active');
    
    // Update current slide index
    currentSlide = index;
}

// Next slide
testimonialNext.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % testimonialSlides.length;
    showSlide(currentSlide);
});

// Previous slide
testimonialPrev.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
    showSlide(currentSlide);
});

// Dot navigation
testimonialDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Auto slide every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % testimonialSlides.length;
    showSlide(currentSlide);
}, 5000);
