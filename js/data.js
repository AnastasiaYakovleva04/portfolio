const achievments = [
    {
        img: "1course_matholimp_apr24.jpg", 
        name: "диплом III степени", 
        desc: "олимпиада по математике, 2024", 
        link: "null", 
        span: 0
    },
    {
        img: "1course_npk_may24.jpg", 
        name: "диплом I степени", 
        desc: "нпк, 2024", 
        link: "works.html#work-novella", 
        span: 0
    },
    {
        img: "2course_mathit_dec24.png", 
        name: "сертификат участника", 
        desc: "олимпиада по математике в it, 2024", 
        link: "null", 
        span: 1
    },
    {
        img: "2course_npk_dec24.jpg", 
        name: "диплом участника", 
        desc: "нпк, 2024", 
        link: "works.html#work-novella", 
        span: 0
    },
    {
        img: "2course_grafdes_dec24.png", 
        name: "сертификат участника", 
        desc: "олимпиада по графическому дизайну, 2024", 
        link: "null", 
        span: 1
    },
    
    {
        img: "2course_npk_may25.png", 
        name: "диплом I степени", 
        desc: "нпк, 2025", 
        link: "patriot.html#project-intplakat", 
        span: 0
    },
    {
        img: "3course_cokdip_dec25.jpg", 
        name: "диплом победителя", 
        desc: "конкурс сайтов, 2025", 
        link: "works.html#work-aquaculture", 
        span: 0
    },
];

const documents = [
    {
        img: "certificate_des_apr25.png", 
        name: "интенсив по веб-дизайну", 
        desc: "\"дерзай в дизайн\", апрель 2025", 
        link: "null", 
        span: 0
    },
    {
        img: "certificate_des_summer25.png", 
        name: "курс по графическому дизайну", 
        desc: "\"дерзай в дизайн\", лето 2025", 
        link: "null", 
        span: 0
    },
    {
        img: "certificate_des_feb26.jpg", 
        name: "интенсив по веб-лизайну", 
        desc: "\"юдаев скул\", февраль 2026", 
        link: "null", 
        span: 0
    },
];

const works = [
    {
        img: "visual_novel.png", 
        title: "Visual Novel", 
        name: "разработка компьютерных игр в жанре визуальных новелл", 
        desc: "desktop визуальная новелла по мотивам \"Капитанской дочки\" Пушкина с альтернативными событиями второй главы. первый большой индивидуальный проект на 1 курсе: совмещает в себе иллюстрации, анимации, музыку и код", 
        date: "февраль-апрель 2024",
        stack: "разработка на движке renpy, python", 
        host: "проект",
        link: "https://disk.yandex.ru/d/TkuAXMpH7Hwy1g",
        id: "work-novella"
    },
    {
        img: "landing_page.jpg", 
        title: "Landing Page", 
        name: "разработка гибридного сайта для компании \"Аквакультура\"", 
        desc: "командный проект в рамках производственной практики - одностраничный сайт для НКО по рекультивации карьеров и созданию рыбоводных экосистем в Бурятии. динамическая загрузка новостей из vk-сообщества, адаптивный дизайн в минималистичном стиле с bento-сеткой и мягкой палитрой. запись данных из формы в бд, сбор визитов через яндекс.метрику, хэширование email для обезличивания. уведомления о заявках в telegram и письмо-подтверждение автору на почту",
        date: "октябрь-ноябрь 2025, июнь 2026",
        stack: "разработка на tilda, html, css, js + google sheets, gas, repoting api, tg bot api", 
        host: "сайт | презентация",
        link: "https://www.anoakvakultura.ru/ | https://disk.yandex.ru/i/ZjqT8AHysnpQeA",
        id: "work-aquaculture"
    },
    {
        img: "wpf_clinic.jpg", 
        title: "Wpf Clinic", 
        name: "разработка wpf-приложения для клиники", 
        desc: "локальное desktop-приложение для автоматизации работы клиники. система авторизации врачей, ведение картотеки пациентов, прием пациентов с историей визитов. хранение данных в json-файлах с полной изоляцией бизнес-логики от представления",
        date: "ноябрь 2025 - январь 2026",
        stack: "разработка на c# + xaml, json", 
        host: "git hub",
        link: "https://github.com/AnastasiaYakovleva04/yakovleva-pr7-trpo/tree/pr11",
    },
    {
        img: "furniture_shop.jpg", 
        title: "Furniture Shop", 
        name: "разработка мобильного приложения для магазина мебели", 
        desc: "мобильное приложение для автоматизации мебельного производства с ролевой моделью (клиент, поставщик, работник). каталог мебели, локальное хранение данных в бд, система авторизации с сохранением сессии и корзины. производственный цикл с возможностью подбора деталей к заказам, отслеживанием их статусов",
        date: "декабрь 2025",
        stack: "разработка на kotlin + api, room database", 
        host: "git hub | проект",
        link: "https://github.com/AnastasiaYakovleva04/yakovleva-zd7-v3 | https://disk.yandex.ru/d/YvA_C6PDZrkZHQ",
    },
    {
        img: "carsharing_site.jpg", 
        title: "Carsharing Site", 
        name: "разработка сайта для каршеринговой компании", 
        desc: "многостраничный сайт для аренды автомобилей с личным кабинетом, системой бронирования, фильтрацией и поиском по каталогу и динамический расчет стоимости аренды. личный кабинет с историей поездок, начислением баллов, привязкой банковских карт и автоматическим переносом завершенных броней в историю. регистрация, авторизация и хранение данных через localStorage. адаптивная верстка для десктопа и мобильных устройств",
        date: "январь, июнь 2026",
        stack: "разработка на html, css, js", 
        host: "git hub | сайт",
        link: "https://github.com/AnastasiaYakovleva04/carsharing-site.git | https://anastasiayakovleva04.github.io/carsharing-site/",
    },
    {
        img: "console_tetris.jpg", 
        title: "Console Tetris", 
        name: "разработка консольной игры тетрис", 
        desc: "коллективный проект с использованием указателей. игровое поле из двусвязных списков,  7 типов фигур с системами поворота, коллизий и начисления очков. цветовая индикация фигур, предпросмотр следующей фигуры, тень, настраиваемая скорость падения через выбор уровня сложности",
        date: "март 2026",
        stack: "разработка на c++", 
        host: "git hub | презентация",
        link: "https://github.com/AiromanR/TetrisProject | https://disk.yandex.ru/i/b9IVWf5fQo5dqQ",
    },
]

