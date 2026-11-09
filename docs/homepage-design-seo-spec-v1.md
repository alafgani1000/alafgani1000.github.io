# Tenggoo Homepage — Design & SEO Specification v1.0

**Status:** Ready for implementation  
**Scope:** Homepage (`/`) only  
**Owner:** Design + SEO  
**Last updated:** 9 November 2026

## 1. Purpose and guardrails

Tenggoo is positioned as a practical productivity-tools platform. The homepage must make this clear within the first viewport, lead visitors to the two primary products, and create clear paths to useful resources.

This specification deliberately excludes backend, database, and product-feature work. It also does **not** rename or remove any indexed URL. Existing paths such as `/aplikasi.html`, `/blog.html`, `/project.html`, and `/theme.html` remain valid until a separately approved migration and 301 redirect plan exists.

### Current-state decisions

| Area | Decision |
| --- | --- |
| Primary products | ResumeKit and Tenggoo PDF receive primary placement and visual weight. |
| Supporting content | Articles, source code, and themes remain discoverable but do not compete with products above the fold. |
| Language | Indonesian-first interface for the existing site; English product-language may be introduced only through a deliberate bilingual URL strategy. |
| Visual style | Modern minimalist: spacious layout, restrained shadows, no decorative animation requirement, and no marketing gradients as a default surface. |
| Existing design assets | Keep the Tenggoo mark and product imagery; use product screenshots only when they improve recognition or comprehension. |

## 2. Homepage information architecture

The homepage follows this order. Each section has one visitor job and one primary action.

| Order | Section | Visitor question answered | Primary action |
| ---: | --- | --- | --- |
| 1 | Header and navigation | “Where can I go?” | Open a product, category, or resource page. |
| 2 | Hero | “What is Tenggoo and why should I use it?” | Explore tools / view resources. |
| 3 | Popular tools | “Which tool solves my task?” | Open ResumeKit or Tenggoo PDF. |
| 4 | Explore categories | “What else can I find here?” | Go to tool, resource, or developer-content category. |
| 5 | Why Tenggoo | “Why trust these tools?” | Reinforce the product CTA; no competing conversion path. |
| 6 | Featured resources | “Can Tenggoo help me learn or complete this task?” | Open an article relevant to PDF, CV, or productivity. |
| 7 | Final CTA | “What should I do now?” | Return to the two primary product choices. |
| 8 | Footer | “Where can I find supporting information?” | Reach product, resource, company, and policy links. |

### Section 1 — Header and navigation

**Desktop layout:** brand on the left, four concise navigation groups in the center, one `Explore tools` button on the right. Keep the header height between 64–72 px.

**Recommended labels:**

- Tools → `/aplikasi.html` until a `/tools/` category is launched.
- Resources → `/blog.html`.
- Source code → `/project.html`.
- Templates → `/theme.html`.
- Contact should move to the footer unless support is a primary business goal.

The logo link returns to `/`. Product links may open in the current tab on mobile; avoid an unexpected new tab for internal navigation. External product subdomains may keep `target="_blank"` with `rel="noopener noreferrer"` where that preserves the current browsing context.

**Mobile:** logo + menu button only. In the expanded menu, place `Explore tools` first, then navigation links; maintain a minimum 44 × 44 px touch target.

### Section 2 — Hero

**Goal:** explain the platform in one short scan and lead to a product choice without forcing a decision between too many actions.

**Required content**

- Eyebrow: `Practical tools for everyday work`
- H1: `Tools That Make Your Work Simpler.`
- Supporting copy: `Discover practical digital tools to manage documents, create professional resumes, and simplify everyday tasks.`
- Primary CTA: `Explore Tools` → `#popular-tools`
- Secondary CTA: `Discover Resources` → `#featured-resources`
- Trust statements: `No installation`, `Free to use`, `Privacy-first tools`.

**Visual:** a single quiet product-preview composition, not two competing cards. It may reference ResumeKit and Tenggoo PDF, but its job is recognition, not a second set of CTAs. Use a plain off-white surface with a navy preview frame, 1 px neutral border, and one teal status/accent. Do not add a gradient background.

