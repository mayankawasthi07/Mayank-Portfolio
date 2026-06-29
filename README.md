# Taskflow — SaaS Landing Page

## What this is
A fully responsive SaaS product landing page built with React + Tailwind CSS.
Designed to demonstrate real-world frontend skills for freelance clients.

## Live demo
→ [Deploy to Vercel and paste your link here]

---

## Case study (paste this into your portfolio)

### The problem
Most SaaS landing pages are either too generic (template-looking) or too cluttered. The goal here was to build a page that converts — with a clear hero, social proof, benefit-led features, and a pricing section that reduces friction.

### What I built
- Sticky navbar with blur backdrop and mobile hamburger menu
- Hero section with animated badge, punchy headline, dual CTAs, and a coded dashboard mockup (no images — fully in JSX)
- Social proof bar — company logos, minimal and fast-loading
- Features grid — 6 features with custom SVG icons and hover states
- Testimonials — 3 cards with avatar initials and star ratings
- Pricing section — monthly/yearly toggle with state change, "most popular" highlight
- Dark footer — multi-column links and legal copy

### Technical decisions
- No image assets — the dashboard mockup in the hero is pure JSX/Tailwind. Loads instantly.
- Google Fonts via CSS import — Plus Jakarta Sans (display) + Inter (body)
- Tailwind custom config — extended with brand color tokens
- Component structure is ready for Framer Motion scroll animations

### Stack
React 18 · Tailwind CSS 3 · Vercel

---

## How to run locally

npm install
npm start

## How to deploy

npm i -g vercel
vercel
