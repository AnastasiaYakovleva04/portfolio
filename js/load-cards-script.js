const wordForms = {
    "награда": ["награда", "награды", "наград"],
    "сертификат": ["сертификат", "сертификата", "сертификатов"],
    "проект": ["проект", "проекта", "проектов"],
}

/**
 * универсальный загрузчик карточек
 * 
 * карточки подгружаются в контейнер .section-cards
 * 
 * @param {string} containerSelector - селектор секции
 * @param {string} countSelector - селектор элемента, куда вывести количество
 * @param {Array} items - массив с данными карточек
 * @param {Object} options - настройки
 * @param {string} options.itemType - тип данных (из массива wordForms)
 * @param {string} options.path - путь к папке с изображениями
 * @param {string} options.header - текст заголовка >
 * @param {string} options.system - текст заголовка SYSTEM
 */

function loadCards(containerSelector, countsSelector, items, options = {}){
    const {
        itemType = "",
        path = "",
        header = "",
        system = ""
    } = options;

    const section = document.querySelector(containerSelector);

    if (!items || items.length == 0)
        return;

    if (countsSelector){
        const countEl = document.querySelector(countsSelector);
        countEl.textContent = formatCount(items.length, itemType)
    }

    let content = "";

    if (header != "" && system != ""){
        content += 
        `<div class="system-header">
            <p class="text">> ${header}</p>
            <p class="text">SYSTEM: ${system}</p>
        </div>`
    }

    if (itemType == "проект"){
        let imgType = (items === works) ? "work" : "project"

        let index = 1;
        const isMobile = window.innerWidth <= 768;
        
        items.forEach(item => {
            const hosts = item.host.split(' | ');
            const links = item.link.split(' | ');

            const linksHtml = hosts.map((host, ind) => {
                return `<a href="${links[ind]}" class="small-text btn">[${host}]</a>`;
            }).join('');

            const bgImage = isMobile 
            ? `../../img/backgrounds/${imgType}-${index}-mob.png` 
            : `../../img/backgrounds/${imgType}-${index}.png`;

            content += 
        `<div ${item.id ? `id="${item.id}"` : ``}  class="panel" style="background-image: url('${bgImage}');">
            <h2 style="opacity: 0">${item.title}</h2>
            <div class="content">
                <div class="work-details">
                    <img src="${path+item.img}" alt="img" class="modal-img" style="opacity: 0">
                    <div class="details" style="opacity: 0">
                        <p class="small-text">${item.stack}</p>
                        <div class="links">
                            ${linksHtml}
                        </div>
                    </div>
                </div>
                <div class="work-desc">
                    <p class="big-text" style="opacity: 0">${item.name}</p>
                    <p class="text" style="opacity: 0">${item.desc}</p>
                    <p class="small-text date" style="opacity: 0">${item.date}</p>
                </div>
            </div>
        </div>`
            index++;
        });
    }
    else if (itemType == "событие"){
        content += 
        `<div class="carousel-container">
            <button class="carousel-btn prev-btn">
                <p>&#8592;</p>
            </button>

            <div class="carousel-wrapper">
                <div class="carousel">`;

        items.forEach(item => {
            content += 
            `<div class="card">
                <div class="moment-imgs">
                ${item.imgs.map(img => `
                    <img src="${path}/${img}" alt="${event.name}" class="modal-img">
                `).join('')}
                </div>
                <div class="description">
                    <p class="smallest-text">${item.name}<br>
                    ${item.desc}</p>
                </div>
            </div>`;
        });

        content +=        
                `</div>
            </div>
            <button class="carousel-btn next-btn">
                <p>&#8594;</p>
            </button>
        </div>`;
    }
    else{
        items.forEach(item => {
            //если занимает 2 колонки
            if (item.span)
                content += `<div class="card" style="grid-column: span 2">`;
            else
                content += `<div class="card">`;

            content += `<img src="${path+item.img}" alt="${item.img}" class="modal-img">
                <div class="description">
                    <p class="smallest-text">${item.name}<br>
                    ${item.desc}</p>`;

            //если есть ссылка на работу
            if (item.link != "null")
                content += `<a href="${item.link}" class="smallest-text btn">[работа]</a>`
            content += `</div> </div>`
        });
    }

    section.innerHTML = content;
    if (itemType == "проект")
        initScrollAnimation('.panel');
    else if (itemType == "событие")
        initScrollAnimation('.card', 50);
    else
        initScrollAnimation('.card', 500);
    initModal();   
}

//форматирование количества в строку
function formatCount(count, type){
    let word = wordForms[type]

    if (count > 5 && count < 19)
        return `${count} ${word[2]}`;

    if (count % 10 == 1)
        return `${count} ${word[0]}}`;

    if ([2, 3, 4].includes(count % 10))
        return `${count} ${word[1]}`;
    else
        return `${count} ${word[2]}`;
}

//анимация появления карточек
function initScrollAnimation(selector, ms){
    const elems = document.querySelectorAll(selector)
    if (elems.length == 0)
        return;

    let counter = 0;
    //наблюдатель
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            //если элемент в зоне видимости
            if (entry.isIntersecting){
                const el = entry.target; //элемент = текущая сущность
                const delay = counter * 0.3; //задержка для анимации

                setTimeout(() => {
                    el.style.animation = `fadeInUp 0.6s ease forwards`;
                    if (selector == '.panel')
                        animatePanels(el);
                        
                }, delay * ms);

                observer.unobserve(el); //перестать наблюдать
                counter++;
            }
        });

    }, {threshold: 0.2}); //видимость 20%

    elems.forEach(el => observer.observe(el));
}

function animatePanels(panel){
    const elems = [
        panel.querySelector('h2'), 
        panel.querySelector('img'),
        panel.querySelector('.big-text'),
        panel.querySelector('.text'),
        panel.querySelector('.date'),
        panel.querySelector('.details'),
    ];

    elems.forEach(el => {
        el.style.transform = 'translateY(20px)';
    });

    setTimeout(() => {
        elems.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = 1;
                el.style.transform = 'translateY(0)';
            }, index * 500);
        })
    }, 500);
}
