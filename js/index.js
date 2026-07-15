(() => {
    'use strict';

    function initCounters() {
        const counters = document.querySelectorAll('[data-count]');
        if (!counters.length) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-count'), 10);
                const duration = 1500;
                const start = performance.now();
                function animate(now) {
                    const progress = Math.min((now - start) / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.floor(eased * target);
                    if (progress < 1) requestAnimationFrame(animate);
                    else el.textContent = target;
                }
                requestAnimationFrame(animate);
                observer.unobserve(el);
            });
        }, { threshold: 0.5 });
        counters.forEach(c => observer.observe(c));
    }

    function initScrollReveal() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        document.querySelectorAll('.about__card, .stack__category').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    function initContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            btn.disabled = true;
            btn.textContent = 'Enviando...';
            try {
                await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(new FormData(form)).toString() });
                form.reset();
                showToast('Mensaje enviado correctamente');
            } catch { showToast('Error al enviar. Usa el email directo.', 'error'); }
            finally { btn.disabled = false; btn.textContent = 'Enviar Mensaje'; }
        });
    }

    function showToast(msg, type = 'success') {
        let t = document.querySelector('.toast');
        if (!t) { t = document.createElement('div'); t.className = 'toast'; t.innerHTML = '<span class="toast__msg"></span>'; document.body.appendChild(t); }
        t.className = `toast toast--${type} toast--visible`;
        t.querySelector('.toast__msg').textContent = msg;
        t.style.cssText = 'position:fixed;bottom:1.5rem;right:1.5rem;padding:0.75rem 1.5rem;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:8px;z-index:2000;transform:translateX(120%);transition:transform 0.2s';
        if (type === 'success') t.style.borderColor = 'var(--color-primary)';
        else t.style.borderColor = 'var(--color-error)';
        setTimeout(() => t.style.transform = 'translateX(0)', 50);
        setTimeout(() => t.style.transform = 'translateX(120%)', 4000);
    }

    document.addEventListener('DOMContentLoaded', () => { initCounters(); initScrollReveal(); initContactForm(); });
})();