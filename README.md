# Leather Zone Upholstery LLC — Website

A multi-page marketing website for **Leather Zone Upholstery LLC**, a Dubai
(Al Quoz) workshop specialising in custom furniture manufacture, leather &
upholstery restoration, and bespoke fit-out / joinery.

This is a static HTML/CSS/JS implementation of the
[Figma "Lether zone" design](https://www.figma.com/design/CK6LlxTBG7hyvy5HzH5Jk3/Lether-zone).

## Pages

| File | Page |
| --- | --- |
| `site/index.html` | Home |
| `site/about.html` | About Us |
| `site/services.html` | Services overview |
| `site/service-detail.html` | Service detail (Furniture Manufacture) |
| `site/projects.html` | Projects overview |
| `site/project-detail.html` | Project detail (Marine Interiors) |
| `site/blog.html` | Blog article (Acrylic Fabric) |
| `site/contact.html` | Contact + enquiry form |

## Structure

```
site/
├── index.html, about.html, …      # pages
├── css/styles.css                 # all styles + responsive rules
├── js/main.js                     # mobile menu + demo form handler
└── assets/img/                    # optimised images (friendly names)
```

## Design system

- **Accent (leather tan):** `#ae9b80`
- **Footer / dark:** `#151515`
- **Background:** `#f7f7f7`
- **Call-to-action orange:** `#ff8c00`
- **Fonts:** Jost (display, substituting "Aloevera Display"), Inter (body), Poppins

## Run locally

Any static file server works. For example:

```bash
npx serve site
# then open http://localhost:3000
```

## Notes

- Fully responsive (desktop / tablet / mobile breakpoints at 1100 / 820 / 520px).
- Images were exported from Figma and compressed (PNG → JPEG, max 1600px) to
  keep the site lightweight (~8 MB total vs. 257 MB of raw exports).
- The contact form is front-end only (no backend); submitting shows a
  confirmation and resets the form.
