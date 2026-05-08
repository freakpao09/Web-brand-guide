# SEJ Brand Guide

An interactive brand guide website for **Search Engine Journal**, built from the SEJ Design System.

## Pages

- **Overview** (`index.html`) — hero, jump-in cards, brand principles, key stats
- **Logo** (`logo.html`) — primary, secondary, and icon marks with usage rules
- **Colors** (`colors.html`) — full palette with click-to-copy hex values
- **Typography** (`typography.html`) — Inter + Lora families and full type scale
- **Icons** (`icons.html`) — Lucide icon library at 1.75 stroke
- **Components** (`components.html`) — buttons, forms, badges, cards, spacing, grid
- **Voice & Tone** (`voice.html`) — voice characteristics, headline patterns, tone by surface
- **Downloads** (`downloads.html`) — asset packages, fonts, and documentation

## Stack

Static HTML, CSS, and a small JS partial for the shared sidebar. No build step. Inter and Lora are loaded from Google Fonts.

## Run locally

```bash
python3 -m http.server 3000
```

Open http://localhost:3000

## Deploy

Enable **GitHub Pages** in the repo settings (Settings → Pages → Branch: `main`) for a live URL.
