/* =============================================
   TENG GOOO — Custom Web Components v2.0
   ============================================= */

class MyCustomElement extends HTMLElement { }

/* ── NAVBAR COMPONENT ── */
class NavComponent extends HTMLElement {
  static get observedAttributes() {
    return ['home', 'aplikasi', 'blog', 'project', 'theme', 'contact'];
  }

  connectedCallback() {
    const home     = this.getAttribute('home')     || 'index.html';
    const aplikasi = this.getAttribute('aplikasi') || 'aplikasi.html';
    const blog     = this.getAttribute('blog')     || (window.location.pathname.includes('/blogs/') || window.location.pathname.includes('/project/') || window.location.pathname.includes('/themes/') ? '../blog.html' : 'blog.html');
    const project  = this.getAttribute('project')  || 'project.html';
    const theme    = this.getAttribute('theme')    || 'theme.html';
    const contact  = this.getAttribute('contact')  || 'contact.html';
    const path     = window.location.pathname.replace(/\\/g, '/');
    const assetPrefix = (path.includes('/blogs/') || path.includes('/project/') || path.includes('/themes/')) ? '../' : '';

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const isHome     = currentPage === 'index.html' || currentPage === '' || currentPage === '/';
    const isAplikasi = currentPage === 'aplikasi.html';
    const isBlog     = currentPage === 'blog.html' || window.location.pathname.includes('/blogs/');
    const isProject  = currentPage === 'project.html';
    const isTheme    = currentPage === 'theme.html';
    const isContact  = currentPage === 'contact.html';

    this.innerHTML = `
      <nav class="tg-navbar" id="tg-navbar" role="navigation" aria-label="Main navigation">
        <div class="navbar-inner">
          <!-- Brand -->
          <a href="${home}" class="brand brand-v3" aria-label="Tenggoo — Halaman utama">
            <span class="brand-mark" aria-hidden="true"><img src="${assetPrefix}assets/images/tenggoo-mark.svg?v=20261109b" alt="" width="38" height="38"></span>
            <span class="brand-copy">
              <strong>Tenggoo</strong>
              <small>Alat yang membantu</small>
            </span>
          </a>

          <!-- Desktop nav links -->
          <ul class="nav-links" id="nav-links" role="list">
            <li><a href="${home}"     class="${isHome     ? 'active' : ''}" ${isHome     ? 'aria-current="page"' : ''}>Beranda</a></li>
            <li><a href="${aplikasi}" class="${isAplikasi ? 'active' : ''}" ${isAplikasi ? 'aria-current="page"' : ''}>Alat</a></li>
            <li><a href="${blog}"     class="${isBlog     ? 'active' : ''}" ${isBlog     ? 'aria-current="page"' : ''}>Panduan</a></li>
            <li><a href="${project}"  class="${isProject  ? 'active' : ''}" ${isProject  ? 'aria-current="page"' : ''}>Aplikasi</a></li>
            <li><a href="${theme}"    class="${isTheme    ? 'active' : ''}" ${isTheme    ? 'aria-current="page"' : ''}>Template</a></li>
            <li><a href="${contact}"  class="${isContact  ? 'active' : ''}" ${isContact  ? 'aria-current="page"' : ''}>Kontak</a></li>
          </ul>

          <!-- Nav Actions -->
          <div class="nav-actions">
            <a href="${aplikasi}" class="nav-product-cta">Jelajahi alat</a>
            <a href="https://github.com/alafgani1000" target="_blank" rel="noopener" class="github-btn github-icon-btn" aria-label="GitHub Profile">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
              <span class="github-label">GitHub</span>
            </a>
            <!-- Mobile Toggle -->
            <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-links">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" id="icon-menu" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" id="icon-close" aria-hidden="true" style="display:none">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    `;

    this._initBehaviors();
  }

