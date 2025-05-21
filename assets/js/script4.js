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

// Horizontal Scroll Controls
const scrollContent = document.getElementById('scrollContent');
const scrollPrev = document.getElementById('scrollPrev');
const scrollNext = document.getElementById('scrollNext');

if (scrollContent && scrollPrev && scrollNext) {
    const scrollItemWidth = 400 + 16; // Item width + gap
    
    scrollPrev.addEventListener('click', () => {
        scrollContent.scrollBy({
            left: -scrollItemWidth,
            behavior: 'smooth'
        });
    });
    
    scrollNext.addEventListener('click', () => {
        scrollContent.scrollBy({
            left: scrollItemWidth,
            behavior: 'smooth'
        });
    });
}

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