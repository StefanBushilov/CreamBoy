// Анимация навигационного меню
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Плавная прокрутка для навигационных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Обработка кнопки CTA
document.getElementById('cta-button').addEventListener('click', () => {
    alert('Спасибо за ваш интерес! Мы скоро свяжемся с вами.');
});

// Обработка формы обратной связи
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('form-message');
    
    // Простая валидация
    if (name && email && message) {
        // Имитация отправки формы
        formMessage.textContent = 'Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.';
        formMessage.className = 'form-message success';
        
        // Очистка формы
        this.reset();
        
        // Скрытие сообщения через 5 секунд
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    } else {
        formMessage.textContent = 'Пожалуйста, заполните все поля.';
        formMessage.className = 'form-message error';
    }
});

// Анимация появления элементов при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Наблюдаем за карточками и другими элементами
document.querySelectorAll('.feature-card, .service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Изменение стиля навигации при скролле
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Таймер для демонстрации
let timerValue = 0;
const timerElement = document.createElement('div');
timerElement.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #3498db;
    color: white;
    padding: 10px 15px;
    border-radius: 20px;
    font-size: 14px;
    z-index: 1000;
`;

document.body.appendChild(timerElement);

setInterval(() => {
    timerValue++;
    const minutes = Math.floor(timerValue / 60);
    const seconds = timerValue % 60;
    timerElement.textContent = `Вы на сайте: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}, 1000);

// Локальное хранилище - запоминаем имя пользователя
window.addEventListener('load', () => {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
        document.getElementById('name').value = savedName;
    }
});

document.getElementById('name').addEventListener('blur', function() {
    if (this.value) {
        localStorage.setItem('userName', this.value);
    }
});

// Консольное приветствие
console.log('🚀 Добро пожаловать на сайт!');
console.log('💡 Подсказка: попробуйте взаимодействовать с элементами страницы!');