/* =============================================
   TENGGOO — Custom Web Components v3.1
   Apple-Inspired Minimal Navigation, Footer & Gallery
   ============================================= */

class MyCustomElement extends HTMLElement { }

/* ── NAVBAR COMPONENT ── */
class NavComponent extends HTMLElement {
  static get observedAttributes() {
    return ['home', 'aplikasi', 'blog', 'project', 'theme', 'contact'];
  }

  connectedCallback() {
    const path = window.location.pathname.replace(/\\/g, '/');
    const inSubdir = path.includes('/blogs/') || path.includes('/project/') || path.includes('/themes/');
    const prefix = inSubdir ? '../' : '';

    const home     = this.getAttribute('home')     || `${prefix}index.html`;
    const aplikasi = this.getAttribute('aplikasi') || `${prefix}aplikasi.html`;
    const blog     = this.getAttribute('blog')     || `${prefix}blog.html`;
    const project  = this.getAttribute('project')  || `${prefix}project.html`;
    const theme    = this.getAttribute('theme')    || `${prefix}theme.html`;
    const contact  = this.getAttribute('contact')  || `${prefix}contact.html`;

    const currentPage = path.split('/').pop() || 'index.html';
    const isHome     = !inSubdir && (currentPage === 'index.html' || currentPage === '' || currentPage === '/');
    const isAplikasi = !inSubdir && currentPage === 'aplikasi.html';
    const isBlog     = currentPage === 'blog.html' || path.includes('/blogs/');
    const isProject  = currentPage === 'project.html' || path.includes('/project/');
    const isTheme    = currentPage === 'theme.html' || path.includes('/themes/');
    const isContact  = !inSubdir && currentPage === 'contact.html';

    this.innerHTML = `
      <nav class="tg-navbar" id="tg-navbar" role="navigation" aria-label="Navigasi utama">
        <div class="navbar-inner">
          <!-- Brand -->
          <a href="${home}" class="brand brand-apple" aria-label="Tenggoo — Halaman utama">
            <span class="brand-glyph" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 64 64" fill="none">
                <rect width="64" height="64" rx="15" fill="currentColor"/>
                <path d="M15 16h34v9H36.5v24H27.5V25H15z" fill="#ffffff"/>
                <rect x="39" y="38" width="10" height="11" rx="2" fill="#0071e3"/>
              </svg>
            </span>
            <span class="brand-wordmark">Tenggoo</span>
          </a>

          <!-- Desktop & Mobile Curtain Nav Links -->
          <ul class="nav-links" id="nav-links" role="list">
            <li><a href="${home}"     class="${isHome     ? 'active' : ''}" ${isHome     ? 'aria-current="page"' : ''}>Beranda</a></li>
            <li><a href="${aplikasi}" class="${isAplikasi ? 'active' : ''}" ${isAplikasi ? 'aria-current="page"' : ''}>Alat</a></li>
            <li><a href="${blog}"     class="${isBlog     ? 'active' : ''}" ${isBlog     ? 'aria-current="page"' : ''}>Panduan</a></li>
            <li><a href="${project}"  class="${isProject  ? 'active' : ''}" ${isProject  ? 'aria-current="page"' : ''}>Source Code</a></li>
            <li><a href="${theme}"    class="${isTheme    ? 'active' : ''}" ${isTheme    ? 'aria-current="page"' : ''}>Template</a></li>
            <li><a href="${contact}"  class="${isContact  ? 'active' : ''}" ${isContact  ? 'aria-current="page"' : ''}>Kontak</a></li>
          </ul>

          <!-- Nav Actions -->
          <div class="nav-actions">
            <a href="${aplikasi}" class="nav-product-cta">Jelajahi Alat</a>
            <a href="https://github.com/alafgani1000" target="_blank" rel="noopener noreferrer" class="github-btn github-icon-btn" aria-label="GitHub Tenggoo">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
            </a>
            <!-- Mobile Toggle -->
            <button class="nav-toggle" id="nav-toggle" type="button" aria-label="Buka menu navigasi" aria-expanded="false" aria-controls="nav-links">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" id="icon-menu" aria-hidden="true">
                <path stroke-linecap="round" d="M4 8h16M4 16h16"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" id="icon-close" aria-hidden="true" style="display:none">
                <path stroke-linecap="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    `;

    this._initBehaviors();
  }

  _initBehaviors() {
    const navbar = this.querySelector('#tg-navbar');
    if (navbar) {
      const onScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 10);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    const toggle    = this.querySelector('#nav-toggle');
    const navLinks  = this.querySelector('#nav-links');
    const iconMenu  = this.querySelector('#icon-menu');
    const iconClose = this.querySelector('#icon-close');

    const closeMenu = () => {
      if (!navLinks || !toggle) return;
      navLinks.classList.remove('open');
      navbar && navbar.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      if (iconMenu) iconMenu.style.display = '';
      if (iconClose) iconClose.style.display = 'none';
      document.body.classList.remove('tg-nav-locked');
    };

    if (toggle && navLinks) {
      toggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        navbar && navbar.classList.toggle('menu-open', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));
        if (iconMenu) iconMenu.style.display = isOpen ? 'none' : '';
        if (iconClose) iconClose.style.display = isOpen ? '' : 'none';
        document.body.classList.toggle('tg-nav-locked', isOpen);
      });

      navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
      });

      document.addEventListener('click', (e) => {
        if (!this.contains(e.target)) closeMenu();
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
      });
    }
  }
}

