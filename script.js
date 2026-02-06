document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Menu
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Pricing Logic
    const pricingSwitch = document.getElementById('pricing-switch');
    const amounts = document.querySelectorAll('.amount');
    const billingNotes = document.querySelectorAll('.billing-note');

    if(pricingSwitch) {
        pricingSwitch.addEventListener('change', function() {
            const isAnnual = this.checked;

            amounts.forEach((amount, index) => {
                if(isAnnual) {
                    // Switch to Annual Data
                    const monthlyCost = amount.getAttribute('data-annual');
                    amount.innerText = monthlyCost;
                    
                    // Calculate Total Upfront (String to Number)
                    const numCost = parseInt(monthlyCost.replace(/,/g, ''));
                    const totalYearly = (numCost * 12).toLocaleString();
                    
                    billingNotes[index].innerText = `Billed $${totalYearly} upfront`;
                } else {
                    // Switch to Monthly Data
                    amount.innerText = amount.getAttribute('data-monthly');
                    billingNotes[index].innerText = `Billed monthly`;
                }
            });
        });
    }

    // Form Pre-fill
    const urlParams = new URLSearchParams(window.location.search);
    const plan = urlParams.get('plan');
    const goalsTextarea = document.getElementById('goals');
    
    if(plan && goalsTextarea) {
        goalsTextarea.value = `I am interested in the ${plan.toUpperCase()} Plan.`;
    }
});
