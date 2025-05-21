
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

// Set minimum date for visit date picker to today
const today = new Date().toISOString().split('T')[0];
document.getElementById('visitDate').setAttribute('min', today);

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => {
        message.style.display = 'none';
    });
    
    // Reset form controls
    const formControls = document.querySelectorAll('.form-control');
    formControls.forEach(control => {
        control.classList.remove('error');
    });
    
    // Validate name
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('name').classList.add('error');
        document.getElementById('nameError').style.display = 'block';
        return;
    }
    
    // Validate email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailRegex.test(email)) {
        document.getElementById('email').classList.add('error');
        document.getElementById('emailError').style.display = 'block';
        return;
    }
    
    // Validate subject
    const subject = document.getElementById('subject').value;
    if (subject === '') {
        document.getElementById('subject').classList.add('error');
        document.getElementById('subjectError').style.display = 'block';
        return;
    }
    
    // Validate message
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        document.getElementById('message').classList.add('error');
        document.getElementById('messageError').style.display = 'block';
        return;
    }
    
    // If all validations pass, show success message
    formSuccess.style.display = 'block';
    contactForm.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        formSuccess.style.display = 'none';
    }, 5000);
});

// Schedule Visit Form Validation
const scheduleForm = document.getElementById('scheduleForm');

scheduleForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => {
        message.style.display = 'none';
    });
    
    // Reset form controls
    const formControls = document.querySelectorAll('.form-control');
    formControls.forEach(control => {
        control.classList.remove('error');
    });
    
    // Validate name
    const visitName = document.getElementById('visitName').value.trim();
    if (visitName === '') {
        document.getElementById('visitName').classList.add('error');
        document.getElementById('visitNameError').style.display = 'block';
        return;
    }
    
    // Validate email
    const visitEmail = document.getElementById('visitEmail').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (visitEmail === '' || !emailRegex.test(visitEmail)) {
        document.getElementById('visitEmail').classList.add('error');
        document.getElementById('visitEmailError').style.display = 'block';
        return;
    }
    
    // Validate phone
    const visitPhone = document.getElementById('visitPhone').value.trim();
    if (visitPhone === '') {
        document.getElementById('visitPhone').classList.add('error');
        document.getElementById('visitPhoneError').style.display = 'block';
        return;
    }
    
    // Validate property type
    const propertyType = document.getElementById('propertyType').value;
    if (propertyType === '') {
        document.getElementById('propertyType').classList.add('error');
        document.getElementById('propertyTypeError').style.display = 'block';
        return;
    }
    
    // Validate date
    const visitDate = document.getElementById('visitDate').value;
    if (visitDate === '') {
        document.getElementById('visitDate').classList.add('error');
        document.getElementById('visitDateError').style.display = 'block';
        return;
    }
    
    // Validate time
    const visitTime = document.getElementById('visitTime').value;
    if (visitTime === '') {
        document.getElementById('visitTime').classList.add('error');
        document.getElementById('visitTimeError').style.display = 'block';
        return;
    }
    
    // If all validations pass, show alert and reset form
    alert('Thank you for scheduling a visit! We will confirm your appointment shortly.');
    scheduleForm.reset();
});

// Form input event listeners to clear errors on input
const formInputs = document.querySelectorAll('.form-control');
formInputs.forEach(input => {
    input.addEventListener('input', function() {
        this.classList.remove('error');
        const errorId = this.id + 'Error';
        const errorElement = document.getElementById(errorId);
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    });
});
