
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

// Animated Number Counters
function animateCounter(elementId, targetValue, duration) {
    const element = document.getElementById(elementId);
    const startValue = 0;
    const increment = targetValue / (duration / 16); // 16ms is roughly 60fps
    let currentValue = startValue;
    
    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            clearInterval(timer);
            currentValue = targetValue;
        }
        
        // Format the number with commas if it's large
        const formattedValue = Math.floor(currentValue).toLocaleString();
        
        // Add a plus sign if it's not the millions in sales
        const displayValue = elementId === 'millionsSales' ? formattedValue : formattedValue + '+';
        
        element.textContent = displayValue;
    }, 16);
}

// Check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Start animation when stats section is in viewport
let animationStarted = false;

function checkStatsVisibility() {
    const statsSection = document.querySelector('.stats-section');
    if (isElementInViewport(statsSection) && !animationStarted) {
        animateCounter('propertiesSold', 1500, 2000);
        animateCounter('happyClients', 500, 2000);
        animateCounter('agentsOnboard', 12, 2000);
        animateCounter('millionsSales', 500, 2000);
        animationStarted = true;
    }
}

// Check visibility on scroll
window.addEventListener('scroll', checkStatsVisibility);

// Check visibility on page load
window.addEventListener('load', checkStatsVisibility);