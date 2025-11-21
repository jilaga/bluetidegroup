# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 website for Bluetide Group, a marine services company specializing in ROV inspection, diving services, underwater hull cleaning, and subsea positioning. The site is built with TypeScript, Tailwind CSS, and Framer Motion for animations.

**Tech Stack:**

- Next.js 14 (App Router)
- TypeScript (strict mode enabled)
- Tailwind CSS with extensive custom color system
- Framer Motion for animations
- Sharp for image optimization
- React Markdown for content rendering
- Bun as package manager and runtime

## Development Commands

```bash
# Development
bun run dev              # Start development server on localhost:3000

# Building
bun run build            # Production build (verify before committing)
bun start                # Start production server

# Code Quality
bun run lint             # Run ESLint
bun run format           # Format code with Prettier
```

**Pre-commit checklist:**

1. `bun run build` must succeed
2. `bun run lint` must pass
3. Test in browser (check console for errors)

## Project Architecture

### App Router Structure (Next.js 14)

- **`app/layout.tsx`** - Root layout with global metadata, analytics, fonts (Montserrat, Clash Display, Satoshi)
- **`app/page.tsx`** - Homepage with component composition and structured data schemas
- **`app/Services/[id]/`** - Dynamic service detail pages (ROV, Air Diving, Subsea Survey, etc.)
- **`app/about/`** - About page
- **`app/gallery/`** - Image gallery
- **`app/stories/`** - Blog/stories section
- **`app/equipments/`** - Equipment showcase

### Key Component Directories

- **`app/components/landing/`** - Homepage sections (Hero, Company, Partners, Services, FAQ, etc.)
- **`app/components/analytics/`** - Google Analytics and Core Web Vitals monitoring
- **`app/components/performance/`** - INP optimization and interaction feedback
- **`app/components/seo/`** - SEO components and search console verification
- **`app/components/schema/`** - Structured data (Organization, LocalBusiness, FAQ schemas)
- **`app/components/core/`** - Core reusable components

### Important Utilities

- **`utils/util.ts`** - Contains `cn()` for className merging (clsx + tailwind-merge), `generateId()`, string encryption/decryption helpers
- **`app/components/OptimizedImage.tsx`** - Custom Image component with blue blur placeholder matching brand colors
- **`hooks/useInView.ts`** - Intersection Observer hook for scroll animations
- **`hooks/useWindowHeight.ts`** - Dynamic viewport height hook

### Styling System

- **Path alias**: `@/*` maps to project root (configured in `tsconfig.json`)
- **Custom font variables**:
  - `--font-montserrat` - Primary font (Google Font with `display: 'swap'`)
  - `--font-clash` - Clash Display (local font, multiple weights: 400/500/600/700)
  - `--font-satoshi` - Satoshi (local font, multiple weights)
  - All fonts use `display: 'swap'` for optimal performance

- **Brand color system** (defined in `tailwind.config.ts`):
  - **Primary**: `accent` (#e36414 rust orange) - CTAs and highlights
  - **Neutrals**: `primary-blue` (#e6e9fa), `linen` (#fcf0e8)
  - **Greys**: Multiple shades from `foundation-grey-grey-50` to `-700`
  - **Extended palette**: Includes foundation colors, rust accent variants (50-500), sea blue shades
  - Use Tailwind classes like `bg-accent`, `text-primary-blue`, `bg-foundation-grey-grey-500`

### SVG Handling

SVGs are handled via `@svgr/webpack`:

- Import as React component: `import Logo from './logo.svg'`
- Import as URL: `import logoUrl from './logo.svg?url'`
- Type definitions in `svgr.d.ts`

### Performance Optimizations

- **Image optimization**:
  - AVIF first, then WebP fallback (configured in `next.config.mjs`)
  - Device sizes: 640-3840px (includes 4K support)
  - Image sizes: 16-768px
  - 1-year cache TTL for optimized images
- **Font optimization**: All fonts use `display: 'swap'` to prevent FOIT (Flash of Invisible Text)
- **Core Web Vitals monitoring**: Active in development and production via `CoreWebVitals.tsx`
- **INP optimization**: Interaction tracking in `INPOptimization.tsx` for 2025 Core Web Vitals
- **Security headers**:
  - Configured in `next.config.mjs` (HSTS, X-Frame-Options, CSP for SVGs, etc.)
  - Additional headers in `middleware.ts` (X-Content-Type-Options, Referrer-Policy)
- **Build optimizations**: SWC minification, package import optimization for `@/components`, `lucide-react`, `react-icons`

## Environment Variables

Create `.env.local` based on `.env.example`:

```bash
# Analytics (Active)
NEXT_PUBLIC_GA_ID=G-DM0HXG6843          # Google Analytics
NEXT_PUBLIC_GTM_ID=                      # Google Tag Manager (optional)

# Search Console Verification (Optional)
NEXT_PUBLIC_GSC_VERIFICATION_ID=         # Google Search Console
NEXT_PUBLIC_BING_VERIFICATION_ID=        # Bing verification
NEXT_PUBLIC_YANDEX_VERIFICATION_ID=      # Yandex verification

# Performance Monitoring (Optional)
NEXT_PUBLIC_ANALYTICS_ENDPOINT=          # Custom analytics endpoint
```

See `ENVIRONMENT_VARIABLES_GUIDE.md` for detailed usage information.

## Data Management

Services data is stored in `app/Services/data.json` with structure:

```json
{
  "id": 1,
  "title": { "tag": "Service Name", "title": "Description" },
  "img": "/service/hero-one.webp",
  "sections": [{ "tag": "Section Name", "content": "Markdown content" }]
}
```

## Important Patterns

### Using OptimizedImage

Always use `OptimizedImage` component instead of Next.js `Image` directly:

```tsx
import { OptimizedImage } from '@/app/components/OptimizedImage'

<OptimizedImage
  src="/image.webp"
  alt="Description"
  width={1200}
  height={630}
  priority={false}
  sizes="(max-width: 640px) 100vw, 50vw"
/>
```

### Structured Data Schemas

Add structured data schemas to pages for SEO:

- `OrganizationSchema` - Company information
- `LocalBusinessSchema` - Business location/contact
- `FAQSchema` - FAQ structured data

### Animation with Framer Motion

Components use Framer Motion extensively. Follow existing patterns for scroll-triggered animations with `useInView` hook.

## Testing and Quality

Before committing:

1. Run `bun run lint` to check for errors
2. Run `bun run format` to format code
3. Run `bun run build` to ensure production build succeeds
4. Check browser console for errors in development

## Contact Integration

WhatsApp contact is hardcoded to `+2347065382326` in `app/layout.tsx:185`. Update if contact changes.

## SEO Configuration

- Metadata base URL: `https://bluetidegroup.com`
- All pages should include proper meta descriptions and Open Graph tags
- Follow pattern in `app/layout.tsx` for global metadata
- Individual pages can override with their own metadata exports
