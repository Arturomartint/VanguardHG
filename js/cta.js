(function () {
  const el = document.getElementById('site-cta');
  if (!el) return;

  el.innerHTML = `
    <section class="cta-banner" aria-labelledby="cta-heading">
      <div class="cta-dots-bg" aria-hidden="true"></div>
      <div class="container cta-banner-inner">
        <h2 id="cta-heading">Ready to get started?</h2>
        <p>Connect with our team to discuss your healthcare workforce needs. We respond within one business day.</p>
        <div class="cta-banner-actions">
          <span class="cta-ring-wrap">
            <span class="cta-ring-spin" aria-hidden="true"></span>
            <div class="cta-ring-inner">
              <a href="request.html" class="cta-ring-btn">Request a Service</a>
            </div>
          </span>
          <a href="work-with-us.html" class="btn btn-outline">Work With Us</a>
        </div>
      </div>
    </section>
  `;
})();
