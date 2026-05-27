(function () {
  const el = document.getElementById('site-mission');
  if (!el) return;

  const label   = el.dataset.label   || '';
  const heading = el.dataset.heading || '';

  const cardsHTML = el.innerHTML;

  const section = document.createElement('section');
  section.className = 'section mission-section';
  section.setAttribute('aria-labelledby', 'mission-heading');
  section.innerHTML = `
    <div class="container">
      ${(label || heading) ? `
      <div class="section-header">
        ${label   ? `<span class="section-label">${label}</span>` : ''}
        ${heading ? `<h2 id="mission-heading" class="section-heading">${heading}</h2>` : ''}
      </div>` : ''}
      <div class="mission-grid">
        ${cardsHTML}
      </div>
    </div>
  `;

  el.replaceWith(section);
})();