const mind = [
    { name: "критическое мышление", level: 90 },
    { name: "тайм-менеджмент", level: 70 },
    { name: "обучаемость", level: 90 },
    { name: "стрессоустойчивость", level: 60 },
    { name: "внимание к деталям", level: 90 }
]
const social = [
    { name: "коммуникабельность", level: 50 },
    { name: "работа в команде", level: 60 },
    { name: "эмпатия", level: 70 },
    { name: "презентация", level: 60 }
]

const projects = [
    {
        img: "pres_hmao.jpg", 
        title: "Presentation Motherland", 
        name: "разработка презентации на тему \"визитная карточка моего родного края\"", 
        desc: "конкурсная презентация о Ханты-Мансийском автономном округе - югре. география, геральдика, традиции, история с первого упоминания до XX века и современности", 
        date: "декабрь 2023",
        stack: "разработка в power point", 
        host: "презентация",
        link: "https://disk.yandex.ru/i/HSNB8QmnWu6dgQ",
        id: "project-preshmao"
    },
    {
        img: "interactplakat_apr25.png", 
        title: "Interactive Poster", 
        name: "разработка и апробация интерактивного плаката \"За тебя, Родина-мать!\"", 
        desc: "интерактивный плакат, выполненный в виде виртуальной экскурсии по Мамаеву кургану, посвященный Сталинградской битве. исследование отражения ее событий в памяти современной молодежи", 
        date: "апрель 2025, 2026",
        stack: "разработка на genially", 
        host: "плакат | исследование",
        link: "https://view.genially.com/67f938e423c430f4811131f7/interactive-content-za-tebya-rodina-mat | https://disk.yandex.ru/d/uDaieo-AMyTYLw",
        id: "project-intplakat"
    },
]

