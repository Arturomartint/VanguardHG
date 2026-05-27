(function () {
  const el = document.getElementById('site-services');
  if (!el) return;

  const label   = el.dataset.label   || '';
  const heading = el.dataset.heading || '';
  const intro   = el.dataset.intro   || '';
  const cta     = el.dataset.cta !== 'false';

  const cardsHTML = el.innerHTML;

  const section = document.createElement('section');
  section.className = 'section services-section';
  section.setAttribute('aria-labelledby', 'services-heading');
  section.innerHTML = `
    <div class="container">
      ${(label || heading || intro) ? `
      <div class="section-header">
        ${label   ? `<span class="section-label">${label}</span>` : ''}
        ${heading ? `<h2 id="services-heading" class="section-heading">${heading}</h2>` : ''}
        ${intro   ? `<p class="section-intro">${intro}</p>` : ''}
      </div>` : ''}
      <div class="services-grid">
        ${cardsHTML}
      </div>
      ${cta ? `
      <div class="section-cta">
        <div class="cta-ring-wrap">
          <div class="cta-ring-spin" aria-hidden="true"></div>
          <div class="cta-ring-inner">
            <a href="request.html" class="cta-ring-btn">Request a Service</a>
          </div>
        </div>
      </div>` : ''}
    </div>
  `;

  el.replaceWith(section);
})();
