# Viiva Smart IT Solutions — Website

A modern, DevSinc-inspired corporate website for **Viiva Smart IT Solutions**, built with Next.js. Theme: **Red & Black**.

## Company

- **Brand:** Viiva (Viiva Smart IT Solutions)
- **CEO:** Ali Khalaf (Jordan)
- **Locations:** UK, Jordan, Dubai, Pakistan

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**

## Content (JSON-Driven)

All copy and config live in `src/data/` so you can edit content without touching components:

| File | Purpose |
|------|--------|
| `site.json` | Company info, nav, footer |
| `hero.json` | Hero headline, CTA, logos |
| `services.json` | Services grid |
| `industries.json` | Industries list |
| `insights.json` | Featured insights / case studies |
| `stats.json` | Achievements / numbers |
| `tech-stack.json` | Technologies & categories |
| `contact.json` | Contact form fields & labels |
| `awards.json` | Awards & certifications |
| `partnerships.json` | Partner logos |

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

For **cPanel**: upload the whole project (except `node_modules` and `.next`). On the server run `npm install`, `npm run build`, then set the **start file** to **`server.js`**. See **DEPLOY-CPANEL.md**.

## Logo & Assets

- **Logo:** Replace the text “Viiva” in the header with your logo image (e.g. in `Header.tsx` or via `site.json` + image path). You can use assets from [viiva.uk](https://viiva.uk) or your own.
- **Images:** Service/insight images currently use placeholders. Add real images under `public/` (e.g. `public/services/`, `public/insights/`) and update the paths in the JSON files.

## Customization

- **Colors:** Red/black theme is in `src/app/globals.css` (`--viiva-red`, `--viiva-black`, etc.).
- **Sections:** Homepage sections are in `src/app/page.tsx`; each section reads from its JSON file in `src/data/`.
