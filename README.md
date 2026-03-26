# Athul V Nair - Minimalist Monochrome Portfolio

A high-performance, responsive portfolio built strictly to a minimalist black-and-white aesthetic. This application is designed with a Mobile-First approach and powered entirely by a central JSON data layer.

## Architecture & Tech Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org/) v14+
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Type Safety**: TypeScript (`src/types/portfolio.ts`)

## Project Structure Overview

```text
├── src/
│   ├── app/                 # Next.js App Router root layout and landing page
│   ├── components/
│   │   ├── layout/          # Global layout bits (e.g. Navbar)
│   │   ├── sections/        # Main landing page blocks (Hero, About, Projects, etc.)
│   │   └── ui/              # Reusable primitives (Icons, ScrollReveal wrapper)
│   ├── data/
│   │   └── portfolio.json   # Single source of truth for all mapped content
│   └── types/
│       └── portfolio.ts     # Strict TypeScript interfaces securing the UI layer
├── public/                  # Static assets (images, SVGs)
└── README.md                # You are here!
```

## Setup Instructions

1. **Install Dependencies**
   Navigate to the project root and install the required modules:
   ```bash
   npm install
   ```
2. **Run Development Server**
   Start the local Next.js server with hot-reloading:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production**
   ```bash
   npm run build
   npm run start
   ```

## How to Update the Content (`portfolio.json`)

To make it incredibly straightforward to iterate on content, the UI maps completely around `src/data/portfolio.json`. **You do not need to modify any React JSX files to change the text, roles, numbers, or images on the site.**

1. Open `src/data/portfolio.json`.
2. Update any string or array field strictly within the JSON structure.
3. For **Images**, simply change the URL string to a valid image path (e.g., local images placed inside the `/public` folder like `"/hero-illustration.png"` or a `https://...` link).
4. For **Icons**, this project uses the string name of [Lucide React Icons](https://lucide.dev/icons). Examples include `"Github"`, `"Linkedin"`, `"Monitor"`, `"Code2"`. Just supply the TitleCase icon name in the JSON, and the dynamic `Icon.tsx` component will render it automatically.

> **Note**: Ensure the changes conform to the schemas found in `src/types/portfolio.ts`. Missing required fields will cause TypeScript and rendering errors.
