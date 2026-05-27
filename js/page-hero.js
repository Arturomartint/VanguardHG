(function () {
  const el = document.getElementById('site-page-hero');
  if (!el) return;

  const crumb    = el.dataset.crumb    || '';
  const title    = el.dataset.title    || '';
  const subtitle = el.dataset.subtitle || '';

  el.innerHTML = `
    <div class="page-hero">
      <div class="page-hero-content container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="index.html">Home</a>
          <span class="breadcrumb-sep" aria-hidden="true">/</span>
          <span>${crumb}</span>
        </nav>
        <h1>${title}</h1>
        ${subtitle ? `<p>${subtitle}</p>` : ''}
      </div>
    </div>
  `;
})();
