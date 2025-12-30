document.addEventListener('DOMContentLoaded', () => {
    // Hero Animation
    anime({
        targets: '#hero-text',
        translateX: [-100, 0],
        opacity: [0, 1],
        duration: 1200,
        easing: 'easeOutExpo'
    });
    anime({
        targets: '#hero-image',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 1500,
        easing: 'easeOutExpo',
        delay: 200
    });

    // Scroll Reveal Animation
    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    translateY: [30, 0],
                    opacity: [0, 1],
                    duration: 1000,
                    easing: 'easeOutExpo'
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Lightbox Logic
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    
    window.openModal = function(src) {
        modalImg.src = src;
        modal.classList.remove('hidden');
        anime({
            targets: modal,
            opacity: [0, 1],
            duration: 300,
            easing: 'linear'
        });
    }

    window.closeModal = function() {
        anime({
            targets: modal,
            opacity: [1, 0],
            duration: 300,
            easing: 'linear',
            complete: () => modal.classList.add('hidden')
        });
    }

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = mobileMenuButton.querySelector('i');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        } else {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        }
    });
});