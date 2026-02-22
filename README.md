# BrandPulse

An AI-powered brand tracking and intelligence dashboard that helps you monitor, analyze, and act on brand performance data in real time.

## What is BrandPulse?

BrandPulse is a frontend React SPA that provides a centralized dashboard for brand analytics. It surfaces key metrics, AI-generated recommendations, and visual trend data to help teams make informed brand decisions quickly.

### Key Features

- **Brand Metrics Overview** — Animated stat cards that highlight key performance indicators such as reach, engagement, and sentiment scores.
- **AI Suggestions Panel** — A grid of priority-tagged AI recommendations. Clicking a card expands it and reveals an animated description to guide next steps.
- **Visual Analytics** — Interactive charts (area, pie, and bar) built with Recharts to visualize brand trends over time.
- **Ambient UI** — Floating particle animations and a dark-themed glassmorphism design for a modern, polished look.

## Pages

- `/` — Marketing landing page introducing BrandPulse.
- `/dashboard` — The main analytics dashboard with charts, metrics, and AI insights.

## Tech Stack

- **Vite** — Fast build tooling and dev server
- **React + TypeScript** — Component-based UI with type safety
- **shadcn/ui** — Accessible, unstyled UI primitives
- **Tailwind CSS** — Utility-first styling with a dark-only custom theme
- **Recharts** — Composable chart library for data visualization

## Getting Started

Requires Node.js and npm. Install via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) if needed.

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate into the project directory
cd brand-insight-ai

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:8080`.

## Available Commands

Run all commands from the `brand-insight-ai/` directory:

```sh
npm run dev        # Start dev server
npm run build      # Production build
npm run lint       # Run ESLint
npm run test       # Run tests once (Vitest)
npm run test:watch # Run tests in watch mode
```

## Project Structure

```
src/
├── components/       # Reusable UI components (MetricCard, AISuggestionsPanel, etc.)
├── hooks/            # Custom React hooks (useCountUp, useTypingEffect)
├── pages/            # Route-level page components (Index, Dashboard)
├── components/ui/    # shadcn/ui base components
└── index.css         # Global styles, theme variables, and utility classes
```
