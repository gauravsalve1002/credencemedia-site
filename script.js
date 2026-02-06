/* ==========================================================================
   INSTRUCTIONS FOR CUSTOMIZATION
   ==========================================================================
   1. Images: Look for comments in HTML saying [INSTRUCTION]. 
      Replace the src="..." with your file path (e.g., assets/logo.png).
   
   2. Contact Form: 
      - Go to https://formspree.io
      - Create a free account and a new form.
      - Copy the "Endpoint" URL they give you.
      - Paste it into the <form action="..."> in index.html.

   3. Sliders: 
      - To add more awards/reviews, just duplicate the <div class="slide-item"> lines in HTML.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Mobile Menu Toggle --- */
    window.toggleMenu = function() {
        document.getElementById('mobileMenu').classList.toggle('active');
        document.body.style.overflow = 
            document.body.style.overflow === 'hidden' ? 'auto' : 'hidden';
    };

    /* --- 2. FAQ Accordion Logic --- */
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', () => {
            // Close others if you want only one open at a time (Optional)
            // faqItems.forEach(i => { if(i !== item) i.classList.remove('active'); });
            
            item.classList.toggle('active');
        });
    });

    /* --- 3. Scroll Reveal Animation --- */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

});
