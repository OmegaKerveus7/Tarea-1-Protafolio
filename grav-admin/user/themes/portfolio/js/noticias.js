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

    /* Noticias específico */
    const BASE = window.location.origin;
    const POSTS_URL = BASE + '/user/themes/portfolio/data/posts.json';
    const grid = document.getElementById('blog-grid');
    let allPosts = [];

    async function loadPosts() {
        try {
            const res = await fetch(POSTS_URL);
            if (!res.ok) throw new Error();
            allPosts = await res.json();
            renderPosts();
        } catch { if (grid) grid.innerHTML = '<p style="color:var(--color-text-muted)">Error cargando artículos.</p>'; }
    }

    function renderPosts() {
        if (!grid) return;
        if (!allPosts.length) { grid.innerHTML = '<p style="color:var(--color-text-muted)">No hay artículos.</p>'; return; }
        grid.innerHTML = allPosts.map(p => `
            <article class="blog-card">
                <div class="blog-card__content">
                    <div class="blog-card__meta">
                        <time class="blog-card__date">${formatDate(p.date)}</time>
                        <span class="blog-card__category">${p.categoryLabel}</span>
                    </div>
                    <h3 class="blog-card__title blog-card__link">${p.title}</h3>
                    <p class="blog-card__excerpt">${p.excerpt}</p>
                    <a href="#" class="blog-card__link" data-slug="${p.slug}">Leer más →</a>
                </div>
            </article>
        `).join('');
        grid.querySelectorAll('[data-slug]').forEach(a => a.addEventListener('click', function(e) { e.preventDefault(); showPostDetail(this.dataset.slug); }));
    }

    function showPostDetail(slug) {
        const p = allPosts.find(x => x.slug === slug);
        if (!p) return;
        const main = document.querySelector('.section.blog');
        if (!main) return;
        main.innerHTML = `
        <div class="container" style="max-width:800px">
            <article>
                <header class="blog-detail__header" style="text-align:center;margin-bottom:1.5rem;padding-bottom:1.5rem;border-bottom:1px solid var(--color-border)">
                    <div class="blog-detail__meta" style="display:flex;justify-content:center;gap:0.75rem;font-size:0.8125rem;margin-bottom:1rem">
                        <time style="color:var(--color-text-dim)">${formatDate(p.date)}</time>
                        <span style="padding:2px 8px;border-radius:100px;background:rgba(0,255,136,0.1);color:var(--color-primary);border:1px solid var(--color-border-light);text-transform:uppercase;letter-spacing:0.02em">${p.categoryLabel}</span>
                    </div>
                    <h2 style="font-size:1.5rem">${p.title}</h2>
                </header>
                <div style="line-height:1.9;font-size:1.0625rem;color:var(--color-text)">${p.content}</div>
                <div style="display:flex;flex-wrap:wrap;gap:0.375rem;margin-top:1.5rem;padding-top:1.5rem;border-top:1px solid var(--color-border)">
                    ${p.tags.map(t => `<span style="font-size:0.75rem;color:var(--color-text-dim);background:var(--color-bg-input);padding:0.25rem 0.5rem;border-radius:4px">${t}</span>`).join('')}
                </div>
                ${p.relatedLinks.length ? `<div style="margin-top:2rem;padding-top:1.5rem;border-top:1px solid var(--color-border)"><h3 style="font-size:1rem;color:var(--color-primary);margin-bottom:1rem">Enlaces relacionados</h3><ul style="list-style:none;display:grid;gap:0.5rem">${p.relatedLinks.map(l => `<li style="padding:0.5rem 1rem;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:8px"><a href="${l.url}" target="_blank" style="display:flex;justify-content:space-between;color:var(--color-text)">${l.title}</a></li>`).join('')}</ul></div>` : ''}
                <a href="#" onclick="location.reload()" style="display:inline-flex;align-items:center;gap:0.25rem;margin-top:1.5rem;color:var(--color-text-muted)">← Volver al blog</a>
            </article>
        </div>`;
        window.scrollTo({ top: main.offsetTop - 80, behavior: 'smooth' });
    }

    function formatDate(d) { return new Date(d).toLocaleDateString('es-GT', { year: 'numeric', month: 'long', day: 'numeric' }); }

    document.addEventListener('DOMContentLoaded', () => { loadPosts(); });
})();
