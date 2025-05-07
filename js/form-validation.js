/**
 * Form Validation for Elegance Restaurant Booking System
 * Handles validation for reservation and contact forms
 * Author: Nicole Whittney Akeyo
 */

// Validate reservation form
function validateReservationForm() {
    const form = document.getElementById('reservation-form');
    if (!form) return;
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const date = document.getElementById('date');
    const time = document.getElementById('time');
    const guests = document.getElementById('guests');
    
    let isValid = true;
    
    // Reset error states
    form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    form.querySelectorAll('.error-message').forEach(el => el.remove());
    
    // Name validation
    if (!name.value.trim()) {
        showError(name, 'Please enter your name');
        isValid = false;
    }
    
    // Email validation
    if (!email.value.trim()) {
        showError(email, 'Please enter your email');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email');
        isValid = false;
    }
    
    // Phone validation
    if (!phone.value.trim()) {
        showError(phone, 'Please enter your phone number');
        isValid = false;
    } else if (!isValidPhone(phone.value)) {
        showError(phone, 'Please enter a valid phone number');
        isValid = false;
    }
    
    // Date validation
    if (!date.value) {
        showError(date, 'Please select a date');
        isValid = false;
    } else if (new Date(date.value) < new Date()) {
        showError(date, 'Please select a future date');
        isValid = false;
    }
    
    // Time validation
    if (!time.value) {
        showError(time, 'Please select a time');
        isValid = false;
    }
    
    // Guests validation
    if (!guests.value) {
        showError(guests, 'Please select number of guests');
        isValid = false;
    }
    
    return isValid;
}

// Validate contact form
function validateContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    const name = document.getElementById('contact-name');
    const email = document.getElementById('contact-email');
    const message = document.getElementById('contact-message');
    
    let isValid = true;
    
    // Reset error states
    form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    form.querySelectorAll('.error-message').forEach(el => el.remove());
    
    // Name validation
    if (!name.value.trim()) {
        showError(name, 'Please enter your name');
        isValid = false;
    }
    
    // Email validation
    if (!email.value.trim()) {
        showError(email, 'Please enter your email');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email');
        isValid = false;
    }
    
    // Message validation
    if (!message.value.trim()) {
        showError(message, 'Please enter your message');
        isValid = false;
    }
    
    return isValid;
}

// Helper function to show error messages
function showError(input, message) {
    const formGroup = input.closest('.form-group');
    formGroup.classList.add('error');
    
    const errorMessage = document.createElement('p');
    errorMessage.className = 'error-message';
    errorMessage.style.color = '#ff69b4';
    errorMessage.style.marginTop = '5px';
    errorMessage.style.fontSize = '0.9rem';
    errorMessage.textContent = message;
    
    formGroup.appendChild(errorMessage);
}

// Email validation helper
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Phone validation helper
function isValidPhone(phone) {
    const re = /^[\d\s\-\(\)\+]{10,}$/;
    return re.test(phone);
}

// Initialize form validation
document.addEventListener('DOMContentLoaded', () => {
    const reservationForm = document.getElementById('reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            if (!validateReservationForm()) {
                e.preventDefault();
            }
        });
    }
    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            if (!validateContactForm()) {
                e.preventDefault();
            }
        });
    }
});