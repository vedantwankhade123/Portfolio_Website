// DOM Elements
const body = document.querySelector('body');
const themeToggle = document.querySelector('#checkbox');
const navLinks = document.querySelectorAll('.nav-links li');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const header = document.querySelector('header');
const sections = document.querySelectorAll('section');
const contactForm = document.getElementById('contactForm');

// Contact Form Submission
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const btnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Get form data
        const formData = {
            from_name: this.name.value,
            from_email: this.email.value,
            subject: this.subject.value,
            message: this.message.value
        };
        
        // Send email using EmailJS
        emailjs.send('service_dmk149v', 'template_osf6rqd', formData)
            .then(function(response) {
                // Show success message
                alert('Message sent successfully! I\'ll get back to you soon.');
                contactForm.reset();
            }, function(error) {
                // Show error message
                alert('Failed to send message. Please try again later or contact me directly at vedanwankhade47@gmail.com');
                console.error('EmailJS Error:', error);
            })
            .finally(() => {
                // Reset button state
                submitBtn.innerHTML = btnText;
                submitBtn.disabled = false;
            });
    });
}

// Theme Toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeLabel = document.querySelector('.theme-label');
    
    // Function to set theme
    function setTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.checked = true;
            if (themeLabel) themeLabel.textContent = 'Dark Mode';
        } else {
            body.classList.remove('dark-mode');
            themeToggle.checked = false;
            if (themeLabel) themeLabel.textContent = 'Light Mode';
        }
        localStorage.setItem('theme', theme);
    }
    
    // Check for saved theme preference or use system preference
    function getPreferredTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    // Apply theme on page load
    setTheme(getPreferredTheme());
    
    // Listen for theme toggle changes
    themeToggle.addEventListener('change', function() {
        const newTheme = this.checked ? 'dark' : 'light';
        setTheme(newTheme);
        
        // Add animation class for transition
        document.body.classList.add('theme-transition');
        setTimeout(() => {
            document.body.classList.remove('theme-transition');
        }, 1000);
    });
    
    // Listen for system theme changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
});

// Navigation Menu Toggle
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger Animation
    burger.classList.toggle('toggle');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            
            navLinks.forEach(link => {
                link.style.animation = '';
            });
        }
    });
});

// Add toggle class to burger
burger.addEventListener('click', () => {
    burger.classList.toggle('toggle');
});

// Scroll to sections smoothly
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(li => {
        li.querySelector('a').classList.remove('active');
        if (li.querySelector('a').getAttribute('href') === `#${current}`) {
            li.querySelector('a').classList.add('active');
        }
    });
    
    // Header styling on scroll
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll reveal animation
const scrollReveal = () => {
    const revealElements = document.querySelectorAll('.reveal');
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', scrollReveal);

// Add reveal class to elements
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill-item, .project-card, .contact-item')
        .forEach(item => {
            item.classList.add('reveal');
        });
    
    // Initial check for elements in viewport
    scrollReveal();
    
    // Add toggle class to burger
    const burgerLines = document.querySelectorAll('.burger div');
    burgerLines.forEach(line => {
        line.classList.add('toggle-line');
    });
});

// Education timeline scroll animation
function animateEducationTimeline() {
    const educationTimeline = document.querySelector('.education-timeline');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const roadMarkers = document.querySelectorAll('.road-marker');
    const wavePath = document.querySelector('.wave-path');
    
    if (!educationTimeline) return;
    
    const animateElements = () => {
        const timelineTop = educationTimeline.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8;
        
        if (timelineTop < triggerPoint) {
            // Animate the wave path
            if (wavePath) {
                wavePath.classList.add('animate');
            }
            
            // Animate timeline items
            timelineItems.forEach(item => {
                item.classList.add('animate');
            });
            
            // Animate road markers
            roadMarkers.forEach(marker => {
                marker.classList.add('animate');
            });
            
            // Remove scroll listener once animation is triggered
            window.removeEventListener('scroll', animateElements);
        }
    };
    
    window.addEventListener('scroll', animateElements);
    
    // Check if elements are already in view on page load
    animateElements();
}

// Initialize education timeline animation
document.addEventListener('DOMContentLoaded', () => {
    animateEducationTimeline();
});

// Form submission
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Here you would typically send the data to a server
        // For now, we'll just log it and show a success message
        console.log('Form Data:', formData);
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <p>Thank you for your message, ${formData.name}! I'll get back to you soon.</p>
        `;
        
        contactForm.innerHTML = '';
        contactForm.appendChild(successMessage);
        
        // Reset form after 5 seconds
        setTimeout(() => {
            contactForm.innerHTML = `
                <div class="form-group">
                    <input type="text" id="name" name="name" placeholder="Your Name" required>
                </div>
                <div class="form-group">
                    <input type="email" id="email" name="email" placeholder="Your Email" required>
                </div>
                <div class="form-group">
                    <input type="text" id="subject" name="subject" placeholder="Subject" required>
                </div>
                <div class="form-group">
                    <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" class="btn primary-btn">Send Message</button>
            `;
        }, 5000);
    });
}

// Typing animation for hero section
const typingEffect = () => {
    const text = document.querySelector('.typing-text');
    if (text) {
        const textContent = text.textContent;
        text.textContent = '';
        
        let i = 0;
        const typing = setInterval(() => {
            if (i < textContent.length) {
                text.textContent += textContent.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 100);
    }
};

// Execute typing effect on page load
window.addEventListener('load', typingEffect);

// Add CSS class for burger menu toggle animation
document.addEventListener('DOMContentLoaded', () => {
    const burgerLines = document.querySelectorAll('.burger div');
    
    burger.addEventListener('click', () => {
        burgerLines.forEach((line, index) => {
            if (index === 0) {
                line.classList.toggle('line1-active');
            } else if (index === 1) {
                line.classList.toggle('line2-active');
            } else if (index === 2) {
                line.classList.toggle('line3-active');
            }
        });
    });
});

// Add additional CSS for burger animation
const style = document.createElement('style');
style.textContent = `
    .line1-active {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .line2-active {
        opacity: 0;
    }
    
    .line3-active {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    .success-message {
        text-align: center;
        padding: 30px;
        background-color: var(--hover-color);
        border-radius: 10px;
        margin-top: 20px;
    }
    
    .success-message i {
        font-size: 3rem;
        color: var(--success-color);
        margin-bottom: 15px;
    }
    
    .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease;
    }
    
    .reveal.active {
        opacity: 1;
        transform: translateY(0);
    }
    
    .theme-transition {
        transition: background-color 0.5s ease;
    }
`;

document.head.appendChild(style);

// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('preloader-finish');
    }
});
