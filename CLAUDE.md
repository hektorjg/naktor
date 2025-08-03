# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Code formatting and linting (uses Biome)
npm run format
npm run lint

# Production server
npm run start
```

## Architecture Overview

This is a modern business website built with Next.js 15 App Router and React 19. The project was recently migrated from Contentlayer to native Next.js MDX support.

### Key Technologies
- **Next.js 15.4.5** with App Router (static site generation)
- **React 19.1.1** (latest stable)
- **TypeScript 5.7.3**
- **Tailwind CSS** with custom animations and design system
- **MDX** for content management with frontmatter
- **Biome** for code formatting and linting (via ultracite)

### Design System
- Brand colors: `naktor.primary` (#5b08e4) and `naktor.secondary` (#e338fc)
- Custom fonts: Inter (sans) and Cal Sans (display)
- Custom animations: fade-in, title, fade-left/right, glow effects
- Optimized timing: ~1.5-2s animations for better UX

### Content Architecture

**Projects System**: The core content system processes MDX files in `content/projects/`:
- `lib/projects.ts` handles MDX file processing using `gray-matter` for frontmatter and `marked` for HTML conversion
- Projects require frontmatter: `title`, `description`, `published`, `date`, `url`, `repository`
- Auto-sorted by date (newest first), filtered by `published: true`

**MDX Configuration**: Advanced MDX setup in `next.config.mjs`:
- **remark-gfm**: GitHub Flavored Markdown support
- **rehype-pretty-code**: Syntax highlighting with github-dark theme
- **rehype-slug + rehype-autolink-headings**: Auto-generated heading links
- **mdxRs**: Experimental Rust-based MDX compiler enabled

### Component Structure

**Core UI Components** (`app/components/`):
- `logo.tsx`: SVG logo with optimized viewBox for responsive scaling
- `particles.tsx`: Animated background particles using canvas
- `nav.tsx`: Navigation component
- `card.tsx`: Project card layouts
- `mdx.tsx`: MDX component provider
- `analytics.tsx`: Analytics tracking

**Page Architecture**:
- `/` - Homepage with hero logo, animations, and navigation
- `/projects` - Project showcase grid
- `/projects/[slug]` - Dynamic project pages from MDX
- Static pages: `/team`, `/products`, `/services`, `/contact`

### Animation System

Custom Tailwind animations optimized for performance:
- Staggered loading sequence: nav → lines → logo → content
- Reduced timing for better UX (1.5-2s vs original 3s)
- GPU-accelerated transforms and opacity changes
- Responsive particle system with configurable quantity

### Development Notes

- **Hot reload**: Full MDX and component hot reloading in development
- **Static generation**: All pages pre-rendered at build time
- **Type safety**: Full TypeScript coverage with strict configuration
- **Performance**: Optimized bundle size and loading sequences
- **SEO**: Meta tags, OpenGraph, and structured data configured

### Content Management Workflow

1. Create `.mdx` files in `content/projects/`
2. Include required frontmatter fields
3. Development server auto-reloads on content changes
4. Build process generates static pages for all published projects
5. Projects automatically sorted and filtered by publication status

### Styling Patterns

- Mobile-first responsive design with Tailwind breakpoints
- Design system with consistent spacing and typography
- Custom gradient backgrounds and decorative elements
- Semantic color system with brand-specific palette
- Component-scoped animations with proper cleanup

## Personal Preferences

- No lances nunca el servidor npm, ya lo lanzo yo