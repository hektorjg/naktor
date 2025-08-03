# Naktor.com

Modern business website built with Next.js 15 and React 19.

## Architecture

- **Framework**: Next.js 15.4.5 with App Router
- **React**: 19.1.1 (latest)
- **Styling**: Tailwind CSS with custom animations
- **Content**: MDX files with frontmatter
- **Deployment**: Optimized for static generation

## Recent Migration

This project was recently migrated from:
- Contentlayer (deprecated) → Modern Next.js 15 MDX support
- Next.js 13.5 → 15.4.5
- React 18.2 → 19.1.1

## Content Management

### Adding Projects

1. Create `.mdx` files in `content/projects/`
2. Include frontmatter:
```yaml
---
title: "Project Title"
description: "Brief description"
published: true
date: "2024-01-01"
url: "https://project-url.com"
repository: "https://github.com/user/repo"
---
```

### Project Structure

- Projects are processed by `lib/projects.ts`
- Uses `gray-matter` for frontmatter parsing
- Uses `marked` for markdown to HTML conversion
- Supports MDX components via custom renderer

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Format code
npm run format

# Lint code
npm run lint
```

## Tech Stack

### Core
- Next.js 15.4.5 (App Router)
- React 19.1.1
- TypeScript 5.7.3

### Styling & Animation
- Tailwind CSS 3.4.17
- Framer Motion 12.23.12
- Custom cursor effects

### Content Processing
- @next/mdx 15.4.5
- gray-matter 4.0.3
- marked 16.1.1
- rehype-pretty-code 0.14.1

### Development Tools
- Biome 2.1.3 (formatting/linting)
- Husky 9.1.7 (git hooks)

## Pages

- `/` - Homepage with hero and navigation
- `/projects` - Project showcase
- `/projects/[slug]` - Individual project pages
- `/team` - Team members
- `/products` - Product offerings
- `/services` - Service details
- `/contact` - Contact information

## Features

- Static site generation (SSG)
- Responsive design
- Custom cursor animations
- MDX content support
- SEO optimized
- Modern build pipeline