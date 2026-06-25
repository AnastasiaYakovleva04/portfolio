// для работы функции на странице должен быть код
// <div class="modal">
//     <img src="" alt="img" id="modal-image">
// </div>

function initModal() {
    const modal = document.querySelector('.modal'); //контейнер модального окна
    const modalImg = document.querySelector('#modal-image'); //изображение в модальном окне

    const imgs = document.querySelectorAll('.modal-img'); //все изображения, которые можно открыть в модальном окне

    imgs.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            modal.classList.add('show');
            modalImg.src = img.src;
        });
    });

    modal.addEventListener('click', () => {
        modal.classList.remove('show');
    });
}