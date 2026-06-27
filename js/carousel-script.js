function initCarousel(){
    const carousel = document.querySelector('.carousel');
    const cards = carousel.querySelectorAll('.card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
        
    const totalCards = cards.length;
    let currentIndex = 0;
    let visibleCards = 3;
    
    // функция для определения количества видимых карточек в зависимости от ширины
    function getVisibleCards() {
        if (window.innerWidth <= 768) {
            return 1;
        }
        return 3;
    }
    
    // обновление позиции карусели
    function updateCarousel() {
        visibleCards = getVisibleCards();
        let cardWidth = cards[0].offsetWidth + 20; // ширина + gap
        let translateX = -currentIndex * cardWidth;
            
        carousel.style.transition = 'transform 0.5s ease-in-out';
        carousel.style.transform = `translateX(${translateX}px)`;
    }
        
    // прокрутка вперед
    function nextSlide() {
        visibleCards = getVisibleCards();
        const maxIndex = totalCards - visibleCards;
        
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }
        
    // прокрутка назад
    function prevSlide() {
        visibleCards = getVisibleCards();
        const maxIndex = totalCards - visibleCards;
        
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = maxIndex;
        }
        updateCarousel();
    }
        
    // обработчики кнопок
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // обновление при изменении размера окна
    window.addEventListener('resize', function() {
        // корректируем currentIndex, если он вышел за пределы
        visibleCards = getVisibleCards();
        const maxIndex = totalCards - visibleCards;
        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
        }
        updateCarousel();
    });
}