  _initBehaviors() {
    /* Sticky scroll effect */
    const navbar = this.querySelector('#tg-navbar');
    if (navbar) {
      const onScroll = () => {
        if (window.scrollY > 20) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    /* Mobile toggle */
    const toggle   = this.querySelector('#nav-toggle');
    const navLinks = this.querySelector('#nav-links');
    const iconMenu  = this.querySelector('#icon-menu');
    const iconClose = this.querySelector('#icon-close');

    if (toggle && navLinks) {
      toggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen);
        iconMenu.style.display  = isOpen ? 'none'  : '';
        iconClose.style.display = isOpen ? '' : 'none';
      });

      /* Close on outside click */
      document.addEventListener('click', (e) => {
        if (!this.contains(e.target)) {
          navLinks.classList.remove('open');
          toggle.setAttribute('aria-expanded', false);
          iconMenu.style.display  = '';
          iconClose.style.display = 'none';
        }
      });
    }
  }
}

/* ── HEADER COMPONENT (hidden, kept for compatibility) ── */
class HeaderComponent extends HTMLElement {
  connectedCallback() {
    /* Header is now merged into NavComponent.
       Render nothing to avoid duplicate branding. */
    this.style.display = 'none';
  }
}

/* ── FOOTER COMPONENT ── */
class FooterComponent extends HTMLElement {
  connectedCallback() {
    const path   = window.location.pathname.replace(/\\/g, '/');
    const prefix = (path.includes('/blogs/') || path.includes('/project/') || path.includes('/themes/')) ? '../' : '';

    this.innerHTML = `
      <footer class="tg-footer" role="contentinfo">
        <div class="footer-inner">
          <div class="footer-grid">

            <!-- Brand -->
            <div class="footer-brand">
              <a href="${prefix}index.html" class="logo footer-brand-v3" aria-label="Tenggoo — Halaman utama">
                <span class="footer-brand-mark" aria-hidden="true"><img src="${prefix}assets/images/tenggoo-mark.svg?v=20261109b" alt="" width="34" height="34"></span>
                <span>Tenggoo</span>
              </a>
              <p>
                Alat online praktis untuk dokumen, karier, dan pekerjaan sehari-hari.
              </p>
            </div>

            <!-- Panduan -->
            <div class="footer-col">
              <h4>Panduan</h4>
              <ul role="list">
                <li><a href="${prefix}index.html">Beranda</a></li>
                <li><a href="${prefix}blog.html">Panduan &amp; blog</a></li>
                <li><a href="${prefix}project.html">Aplikasi</a></li>
                <li><a href="${prefix}theme.html">Template</a></li>
              </ul>
            </div>

            <!-- Tools -->
            <div class="footer-col">
              <h4>Alat</h4>
              <a href="https://resumekit.tenggoo.my.id/" target="_blank" rel="noopener noreferrer" class="footer-app-item">
                <span class="app-icon" aria-hidden="true">CV</span>
                <div>
                  <span class="app-name">ResumeKit</span>
                  <span class="app-desc">Buat CV profesional</span>
                </div>
              </a>
              <a href="https://pdftools.tenggoo.my.id" target="_blank" rel="noopener noreferrer" class="footer-app-item">
                <span class="app-icon" aria-hidden="true">PDF</span>
                <div>
                  <span class="app-name">Tenggoo PDF</span>
                  <span class="app-desc">Alat PDF sehari-hari</span>
                </div>
              </a>
            </div>

            <!-- Tentang -->
            <div class="footer-col">
              <h4>Tentang</h4>
              <ul role="list">
                <li><a href="${prefix}contact.html">Kontak</a></li>
                <li><a href="https://github.com/alafgani1000" target="_blank" rel="noopener">GitHub</a></li>
              </ul>
              <div class="footer-social">
                <a href="https://github.com/alafgani1000" target="_blank" rel="noopener"
                   class="social-btn" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                  </svg>
                </a>
              </div>
            </div>

          </div><!-- /footer-grid -->

          <!-- Bottom bar -->
          <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} <strong style="color:#e2e8f0">Tenggoo</strong>. Seluruh hak cipta dilindungi.</p>
            <p>Dibuat dengan <span style="color:#f87171">&#9829;</span> oleh
              <a href="https://github.com/alafgani1000" target="_blank" rel="noopener">alafgani1000</a>
            </p>
          </div>
        </div><!-- /footer-inner -->
      </footer>
    `;
  }
}

/* ── REGISTER ── */
customElements.define('header-component', HeaderComponent);
customElements.define('nav-component',    NavComponent);
customElements.define('footer-component', FooterComponent);

/* ── GLOBAL SCROLL REVEAL ── */
document.addEventListener('DOMContentLoaded', () => {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));
});
