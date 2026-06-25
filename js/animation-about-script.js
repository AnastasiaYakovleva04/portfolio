function animateRussiaMap() {
    const panel = document.querySelector('.map-panel');
    const elems = [
        panel.querySelector('img'),
        panel.querySelector('h2'),
        ...panel.querySelectorAll('.panel-line'),
        ...panel.querySelectorAll('.point'),
        ...panel.querySelectorAll('.city-line'),
        ...panel.querySelectorAll('.city'),
    ];
    const lineClasses = ['panel-line', 'city-line'];

    elems.forEach(el => {
        if (!el.classList.contains('panel-line') && !el.classList.contains('city-line'))
            el.style.transform = 'translateY(20px)';
    });

    setTimeout(() => {
        elems.forEach((el, index) => {
            setTimeout(() => {
                if (el.classList.contains(lineClasses[0])) {
                    const lines = panel.querySelectorAll(`.${lineClasses[0]}`);
                    lines.forEach(line => line.style.strokeDashoffset = 0);
                    panel.querySelectorAll('circle').forEach(circle => circle.style.opacity = 1);
                } else if (el.classList.contains(lineClasses[1])) {
                    const lines = panel.querySelectorAll(`.${lineClasses[1]}`);
                    lines.forEach(line => line.style.strokeDashoffset = 0);
                } else {
                    el.style.opacity = 1;
                    el.style.transform = 'translateY(0)';
                }
            }, index * 500);
        });
    }, 500);
}

function animateDataPanel() {
    const panel = document.querySelector('.data-panel');
    const elems = [
        panel.querySelector('img'),
        panel.querySelector('h3'),
        ...panel.querySelectorAll('.panel-line'),
        ...panel.querySelectorAll('.smallest-text'),
    ];

    elems.forEach(el => {
        if (!el.classList.contains('panel-line'))
            el.style.transform = 'translateY(20px)';
    });

    setTimeout(() => {
        elems.forEach((el, index) => {
            setTimeout(() => {
                if (el.classList.contains('panel-line')) {
                    const lines = panel.querySelectorAll('.panel-line');
                    lines.forEach(line => line.style.strokeDashoffset = 0);
                    panel.querySelectorAll('circle').forEach(circle => circle.style.opacity = 1);
                } else {
                    el.style.opacity = 1;
                    el.style.transform = 'translateY(0)';
                }
            }, index * 300);
        });
    }, 500);
}
function animateSkillsSection() {
    const panelsOrder = [
        { container: '.lvl-panel-container', bg: '.bg', title: 'h4', content: '.data-content' },
        { container: '.hard-panel-container', bg: '.bg', title: 'h4', content: '.data-content' },
        { container: '.mind-panel-container', bg: '.bg', title: 'h4', content: '#mind' },
        { container: '.social-panel-container', bg: '.bg', title: 'h4', content: '#social' }
    ];

    let globalDelay = 0;

    panelsOrder.forEach(panelConfig => {
        const container = document.querySelector(panelConfig.container);
        if (!container) return;

        const bg = container.querySelector(panelConfig.bg);
        const title = container.querySelector(panelConfig.title);
        const content = container.querySelector(panelConfig.content);

        setTimeout(() => {
            if (bg) {
                bg.style.opacity = '1';
                bg.style.transform = 'translateY(0)';
            }
        }, globalDelay);

        setTimeout(() => {
            if (title) {
                title.style.opacity = '1';
                title.style.transform = 'translateY(0)';
            }
        }, globalDelay + 300);

        setTimeout(() => {
            if (content) {
                content.style.opacity = '1';
                content.style.transform = 'translateY(0)';
            }
        }, globalDelay + 600);

        globalDelay += 1000;
    });
}

const panels = document.querySelectorAll('.panel');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const panel = entry.target;
            panel.style.opacity = 1;
            setTimeout(() => {
                animateDataPanel();
            }, 6000);
            animateRussiaMap();
            observer.unobserve(panel);
        }
    });
}, { threshold: 0.2 });
panels.forEach(el => observer.observe(el));

