document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Pricing Toggle Logic
    const pricingSwitch = document.getElementById('pricing-switch');
    const amounts = document.querySelectorAll('.amount');
    const periods = document.querySelectorAll('.period');

    if(pricingSwitch) {
        pricingSwitch.addEventListener('change', function() {
            const isAnnual = this.checked;

            amounts.forEach(amount => {
                if(isAnnual) {
                    amount.innerText = amount.getAttribute('data-annual');
                } else {
                    amount.innerText = amount.getAttribute('data-monthly');
                }
            });

            periods.forEach(period => {
                period.innerText = isAnnual ? '/yr' : '/mo';
            });
        });
    }

    // Form Query Parameter Handling (for Pricing Plan selection)
    const urlParams = new URLSearchParams(window.location.search);
    const plan = urlParams.get('plan');
    const goalsTextarea = document.getElementById('goals');
    
    if(plan && goalsTextarea) {
        let planName = '';
        if(plan === 'continuity') planName = 'Authority Continuity Plan';
        if(plan === 'growth') planName = 'Authority Growth Plan';
        if(plan === 'dominance') planName = 'Authority Dominance Plan';
        
        goalsTextarea.value = `I am interested in the ${planName}.`;
    }

});
