/**
 * DevCraft Landing Page JS Client
 * Author: Alex Morgan
 * Description: Interactive behaviors, custom scroll animations, mobile navigation toggle, and form validation.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // ==========================================================================
    // 1. Navigation Menu & Hamburger Toggle
    // ==========================================================================
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.getElementById('header');

    // Toggle menu active state on hamburger click
    hamburger.addEventListener('click', () => {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside of the navbar
    document.addEventListener('click', (e) => {
        if (!header.contains(e.target) && navMenu.classList.contains('active')) {
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });


    // ==========================================================================
    // 2. Scroll-Based Header & Back-To-Top Transitions
    // ==========================================================================
    const backToTopBtn = document.getElementById('back-to-top');

    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        // Navbar Scroll state
        if (scrollPosition > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Back to top button visibility
        if (scrollPosition > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger scroll check on load to prevent header issues if reloading midway
    handleScroll();

    // Scroll to Top action
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // ==========================================================================
    // 3. Intersection Observer for Scroll Reveal Animations
    // ==========================================================================
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class once entering viewport
                entry.target.classList.add('reveal-visible');
                // Stop observing once animated to avoid recalculating
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15, // trigger when 15% of the element is visible
        rootMargin: '0px 0px -50px 0px' // offset bottom trigger point slightly
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    // ==========================================================================
    // 4. Scrollspy (Highlight Active Navigation Links)
    // ==========================================================================
    const sections = document.querySelectorAll('section[id]');

    const scrollspyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.35, // Trigger when 35% of the section is visible
        rootMargin: '-20% 0px -40% 0px' // Restrict viewport bounds for accuracy
    });

    sections.forEach(section => {
        scrollspyObserver.observe(section);
    });


    // ==========================================================================
    // 5. Contact Form Handler & Client-side Validation
    // ==========================================================================
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Inputs
        const nameInput = document.getElementById('contact-name');
        const emailInput = document.getElementById('contact-email');
        const subjectInput = document.getElementById('contact-subject');
        const messageInput = document.getElementById('contact-message');
        const submitBtn = document.getElementById('contact-submit');

        // Simple validation check
        let isFormValid = true;
        let errorMessage = '';

        // Reset previous status
        formFeedback.className = 'form-feedback';
        formFeedback.innerHTML = '';

        // Validate individual fields
        if (!nameInput.value.trim()) {
            isFormValid = false;
            errorMessage = 'Please enter your full name.';
            nameInput.focus();
        } else if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
            isFormValid = false;
            errorMessage = 'Please enter a valid email address.';
            emailInput.focus();
        } else if (!subjectInput.value.trim()) {
            isFormValid = false;
            errorMessage = 'Please enter a message subject.';
            subjectInput.focus();
        } else if (!messageInput.value.trim()) {
            isFormValid = false;
            errorMessage = 'Please write a message description.';
            messageInput.focus();
        }

        if (!isFormValid) {
            // Show validation error feedback
            formFeedback.classList.add('error');
            formFeedback.innerHTML = `<i data-lucide="alert-circle"></i> <span>${errorMessage}</span>`;
            if (typeof lucide !== 'undefined') lucide.createIcons();
            return;
        }

        // Simulating Form submission
        submitBtn.disabled = true;
        submitBtn.innerHTML = `Sending... <i data-lucide="loader-2" class="animate-spin"></i>`;
        if (typeof lucide !== 'undefined') lucide.createIcons();

        setTimeout(() => {
            // Success response
            submitBtn.disabled = false;
            submitBtn.innerHTML = `Send Message <i data-lucide="send"></i>`;
            if (typeof lucide !== 'undefined') lucide.createIcons();

            // Clear inputs
            contactForm.reset();

            // Success feedback
            formFeedback.classList.add('success');
            formFeedback.innerHTML = `<i data-lucide="check-circle-2"></i> <span>Thank you! Your message has been sent successfully.</span>`;
            if (typeof lucide !== 'undefined') lucide.createIcons();

            // Clear success message after 5 seconds
            setTimeout(() => {
                formFeedback.className = 'form-feedback';
                formFeedback.innerHTML = '';
            }, 5000);

        }, 1500); // 1.5 second loading delay mockup
    });

    // Email validating helper
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
});
