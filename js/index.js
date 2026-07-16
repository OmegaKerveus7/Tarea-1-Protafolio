// ===== MENÚ HAMBURGUESA =====
const toggle = document.getElementById('navToggle');
const menu = document.getElementById('navMenu');

if (toggle && menu) {
    toggle.addEventListener('click', function() {
        menu.classList.toggle('nav__menu--open');
    });
}

// ===== AÑO EN EL FOOTER =====
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// ===== ENLACE ACTIVO =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('nav__link--active');
    }
});