document.addEventListener("DOMContentLoaded", function() {
    // Initialize AOS (Animate On Scroll Library)
    AOS.init();

    // Skill progress animation
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const value = bar.getAttribute('aria-valuenow');
        bar.style.width = value + '%';
    });
});
