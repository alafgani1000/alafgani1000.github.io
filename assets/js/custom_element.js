class MyCustomElement extends HTMLElement {
  static observedAttriutes = ["color", "size"];

  constructor() {
    super();
  }

  connectedCallback() {
    console.log("custom element added to page");
  }

  disconnectedCallback() {
    console.log("custom element removed from page");
  }

  connectedMoveCallback() {
    console.log("Custom element moved with moveBefore()");
  }

  adoptedCallback() {
    console.log("Custom element moved to new page.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed.`);
  }
}

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
    return ["home", "blog", "project", "theme", "contact"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "home" && newValue) {
      this.home = newValue;
    }

    if (name === "blog" && newValue) {
      this.blog = newValue;
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

  updateContent(home, blog, project, theme, contact) {
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
              <li clas="nav-item">
                <a class="nav-link active" aria-current="page" href=${home}
                  >Home</a
                >
              </li>
                <li clas="nav-item">
                <a class="nav-link" aria-current="page" href=${blog}>Blog</a>
              </li>
              <li clas="nav-item">
                <a class="nav-link" aria-current="page" href=${project}
                  >App Project</a
                >
              </li>
              <li clas="nav-item">
                <a class="nav-link" aria-current="page" href=${theme}
                  >Theme Project</a
                >
              </li>
              <li clas="nav-item">
                <a class="nav-link" aria-current="page" href=${contact}
                  >Contact</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>`;
  }

  connectedCallback() {
    const home = this.getAttribute("home") || "index.html";
    const blog = this.getAttribute("blog") || "blog.html";
    this.updateContent(home, blog);
  }
}

class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="mt-4"></footer>`;
  }
}

customElements.define("header-component", HeaderComponent);
customElements.define("nav-component", NavComponent);
customElements.define("footer-component", FooterComponent);
