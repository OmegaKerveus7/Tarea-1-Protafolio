(() => {
    'use strict';

    const PROJECTS_URL = 'data/projects.json';
    const grid = document.getElementById('projects-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    let allProjects = [];
    let currentFilter = 'all';

    async function loadProjects() {
        try {
            const res = await fetch(PROJECTS_URL);
            if (!res.ok) throw new Error('Failed to load projects');
            allProjects = await res.json();
            renderProjects();
        } catch (err) {
            console.error(err);
            if (grid) grid.innerHTML = '<p class="error">Error cargando proyectos.</p>';
        }
    }

    function filterProjects(projects, filter) {
        if (filter === 'all') return projects;
        return projects.filter(p => p.category === filter);
    }

    function renderProjects() {
        if (!grid) return;

        const filtered = filterProjects(allProjects, currentFilter);

        if (filtered.length === 0) {
            grid.innerHTML = '<p class="no-results">No hay proyectos en esta categoría.</p>';
            return;
        }

        grid.innerHTML = filtered.map(project => createProjectCard(project)).join('');

        grid.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.closest('.project-card__link')) return;
                const id = card.dataset.projectId;
                if (id) window.location.href = `proyecto-detalle.html?id=${id}`;
            });
            card.style.cursor = 'pointer';
        });
    }

    function createProjectCard(p) {
        const tags = p.stack.slice(0, 4).map(s => `<span class="project-card__tag">${escapeHtml(s)}</span>`).join('');
        const links = p.repos.slice(0, 2).map(r => `<a href="${escapeHtml(r.url)}" target="_blank" rel="noopener noreferrer" class="project-card__link">${escapeHtml(r.name)}</a>`).join('');

        return `
            <article class="project-card" data-project-id="${escapeHtml(p.id)}" role="listitem">
                <div class="project-card__image-wrapper">
                    <img src="${escapeHtml(p.images[0])}" alt="" class="project-card__image" loading="lazy">
                </div>
                <div class="project-card__content">
                    <div class="project-card__meta">${tags}</div>
                    <h3 class="project-card__title">${escapeHtml(p.title)}</h3>
                    <time class="project-card__period" datetime="${escapeHtml(p.period)}">${escapeHtml(p.period)}</time>
                    <p class="project-card__description">${escapeHtml(p.shortDescription)}</p>
                    <div class="project-card__links">${links}</div>
                </div>
            </article>
        `;
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
                currentFilter = btn.dataset.filter;
                renderProjects();
            });
        });
    }

    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&')
            .replace(/</g, '<')
            .replace(/>/g, '>')
            .replace(/"/g, '"')
            .replace(/'/g, '&#039;');
    }

    document.addEventListener('DOMContentLoaded', () => {
        loadProjects();
        initFilters();
    });
})();