**Desktop:** two columns, 6/6 or 7/5; text max-width 600 px; vertical padding 96–120 px.  
**Mobile:** copy first, preview second; vertical padding 56–72 px; retain both CTA buttons as full-width or equal-width stacked controls.

### Section 3 — Popular tools

Set `id="popular-tools"`. Use two equal product cards in a two-column grid; stack to one column below 720 px.

| Product | Card purpose | CTA | Proof points |
| --- | --- | --- | --- |
| ResumeKit | Create professional, ATS-ready resumes. | `Create a resume` → `https://resumekit.tenggoo.my.id/` | Professional templates; browser-based PDF export; no layout work from scratch. |
| Tenggoo PDF | Complete everyday PDF tasks privately. | `Open PDF tools` → `https://pdftools.tenggoo.my.id/` | Merge, split, compress, convert; browser processing; no account required. |

Cards must have the same structure: icon, product label, H2, one-sentence outcome, three proof points, button, and concise availability line. Do not use a large gradient decoration, a second paragraph, or more than one primary button per card.

### Section 4 — Explore categories

Set `id="explore-categories"`. Use a compact 2 × 2 grid on desktop and a single column on small screens. These are navigation tiles, not feature cards.

| Category | Intent | Current safe destination | Future canonical destination |
| --- | --- | --- | --- |
| PDF & documents | Document tools and guides | `https://pdftools.tenggoo.my.id/` and relevant PDF articles | `/tools/pdf/` |
| Career & resume | Resume product and related guides | `https://resumekit.tenggoo.my.id/` | `/tools/resume/` |
| Business & productivity | Templates and practical workflows | `/blog.html` | `/tools/business/` or `/tools/productivity/` |
| Developer resources | Source code and website templates | `/project.html` and `/theme.html` | `/resources/` |

Each tile contains a Lucide-style line icon, title, 12–16 word description, and text arrow. The whole tile is one accessible link; do not nest links.

### Section 5 — Why Tenggoo

Use an off-white or navy contrast band with one headline and three principles. Avoid counters or unverified numeric claims.

- **Useful from the start** — Open a tool and complete a clear task without a complex setup.
- **Privacy-conscious by design** — Explain browser processing only for products where it is factually true.
- **Built around real work** — Tools and resources solve repeatable everyday tasks.

Keep this section to a single H2 and three H3 headings. If a dark surface is used, meet 4.5:1 text contrast and remove decorative glow effects.

### Section 6 — Featured resources

Set `id="featured-resources"`. Show a maximum of three editorial links in a clean list or three-card grid. Prefer product-aligned articles first:

1. `Cara Mengecilkan Ukuran PDF agar Tetap Jelas` → `/blogs/cara-mengecilkan-ukuran-pdf.html`
2. `7 Aplikasi PDF Online untuk Edit dan Kelola File` → `/blogs/aplikasi-pdf-online.html`
3. `Template Keuangan UMKM untuk Hitung Untung Rugi` → `/blogs/template-keuangan-excel.html`

Every item needs category, H3 link, one-sentence summary, publish date, and `Read guide` link. Add `View all resources` → `/blog.html`. The PDF articles should include contextual text links to Tenggoo PDF once the landing-page copy confirms the relevant workflow.

### Section 7 — Final CTA

Use a short decision prompt, not generic marketing copy.

- H2: `Start with the tool you need today.`
- Body: `Create a professional resume or take care of a PDF task in a few clicks.`
- Actions: `Create a resume` and `Open PDF tools`.

Use a solid navy surface, white text, and teal focus/hover accents. This section should not include a form or newsletter request.

### Section 8 — Footer

Use four groups: Brand summary, Tools, Resources, and Company. Include links to Home, Tools, Blog/Resources, Source Code, Templates, Contact, and Privacy Policy once it exists. Keep GitHub as a secondary social link. The summary should describe Tenggoo as a productivity-tools platform, not primarily as a source-code directory.

## 3. Design system

### Colour tokens

