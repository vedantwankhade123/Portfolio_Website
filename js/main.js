document.addEventListener('DOMContentLoaded', () => {
    // Common elements
    const body = document.body;
    const header = document.querySelector('header');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Theme functionality removed

    // Initialize education section visibility and animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    // Observe timeline items for animation
    document.querySelectorAll('.timeline-item').forEach(item => observer.observe(item));
    
    // Add scrolled class to header on scroll
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            // Only remove scrolled class if menu is not open
            if (!nav.classList.contains('active')) {
                header.classList.remove('scrolled');
            }
        }
    }
    
    // Initial check in case page loads with scroll
    handleScroll();
    
    // Add scroll event listener with debounce for better performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(handleScroll, 10);
    });

    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);

    // Toggle mobile menu
    function toggleMenu() {
        // Toggle active class on nav and burger
        nav.classList.toggle('active');
        burger.classList.toggle('active');
        
        // Toggle body scroll
        body.classList.toggle('no-scroll');
        
        // Add scrolled class to header when menu is open
        if (nav.classList.contains('active')) {
            header.classList.add('scrolled');
            
            // Animate in menu items with staggered delay
            navLinks.forEach((link, index) => {
                link.style.opacity = '0';
                link.style.transform = 'translateX(30px)';
                link.style.transition = 'all 0.4s ease ' + (index * 0.1) + 's';
                
                // Force reflow to ensure styles are applied before changing them
                void link.offsetWidth;
                
                // Apply staggered animation
                link.style.opacity = '1';
                link.style.transform = 'translateX(0)';
            });
        } else {
            // Only remove scrolled class if not scrolled
            if (window.scrollY < 50) {
                header.classList.remove('scrolled');
            }
            
            // Reset menu items for next open
            navLinks.forEach(link => {
                link.style.opacity = '0';
                link.style.transform = 'translateX(30px)';
            });
        }
    }

    // Event Listeners
    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });
    
    // Close menu when clicking on overlay
    overlay.addEventListener('click', toggleMenu);

    // Close menu when clicking on a nav link or outside the menu
    function closeMenu() {
        if (nav.classList.contains('active')) {
            toggleMenu();
        }
    }
    
    // Close menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target) || burger.contains(event.target);
        if (!isClickInsideNav && nav.classList.contains('active')) {
            closeMenu();
        }
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && nav.classList.contains('active')) {
            closeMenu();
        }
    });

    // Education section animation on scroll
    const educationSection = document.querySelector('#education');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function animateOnScroll() {
        const sectionTop = educationSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            timelineItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 200);
            });
            // Remove the event listener after animation runs once
            window.removeEventListener('scroll', animateOnScroll);
        }
    }
    
    // Initial check in case the section is already in view
    animateOnScroll();
    // Add scroll event listener for when user scrolls
    window.addEventListener('scroll', animateOnScroll);

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        // Clear the timer if it's already running
        clearTimeout(resizeTimer);
        
        // Set a new timer to handle the resize
        resizeTimer = setTimeout(() => {
            // If window is resized to desktop view, reset mobile menu
            if (window.innerWidth > 768) {
                nav.classList.remove('nav-active');
                burger.classList.remove('active');
                overlay.classList.remove('active');
                body.classList.remove('no-scroll');
                
                // Reset link styles
                navLinks.forEach(link => {
                    link.style.opacity = '';
                    link.style.transform = '';
                    link.style.transition = '';
                });
            }
        }, 250);
    });
});
