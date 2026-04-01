# Athul V Nair - Minimalist Monochrome Portfolio

A high-performance, responsive portfolio built strictly to a minimalist black-and-white aesthetic. This application is designed with a Mobile-First approach, powered by a central JSON data layer, and features an integrated AI-powered chatbot for an interactive experience.

## Architecture & Tech Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org/) v15+ (React 19)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Chatbot Rendering**: [React Markdown](https://github.com/remarkjs/react-markdown)
- **Type Safety**: TypeScript (`src/types/portfolio.ts`)

## Project Structure Overview

```text
├── src/
│   ├── app/                 # Next.js App Router root layout and landing page
│   ├── components/
│   │   ├── layout/          # Global layout components (Navbar)
│   │   ├── sections/        # Landing page sections (Hero, About, Projects, etc.)
│   │   └── ui/              # Reusable UI primitives (Chatbot, Icons, CustomCursor)
│   ├── contexts/            # React Contexts (Cursor management)
│   ├── data/
│   │   └── portfolio.json   # Single source of truth for all portfolio content
│   └── types/
│       └── portfolio.ts     # TypeScript interfaces for portfolio data
├── public/                  # Static assets (images, SVGs)
├── .env.local               # Environment variables for API integration
└── README.md                # You are here!
```

## Setup Instructions

### Frontend (This Repository)

1. **Install Dependencies**
   Navigate to the project root and install the required modules:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   Create a `.env.local` file in the root directory and add the path to your chatbot backend:
   ```bash
   NEXT_PUBLIC_CHATBOT_API_URL=http://localhost:8000
   ```

3. **Run Development Server**
   Start the local Next.js server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for Production**
   ```bash
   npm run build
   npm run start
   ```

### Chatbot Backend (FastAPI)

The portfolio includes an AI-powered chatbot that requires a separate backend service to handle RAG (Retrieval-Augmented Generation) queries.

1. **Clone the Backend Repository**
   ```bash
   git clone https://github.com/athul-v-nair/portfolio-rag-chatbot
   cd portfolio-rag-chatbot
   ```

2. **Setup and Installation**
   Follow the instructions in the [backend README](https://github.com/athul-v-nair/portfolio-rag-chatbot#readme) to set up the Python environment, install dependencies (FastAPI, LangChain, etc.), and configure your LLM provider (e.g., OpenAI, AWS Bedrock).

3. **Ensure CORS Alignment**
   Make sure the backend's `CORSMiddleware` allows requests from your frontend origin (e.g., `http://localhost:3000`).

## How to Update the Content (`portfolio.json`)

The UI is completely data-driven. **You do not need to modify React JSX files to change the site content.**

1. Open `src/data/portfolio.json`.
2. Update any string or array field strictly within the JSON structure.
3. **Icons**: This project uses [Lucide React Icons](https://lucide.dev/icons). Supply the TitleCase icon name in the JSON (e.g., `"Github"`, `"Linkedin"`, `"Monitor"`, `"Code2"`), and the dynamic `Icon.tsx` component will render it automatically.

> **Note**: Ensure the changes conform to the schemas found in `src/types/portfolio.ts`. Missing required fields will cause TypeScript and rendering errors.
