class MyCustomElement extends HTMLElement { }

class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header class="header text-center py-3 me-bg-primary">
        <a
          class="navbar-brand fs-1 fw-medium me-text-primary pacifico-regular"
          href="/"
          >Teng Gooo</a
        >
      </header>`;
  }
}

class NavComponent extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["home", "aplikasi", "project", "theme", "contact"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "home" && newValue) {
      this.home = newValue;
    }

    if (name === "aplikasi" && newValue) {
      this.aplikasi = newValue;
    }

    if (name === "project" && newValue) {
      this.project = newValue;
    }

    if (name === "theme" && newValue) {
      this.theme = newValue;
    }

    if (name === "contact" && newValue) {
      this.contact = newValue;
    }
  }

  updateContent(home, aplikasi, project, theme, contact) {
    // Get current page path
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';

    // Determine which menu item should be active
    const isHome = currentPage === 'index.html' || currentPage === '' || currentPage === '/';
    const isAplikasi = currentPage === 'aplikasi.html';
    const isProject = currentPage === 'project.html';
    const isTheme = currentPage === 'theme.html';
    const isContact = currentPage === 'contact.html';

    this.innerHTML = ` <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse me-text-primary"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-3 fw-normal">
              <li class="nav-item">
                <a class="nav-link ${isHome ? 'active' : ''}" aria-current="page" href="${home}"
                  >Home</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link ${isAplikasi ? 'active' : ''}" aria-current="page" href="${aplikasi}"
                  >Aplikasi</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link ${isProject ? 'active' : ''}" aria-current="page" href="${project}"
                  >Source Code</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link ${isTheme ? 'active' : ''}" aria-current="page" href="${theme}"
                  >Tema</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link ${isContact ? 'active' : ''}" aria-current="page" href="${contact}"
                  >Kontak</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/alafgani1000/alafgani1000.github.io"
                  ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="navbar-nav-svg" viewBox="0 0 512 499.36" role="img"><title>GitHub</title><path fill="white" fill-rule="evenodd" d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"></path></svg></a
                > 
              
              </li>
            </ul>
          </div>
        </div>
      </nav>`;
  }

  connectedCallback() {
    const home = this.getAttribute("home") || "index.html";
    const aplikasi = this.getAttribute("aplikasi") || "aplikasi.html";
    const project = this.getAttribute("project") || "project.html";
    const theme = this.getAttribute("theme") || "theme.html";
    const contact = this.getAttribute("contact") || "contact.html";
    this.updateContent(home, aplikasi, project, theme, contact);
  }
}

class FooterComponent extends HTMLElement {
  connectedCallback() {
    const path = window.location.pathname.replace(/\\/g, '/');
    let prefix = '';
    if (path.includes('/project/') || path.includes('/themes/')) {
      prefix = '../';
    }

    this.innerHTML = `
      <footer class="mt-5 py-5 me-bg-secondary text-start">
        <div class="container mt-2">
          <div class="row g-4 justify-content-between">
            <!-- Column 1: Brand & Info -->
            <div class="col-lg-4 col-md-12 text-center text-lg-start mb-2 mb-lg-0">
              <a class="navbar-brand fs-2 fw-medium me-text-primary pacifico-regular d-block mb-3" href="${prefix}index.html">
                Teng Gooo
              </a>
              <p class="text-muted small lh-lg mb-0 mx-auto mx-lg-0" style="max-width: 320px;">
                Temukan source code Laravel gratis, aplikasi web open source, dan template website responsif siap pakai untuk belajar, portfolio, dan pengembangan project.
              </p>
            </div>

            <!-- Column 2: Navigation -->
            <div class="col-lg-3 col-md-4 col-sm-6">
              <h4 class="h6 fw-bold me-text-primary mb-3 text-uppercase tracking-wider">Navigasi</h4>
              <ul class="list-unstyled footer-links">
                <li class="mb-2"><a href="${prefix}index.html" class="text-dark small hover-gold transition-all">Home</a></li>
                <li class="mb-2"><a href="${prefix}aplikasi.html" class="text-dark small hover-gold transition-all">Aplikasi</a></li>
                <li class="mb-2"><a href="${prefix}project.html" class="text-dark small hover-gold transition-all">Source Code</a></li>
                <li class="mb-2"><a href="${prefix}theme.html" class="text-dark small hover-gold transition-all">Tema</a></li>
                <li class="mb-2"><a href="${prefix}contact.html" class="text-dark small hover-gold transition-all">Kontak</a></li>
              </ul>
            </div>

            <!-- Column 3: Applications Menu -->
            <div class="col-lg-3 col-md-5 col-sm-6">
              <h4 class="h6 fw-bold me-text-primary mb-3 text-uppercase tracking-wider">Aplikasi Kami</h4>
              <ul class="list-unstyled">
                <li class="mb-3">
                  <a href="https://pdftools.tenggoo.my.id" target="_blank" rel="noopener noreferrer" class="d-inline-flex align-items-center gap-3 text-dark footer-app-link transition-all text-decoration-none">
                    <span class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle p-1 shadow-sm" style="width: 32px; height: 32px; flex-shrink: 0;">
                      <img src="${prefix}assets/images/tenggoo_pdf.png" alt="PDF Tools" width="18" height="18" onerror="this.src='https://img.icons8.com/color/48/pdf-assets.png'">
                    </span>
                    <div>
                      <span class="d-block fw-semibold small">Tenggoo PDF</span>
                      <span class="text-muted d-block" style="font-size: 0.75rem; margin-top: -2px;">Kompres & Gabung PDF</span>
                    </div>
                  </a>
                </li>
                <li class="mb-3">
                  <a href="https://scan.tenggoo.my.id" target="_blank" rel="noopener noreferrer" class="d-inline-flex align-items-center gap-3 text-dark footer-app-link transition-all text-decoration-none">
                    <span class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle p-1 shadow-sm" style="width: 32px; height: 32px; flex-shrink: 0;">
                      <img src="${prefix}assets/images/tenggoo_scan.png" alt="Scans" width="18" height="18" onerror="this.src='https://img.icons8.com/color/48/scanner.png'">
                    </span>
                    <div>
                      <span class="d-block fw-semibold small">Tenggoo Scan</span>
                      <span class="text-muted d-block" style="font-size: 0.75rem; margin-top: -2px;">Pemindai Dokumen</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <!-- Column 4: Social Media -->
            <div class="col-lg-2 col-md-3 col-12 text-center text-md-start">
              <h4 class="h6 fw-bold me-text-primary mb-3 text-uppercase tracking-wider">Ikuti Kami</h4>
              <div class="d-flex gap-2 justify-content-center justify-content-md-start">
                <a href="https://github.com/alafgani1000" target="_blank" rel="noopener" class="btn btn-sm footer-social-btn d-inline-flex align-items-center justify-content-center rounded-circle" style="width: 36px; height: 36px; padding: 0;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <hr class="my-4" style="border-color: rgba(0,0,0,0.1);">

          <!-- Bottom Footer Bar -->
          <div class="row align-items-center">
            <div class="col-md-6 text-center text-md-start mb-2 mb-md-0">
              <p class="mb-0 small text-muted">
                &copy; ${new Date().getFullYear()} <span class="pacifico-regular me-text-primary">Teng Gooo</span>. All rights reserved.
              </p>
            </div>
            <div class="col-md-6 text-center text-md-end">
              <p class="small mb-0 text-muted">
                Created with <span style="color: #e25555;">&hearts;</span> by 
                <a href="https://github.com/alafgani1000" class="fw-bold text-dark text-decoration-none hover-gold transition-all">alafgani1000</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define("header-component", HeaderComponent);
customElements.define("nav-component", NavComponent);
customElements.define("footer-component", FooterComponent);
