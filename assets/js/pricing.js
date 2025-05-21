
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

// Pricing Toggle
const pricingToggle = document.getElementById('pricingToggle');
const monthlyLabel = document.getElementById('monthlyLabel');
const annualLabel = document.getElementById('annualLabel');
const monthlyPrices = document.querySelectorAll('.monthly-price');
const annualPrices = document.querySelectorAll('.annual-price');

pricingToggle.addEventListener('change', () => {
    if (pricingToggle.checked) {
        // Annual pricing
        monthlyPrices.forEach(price => price.style.display = 'none');
        annualPrices.forEach(price => price.style.display = 'block');
        monthlyLabel.classList.remove('active');
        annualLabel.classList.add('active');
    } else {
        // Monthly pricing
        monthlyPrices.forEach(price => price.style.display = 'block');
        annualPrices.forEach(price => price.style.display = 'none');
        monthlyLabel.classList.add('active');
        annualLabel.classList.remove('active');
    }
});

// Plan Button Click
const planButtons = document.querySelectorAll('.plan-button');
const demoModal = document.getElementById('demoModal');
const modalClose = document.getElementById('modalClose');
const modalButton = document.getElementById('modalButton');

planButtons.forEach(button => {
    button.addEventListener('click', () => {
        const plan = button.getAttribute('data-plan');
        demoModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
});

// Close Modal
function closeModal() {
    demoModal.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
}

modalClose.addEventListener('click', closeModal);
modalButton.addEventListener('click', closeModal);

// Close modal when clicking outside
demoModal.addEventListener('click', (e) => {
    if (e.target === demoModal) {
        closeModal();
    }
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
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

// Highlight Popular Plan on Load
window.addEventListener('load', () => {
    const popularCard = document.querySelector('.pricing-card.popular');
    setTimeout(() => {
        popularCard.style.transform = 'scale(1.05) translateY(-10px)';
        setTimeout(() => {
            popularCard.style.transform = 'scale(1.05)';
        }, 500);
    }, 1000);
});