| Token | Value | Usage |
| --- | --- | --- |
| `--color-navy-950` | `#081120` | Main dark surface and footer. |
| `--color-navy-900` | `#0F1B2D` | Dark section and button hover. |
| `--color-teal-600` | `#0F766E` | Product accents, links on pale surfaces, focus accent. |
| `--color-teal-500` | `#14B8A6` | Active/interactive accent only. |
| `--color-blue-600` | `#2563EB` | Secondary informational accent, used sparingly. |
| `--color-slate-900` | `#0F172A` | Primary text. |
| `--color-slate-600` | `#475569` | Body text. |
| `--color-slate-200` | `#E2E8F0` | Borders and dividers. |
| `--color-surface` | `#FFFFFF` | Primary surface. |
| `--color-surface-muted` | `#F8FAFC` | Page and grouped-section background. |

Do not use gradients for page backgrounds, card fills, CTAs, or icons. A subtle 4–8% solid tint is acceptable for product differentiation.

### Typography

Use **Plus Jakarta Sans** for interface and headings. A separate body font is unnecessary for the homepage.

| Element | Desktop | Mobile | Weight | Line height |
| --- | ---: | ---: | ---: | ---: |
| H1 | 56–64 px | 38–44 px | 800 | 1.08 |
| H2 | 36–44 px | 28–32 px | 800 | 1.15 |
| H3 | 20–24 px | 20–22 px | 700 | 1.3 |
| Lead | 18–20 px | 17–18 px | 400–500 | 1.6 |
| Body | 16 px | 16 px | 400 | 1.65 |
| Label / eyebrow | 12 px | 12 px | 700–800 | 1.3 |

Use sentence case for headings and buttons. Limit line width to roughly 60–72 characters for body copy and 12–14 words for the hero H1.

### Spacing, cards, and interaction

- Base spacing unit: 8 px. Major section gaps: 96 px desktop, 64 px mobile.
- Container: max-width 1200 px with 24 px mobile and 32 px desktop side padding.
- Cards: 16–20 px radius, `1px solid #E2E8F0`, shadow only on hover (`0 12px 28px rgba(15,23,42,.08)`).
- Buttons: 44 px minimum height, 10–12 px radius, clear primary/secondary distinction.
- Focus: visible 3 px teal outline with 2 px offset. Hover is never the only state indicator.
- Motion: optional 150–200 ms opacity/transform transition; respect `prefers-reduced-motion`; no scroll-reveal needed for comprehension.

## 4. SEO specification

### Homepage metadata

| Field | Required value |
| --- | --- |
| Title | `Tenggoo – Free Online Tools for Documents & Productivity` |
| Meta description | `Discover practical online tools for PDF documents, professional resumes, and everyday productivity. Simple, useful, and accessible.` |
| Canonical | `https://tenggoo.my.id/` |
| Robots | `index, follow, max-image-preview:large` |
| Primary H1 | `Tools That Make Your Work Simpler.` |
| Document language | Keep `lang="id"` until a dedicated English version exists; do not label Indonesian content as English. |

The English title and description are an approved brand position. If the on-page copy remains Indonesian, localize the metadata consistently instead of creating a mixed-language SERP snippet without an explicit bilingual plan. Remove the homepage `meta name="keywords"`; it does not contribute to modern search ranking and its current developer-heavy terms conflict with the product-first positioning.

### Heading hierarchy

There must be exactly one H1. Hero preview text must not use an H2 because it is decorative/product-preview content; use a `<p>` or `<strong>` instead.

| Section | Heading level | Proposed heading |
| --- | --- | --- |
| Hero | H1 | Tools That Make Your Work Simpler. |
| Popular tools | H2 | Popular tools for documents and careers |
| ResumeKit / Tenggoo PDF | H3 | Product names |
| Explore categories | H2 | Explore by what you need to do |
| Each category | H3 | Category names |
| Why Tenggoo | H2 | Simple tools for real work |
| Each principle | H3 | Principle names |
| Featured resources | H2 | Guides for work made simpler |
| Each article | H3 | Article title |
| Final CTA | H2 | Start with the tool you need today. |

### Structured data

Retain `Organization` and `WebSite` JSON-LD, using stable `@id` values. Add only factual markup:

- `WebPage` for the homepage, with `isPartOf` pointing to the existing `WebSite` node.
- `ItemList` for the two primary products, linking to the real product URLs.
- Use `SoftwareApplication` only on individual product landing pages, where operating system, offer, and feature claims can be verified.

Do not add `Article` markup to the homepage. Do not mark breadcrumbs until navigational hierarchy exists in the rendered interface.

