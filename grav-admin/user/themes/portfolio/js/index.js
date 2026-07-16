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

    /* Year in footer */
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
