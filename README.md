This is an [Astro](https://astro.build) blog using React components and Tailwind CSS.

## My Personal Tech Blog

This is my personal space a blog where I share what I learn, what I build, and what I discover as a developer.
I used to write on platforms like Medium and other content networks, but I eventually realized something important:
My knowledge deserves a home, and I wanted to share it with the world.
I wanted to create a space where I could share my learning journey, my experiences, and my insights with the community.
I wanted to create a space where I could showcase my skills, my projects, and my passion for technology.
Here, I have full control.
Here, I can write freely.
Here, I can build, document, and grow both as a learner and a developer.

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321) with your browser to see the result.

You can start editing the home page in `src/pages/index.astro`. The page auto-updates as you edit the file.

## Project structure

```text
src/
├─ components/     # React (TSX) components
├─ content/posts/  # MDX blog posts (content collections)
├─ layouts/        # Astro layouts
├─ lib/            # Post helpers
├─ pages/          # Astro routes
├─ styles/         # Global Tailwind CSS
└─ types/          # Shared TypeScript types
```

## Scripts

- `pnpm dev` - start the development server
- `pnpm build` - build the static site to `dist/`
- `pnpm preview` - preview the production build
- `pnpm check` - run Astro type checking

## Adding a post

Create a new `.mdx` file inside `src/content/posts/` with this frontmatter:

```mdx
---
title: "My post title"
description: "A short description"
author: "Manuel Afonso"
postedAt: 2025-01-07T00:00:00Z
---

Your content here.
```
