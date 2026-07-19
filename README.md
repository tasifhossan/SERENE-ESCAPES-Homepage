# Nipro Agency

A static, single-page website template for a fictional full-service agency ("Nipro Agency"), built with plain HTML, CSS, and Bootstrap. No build step, framework, or backend required.

**Live demo:** https://tasifhossan.github.io/Nipro/

## Sections

The site is a single `index.html` page with the following sections:

- Navbar (fixed header)
- Hero / carousel slider
- About
- Services
- Portfolio
- Testimonials (carousel)
- Contact form
- Footer

## Tech stack

- **HTML5 / CSS3**
- **Bootstrap** (bundled locally under `css/` and `js/bootstrap.bundle.min.js`)
- **Font Awesome** and **Pe-icon-7-stroke** icon sets (bundled under `icons/`)
- **Google Fonts** (Lato, Roboto — bundled locally under `fonts/`)
- Vanilla JS (`js/script.js`) for interactive behavior (nav toggle, carousels, etc.)

## Project structure

```
Nipro/
├── index.html          # The entire site (single page)
├── css/
│   ├── bootstrap.css / bootstrap.min.css
│   ├── style.css       # Custom styles
│   └── media.css       # Responsive/breakpoint styles
├── js/
│   ├── bootstrap.bundle.min.js
│   └── script.js       # Custom interactive behavior
├── fonts/               # Lato & Roboto font files
├── icons/               # Font Awesome + Pe-icon-7-stroke icon sets
└── images/              # Section backgrounds, team photos, project thumbnails
```

## Getting started

No installation or build step is needed — this is a static site.

### Option 1: Open directly

Just open `index.html` in your browser.

### Option 2: Run a local server (recommended)

Some browsers restrict local file access (e.g. for fonts/assets), so serving it is more reliable:

```bash
# Using Python 3
python -m http.server 8000

# Or using Node's http-server
npx http-server .
```

Then visit `http://localhost:8000`.

## Deployment

This project is already deployed via **GitHub Pages** at https://tasifhossan.github.io/Nipro/. Since it's a static site, any static host works equally well (Netlify, Vercel, Cloudflare Pages, etc.) — just point the host at the repository root, as there's no build command required.

## Customizing

- **Content:** edit the relevant section directly in `index.html`.
- **Styling:** custom overrides live in `css/style.css`; responsive/breakpoint tweaks live in `css/media.css`.
- **Images:** replace files in `images/` (keeping the same filenames avoids needing to update `index.html`).
- **Contact form:** the form in the Contact section currently has no backend wired up — connecting it to an email service (e.g. Formspree, EmailJS) or your own backend is required for it to actually send messages.

## License

No license file is currently included in this repository. All rights reserved by the author unless stated otherwise. Note that the bundled icon sets (Font Awesome, Pe-icon-7-stroke) carry their own licenses — see `icons/LICENSE.txt`.
