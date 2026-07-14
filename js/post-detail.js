(() => {
    'use strict';

    const POSTS_URL = 'data/posts.json';
    const container = document.getElementById('post-detail');

    async function loadPost() {
        const params = new URLSearchParams(window.location.search);
        const slug = params.get('slug');

        if (!slug) {
            showError('No se especificó un artículo.');
            return;
        }

        try {
            const res = await fetch(POSTS_URL);
            if (!res.ok) throw new Error('Failed to load posts');
            const posts = await res.json();
            const post = posts.find(p => p.slug === slug);

            if (!post) {
                showError('Artículo no encontrado.');
                return;
            }

            renderPost(post);
            document.title = `${post.title} | Gustavo Adolfo Tobías Ramírez`;
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) metaDesc.content = post.excerpt;
        } catch (err) {
            console.error(err);
            showError('Error cargando el artículo.');
        }
    }

    function renderPost(post) {
        const image = post.image
            ? `<img src="${escapeHtml(post.image)}" alt="${escapeHtml(post.title)}" class="blog-detail__image" loading="lazy">`
            : '';

        const tags = post.tags.map(t => `<span class="blog-detail__tag">${escapeHtml(t)}</span>`).join('');

        const relatedLinks = post.relatedLinks && post.relatedLinks.length > 0
            ? `
            <div class="blog-detail__related">
                <h2 class="blog-detail__related-title">Enlaces relacionados</h2>
                <ul class="blog-detail__related-list">
                    ${post.relatedLinks.map(l => `
                        <li class="blog-detail__related-item">
                            <a href="${escapeHtml(l.url)}" class="blog-detail__related-link" target="_blank" rel="noopener noreferrer">
                                ${escapeHtml(l.title)}
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 17L17 7M7 7h10v10"/></svg>
                            </a>
                        </li>
                    `).join('')}
                </ul>
            </div>`
            : '';

        container.innerHTML = `
            <article>
                <header class="blog-detail__header">
                    <div class="blog-detail__meta">
                        <time class="blog-detail__date" datetime="${escapeHtml(post.date)}">${formatDate(post.date)}</time>
                        <span class="blog-detail__category">${escapeHtml(post.categoryLabel)}</span>
                    </div>
                    <h1 class="blog-detail__title">${escapeHtml(post.title)}</h1>
                </header>

                ${image}

                <div class="blog-detail__content">
                    ${post.content}
                </div>

                <div class="blog-detail__tags">${tags}</div>

                ${relatedLinks}

                <a href="noticias.html" class="blog-detail__back">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    Volver al blog
                </a>
            </article>
        `;
    }

    function showError(message) {
        container.innerHTML = `
            <div class="not-found">
                <p class="not-found__code">404</p>
                <h1 class="not-found__title">Artículo no encontrado</h1>
                <p class="not-found__description">${escapeHtml(message)}</p>
                <div class="not-found__actions">
                    <a href="noticias.html" class="btn btn--primary">Ver todas las noticias</a>
                    <a href="index.html" class="btn btn--secondary">Ir al inicio</a>
                </div>
            </div>
        `;
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

    document.addEventListener('DOMContentLoaded', loadPost);
})();