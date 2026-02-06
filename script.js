document.addEventListener('DOMContentLoaded', () => {
    
    /* ------------------------------------------------
       1. MOBILE MENU TOGGLE
    ------------------------------------------------ */
    // Define toggle function globally so onclick="" works in HTML
    window.toggleMenu = function() {
        const menu = document.getElementById('mobileMenu');
        const toggleBtn = document.querySelector('.mobile-toggle');
        
        // Toggle Active Classes
        menu.classList.toggle('active');
        
        // Optional: Animate the hamburger icon if you add CSS for it
        toggleBtn.classList.toggle('open');
        
        // Prevent background scrolling when menu is open
        if (menu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    // Close menu automatically when a link is clicked
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('mobileMenu').classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    /* ------------------------------------------------
       2. SCROLL REVEAL ANIMATIONS (Auto-Detect)
    ------------------------------------------------ */
    const observerOptions = {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop watching once revealed
            }
        });
    }, observerOptions);

    // Automatically select elements to animate
    const elementsToAnimate = document.querySelectorAll('.hero-content, .section h2, .card, .footer-col, .grid-4 div');
    
    elementsToAnimate.forEach((el, index) => {
        el.classList.add('fade-up'); // Add base CSS class
        
        // Add a slight stagger delay for grid items
        if(index % 3 === 0) el.style.transitionDelay = '0s';
        if(index % 3 === 1) el.style.transitionDelay = '0.1s';
        if(index % 3 === 2) el.style.transitionDelay = '0.2s';
        
        observer.observe(el);
    });

    /* ------------------------------------------------
       3. STICKY HEADER SHADOW
    ------------------------------------------------ */
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";
            navbar.style.background = "rgba(5, 5, 5, 0.95)";
        } else {
            navbar.style.boxShadow = "none";
            navbar.style.background = "rgba(5, 5, 5, 0.9)";
        }
    });

});
