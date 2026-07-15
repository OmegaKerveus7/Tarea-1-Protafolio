(() => {
    'use strict';

    /* Theme */
    const STORAGE_KEY = 'gtr-theme';
    function getTheme() { return localStorage.getItem(STORAGE_KEY) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); }
    function setTheme(t) { document.documentElement.setAttribute('data-theme', t); localStorage.setItem(STORAGE_KEY, t); const btn = document.getElementById('theme-toggle'); if (btn) btn.setAttribute('aria-label', t === 'dark' ? 'Modo claro' : 'Modo oscuro'); }
    setTheme(getTheme());
    const toggle = document.getElementById('theme-toggle');
    if (toggle) toggle.addEventListener('click', () => setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));

    /* Nav */
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.getElementById('nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => { const e = navToggle.getAttribute('aria-expanded') === 'true'; navToggle.setAttribute('aria-expanded', !e); navMenu.classList.toggle('nav__menu--open'); });
        document.addEventListener('click', e => { if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) { navToggle.setAttribute('aria-expanded', 'false'); navMenu.classList.remove('nav__menu--open'); } });
    }

    /* Active nav link */
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav__link').forEach(l => { if (l.getAttribute('href') === page || (page === '' && l.getAttribute('href') === 'index.html')) l.classList.add('nav__link--active'); });

    /* Year in footer */
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* Smooth scroll */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function(e) {
            const id = this.getAttribute('href');
            if (id === '#' || !id) return;
            const t = document.querySelector(id);
            if (t) { e.preventDefault(); const h = 80, y = t.getBoundingClientRect().top + window.pageYOffset - h; window.scrollTo({ top: y, behavior: 'smooth' }); t.focus({ preventScroll: true }); }
        });
    });
})();
