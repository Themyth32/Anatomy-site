document.addEventListener('DOMContentLoaded', () => {
    // Handle sticky navbar shadow
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Dropdown handling (hover is CSS, but we can add click-outside for safety if needed)
});