if (window.innerWidth <= 768){
    const mapPanel = document.querySelector('.map-panel');
    const bgMap = mapPanel.querySelector('.bg');
    bgMap.src = "../img/backgrounds/map-panel-mob.png";

    const dataPanel = document.querySelector('.data-panel');
    const bgData = dataPanel.querySelector('.bg');
    bgData.src = "../img/backgrounds/data-panel-mob.png";
}

const radar = document.querySelector('.radar');

function calculateRadar() {
    const radarContainer = document.querySelector('.radar-container');
    let radarWidth = parseFloat(getComputedStyle(radar).width);
    let radarDiff = radarWidth / 8;

    radarContainer.style.width = radarWidth + radarDiff + "px";
    radarContainer.style.height = radarWidth + radarDiff + "px";

    const rings = document.querySelectorAll('.radar-ring');
    rings.forEach(ring => {
        radarWidth = radarWidth - radarDiff;
        ring.style.width = radarWidth + "px";
        ring.style.height = radarWidth + "px";
    });

    const lines = document.querySelectorAll('.radar-line');
    let deg = 0;
    lines.forEach(line => {
        line.style.rotate = deg + "deg";
        deg += 30;
    });
}

function updateRadar() {
    requestAnimationFrame(() => {
        calculateRadar();
    });
}

window.addEventListener('load', updateRadar);
window.addEventListener('resize', updateRadar);

let currentAngle = 0;
const animationDuration = 16;
const step = 2;

setInterval(() => {
    currentAngle = (currentAngle + step) % 360;
    const activeSector = Math.floor((currentAngle + 15) / 30) % 12;
    const activeSectors = [
        activeSector,
        (activeSector + 1) % 12,
        (activeSector + 2) % 12
    ];
    const points = radar.querySelectorAll('.point');
    points.forEach((point, index) => {
        if (activeSectors.includes(index)) {
            point.classList.remove('inactive');
            point.classList.add('active');
        } else {
            point.classList.remove('active');
            point.classList.add('inactive');
        }
    });
}, (animationDuration / 360) * step * 1000);

function renderSoftSkills(selector, skills) {
    const container = document.querySelector(selector);
    let html = '';

    skills.forEach(skill => {
        html += `
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${skill.level}%;"></div>
            </div>
            <p class="smallest-text">[${skill.level}%] ${skill.name}</p>
        `;
    });

    container.innerHTML = html;
}

renderSoftSkills('#mind', mind);
renderSoftSkills('#social', social);

function lightSkills(selected, lighted) {
    const container = document.querySelector(selected);
    const lightnings = document.querySelectorAll(lighted);

    container.addEventListener('mouseover', () => {
        lightnings.forEach(lightning => {
            lightning.style.color = '#EFF1F3';
        });
    });

    container.addEventListener('mouseout', () => {
        lightnings.forEach(lightning => {
            lightning.style.color = '#635766';
        });
    });
}

