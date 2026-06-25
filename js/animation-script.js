document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.nav,  #main-photo, .title-block, #top, #bot');
    elements.forEach((el, index) => {
        el.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.3}s`;
    });
});