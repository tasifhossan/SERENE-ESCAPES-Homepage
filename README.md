# SERENE ESCAPES

A static homepage for a fictional travel brand, "Serene Escapes," built with plain HTML, CSS, and Bootstrap. No build step, framework, or backend required.

**Live demo:** https://tasifhossan.github.io/SERENE-ESCAPES-Homepage/

## Sections

The site is a single `index.html` page with the following sections:

- Header / navbar (Home, Destinations, Trips, Shop, Community, News)
- Banner 1 & Banner 2 (hero/promo banners)
- Card slider / carousel
- Destinations
- Tours
- Community
- News stories
- Guidebook ("g_book")
- Footer (with a footer-top section)

## Tech stack

- **HTML5 / CSS3**
- **Bootstrap** (bundled locally under `css/` and `js/bootstrap.bundle.js` / `.min.js`)
- Vanilla JS (`js/script.js`) for interactive behavior (nav, carousels, etc.)

## Project structure

```
SERENE-ESCAPES-Homepage/
├── index.html          # The entire site (single page)
├── css/
│   ├── bootstrap.css / bootstrap.min.css
│   ├── style.css       # Custom styles
│   └── media.css       # Responsive/breakpoint styles
├── js/
│   ├── bootstrap.bundle.js / bootstrap.bundle.min.js
│   └── script.js       # Custom interactive behavior
└── images/              # Banners, destination/tour thumbnails, icons, logo
```

## Getting started

No installation or build step is needed — this is a static site.

### Option 1: Open directly

Just open `index.html` in your browser.

### Option 2: Run a local server (recommended)

Some browsers restrict local file/asset access, so serving it is more reliable:

```bash
# Using Python 3
python -m http.server 8000

# Or using Node's http-server
npx http-server .
```

Then visit `http://localhost:8000`.

## Deployment

This project is already deployed via **GitHub Pages** at https://tasifhossan.github.io/SERENE-ESCAPES-Homepage/. Since it's a static site, any static host works equally well (Netlify, Vercel, Cloudflare Pages, etc.) — just point the host at the repository root, as there's no build command required.

## Customizing

- **Content:** edit the relevant section directly in `index.html` (sections are marked with HTML comments like `<!-- destinations start -->` / `<!-- destinations end -->` to make them easy to find).
- **Styling:** custom overrides live in `css/style.css`; responsive/breakpoint tweaks live in `css/media.css`.
- **Images:** replace files in `images/` (keeping the same filenames avoids needing to update `index.html`).
- **Nav/menu items:** currently Home, Destinations, Trips, Shop, Community, News — none of these link to separate pages yet, since this repo only contains the homepage.

## License

No license file is currently included in this repository. All rights reserved by the author unless stated otherwise.
