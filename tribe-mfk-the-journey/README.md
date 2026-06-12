# MFK × TRIBE — The Journey

An immersive, beautifully crafted interactive experience built to document and celebrate the "Mentors for Kids" (MFK) and Varsity Tribe collaboration event at Zerodha.

## Overview
This web application is designed as a cinematic, single-page presentation. It tells the story of the MFK Foundation students experiencing an intensive learning day alongside the Varsity Tribe. The site features dynamic parallax scrolling, high-end Apple-style animations, and interactive galleries.

## Features
- **Immersive Hero:** A scroll-driven, full-viewport cinematic introduction sequence with synchronized text and logo animations.
- **Dynamic Photo Galleries:** Built-in automatic HEIC to JPG conversion logic ensures all iPhone photos are instantly web-optimized and elegantly rendered in interactive Masonry and marquee grids.
- **Spotlight Cards:** Advanced, cursor-tracking "spotlight" hover effects applied to cards to create a premium glass-morphic feel.
- **Interactive Storytelling:** Custom UI components that use Framer Motion for scroll-linked animations, expanding Tribe asterisks, and floating elements.
- **Mentors for Kids Branding:** Complete integration of the custom MFK SVG branding inline with typography.

## Tech Stack
- **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing:** [TanStack Router](https://tanstack.com/router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

## Getting Started

To run the project locally:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Folder Structure
- `src/components/sections/` — Contains all the major scroll-sections (Hero, Introduction, Members, Moments, etc.)
- `src/components/tribe/` — Reusable design system components (SpotlightCard, MfkLogo, Loader, etc.)
- `src/data/` — Central content store for quotes, tribe members, and timeline events.
- `src/routes/` — TanStack router page definitions.
- `public/photos/` — The raw event images seamlessly displayed across the galleries.

---
*Built with ❤️ for the MFK Foundation and the Varsity Tribe.*
