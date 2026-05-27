(function () {
  const el = document.getElementById('site-commitment');
  if (!el) return;

  const label   = el.dataset.label   || '';
  const heading = el.dataset.heading || '';
  const intro   = el.dataset.intro   || '';
  const cols    = el.dataset.cols    || '';

  const cardsHTML  = el.innerHTML;
  const headerClass = intro ? 'section-header' : 'commitment-header';
  const gridClass   = cols === '3' ? 'commitment-grid commitment-grid--3col' : 'commitment-grid';
  const introHTML   = intro
    ? `<p class="section-intro" style="color:rgba(255,255,255,.75);">${intro}</p>`
    : '';

  const section = document.createElement('section');
  section.className = 'section commitment-section';
  section.setAttribute('aria-labelledby', 'commitment-heading');
  section.innerHTML = `
    <div class="container">
      <div class="${headerClass}">
        <span class="section-label section-label--light">${label}</span>
        <h2 id="commitment-heading" class="section-heading section-heading--light">${heading}</h2>
        ${introHTML}
      </div>
      <div class="${gridClass}">
        ${cardsHTML}
      </div>
    </div>
  `;

  el.replaceWith(section);
})();
