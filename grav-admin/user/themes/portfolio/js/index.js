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
const currentPath = window.location.pathname;
document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || href === currentPath.split('/').pop() || (currentPath.endsWith('/') && href === '/')) {
        link.classList.add('nav__link--active');
    }
});
