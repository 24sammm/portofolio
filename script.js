// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 20, 25, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 20, 25, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function changeActiveLink() {
    let index = sections.length;
    
    while (--index && window.scrollY + 150 < sections[index].offsetTop) {}
    
    navLinks.forEach(link => link.classList.remove('active'));
    if (navLinks[index]) {
        navLinks[index].classList.add('active');
    }
}

window.addEventListener('scroll', changeActiveLink);

// Hero indicators functionality
const indicators = document.querySelectorAll('.indicator');
const heroTexts = [
    {
        title: "I HAVE <span class='highlight'>MARINE INFORMATION SYSTEMS</span> & <span class='highlight'>SPATIAL ANALYSIS</span> EXPERIENCE",
        description: "Saya mahasiswa Sistem Informasi Kelautan dengan minat dalam pemrograman web dan analisis spasial. Aktif dalam pengembangan solusi teknologi untuk sektor kelautan dan perikanan."
    },
    {
        title: "I CREATE <span class='highlight'>WEB APPLICATIONS</span> FOR <span class='highlight'>MARINE RESEARCH</span>",
        description: "Mengembangkan aplikasi web menggunakan HTML, CSS, JavaScript, dan Python untuk mendukung penelitian dan analisis data kelautan."
    },
    {
        title: "I ANALYZE <span class='highlight'>SPATIAL DATA</span> WITH <span class='highlight'>GIS TECHNOLOGY</span>",
        description: "Menggunakan ArcGIS Pro, Google Earth Engine, dan R Studio untuk analisis spasial dan pemodelan data maritim."
    },
    {
        title: "I BUILD <span class='highlight'>DATABASE SYSTEMS</span> FOR <span class='highlight'>MARINE DATA</span>",
        description: "Merancang dan mengelola sistem database MySQL untuk penyimpanan dan analisis data penelitian kelautan."
    },
    {
        title: "I RESEARCH <span class='highlight'>MARINE TECHNOLOGY</span> & PUBLISH <span class='highlight'>SCIENTIFIC WORK</span>",
        description: "Aktif dalam penelitian teknologi kelautan dan telah menerbitkan 1 publikasi jurnal dalam bidang sistem informasi kelautan."
    },
    {
        title: "I CONTRIBUTE TO <span class='highlight'>MARINE CONSERVATION</span> THROUGH <span class='highlight'>TECHNOLOGY</span>",
        description: "Sedang magang di BPPSDM Kementrian Kelautan dan Perikanan, berkontribusi dalam pengembangan teknologi untuk konservasi laut."
    }
];

let currentIndex = 0;

function updateHeroContent(index) {
    const heroTitle = document.querySelector('.hero-text h1');
    const heroDescription = document.querySelector('.hero-text p');
    
    heroTitle.innerHTML = heroTexts[index].title;
    heroDescription.textContent = heroTexts[index].description;
    
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateHeroContent(currentIndex);
    });
});

// Auto-rotate hero content
setInterval(() => {
    currentIndex = (currentIndex + 1) % heroTexts.length;
    updateHeroContent(currentIndex);
}, 5000);

// Animated counters for stats
function animateCounter(element, target) {
    let start = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 20);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            
            // Animate skill bars
            if (entry.target.classList.contains('skill-item')) {
                const skillBar = entry.target.querySelector('.skill-bar');
                if (skillBar) {
                    // Get the target width from data attribute
                    const targetWidth = skillBar.getAttribute('data-width');
                    skillBar.style.width = '0%';
                    setTimeout(() => {
                        skillBar.style.width = targetWidth;
                    }, 300);
                }
            }
            
            // Animate counters
            if (entry.target.classList.contains('stat-item')) {
                const counterElement = entry.target.querySelector('h3');
                const target = parseInt(counterElement.textContent);
                if (!isNaN(target)) {
                    animateCounter(counterElement, target);
                }
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-item, .skill-item, .stat-item, .timeline-item, .project-card').forEach(element => {
    observer.observe(element);
});

// Contact form handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Basic validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        contactForm.reset();
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
            <button class="close-btn">&times;</button>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#22c55e' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    `;
    
    const styles = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .close-btn {
            background: none;
            border: none;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            margin-left: auto;
        }
    `;
    
    if (!document.querySelector('#notification-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'notification-styles';
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }
    
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Project card interactions
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add entrance animations
    setTimeout(() => {
        document.querySelectorAll('.hero-text > *').forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
            element.classList.add('fade-in-up');
        });
    }, 300);
});

// Skills progress animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-width');
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 500);
    });
}

// Particle effect for hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 184, 0, 0.3);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        particlesContainer.appendChild(particle);
    }
    
    const keyframes = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0px) rotate(0deg);
                opacity: 1;
            }
            50% {
                transform: translateY(-20px) rotate(180deg);
                opacity: 0.5;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = keyframes;
    document.head.appendChild(styleSheet);
    
    hero.appendChild(particlesContainer);
}

// Initialize particles
createParticles();

// Handle profile image fallback
const profileImg = document.getElementById('profile-img');
profileImg.addEventListener('error', () => {
    profileImg.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMkQzNzQ4Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjE2MCIgcj0iNjAiIGZpbGw9IiNGRkI4MDAiLz4KPHBhdGggZD0iTTEwMCAzMDBDMTAwIDI2MC4yIDEzMC4yIDIzMCAxNzAgMjMwSDIzMEMyNjkuOCAyMzAgMzAwIDI2MC4yIDMwMCAzMDBWNDAwSDEwMFYzMDBaIiBmaWxsPSIjRkZCODAwIi8+CjwvdXZnPgo=';
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active indicator
    updateHeroContent(0);
    
    // Store original width values for skill bars
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        // Store the original width in a data attribute
        const originalWidth = bar.style.width || '0%';
        bar.setAttribute('data-width', originalWidth);
        bar.style.width = '0%'; // Start with 0 width
    });
    
    // Add loading class to body
    document.body.classList.add('loading');
    
    // Remove loading class after page loads
    window.addEventListener('load', () => {
        document.body.classList.remove('loading');
        document.body.classList.add('loaded');
    });
});

// Add custom cursor effect
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    if (!cursor) {
        const newCursor = document.createElement('div');
        newCursor.className = 'custom-cursor';
        newCursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: rgba(255, 184, 0, 0.5);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(newCursor);
    }
    
    const cursorElement = document.querySelector('.custom-cursor');
    cursorElement.style.left = e.clientX + 'px';
    cursorElement.style.top = e.clientY + 'px';
});

// Add hover effects for interactive elements
document.querySelectorAll('button, a, .project-card, .service-item').forEach(element => {
    element.addEventListener('mouseenter', () => {
        const cursor = document.querySelector('.custom-cursor');
        if (cursor) {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.background = 'rgba(255, 184, 0, 0.8)';
        }
    });
    
    element.addEventListener('mouseleave', () => {
        const cursor = document.querySelector('.custom-cursor');
        if (cursor) {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.background = 'rgba(255, 184, 0, 0.5)';
        }
    });
});