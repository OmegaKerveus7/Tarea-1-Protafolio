(() => {
    'use strict';

    const PROJECTS_URL = 'data/projects.json';
    const container = document.getElementById('project-detail');

    async function loadProject() {
        const params = new URLSearchParams(window.location.search);
        const projectId = params.get('id');

        if (!projectId) {
            showError('No se especificó un proyecto.');
            return;
        }

        try {
            const res = await fetch(PROJECTS_URL);
            if (!res.ok) throw new Error('Failed to load projects');
            const projects = await res.json();
            const project = projects.find(p => p.id === projectId);

            if (!project) {
                showError('Proyecto no encontrado.');
                return;
            }

            renderProject(project);
            document.title = `${project.title} | Gustavo Adolfo Tobías Ramírez`;
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) metaDesc.content = project.shortDescription;
        } catch (err) {
            console.error(err);
            showError('Error cargando el proyecto.');
        }
    }

    function renderProject(p) {
        const imagesHtml = p.images.map(img => `
            <img src="${escapeHtml(img)}" alt="${escapeHtml(p.title)}" class="blog-detail__image" loading="lazy">
        `).join('');

        const tagsHtml = p.stack.map(s => `
            <span class="blog-detail__tag">${escapeHtml(s)}</span>
        `).join('');

        const reposHtml = p.repos.map(r => `
            <li class="blog-detail__related-item">
                <a href="${escapeHtml(r.url)}" class="blog-detail__related-link" target="_blank" rel="noopener noreferrer">
                    ${escapeHtml(r.name)}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 17L17 7M7 7h10v10"/></svg>
                </a>
            </li>
        `).join('');

        container.innerHTML = `
            <article>
                <header class="blog-detail__header">
                    <div class="blog-detail__meta">
                        <span class="blog-detail__date">${escapeHtml(p.period)}</span>
                        <span class="blog-detail__category">${escapeHtml(p.category)}</span>
                    </div>
                    <h1 id="project-title" class="blog-detail__title">${escapeHtml(p.title)}</h1>
                    <p><strong>Rol:</strong> ${escapeHtml(p.role)}</p>
                    ${p.innovation ? `<p><strong>Innovación:</strong> ${escapeHtml(p.innovation)}</p>` : ''}
                </header>

                <div class="blog-detail__content">
                    ${p.description}
                </div>

                <div class="blog-detail__tags">
                    ${tagsHtml}
                </div>

                ${imagesHtml}

                ${reposHtml ? `
                <div class="blog-detail__related">
                    <h2 class="blog-detail__related-title">Repositorios</h2>
                    <ul class="blog-detail__related-list">${reposHtml}</ul>
                </div>` : ''}

                <a href="proyectos.html" class="blog-detail__back">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    Volver a proyectos
                </a>
            </article>
        `;
    }

    function showError(message) {
        container.innerHTML = `
            <div class="not-found">
                <p class="not-found__code">404</p>
                <h1 class="not-found__title">Proyecto no encontrado</h1>
                <p class="not-found__description">${escapeHtml(message)}</p>
                <div class="not-found__actions">
                    <a href="proyectos.html" class="btn btn--primary">Ver todos los proyectos</a>
                    <a href="index.html" class="btn btn--secondary">Ir al inicio</a>
                </div>
            </div>
        `;
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

    document.addEventListener('DOMContentLoaded', loadProject);
})();