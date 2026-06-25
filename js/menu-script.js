const menu = document.querySelector('.menu');
const navArrow = document.querySelector('.nav-arrow');
const nav = document.querySelector('.nav');

navArrow.style.setProperty('--arrow-dir', 'rotate(-90deg)');
let navDropped = true;

function collapseNav(){
    if (navDropped){
        menu.style.animation = 'dropUp 0.3s ease forwards';
        setTimeout(() => {
            menu.style.display = 'none';
        }, 300)
        navArrow.style.setProperty('--arrow-dir', 'rotate(90deg)');
        navArrow.style.opacity = '0';
        navDropped = !navDropped;
    }
    else return
}
function expandNav(){
    if (!navDropped){
        menu.style.display = 'flex';
        navArrow.style.setProperty('--arrow-dir', 'rotate(-90deg)');
        menu.style.animation = 'dropDown 0.3s ease forwards';
        navArrow.style.opacity = '1';
        navDropped = !navDropped;
    }
    else return
}

nav.addEventListener('click', () => {
    if (navDropped)
        collapseNav();
    else
        expandNav();
});

let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentsScroll = window.pageYOffset;

    if (currentsScroll > 100 && currentsScroll > lastScroll){
        nav.style.top = '20px';
        collapseNav();
    }
    if (currentsScroll <= 50){
        nav.style.top = '0';
        expandNav();
    }

    lastScroll = currentsScroll;

    if (window.pageYOffset <= 50)
        expandNav();
    else if (window.pageYOffset > 100)
        collapseNav();
})