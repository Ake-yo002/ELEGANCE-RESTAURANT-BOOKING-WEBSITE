/**
 * Main JavaScript for Elegance Restaurant Booking System
 * Handles theme switching, mobile menu, and testimonial slider
 * Author: Nicole Whittney Akeyo
 */

// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
const reservationForm = document.getElementById('reservation-form');
const contactForm = document.getElementById('contact-form');

// Current testimonial index
let currentTestimonial = 0;

// Check for saved theme preference or use preferred color scheme
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.body.classList.toggle('light-mode', savedTheme === 'light');
    updateThemeIcon();
}

// Update theme toggle icon based on current mode
function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('light-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
}

// Toggle mobile menu
function toggleMenu() {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    
    // Toggle hamburger to X
    const spans = hamburger.querySelectorAll('span');
    if (hamburger.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'rotate(0) translate(0)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0) translate(0)';
    }
}

// Show testimonial by index
function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    
    // Handle wrap-around for indices
    if (index >= testimonials.length) {
        currentTestimonial = 0;
    } else if (index < 0) {
        currentTestimonial = testimonials.length - 1;
    } else {
        currentTestimonial = index;
    }
    
    testimonials[currentTestimonial].classList.add('active');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();
    
    // Show first testimonial
    showTestimonial(0);
    
    // Theme toggle
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
        updateThemeIcon();
    });
    
    // Mobile menu toggle
    hamburger.addEventListener('click', toggleMenu);
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
    
    // Testimonial navigation
    prevBtn.addEventListener('click', () => showTestimonial(currentTestimonial - 1));
    nextBtn.addEventListener('click', () => showTestimonial(currentTestimonial + 1));
    
    // Auto-rotate testimonials every 5 seconds
    setInterval(() => showTestimonial(currentTestimonial + 1), 5000);
});

// Make reservation form submission
if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Form validation would be handled in form-validation.js
        alert('Reservation request submitted! We will contact you shortly to confirm.');
        reservationForm.reset();
    });
}

// Contact form submission
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Form validation would be handled in form-validation.js
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}