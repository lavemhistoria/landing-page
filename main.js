document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('.hero-text');
    const imageWrapper = document.querySelector('.image-wrapper');
    const contactFooter = document.querySelector('.contact-footer');
    const logo = document.querySelector('.logo-container');

    // Simple reveal animation
    const elements = [logo, heroText, contactFooter, imageWrapper];
    
    elements.forEach((el, index) => {
        if (!el) return;
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`;
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });
});
