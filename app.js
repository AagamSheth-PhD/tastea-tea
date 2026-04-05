// Simple interactions for the Tastea Landing Page
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Optionally handle any specific sticky footer logic dynamically if needed,
    // though CSS handles the display via media queries.
    // E.g., hide floating WA widget completely if screen is super small and sticky footer is overlapping
});
