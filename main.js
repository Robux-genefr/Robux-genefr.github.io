// Animation au défilement pour les sections
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.services-section, .gallery-section, .testimonials-section, .contact-section');

    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            section.classList.add('show');
        } else {
            section.classList.add('hidden');
        }
    });
});

// Initialisation des animations
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.services-section, .gallery-section, .testimonials-section, .contact-section');
    sections.forEach(section => section.classList.add('hidden'));
});
