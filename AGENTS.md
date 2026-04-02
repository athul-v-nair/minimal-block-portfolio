<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Athul V Nair - Portfolio Agent Guidelines

## 1. Data-Driven UI Architecture
- All content must be sourced from `src/data/portfolio.json`.
- **CRITICAL**: Do NOT hardcode text, roles, or lists inside JSX components.
- Use the typed interfaces in `src/types/portfolio.ts` to ensure data integrity.

## 2. Minimalist Monochrome Design System
- Maintain a strict Black-and-White aesthetic.
- Hover states should typically involve inverting colors (e.g., `bg-black` to `bg-white` and `text-white` to `text-black`).
- Animations must be premium and subtle using `framer-motion`.

## 3. AI Chatbot Integration (`src/components/ui/Chatbot.tsx`)
- The chatbot uses a streaming connection to a local FastAPI service.
- **Handling citations**: The UI is designed to hide citation blocks (marked by `[SOURCES]`) for a clean conversational experience.
- Responses are rendered via `react-markdown`.
- Component uses the `useCursor` context to update the global custom cursor color on interaction.

## 4. Environment Variables
- Ensure `NEXT_PUBLIC_CHATBOT_API_URL` is configured for any new features requiring service communication.
- Deployment origins must be manually added to the backend CORS configuration.
