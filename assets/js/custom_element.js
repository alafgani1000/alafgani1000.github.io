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
    this.innerHTML = `
      <footer class="mt-5 py-4 me-bg-secondary text-center">
        <div class="container">
          <p class="mb-2">
            &copy; ${new Date().getFullYear()} <span class="pacifico-regular">Teng Gooo</span>. All rights reserved.
          </p>
          <p class="small mb-0">
            Created with <span style="color: #e25555;">&hearts;</span> by 
            <a href="https://github.com/alafgani1000" class="fw-bold text-dark text-decoration-none">alafgani1000</a>
          </p>
        </div>
      </footer>
    `;
  }
}

customElements.define("header-component", HeaderComponent);
customElements.define("nav-component", NavComponent);
customElements.define("footer-component", FooterComponent);
