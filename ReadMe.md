Elegance Restaurant Booking System
Final Web Development Project
By Nicole Whittney Akeyo

LIVE DEMO: https://elegance-dining-nicoleakeyo.netlify.app/

1. Introduction
This project is a responsive, multi-page website for Elegance Restaurant, featuring a table booking system. Designed to fulfill all academic requirements, it demonstrates proficiency in:

Frontend Technologies: HTML5, CSS3, JavaScript

Responsive Design: Mobile-first approach

Interactive Elements: Form validation, theme toggling

2. Project Objectives
Aligned with the assignment brief, this website achieves:

✔ Three Interconnected Pages

Home (Booking interface)

About (Restaurant backstory)

Contact (Location/contact form)

✔ Key Technical Requirements

Semantic HTML5 structure

CSS3 styling with Flexbox/Grid

JavaScript for dynamic interactions

✔ User Experience Features

Dark/light mode toggle (default: dark)

Mobile-responsive navigation

Form validation with error feedback

3. Technical Implementation
3.1 File Structure
restaurant-booking/
├── index.html          # Landing page with booking form
├── about.html          # Restaurant history/team
├── contact.html        # Contact details/map
├── css/
│   ├── style.css       # Core styling (colors, typography)
│   └── responsive.css  # Media queries (mobile/tablet)
├── js/
│   ├── main.js         # Theme toggle, testimonial slider
│   └── form-validation.js # Input validation logic
└── images/             # High-res Pexels images
3.2 Code Highlights
a) Dark/Light Theme Logic (main.js)

javascript
// Toggle theme and save preference
function toggleTheme() {
  document.body.classList.toggle('light-mode');
  localStorage.setItem('theme', 
    document.body.classList.contains('light-mode') ? 'light' : 'dark');
}
b) Responsive Design Approach (responsive.css)

css
/* Mobile-first media queries */
@media (min-width: 768px) {
  .featured-grid { 
    grid-template-columns: repeat(2, 1fr); 
  }
}
c) Form Validation (form-validation.js)

Real-time error detection

Highlights invalid fields

Prevents submission until all inputs are valid

4. Deployment Instructions
4.1 Local Testing
Download project files

Open index.html in any modern browser

4.2 Web Hosting
Deployed via GitHub Pages:

Navigate to repository → Settings → Pages

Select branch: main

Set source folder: /root

(Live demo link: [Insert Your URL Here])

5. Design Philosophy
5.1 Visual Identity
Color Scheme:

Primary: Dark slate grey (#2f4f4f)

Secondary: Black (#000000)

Accent: Pink (#ff69b4)

Typography:

Headings: Playfair Display (elegant serif)

Body: Montserrat (clean sans-serif)

5.2 User Flow
Landing page → Immediate booking CTA

Seamless navigation between sections

Consistent theme across all pages

6. Attribution & Licensing
Images: Sourced from Pexels (CC0 license)

Icons: Font Awesome v6

Code License: MIT (Open-source)

Conclusion
This project demonstrates comprehensive web development skills while meeting all specified academic criteria. The modular code structure and detailed documentation ensure easy extensibility for future enhancements.
