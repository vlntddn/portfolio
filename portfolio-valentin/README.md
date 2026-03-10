# Valentin Dudin — Portfolio Website

A personal portfolio site built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui (dark theme)
- **Animation**: `motion` (for SpecialText component)
- **Icons**: lucide-react

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio-valentin/
├── app/
│   ├── globals.css        # Tailwind + shadcn CSS variables (dark theme)
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main portfolio page (all sections)
├── components/
│   └── ui/
│       └── special-text.tsx  # Animated matrix-style text component
├── lib/
│   └── utils.ts           # Tailwind class merger utility
├── components.json        # shadcn/ui config
├── tailwind.config.ts     # Tailwind config with shadcn theme
├── next.config.mjs        # Next.js config (Unsplash images allowed)
└── tsconfig.json          # TypeScript config
```

## Sections

- **Hero** — Animated `SpecialText` headline, tagline, CTA buttons
- **Work** — 4 project cards pulled from Notion data (MTS Bank, SocialBooth, CJM, Freelance)
- **About** — Bio, skills/tools grid, experience timeline
- **Contact** — Email CTA
- **Footer** — Minimal

## Customization

### Updating projects
Edit the `projects` array in `app/page.tsx`:
```ts
const projects = [
  {
    title: "Your Project",
    description: "...",
    tags: ["UX", "Research"],
    image: "https://images.unsplash.com/photo-...",
    notionUrl: "https://notion.so/...",
    year: "2024",
    role: "UX Designer",
  },
  // ...
];
```

### Updating personal info
Edit `app/page.tsx` — contact details, social links, and the `experience` / `skills` arrays.

### Changing the theme
Edit `app/globals.css` — the CSS variables at `:root` control all colors.

## Deploying

The easiest option is **Vercel**:

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Deploy — zero config needed for Next.js

---

Built with data from Notion portfolio database.
