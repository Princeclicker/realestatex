
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

// Account Type Selection
const buyerOption = document.getElementById('buyerOption');
const agentOption = document.getElementById('agentOption');

buyerOption.addEventListener('click', () => {
    buyerOption.classList.add('selected');
    agentOption.classList.remove('selected');
});

agentOption.addEventListener('click', () => {
    agentOption.classList.add('selected');
    buyerOption.classList.remove('selected');
});

// Initialize account type selection
buyerOption.classList.add('selected');

// Toggle Password Visibility
const togglePassword = document.getElementById('togglePassword');
const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.textContent = '🔒';
    } else {
        passwordInput.type = 'password';
        togglePassword.textContent = '👁️';
    }
});

toggleConfirmPassword.addEventListener('click', () => {
    if (confirmPasswordInput.type === 'password') {
        confirmPasswordInput.type = 'text';
        toggleConfirmPassword.textContent = '🔒';
    } else {
        confirmPasswordInput.type = 'password';
        toggleConfirmPassword.textContent = '👁️';
    }
});

// Password Strength Meter
const passwordStrengthMeter = document.getElementById('passwordStrengthMeter');
const passwordStrengthText = document.getElementById('passwordStrengthText');

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    let strength = 0;
    let strengthText = '';
    
    if (password.length === 0) {
        strength = 0;
        strengthText = 'Not entered';
    } else if (password.length < 6) {
        strength = 20;
        strengthText = 'Very weak';
    } else {
        strength = 20;
        
        // Check for length
        if (password.length >= 8) {
            strength += 20;
        }
        
        // Check for lowercase letters
        if (/[a-z]/.test(password)) {
            strength += 15;
        }
        
        // Check for uppercase letters
        if (/[A-Z]/.test(password)) {
            strength += 15;
        }
        
        // Check for numbers
        if (/[0-9]/.test(password)) {
            strength += 15;
        }
        
        // Check for special characters
        if (/[^A-Za-z0-9]/.test(password)) {
            strength += 15;
        }
        
        // Determine strength text
        if (strength < 40) {
            strengthText = 'Weak';
        } else if (strength < 70) {
            strengthText = 'Medium';
        } else if (strength < 90) {
            strengthText = 'Strong';
        } else {
            strengthText = 'Very strong';
        }
    }
    
    // Update strength meter
    passwordStrengthMeter.style.width = `${strength}%`;
    
    // Update color based on strength
    if (strength < 40) {
        passwordStrengthMeter.style.backgroundColor = '#e74c3c';
    } else if (strength < 70) {
        passwordStrengthMeter.style.backgroundColor = '#f39c12';
    } else {
        passwordStrengthMeter.style.backgroundColor = '#27ae60';
    }
    
    // Update strength text
    passwordStrengthText.textContent = `Password strength: ${strengthText}`;
});

// Form Validation
const registrationForm = document.getElementById('registrationForm');
const successMessage = document.getElementById('successMessage');
const registerForm = document.getElementById('registerForm');

registrationForm.addEventListener('submit', function(e) {
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
    
    // Validate form
    let isValid = true;
    
    // First Name validation
    const firstName = document.getElementById('firstName').value.trim();
    if (firstName === '') {
        document.getElementById('firstName').classList.add('error');
        document.getElementById('firstNameError').style.display = 'block';
        isValid = false;
    }
    
    // Last Name validation
    const lastName = document.getElementById('lastName').value.trim();
    if (lastName === '') {
        document.getElementById('lastName').classList.add('error');
        document.getElementById('lastNameError').style.display = 'block';
        isValid = false;
    }
    
    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailRegex.test(email)) {
        document.getElementById('email').classList.add('error');
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }
    
    // Phone validation (optional)
    const phone = document.getElementById('phone').value.trim();
    if (phone !== '') {
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
            document.getElementById('phone').classList.add('error');
            document.getElementById('phoneError').style.display = 'block';
            isValid = false;
        }
    }
    
    // Password validation
    const password = document.getElementById('password').value;
    if (password.length < 8 || !/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
        document.getElementById('password').classList.add('error');
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }
    
    // Confirm Password validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
        document.getElementById('confirmPassword').classList.add('error');
        document.getElementById('confirmPasswordError').style.display = 'block';
        isValid = false;
    }
    
    // Terms checkbox validation
    const termsCheckbox = document.getElementById('termsCheckbox');
    if (!termsCheckbox.checked) {
        isValid = false;
        alert('Please agree to the Terms of Service and Privacy Policy');
    }
    
    // If form is valid, show success message
    if (isValid) {
        registerForm.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

// Remove error class on input
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