/* ── HEADER COMPONENT (hidden, kept for compatibility) ── */
class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.style.display = 'none';
  }
}

/* ── FOOTER COMPONENT (Apple-style light directory footer) ── */
class FooterComponent extends HTMLElement {
  connectedCallback() {
    const path   = window.location.pathname.replace(/\\/g, '/');
    const prefix = (path.includes('/blogs/') || path.includes('/project/') || path.includes('/themes/')) ? '../' : '';

    this.innerHTML = `
      <footer class="tg-footer" role="contentinfo">
        <div class="footer-inner">
          <div class="footer-footnote">
            <p>
              Semua alat Tenggoo tersedia gratis langsung dari browser tanpa instalasi.
              Pemrosesan dokumen pada Tenggoo PDF berjalan secara lokal di perangkat Anda demi menjaga privasi file.
            </p>
          </div>

          <div class="footer-grid">
            <!-- Column 1: Alat -->
            <div class="footer-col">
              <h4>Alat Tenggoo</h4>
              <ul role="list">
                <li><a href="https://resumekit.tenggoo.my.id/" target="_blank" rel="noopener noreferrer">ResumeKit</a></li>
                <li><a href="https://pdftools.tenggoo.my.id/" target="_blank" rel="noopener noreferrer">Tenggoo PDF</a></li>
                <li><a href="https://scan.tenggoo.my.id/" target="_blank" rel="noopener noreferrer">Tenggoo Scan</a></li>
                <li><a href="https://bengkelpro.tenggoo.my.id/" target="_blank" rel="noopener noreferrer">Bengkel Pro</a></li>
                <li><a href="${prefix}aplikasi.html">Semua Alat</a></li>
              </ul>
            </div>

            <!-- Column 2: Jelajahi -->
            <div class="footer-col">
              <h4>Jelajahi</h4>
              <ul role="list">
                <li><a href="${prefix}index.html">Beranda</a></li>
                <li><a href="${prefix}blog.html">Panduan &amp; Blog</a></li>
                <li><a href="${prefix}project.html">Source Code</a></li>
                <li><a href="${prefix}theme.html">Template Website</a></li>
              </ul>
            </div>

            <!-- Column 3: Panduan Populer -->
            <div class="footer-col">
              <h4>Panduan Pilihan</h4>
              <ul role="list">
                <li><a href="${prefix}blogs/cara-mengecilkan-ukuran-pdf.html">Cara Mengecilkan PDF</a></li>
                <li><a href="${prefix}blogs/aplikasi-pdf-online.html">7 Aplikasi PDF Online</a></li>
                <li><a href="${prefix}blogs/template-keuangan-excel.html">Template Keuangan UMKM</a></li>
              </ul>
            </div>

            <!-- Column 4: Tentang -->
            <div class="footer-col">
              <h4>Tentang Tenggoo</h4>
              <ul role="list">
                <li><a href="${prefix}contact.html">Hubungi Kami</a></li>
                <li><a href="https://github.com/alafgani1000" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="mailto:selaicode101@gmail.com">selaicode101@gmail.com</a></li>
              </ul>
            </div>
          </div><!-- /footer-grid -->

          <div class="footer-more-ways">
            Butuh bantuan atau ingin berkolaborasi? <a href="${prefix}contact.html">Hubungi tim Tenggoo</a> atau buka diskusi di <a href="https://github.com/alafgani1000" target="_blank" rel="noopener noreferrer">GitHub</a>.
          </div>

          <!-- Bottom legal bar -->
          <div class="footer-bottom">
            <p>Hak cipta &copy; ${new Date().getFullYear()} Tenggoo. Seluruh hak cipta dilindungi.</p>
            <div class="footer-bottom-meta">
              <a href="https://github.com/alafgani1000" target="_blank" rel="noopener noreferrer">alafgani1000</a>
              <span aria-hidden="true">·</span>
              <span>Indonesia</span>
            </div>
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

/* ── GLOBAL SCROLL REVEAL & INTERACTIVE GALLERY ── */
document.addEventListener('DOMContentLoaded', () => {
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    if (!('IntersectionObserver' in window)) {
      revealEls.forEach(el => el.classList.add('visible'));
    } else {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

      revealEls.forEach(el => observer.observe(el));
    }
  }

  document.querySelectorAll('[data-apple-gallery]').forEach((gallery) => {
    const slides = Array.from(gallery.querySelectorAll('.apple-gallery-slide'));
    if (!slides.length) return;

    const prevBtn = gallery.querySelector('[data-gallery-prev]');
    const nextBtn = gallery.querySelector('[data-gallery-next]');
    const dots    = Array.from(gallery.querySelectorAll('[data-gallery-dot]'));
    const countEl = gallery.querySelector('[data-gallery-count]');
    let index = slides.findIndex((slide) => slide.classList.contains('active'));
    if (index < 0) index = 0;

    const render = (nextIdx) => {
      index = (nextIdx + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        const isCurrent = i === index;
        slide.classList.toggle('active', isCurrent);
        slide.hidden = !isCurrent;
      });
      dots.forEach((dot, i) => {
        const isCurrent = i === index;
        dot.classList.toggle('active', isCurrent);
        dot.setAttribute('aria-current', isCurrent ? 'true' : 'false');
      });
      if (countEl) {
        countEl.textContent = `${index + 1} / ${slides.length}`;
      }
    };

    if (prevBtn) prevBtn.addEventListener('click', () => render(index - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => render(index + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => render(i)));

    gallery.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        render(index - 1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        render(index + 1);
      }
    });

    render(index);
  });
});