lightSkills('.lvl-panel-container', '.radar-nums p');
lightSkills('.hard-panel-container', '.skill-nums p');
function updateMapSVG() {
    const isMobile = window.innerWidth <= 768;

    // ---- MAP PANEL ----
    const mapSvg = document.querySelector('.map-panel .lines');
    if (mapSvg) {
        if (isMobile) {
            mapSvg.setAttribute('viewBox', '0 0 500 500');
        } else {
            mapSvg.setAttribute('viewBox', '0 0 1005 805');
        }

        const panelLines = mapSvg.querySelectorAll('.panel-line');
        if (panelLines.length >= 4) {
            if (isMobile) {
                panelLines[0].setAttribute('points', '1,250 1,110 65,1 115,1');
                panelLines[1].setAttribute('points', '440,1 498,1 498,170');
                panelLines[2].setAttribute('points', '438,498 498,390');
                panelLines[3].setAttribute('points', '438,498 350,498');
            } else {
                panelLines[0].setAttribute('points', '1,355 1,180 127,1 490,1');
                panelLines[1].setAttribute('points', '880,1 1001,1 1001,270');
                panelLines[2].setAttribute('points', '877,801 1001,627');
                panelLines[3].setAttribute('points', '877,802 690,802');
            }
        }

        const cityLines = mapSvg.querySelectorAll('.city-line');
        if (cityLines.length >= 3) {
            if (isMobile) {
                cityLines[0].setAttribute('points', '222,238 222,190 110,190');
                cityLines[1].setAttribute('points', '255,265 255,150 350,150');
                cityLines[2].setAttribute('points', '187,340 187,410 340,410');
            } else {
                cityLines[0].setAttribute('points', '343,430 343,244 210,244');
                cityLines[1].setAttribute('points', '385,460 385,310 530,310');
                cityLines[2].setAttribute('points', '310,535 310,645 160,645');
            }
        }

        const circles = mapSvg.querySelectorAll('circle');
        if (circles.length >= 2) {
            if (isMobile) {
                circles[0].setAttribute('cx', '496');
                circles[0].setAttribute('cy', '390');
                circles[1].setAttribute('cx', '350');
                circles[1].setAttribute('cy', '496');
            } else {
                circles[0].setAttribute('cx', '1001');
                circles[0].setAttribute('cy', '627');
                circles[1].setAttribute('cx', '690');
                circles[1].setAttribute('cy', '802');
            }
        }
    }

    // ---- DATA PANEL ----
    const dataSvg = document.querySelector('.data-panel .lines');
    if (dataSvg) {
        if (isMobile) {
            dataSvg.setAttribute('viewBox', '0 0 200 250');
        } else {
            dataSvg.setAttribute('viewBox', '0 0 315 400');
        }

        const dataLines = dataSvg.querySelectorAll('.panel-line');
        if (dataLines.length >= 3) {
            if (isMobile) {
                dataLines[0].setAttribute('points', '1,80 1,15 15,15');
                dataLines[1].setAttribute('points', '160,3 197,3 197,87 186,102 186,143 197,158 197,190');
                dataLines[2].setAttribute('points', '30,248 3,215');
                dataLines[3]?.setAttribute('points', '30,248 75,248');
            } else {
                dataLines[0].setAttribute('points', '1,120 1,20 20,20');
                dataLines[1].setAttribute('points', '255,1 312,1 312,105 295,120 295,167 312,185 312,300');
                dataLines[2].setAttribute('points', '45,398 3,360');
                dataLines[3]?.setAttribute('points', '45,398 120,398');
            }
        }

        const dataCircles = dataSvg.querySelectorAll('circle');
        if (dataCircles.length >= 2) {
            if (isMobile) {
                dataCircles.forEach(circle => {
                    circle.setAttribute('r', '2');
                })

                dataCircles[0].setAttribute('cx', '197');
                dataCircles[0].setAttribute('cy', '190');
                dataCircles[1].setAttribute('cx', '75');
                dataCircles[1].setAttribute('cy', '247');

                // Три маленьких точки (если есть)
                for (let i = 2; i < Math.min(dataCircles.length, 5); i++) {
                    dataCircles[i].setAttribute('cx', '195');
                    dataCircles[i].setAttribute('cy', 107 + (i - 2) * 15);
                }
            } else {
                dataCircles[0].setAttribute('cx', '3');
                dataCircles[0].setAttribute('cy', '360');
                dataCircles[1].setAttribute('cx', '120');
                dataCircles[1].setAttribute('cy', '398');

                for (let i = 2; i < Math.min(dataCircles.length, 5); i++) {
                    dataCircles[i].setAttribute('cx', '310');
                    dataCircles[i].setAttribute('cy', 123 + (i - 2) * 20);
                }
            }
        }
    }
}

window.addEventListener('load', updateMapSVG);
window.addEventListener('resize', updateMapSVG);
