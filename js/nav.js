(function () {
  const root = document.getElementById('site-nav');
  if (!root) return;

  root.innerHTML = `
    <header class="nav-wrapper" id="navbar">
      <nav class="nav container">
        <a href="index.html" class="nav-logo">
          <img src="brand_assets/Logo-Wordmark-Trademark.svg" alt="Vanguard Health Group" class="logo-img" />
        </a>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" id="navLinks" role="list">
          <li><a href="about.html"        class="nav-link">About Us</a></li>
          <li><a href="services.html"     class="nav-link">Our Services</a></li>
          <li><a href="industries.html"   class="nav-link">Industries</a></li>
          <li><a href="work-with-us.html" class="nav-link">Work With Us</a></li>
          <li><a href="request.html"      class="nav-cta">Request a Service</a></li>
        </ul>
      </nav>
    </header>

    <div class="nav-drawer-overlay" id="navDrawerOverlay" aria-hidden="true"></div>
    <aside class="nav-drawer" id="navDrawer" aria-label="Site navigation" aria-hidden="true">
      <button class="drawer-close" id="drawerClose" aria-label="Close navigation">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div class="drawer-logo">
        <img src="brand_assets/Logo-Wordmark-Trademark.svg" alt="Vanguard Health Group" class="drawer-logo-img" />
      </div>
      <div class="drawer-divider"></div>
      <nav class="drawer-nav">
        <a href="about.html" class="drawer-item">
          <div class="drawer-icon"><img src="Icons/Individuals.svg" alt="" class="icon-img" /></div>
          <div class="drawer-labels">
            <span class="drawer-label">About Us</span>
            <span class="drawer-sub">Our story &amp; values</span>
          </div>
        </a>
        <div class="drawer-divider"></div>
        <a href="services.html" class="drawer-item">
          <div class="drawer-icon"><img src="Icons/Nurse.svg" alt="" class="icon-img" /></div>
          <div class="drawer-labels">
            <span class="drawer-label">Our Services</span>
            <span class="drawer-sub">Nursing &amp; Support</span>
          </div>
        </a>
        <div class="drawer-divider"></div>
        <a href="industries.html" class="drawer-item">
          <div class="drawer-icon"><img src="Icons/Hospital.svg" alt="" class="icon-img" /></div>
          <div class="drawer-labels">
            <span class="drawer-label">Industries</span>
            <span class="drawer-sub">Sectors we support</span>
          </div>
        </a>
        <div class="drawer-divider"></div>
        <a href="work-with-us.html" class="drawer-item">
          <div class="drawer-icon"><img src="Icons/Nurse.svg" alt="" class="icon-img" /></div>
          <div class="drawer-labels">
            <span class="drawer-label">Work With Us</span>
            <span class="drawer-sub">Join our team</span>
          </div>
        </a>
        <div class="drawer-divider"></div>
        <a href="request.html" class="drawer-item">
          <div class="drawer-icon">
            <svg class="drawer-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02z"/></svg>
          </div>
          <div class="drawer-labels">
            <span class="drawer-label">Request a Service</span>
            <span class="drawer-sub">Contact us to request our services</span>
          </div>
        </a>
        <div class="drawer-divider"></div>
      </nav>
      <div class="drawer-footer">
        <p><a href="tel:+61423455869">0423 455 869</a></p>
        <p><a href="mailto:info@vanguardhealthgroup.com.au">info@vanguardhealthgroup.com.au</a></p>
        <p>&copy; 2026 Vanguard Health Group.<br>All rights reserved.</p>
      </div>
    </aside>
  `;

  // Set active state based on current page filename
  const page = window.location.pathname.split('/').pop() || 'index.html';
  root.querySelectorAll('.nav-link, .nav-cta').forEach(function (link) {
    if (link.getAttribute('href') === page) link.classList.add('active');
  });
  root.querySelectorAll('.drawer-item').forEach(function (item) {
    if (item.getAttribute('href') === page) item.classList.add('active');
  });
})();
