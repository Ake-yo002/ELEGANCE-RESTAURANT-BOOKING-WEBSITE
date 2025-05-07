/**
 * Main JavaScript for Elegance Restaurant Booking System
 * Handles theme switching, mobile menu, and testimonial slider
 * Author: Nicole Whittney Akeyo
 */

// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
const reservationForm = document.getElementById('reservation-form');
const contactForm = document.getElementById('contact-form');

// Current testimonial index
let currentTestimonial = 0;

// --- Theme Functions ---
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.body.classList.toggle('light-mode', savedTheme === 'light');
    updateThemeIcon();
}

function updateThemeIcon() {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('light-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
}

// --- Hamburger Menu ---
function setupMobileMenu() {
    
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (!hamburger || !mobileMenu) {
        console.warn('Mobile menu elements not found on this page.');
        return;
    }

    // Toggle menu function
    const toggleMenu = () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Hamburger to X animation
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
    };

    // Event listeners
    hamburger.addEventListener('click', toggleMenu);
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
}

// --- Testimonials ---
function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    
    // Handle wrap-around
    if (index >= testimonials.length) currentTestimonial = 0;
    else if (index < 0) currentTestimonial = testimonials.length - 1;
    else currentTestimonial = index;
    
    testimonials[currentTestimonial].classList.add('active');
}

// --- Initialize Everything ---
document.addEventListener('DOMContentLoaded', () => {
    // Theme
    initTheme();
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            localStorage.setItem('theme', 
                document.body.classList.contains('light-mode') ? 'light' : 'dark');
            updateThemeIcon();
        });
    }

    // Mobile Menu
    setupMobileMenu();

    // Testimonials
    if (testimonials.length > 0) {
        showTestimonial(0);
        prevBtn?.addEventListener('click', () => showTestimonial(currentTestimonial - 1));
        nextBtn?.addEventListener('click', () => showTestimonial(currentTestimonial + 1));
        setInterval(() => showTestimonial(currentTestimonial + 1), 5000);
    }

    // Forms
    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Reservation request submitted! We will contact you shortly to confirm.');
            reservationForm.reset();
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});