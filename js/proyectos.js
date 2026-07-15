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
            if (!res.ok) throw new Error();
            allProjects = await res.json();
            renderProjects();
        } catch { if (grid) grid.innerHTML = '<p style="color:var(--color-text-muted)">Error cargando proyectos.</p>'; }
    }

    function renderProjects() {
        if (!grid) return;
        const filtered = currentFilter === 'all' ? allProjects : allProjects.filter(p => p.category === currentFilter);
        if (!filtered.length) { grid.innerHTML = '<p style="color:var(--color-text-muted)">No hay proyectos en esta categoría.</p>'; return; }
        grid.innerHTML = filtered.map(p => `
            <article class="project-card" data-id="${p.id}">
                <img src="${p.images[0]}" alt="" class="project-card__image" loading="lazy">
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
                    ${p.images.slice(1).map(i => `<img src="${i}" alt="" class="project-detail__image" loading="lazy">`).join('')}
                    <a href="#" onclick="location.reload()" class="project-detail__back">← Volver a proyectos</a>
                </article>
            </div>
        </div>`;
        window.scrollTo({ top: main.offsetTop - 80, behavior: 'smooth' });
    }

    function initFilters() {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => { b.classList.remove('filter-btn--active'); });
                btn.classList.add('filter-btn--active');
                currentFilter = btn.dataset.filter;
                renderProjects();
            });
        });
    }

    document.addEventListener('DOMContentLoaded', () => { loadProjects(); initFilters(); });
})();