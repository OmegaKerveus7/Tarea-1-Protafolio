(() => {
    'use strict';

    const POSTS_URL = 'data/posts.json';
    const grid = document.getElementById('blog-grid');
    const paginationNav = document.getElementById('blog-pagination');
    const filterBtns = document.querySelectorAll('.filter-btn[data-category]');
    const sidebarCategories = document.getElementById('sidebar-categories');
    const sidebarLinks = document.getElementById('sidebar-links');

    const PER_PAGE = 6;
    let allPosts = [];
    let currentCategory = 'all';
    let currentPage = 1;

    async function loadPosts() {
        try {
            const res = await fetch(POSTS_URL);
            if (!res.ok) throw new Error('Failed to load posts');
            allPosts = await res.json();
            renderSidebar();
            renderPosts();
        } catch (err) {
            console.error(err);
            if (grid) grid.innerHTML = '<p class="error">Error cargando artículos.</p>';
        }
    }

    function filterPosts(posts, category) {
        if (category === 'all') return posts;
        return posts.filter(p => p.category === category);
    }

    function paginatePosts(posts, page) {
        const total = posts.length;
        const totalPages = Math.ceil(total / PER_PAGE);
        const start = (page - 1) * PER_PAGE;
        const end = start + PER_PAGE;
        return { items: posts.slice(start, end), total, totalPages, currentPage: page };
    }

    function renderPosts() {
        if (!grid) return;

        const filtered = filterPosts(allPosts, currentCategory);
        const paginated = paginatePosts(filtered, currentPage);

        if (paginated.items.length === 0) {
            grid.innerHTML = '<p class="no-results">No hay artículos en esta categoría.</p>';
            renderPagination(paginated);
            return;
        }

        grid.innerHTML = paginated.items.map(post => createPostCard(post)).join('');
        renderPagination(paginated);
    }

    function createPostCard(post) {
        const image = post.image
            ? `<img src="${escapeHtml(post.image)}" alt="" class="blog-card__image" loading="lazy">`
            : '';
        const tags = post.tags.slice(0, 3).map(t => `<span class="blog-card__tag">${escapeHtml(t)}</span>`).join('');
        const relatedCount = post.relatedLinks ? post.relatedLinks.length : 0;

        return `
            <article class="blog-card" data-slug="${escapeHtml(post.slug)}" role="listitem">
                ${image ? `<a href="noticia-detalle.html?slug=${escapeHtml(post.slug)}" tabindex="-1">${image}</a>` : ''}
                <div class="blog-card__content">
                    <div class="blog-card__meta">
                        <time class="blog-card__date" datetime="${escapeHtml(post.date)}">${formatDate(post.date)}</time>
                        <span class="blog-card__category">${escapeHtml(post.categoryLabel)}</span>
                    </div>
                    <h3 class="blog-card__title">
                        <a href="noticia-detalle.html?slug=${escapeHtml(post.slug)}">${escapeHtml(post.title)}</a>
                    </h3>
                    <p class="blog-card__excerpt">${escapeHtml(post.excerpt)}</p>
                    <div class="blog-card__tags">${tags}</div>
                    <a href="noticia-detalle.html?slug=${escapeHtml(post.slug)}" class="blog-card__link">
                        Leer más
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </a>
                </div>
            </article>
        `;
    }

    function renderPagination(paginated) {
        if (!paginationNav) return;

        if (paginated.totalPages <= 1) {
            paginationNav.innerHTML = '';
            return;
        }

        let html = '<div class="pagination" role="navigation" aria-label="Paginación">';

        html += `<button class="pagination__btn" data-page="${paginated.currentPage - 1}" ${paginated.currentPage <= 1 ? 'disabled' : ''} aria-label="Página anterior">&laquo;</button>`;

        for (let i = 1; i <= paginated.totalPages; i++) {
            if (paginated.totalPages > 7 && i > 2 && i < paginated.totalPages - 1 && i !== paginated.currentPage) {
                if (i === paginated.currentPage - 1 || i === paginated.currentPage + 1) {
                    html += `<button class="pagination__btn ${i === paginated.currentPage ? 'pagination__btn--active' : ''}" data-page="${i}">${i}</button>`;
                } else if (i === 3 || i === paginated.totalPages - 2) {
                    html += `<span class="pagination__ellipsis" aria-hidden="true">...</span>`;
                }
                continue;
            }
            html += `<button class="pagination__btn ${i === paginated.currentPage ? 'pagination__btn--active' : ''}" data-page="${i}">${i}</button>`;
        }

        html += `<button class="pagination__btn" data-page="${paginated.currentPage + 1}" ${paginated.currentPage >= paginated.totalPages ? 'disabled' : ''} aria-label="Página siguiente">&raquo;</button>`;
        html += '</div>';

        paginationNav.innerHTML = html;

        paginationNav.querySelectorAll('.pagination__btn:not(:disabled)').forEach(btn => {
            btn.addEventListener('click', () => {
                const page = parseInt(btn.dataset.page, 10);
                if (!isNaN(page) && page >= 1 && page <= paginated.totalPages) {
                    currentPage = page;
                    renderPosts();
                    window.scrollTo({ top: grid.offsetTop - 100, behavior: 'smooth' });
                }
            });
        });
    }

    function renderSidebar() {
        if (sidebarCategories) {
            const counts = {};
            allPosts.forEach(p => {
                counts[p.categoryLabel] = (counts[p.categoryLabel] || 0) + 1;
            });
            sidebarCategories.innerHTML = Object.entries(counts)
                .map(([label, count]) => `<li><a href="#" class="sidebar__category-link" data-category="${label}">${escapeHtml(label)} <span class="sidebar__count">(${count})</span></a></li>`)
                .join('');

            sidebarCategories.querySelectorAll('.sidebar__category-link').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const label = link.dataset.category;
                    const btn = Array.from(filterBtns).find(b => {
                        const post = allPosts.find(p => p.categoryLabel === label);
                        return post && b.dataset.category === post.category;
                    });
                    if (btn) btn.click();
                });
            });
        }

        if (sidebarLinks) {
            const allLinks = [];
            allPosts.forEach(p => {
                if (p.relatedLinks) {
                    p.relatedLinks.forEach(l => allLinks.push(l));
                }
            });
            const unique = allLinks.filter((l, i, arr) => arr.findIndex(x => x.url === l.url) === i);
            sidebarLinks.innerHTML = unique.slice(0, 8)
                .map(l => `<li><a href="${escapeHtml(l.url)}" class="sidebar__external-link" target="_blank" rel="noopener noreferrer">${escapeHtml(l.title)}</a></li>`)
                .join('');
        }
    }

    function initFilters() {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => {
                    b.classList.remove('filter-btn--active');
                    b.setAttribute('aria-pressed', 'false');
                });
                btn.classList.add('filter-btn--active');
                btn.setAttribute('aria-pressed', 'true');
                currentCategory = btn.dataset.category;
                currentPage = 1;
                renderPosts();
            });
        });
    }

    function formatDate(dateStr) {
        const d = new Date(dateStr);
        return d.toLocaleDateString('es-GT', { year: 'numeric', month: 'long', day: 'numeric' });
    }

    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    document.addEventListener('DOMContentLoaded', () => {
        loadPosts();
        initFilters();
    });
})();