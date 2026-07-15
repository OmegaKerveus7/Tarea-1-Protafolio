(() => {
    'use strict';

    const POSTS_URL = 'data/posts.json';
    const grid = document.getElementById('blog-grid');
    const paginationNav = document.getElementById('blog-pagination');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const sidebarCategories = document.getElementById('sidebar-categories');
    const sidebarLinks = document.getElementById('sidebar-links');
    const PER_PAGE = 6;
    let allPosts = [];
    let currentCategory = 'all';
    let currentPage = 1;

    async function loadPosts() {
        try {
            const res = await fetch(POSTS_URL);
            if (!res.ok) throw new Error();
            allPosts = await res.json();
            renderSidebar();
            renderPosts();
        } catch { if (grid) grid.innerHTML = '<p style="color:var(--color-text-muted)">Error cargando artículos.</p>'; }
    }

    function getFiltered() { return currentCategory === 'all' ? allPosts : allPosts.filter(p => p.category === currentCategory); }

    function renderPosts() {
        if (!grid) return;
        const filtered = getFiltered();
        const totalPages = Math.ceil(filtered.length / PER_PAGE);
        const page = Math.min(currentPage, totalPages || 1);
        const start = (page - 1) * PER_PAGE;
        const items = filtered.slice(start, start + PER_PAGE);

        if (!items.length) { grid.innerHTML = '<p style="color:var(--color-text-muted)">No hay artículos.</p>'; renderPagination(1, 1); return; }

        grid.innerHTML = items.map(p => `
            <article class="blog-card">
                ${p.image ? `<img src="${p.image}" alt="" class="blog-card__image" loading="lazy">` : ''}
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
        renderPagination(page, totalPages);
    }

    function renderPagination(page, total) {
        if (!paginationNav || total <= 1) { if (paginationNav) paginationNav.innerHTML = ''; return; }
        let h = '<div class="pagination">';
        h += `<button class="pagination__btn" data-page="${page - 1}" ${page <= 1 ? 'disabled' : ''}>&laquo;</button>`;
        for (let i = 1; i <= total; i++) {
            if (total > 7 && i > 2 && i < total - 1 && i !== page && i !== page - 1 && i !== page + 1) { if (i === 3 || i === total - 2) h += '<span class="pagination__ellipsis">...</span>'; continue; }
            h += `<button class="pagination__btn ${i === page ? 'pagination__btn--active' : ''}" data-page="${i}">${i}</button>`;
        }
        h += `<button class="pagination__btn" data-page="${page + 1}" ${page >= total ? 'disabled' : ''}>&raquo;</button></div>`;
        paginationNav.innerHTML = h;
        paginationNav.querySelectorAll('.pagination__btn:not(:disabled)').forEach(b => b.addEventListener('click', function() { const p = parseInt(this.dataset.page, 10); if (p >= 1 && p <= total) { currentPage = p; renderPosts(); const t = grid.offsetTop - 100; window.scrollTo({ top: t, behavior: 'smooth' }); } }));
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
                    <h2 style="font-size:clamp(1.5rem,3vw,2.25rem)">${p.title}</h2>
                </header>
                ${p.image ? `<img src="${p.image}" alt="" style="width:100%;max-height:400px;object-fit:cover;border-radius:12px;margin-bottom:1.5rem;border:1px solid var(--color-border)">` : ''}
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

    function renderSidebar() {
        if (sidebarCategories) {
            const counts = {};
            allPosts.forEach(p => { counts[p.categoryLabel] = (counts[p.categoryLabel] || 0) + 1; });
            sidebarCategories.innerHTML = Object.entries(counts).map(([l, c]) => `<li><a href="#" class="sidebar__category-link" data-label="${l}">${l} <span class="sidebar__count">(${c})</span></a></li>`).join('');
            sidebarCategories.querySelectorAll('.sidebar__category-link').forEach(a => a.addEventListener('click', function(e) {
                e.preventDefault();
                const label = this.dataset.label;
                const post = allPosts.find(p => p.categoryLabel === label);
                if (post) {
                    const btn = Array.from(filterBtns).find(b => b.dataset.category === post.category);
                    if (btn) btn.click();
                }
            }));
        }
        if (sidebarLinks) {
            const links = [];
            allPosts.forEach(p => { if (p.relatedLinks) p.relatedLinks.forEach(l => links.push(l)); });
            const unique = links.filter((l, i, a) => a.findIndex(x => x.url === l.url) === i);
            sidebarLinks.innerHTML = unique.slice(0, 8).map(l => `<li><a href="${l.url}" class="sidebar__external-link" target="_blank">${l.title}</a></li>`).join('');
        }
    }

    function formatDate(d) { return new Date(d).toLocaleDateString('es-GT', { year: 'numeric', month: 'long', day: 'numeric' }); }

    function initFilters() {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('filter-btn--active'));
                btn.classList.add('filter-btn--active');
                currentCategory = btn.dataset.category;
                currentPage = 1;
                renderPosts();
            });
        });
    }

    document.addEventListener('DOMContentLoaded', () => { loadPosts(); initFilters(); });
})();