### Internal-linking rules

1. Every primary product is linked at least twice: header/category and product card/final CTA.
2. Each featured article links contextually to its related tool with descriptive anchor text such as `compress a PDF with Tenggoo PDF`; avoid generic `click here`.
3. The homepage links once to each supporting content hub: Blog, Source Code, and Templates.
4. Never add an unlaunched `/tools/`, `/products/`, or `/resources/` URL to the public navigation or sitemap.
5. When category URLs launch, add a static HTML link from the homepage and map legacy URLs with tested 301 redirects before changing internal links.

### Images and performance

- Use meaningful `alt` text for informative product screenshots; set `alt=""` on decorative marks and backgrounds.
- Reserve width and height for all images to prevent layout shift.
- Eager-load only the hero visual; lazy-load below-the-fold images.
- Do not add remote icon-image fallbacks that can fail or create inconsistent branding. Use local SVGs or inline Lucide-style SVG icons.
- Keep the hero visual compressed and serve a social image suitable for the existing Open Graph tags.

## 5. Responsive and accessibility requirements

| Viewport | Required behavior |
| --- | --- |
| ≥ 1024 px | Two-column hero, two-card primary-product row, 2 × 2 category grid, roomy 96 px section rhythm. |
| 720–1023 px | Hero may remain two columns only if both columns stay legible; otherwise stack. Product cards remain two columns where 320 px minimum width is preserved. |
| < 720 px | One-column hero, tools, categories, and resources; stacked full-width CTAs; collapsed navigation. |
| < 400 px | No clipped navigation labels, no two-button rows narrower than their content, at least 16 px body text. |

All controls must be keyboard reachable, have a visible focus state, and retain text contrast of at least 4.5:1. Use semantic `<main>`, `<section aria-labelledby>`, `<article>`, `<nav>`, and `<footer>`. Do not rely on colour alone to distinguish a product, status, or selected navigation item.

## 6. Implementation sequence

1. **P0:** revise homepage metadata, one H1, hero copy, and section order; remove developer-heavy keywords from the homepage metadata.
2. **P0:** consolidate the homepage to the eight sections in this specification; preserve current URLs and product links.
3. **P0:** refactor header/footer labels and product hierarchy without breaking path handling on nested pages.
4. **P1:** establish category/hub pages only after content and redirect plans are approved.
5. **P1:** update article templates with consistent CTA and structured-data rules.
6. **P2:** introduce verified product schema, breadcrumbs, and visual-asset performance refinements.

## 7. Acceptance criteria

### Design

- [ ] A first-time visitor can identify Tenggoo as a productivity-tools platform from the H1 and lead copy without scrolling.
- [ ] ResumeKit and Tenggoo PDF are the only equal-priority product cards before categories and resources.
- [ ] The homepage contains the eight defined sections in the prescribed order.
- [ ] Developer resources are available but appear after product, category, trust, and editorial discovery sections.
- [ ] The page has no background or card gradients and no decorative motion required to understand content.
- [ ] Desktop and mobile layouts meet the breakpoint behavior above, with no horizontal overflow.
- [ ] Interactive targets are at least 44 × 44 px and keyboard focus is visible.

### SEO

- [ ] One visible, unique H1 matches the approved homepage intent.
- [ ] Title, description, canonical, Open Graph, and Twitter tags describe the same product-first positioning.
- [ ] Existing public URLs and sitemap entries remain unchanged in this phase.
- [ ] JSON-LD validates and contains only accurate `Organization`, `WebSite`, `WebPage`, and product-list information.
- [ ] Product and resource internal links use descriptive anchor text and resolve successfully.
- [ ] Every informative image has appropriate alt text, intrinsic dimensions, and a deliberate loading strategy.

## 8. Decisions needed before the next phase

- Confirm whether the first public homepage will be Indonesian-first, English-first, or use a specific `/en/` and `/id/` URL strategy. The current site should remain Indonesian-first until that decision is made.
- Confirm the final URLs and actual capability claims for ResumeKit and Tenggoo PDF before publishing `SoftwareApplication` schema or privacy claims.
- Approve a redirect map before replacing current `.html` URLs with proposed category paths.
