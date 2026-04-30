const practicePlan = [
    { date: "16.03.2026", task: "Отримання робочого місця, проходження інструктажу з техніки безпеки та вивчення внутрішніх регламентів АТ «Ідея Банк» щодо роботи з персональними даними клієнтів." },
    { date: "17.03.2026", task: "Ознайомлення з бізнес-логікою відділу верифікації, аналіз існуючих інструментів обробки анкет та виявлення етапів, що потребують автоматизації." },
    { date: "18.03.2026", task: "Встановлення та налаштування середовища розробки, ініціалізація Git-репозиторію та створення базової структури проєкту на FastAPI." },
    { date: "19.03.2026", task: "Проєктування схеми бази даних PostgreSQL для зберігання логів верифікації та розробка моделей даних за допомогою SQLAlchemy." },
    { date: "20.03.2026", task: "Реалізація першого модуля авторизації користувачів у системі та налаштування базових маршрутів API для отримання списку анкет." },
    { date: "23.03.2026", task: "Розробка сервісу для валідації вхідних JSON-пакетів з даними клієнтів та написання логіки перевірки обов'язкових полів." },
    { date: "24.03.2026", task: "Створення SQL-міграцій для бази даних та налаштування пулу з'єднань для забезпечення стабільної роботи під навантаженням." },
    { date: "25.03.2026", task: "Написання асинхронних функцій для взаємодії з базою даних та реалізація фільтрації даних за статусами перевірки." },
    { date: "26.03.2026", task: "Ініціалізація React-проєкту з використанням TypeScript та налаштування архітектури папок для клієнтської частини." },
    { date: "27.03.2026", task: "Розробка головного макета інтерфейсу (Layout) та створення компонентів для відображення навігаційної панелі банку." },
    { date: "30.03.2026", task: "Реалізація сторінки авторизації на фронтенді та налаштування захищеного зберігання токенів доступу в браузері." },
    { date: "31.03.2026", task: "Створення табличного компонента для відображення черги анкет на верифікацію з підтримкою сортування та пагінації." },
    { date: "01.04.2026", task: "Налаштування зв'язку між фронтендом та бекендом через бібліотеку Axios, обробка помилок мережевих запитів." },
    { date: "02.04.2026", task: "Розробка детальної картки клієнта, де відображаються всі дані анкети та історія попередніх перевірок." },
    { date: "03.04.2026", task: "Програмування логіки зміни статусів верифікації (підтверджено/відхилено) безпосередньо через веб-інтерфейс." },
    { date: "06.04.2026", task: "Написання Python-скриптів для автоматичного парсингу даних із внутрішніх XML-файлів банку та їх імпорту в систему." },
    { date: "07.04.2026", task: "Розробка алгоритму автоматичного порівняння ПІБ та серій паспортів із завантажених копій документів для виявлення розбіжностей." },
    { date: "08.04.2026", task: "Створення модуля генерації звітів, інтеграція бібліотеки для формування Excel-файлів за заданий період часу." },
    { date: "09.04.2026", task: "Реалізація фільтра «Антифрод», який підсвічує анкети з підозрілою активністю або дубльованими даними." },
    { date: "10.04.2026", task: "Проведення юніт-тестування критичних вузлів серверної частини за допомогою бібліотеки pytest." },
    { date: "13.04.2026", task: "Налаштування системи сповіщень у реальному часі про надходження нових анкет на верифікацію." },
    { date: "14.04.2026", task: "Робота над стилізацією компонентів згідно з корпоративним брендбуком «Ідея Банку», адаптація інтерфейсу під різні дозволи моніторів." },
    { date: "15.04.2026", task: "Оптимізація швидкості виконання важких SQL-запитів шляхом створення індексів у базі даних." },
    { date: "16.04.2026", task: "Проведення інтеграційного тестування всієї системи від моменту подачі анкети до моменту вивантаження звіту." },
    { date: "17.04.2026", task: "Виправлення багів, виявлених під час тестування, та фінальна збірка фронтенд-частини проєкту." },
    { date: "20.04.2026", task: "Складання технічного опису реалізованих функцій та підготовка інструкції для персоналу відділу верифікації." },
    { date: "21.04.2026", task: "Розгортання демонстраційної версії проєкту на внутрішньому сервері банку для перевірки керівництвом." },
    { date: "22.04.2026", task: "Проведення презентації результатів автоматизації для колег по відділу та отримання відгуків." },
    { date: "23.04.2026", task: "Оформлення пояснювальної записки до звіту з практики, фіналізація документації." },
    { date: "24.04.2026", task: "Підписання щоденника та відгуку у керівника практики від підприємства, підбиття підсумків роботи." }
];

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Swiper
    const swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    const timelineContainer = document.getElementById('timeline');

    // Generate timeline HTML
    practicePlan.forEach((item, index) => {
        const direction = index % 2 === 0 ? 'left' : 'right';
        
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${direction}`;
        
        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <span class="date-badge">${item.date}</span>
                <p>${item.task}</p>
            </div>
        `;
        
        timelineContainer.appendChild(timelineItem);
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optional: stop observing once visible
            }
        });
    }, observerOptions);

    // Observe all timeline items
    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => {
        observer.observe(item);
    });

    // Lightbox Functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');
    const zoomableImages = document.querySelectorAll('.zoomable img');

    zoomableImages.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = "flex";
            lightboxImg.src = this.src;
            
            // Get description from the nearest .mockup-description
            const mockupItem = this.closest('.mockup-item');
            const description = mockupItem ? mockupItem.querySelector('.mockup-description').innerText : "";
            
            lightboxCaption.innerHTML = `<strong>${this.alt}</strong><br><span style="font-size: 1rem; opacity: 0.8; margin-top: 10px; display: block; font-weight: 400;">${description}</span>`;
            document.body.style.overflow = "hidden"; // Prevent scrolling
        });
    });

    // Close on X click
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
    });

    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});