const awards = [
    {
        img: "1course_presconcurs_dec23.jpg", 
        name: "диплом участника", 
        desc: "конкурс презентаций, 2023", 
        link: "#project-preshmao", 
        span: 0
    },
    {
        img: "1course_plakatconcurs_dec23.jpg", 
        name: "сертификат участника", 
        desc: "конкурс плакатов, 2023", 
        link: "null", 
        span: 0
    },
    {
        img: "1course_plakatconcurs2_dec23.jpg", 
        name: "сертификат участника", 
        desc: "конкурс творческих работ, 2023", 
        link: "null", 
        span: 0
    },
    {
        img: "1course_chemolimp_feb24.jpg", 
        name: "сертификат участника", 
        desc: "олимпиада по естествознанию, 2024", 
        link: "null", 
        span: 0
    },
    {
        img: "1course_mathvict_may24.jpg", 
        name: "диплом I степени", 
        desc: "викторина по математике, 2024", 
        link: "null", 
        span: 0
    },
    {
        img: "1course_vovvict_may24.jpg", 
        name: "сертификат участника", 
        desc: "викторина по математике, 2024", 
        link: "null", 
        span: 1
    },

    {
        img: "2course_fingr_oct24.jpg", 
        name: "сертификат участника", 
        desc: "зачет по фин грамотности, 2024", 
        link: "null", 
        span: 0
    },
    {
        img: "2course_fingr_dec24.png", 
        name: "сертификат участника", 
        desc: "олимпиада по финансовой грамотности, 2024", 
        link: "null", 
        span: 1
    },
    {
        img: "2course_cosmvict_apr25.jpg", 
        name: "диплом победителя", 
        desc: "викторина ко дню космонавтики, 2025", 
        link: "null", 
        span: 0
    },

    {
        img: "3course_cokblag_dec25.jpg", 
        name: "благодарственное письмо", 
        desc: "конкурс сайтов, 2025", 
        link: "works.html#work-aquaculture", 
        span: 0
    },
    {
        img: "3course_pedxp_dec25.jpg", 
        name: "диплом I степени", 
        desc: "конкурс методической продукции, 2025", 
        link: "#project-intplakat", 
        span: 1
    },
]

const moments = [
    {
        imgs: ["korrup_dec23.jpg"],
        name: "защита плаката \"мы против коррупции\"",
        desc: "15 декабря 2023"
    },
    {
        imgs: ["parkm_june24.jpg", "ec_june24.jpg"],
        name: "парк Маяковского, музей Ельцин центр",
        desc: "12 июня 2024"
    },
    {
        imgs: ["mklera_june24.jpg"],
        name: "краеведческий музей им Клера",
        desc: "26 июня 2024"
    },
    {
        imgs: ["ec_sep24.jpg"],
        name: "музей Ельцин центр",
        desc: "14 сентября 2024"
    },
    {
        imgs: ["theatre_oct24.jpg"],
        name: "театр драмы, \"босяки во фраках\"",
        desc: "8 октября 2024"
    },
    {
        imgs: ["theatre_apr25.jpg"],
        name: "театр драмы, \"Мастер и Маргарита\"",
        desc: "13 апреля 2025"
    },
    {
        imgs: ["smart_elsa_apr25.jpg", "smart_els_apr25.jpg"],
        name: "выступление в спектакле \"умная Эльза\"",
        desc: "28 апреля 2025"
    },
    {
        imgs: ["npk_may25.jpg"],
        name: "защита интерактивного плаката на нпк",
        desc: "16 мая 2025"
    },
    {
        imgs: ["fight_spec_oct25.jpg", "figh_spec_oct25.jpg"],
        name: "участие в битве специальностей",
        desc: "15 октября 2025"
    },
    {
        imgs: ["vk_nov25.jpg"],
        name: "время карьеры",
        desc: "21 ноября 2025"
    },
    {
        imgs: ["dezh_olimp_nov25.jpg"],
        name: "дежурство на олимпиаде",
        desc: "28 ноября 2025"
    },
    {
        imgs: ["cok_dec25.jpg"],
        name: "защита проекта на конкурсе \"сок\"",
        desc: "3 декабря 2025"
    },
    {
        imgs: ["win_cok_dec25.jpg", "plansh_cok_dec25.jpg"],
        name: "награждение на конкурсе \"сок\"",
        desc: "9 декабря 2025"
    },
    {
        imgs: ["marhhist_apr26.jpg", "marhhis_apr26.jpg"],
        name: "музей археологии и истории Урала",
        desc: "2 мая 2026"
    },
    {
        imgs: ["mizo_apr26.jpg"],
        name: "музей изобразительных искусств",
        desc: "2 мая 2026"
    },
]
