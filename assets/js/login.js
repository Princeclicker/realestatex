
// Form Validation and Submission
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const successAlert = document.getElementById('successAlert');
const errorAlert = document.getElementById('errorAlert');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset alerts
    successAlert.style.display = 'none';
    errorAlert.style.display = 'none';
    
    // Get form values
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorAlert.textContent = 'Please enter a valid email address.';
        errorAlert.style.display = 'block';
        emailInput.classList.add('error');
        emailInput.focus();
        return;
    }
    
    // Validate password
    if (password.length < 6) {
        errorAlert.textContent = 'Password must be at least 6 characters.';
        errorAlert.style.display = 'block';
        passwordInput.classList.add('error');
        passwordInput.focus();
        return;
    }
    
    // For demo purposes, simulate successful login
    // In a real application, this would be an API call to authenticate
    successAlert.style.display = 'block';
    loginForm.reset();
    
    // Simulate redirect after successful login
    setTimeout(() => {
        window.location.href = 'index.html'; // Redirect to homepage for demo
    }, 2000);
});

// Remove error class on input
emailInput.addEventListener('input', function() {
    this.classList.remove('error');
    errorAlert.style.display = 'none';
});

passwordInput.addEventListener('input', function() {
    this.classList.remove('error');
    errorAlert.style.display = 'none';
});

// Toggle Password Visibility
const passwordToggle = document.getElementById('passwordToggle');

passwordToggle.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.textContent = '🔒';
    } else {
        passwordInput.type = 'password';
        passwordToggle.textContent = '👁️';
    }
});

// Social Login Buttons (Demo Only)
const socialButtons = document.querySelectorAll('.social-btn');

socialButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Social login is not available in this demo. Please use the email login form.');
    });
});

// Forgot Password Link
const forgotPasswordLink = document.querySelector('.forgot-password');

forgotPasswordLink.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Password reset functionality is not available in this demo.');
});
