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

    /* Proyectos específico */
    const BASE = window.location.origin;
    const PROJECTS_URL = BASE + '/user/themes/portfolio/data/projects.json';
    const grid = document.getElementById('projects-grid');
    let allProjects = [];

    async function loadProjects() {
        try {
            const res = await fetch(PROJECTS_URL);
            if (!res.ok) throw new Error();
            allProjects = await res.json();
            renderProjects();
        } catch { if (grid) grid.innerHTML = '<p style="color:var(--color-text-muted)">Error cargando proyectos.</p>'; }
    }

    function renderProjects() {
        if (!grid) return;
        if (!allProjects.length) { grid.innerHTML = '<p style="color:var(--color-text-muted)">No hay proyectos.</p>'; return; }
        grid.innerHTML = allProjects.map(p => `
            <article class="project-card" data-id="${p.id}">
                ${p.image ? `<div class="project-card__image"><img src="${BASE}/${p.image}" alt="${p.title}" loading="lazy"></div>` : ''}
                <div class="project-card__content">
                    <div class="project-card__meta">${p.stack.slice(0,4).map(s => `<span class="project-card__tag">${s}</span>`).join('')}</div>
                    <h3 class="project-card__title">${p.title}</h3>
                    <time class="project-card__period">${p.period}</time>
                    <p class="project-card__description">${p.shortDescription}</p>
                    <div class="project-card__links">${p.repos.slice(0,2).map(r => `<a href="${r.url}" target="_blank" class="project-card__link">${r.name}</a>`).join('')}</div>
                </div>
            </article>
        `).join('');
        grid.querySelectorAll('.project-card').forEach(c => c.addEventListener('click', function(e) { if (!e.target.closest('a')) showProjectDetail(this.dataset.id); }));
    }

    function showProjectDetail(id) {
        const p = allProjects.find(x => x.id === id);
        if (!p) return;
        const main = document.querySelector('.section.projects');
        if (!main) return;
        main.innerHTML = `
        <div class="container">
            <div class="project-detail">
                <article>
                    <header class="project-detail__header">
                        ${p.image ? `<div class="project-detail__image"><img src="${BASE}/${p.image}" alt="${p.title}"></div>` : ''}
                        <div class="project-detail__meta"><time>${p.period}</time></div>
                        <h2 class="project-detail__title">${p.title}</h2>
                        <p><strong>Rol:</strong> ${p.role}</p>
                        ${p.innovation ? `<p><strong>Innovación:</strong> ${p.innovation}</p>` : ''}
                    </header>
                    <div class="project-detail__content">
                        <p>${p.shortDescription}</p>
                        <h3>Tecnologías</h3>
                        <p>${p.stack.join(', ')}</p>
                        <h3>Repositorios</h3>
                        <ul>${p.repos.map(r => `<li><a href="${r.url}" target="_blank">${r.name}</a></li>`).join('')}</ul>
                    </div>
                    <div class="project-detail__tags">${p.stack.map(s => `<span class="project-detail__tag">${s}</span>`).join('')}</div>
                    <a href="#" onclick="location.reload()" class="project-detail__back">← Volver a proyectos</a>
                </article>
            </div>
        </div>`;
        window.scrollTo({ top: main.offsetTop - 80, behavior: 'smooth' });
    }

    document.addEventListener('DOMContentLoaded', () => { loadProjects(); });
})();
