# Kanishk Portfolio — Implementation Plan

> **Status:** Planning Phase  
> **Last Updated:** 2026-06-09  
> **Target:** Single-page editorial portfolio with antigravity floating elements

---

## 1. Core Vision

A **single continuous scrolling page** that feels like a vertical editorial poster — not a typical dev portfolio. The design language is **luxury magazine × creative agency**. Typography is the hero. Everything breathes with whitespace.

### Key Differentiators
- **Antigravity Effect**: Scattered words/letters/elements float and drift across the page with physics-based motion (inspired by Google's Antigravity easter egg). These are ambient, atmospheric — not distracting.
- **Blue Silhouette**: Grayscale portrait with a `#4F5DFF` offset duplicate behind it, blurred, acting as a shadow/silhouette design element.
- **Overlapping Typography**: Giant text overlaps images, breaking traditional layout boundaries.
- **No Sections**: Visual flow between areas, no card boundaries or hard separators.

---

## 2. Design Specifications

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `bg` | `#F4F4F4` | Page background |
| `text-primary` | `#111111` | Headings, primary text |
| `accent` | `#4F5DFF` | Blue silhouette, highlights, floating elements |
| `text-secondary` | `#6B6B6B` | Descriptions, labels |

**Rules:** No gradients. No glass effects. No shadows unless extremely subtle.

### Typography
| Element | Size (Desktop) | Weight | Font |
|---------|----------------|--------|------|
| Hero Heading | 140px–220px | 800 | General Sans / Neue Montreal |
| Section Heading | 80px–120px | 700 | General Sans |
| Subheading | 20px–32px | 500 | Inter Tight |
| Body | 16px–20px | 400 | Inter Tight |
| Floating Words | 40px–100px | 700 | General Sans |

**Characteristics:** Extra tight letter-spacing (`-0.04em`), uppercase headings, minimal paragraph text.

### Photography Treatment
- Full grayscale (`filter: grayscale(100%) contrast(1.3)`)
- Crushed blacks via CSS or pre-processed
- Never a rectangular image — always masked vertically, cropped strips, partial reveals
- Portrait used as a design element, not a profile picture

### Blue Silhouette Effect
- Duplicate of portrait positioned behind
- Filled/tinted `#4F5DFF`
- Offset ~20px right, ~15px down
- `filter: blur(12px)`
- Lower opacity (~0.6)

---

## 3. Antigravity Floating Elements System

This is the signature interaction. Scattered across the page, words and small geometric elements drift/float with zero-gravity physics.

### Implementation Approach
- **GSAP** handles the physics-like floating animation (sine-wave drift, random velocities)
- Elements are absolutely positioned, scattered across the viewport
- Each element has:
  - Random initial position
  - Slow continuous drift (x/y oscillation via GSAP tweens)
  - Slight rotation drift
  - Low opacity (0.08–0.2) to stay atmospheric
- Words include: `ML`, `PYTHON`, `NEURAL`, `DATA`, `SYSTEMS`, `RESEARCH`, `CODE`, geometric shapes (circles, lines)
- On mouse move, nearby elements gently repel (subtle interaction)
- Mobile: simplified version with fewer elements, no mouse interaction

### Performance
- Use `will-change: transform` on floating elements
- Limit to ~20-30 elements max
- Use `requestAnimationFrame` via GSAP for smooth 60fps
- Pause animations when off-screen (IntersectionObserver)

---

## 4. Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | **Next.js 15** (App Router) | SSR, routing, SEO |
| Styling | **Tailwind CSS v4** | Utility-first CSS |
| Animation | **Framer Motion** | Scroll-triggered reveals, layout animations |
| Animation | **GSAP** | Antigravity physics, complex timeline animations |
| Scroll | **Lenis** | Smooth scroll behavior |
| Fonts | Google Fonts (Inter Tight) + self-hosted (General Sans) | Typography |
| Deploy | **Vercel** | Hosting (recommended) |

---

## 5. File Structure

```
portfolio/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── page.tsx                # Main single-page composition
│   └── globals.css             # Global styles, Tailwind directives
├── components/
│   ├── Navigation.tsx          # Minimal transparent nav
│   ├── Hero.tsx                # Hero section with portrait + typography
│   ├── About.tsx               # Editorial about section
│   ├── Skills.tsx              # Giant typographic skills
│   ├── Experience.tsx          # Magazine-style experience
│   ├── Projects.tsx            # Featured editorial projects
│   ├── Footer.tsx              # Minimal footer with CTA
│   ├── AntigravityField.tsx    # Floating elements system
│   ├── PortraitComposition.tsx # Portrait + blue silhouette + mask
│   ├── CursorFollower.tsx      # Blurred blue cursor element
│   ├── SmoothScroll.tsx        # Lenis provider
│   └── TextReveal.tsx          # Reusable text reveal animation
├── public/
│   ├── fonts/
│   │   └── GeneralSans-*.woff2
│   └── images/
│       └── portrait.jpg        # (to be supplied by user)
├── lib/
│   └── animations.ts           # GSAP utility functions
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── .gitignore
```

---

## 6. Section Breakdown

### 6.1 Navigation
- Fixed top, transparent background
- Left: `KANISHK` in bold caps
- Right: `About` · `Skills` · `Experience` · `Projects` · `Contact`
- Text only, no backgrounds, no borders
- Fades in on scroll (hidden at very top for cleaner hero)

### 6.2 Hero Section (100vh)
- **Left column**: Massive stacked text  
  ```
  BUILDING
  INTELLIGENT
  SYSTEMS
  ```
  Each word animates in from left with stagger
- **Center**: Portrait composition (PortraitComposition component)
  - Vertical mask (clip-path or CSS mask)
  - Blue silhouette behind
  - Typography overlaps portrait edges
- **Right column**: Minimal info
  - `Chandigarh, India` (or actual location)
  - Social icons (GitHub, LinkedIn)
  - `Resume ↓` link
- Floating antigravity words drift across this section

### 6.3 About Section
- Large editorial heading: `WHO IS / KANISHK?`
- Portrait reappears with different crop/mask
- 4-5 lines of concise text
- Massive whitespace

### 6.4 Skills Section
- Giant typographic list, no cards/bars:
  ```
  MACHINE LEARNING
  DEEP LEARNING
  DATA SCIENCE
  SYSTEM DESIGN
  QUANTITATIVE RESEARCH
  ```
- Each skill fades/slides into view on scroll
- Accent blue color on hover or alternating items
- Possible: skill words join the antigravity field after scrolling past

### 6.5 Experience Section
- Magazine-style layout
- Large year markers (`2025`, `2024`, etc.)
- Role title in large type
- Description aligned separately, smaller text
- No timeline, no vertical lines, no dots

### 6.6 Projects Section
- Each project = featured editorial spread
- Large project number (`01`, `02`, `03`)
- Huge project title
- Screenshot/mockup (large, with subtle treatment)
- Minimal description
- Alternating left/right layout
- Projects:
  1. Eldoria — Java RPG Adventure Game
  2. (others TBD by user)

### 6.7 Footer
- Full-width, minimal
- Large CTA text:
  ```
  LET'S BUILD
  SOMETHING
  MEANINGFUL.
  ```
- Email link
- LinkedIn, GitHub icons
- Nothing else

---

## 7. Animation Specification

### Scroll Animations (Framer Motion)
| Animation | Trigger | Duration |
|-----------|---------|----------|
| Text reveal (clip from bottom) | Enter viewport | 0.8s, stagger 0.1s |
| Fade in + slight Y translate | Enter viewport | 0.6s |
| Portrait mask expansion | Hero enters | 1.2s |
| Horizontal slide (skills) | Enter viewport | 0.6s |

### Antigravity System (GSAP)
| Property | Behavior |
|----------|----------|
| X drift | `gsap.to(el, { x: '+=random(-50,50)', duration: random(3,8), repeat: -1, yoyo: true })` |
| Y drift | Similar sine-wave pattern |
| Rotation | Slow rotation `±15deg` |
| Opacity | Pulsing between 0.05–0.15 |
| Mouse repel | On mousemove, elements within 200px radius drift away |

### Cursor Follower
- Blurred circle, `#4F5DFF`, 80px diameter
- `opacity: 0.15`
- `filter: blur(30px)`
- Follows cursor with `lerp` (smooth delay)
- Hidden on mobile

---

## 8. Build Phases

### Phase 1: Project Setup
- [x] Initialize Next.js 15 with App Router
- [ ] Configure Tailwind CSS v4
- [ ] Install dependencies (framer-motion, gsap, lenis)
- [ ] Set up fonts (General Sans self-hosted + Inter Tight from Google)
- [ ] Create base layout and global styles
- [ ] Replace .gitignore with Next.js version

### Phase 2: Foundation Components
- [ ] SmoothScroll (Lenis provider)
- [ ] Navigation
- [ ] CursorFollower
- [ ] TextReveal (reusable)
- [ ] AntigravityField

### Phase 3: Hero + Portrait
- [ ] Hero section layout
- [ ] PortraitComposition (grayscale + mask + blue silhouette)
- [ ] Hero typography + animations
- [ ] Antigravity integration in hero

### Phase 4: Content Sections
- [ ] About section
- [ ] Skills section
- [ ] Experience section
- [ ] Projects section

### Phase 5: Footer + Polish
- [ ] Footer
- [ ] Scroll animations across all sections
- [ ] Mobile responsiveness
- [ ] Performance optimization

### Phase 6: Deploy
- [ ] Vercel deployment config
- [ ] SEO meta tags
- [ ] Final testing

---

## 9. Content Placeholders

> [!IMPORTANT]
> The following content needs to be provided by Kanishk:
> - **Portrait photo** (high-res, will be processed to grayscale)
> - **Bio text** (4-5 lines about yourself)
> - **Experience entries** (year, role, company, description)
> - **Projects list** (title, description, tech, screenshots)
> - **Contact email**
> - **Social links** (GitHub, LinkedIn URLs)
> - **Location**

Until provided, placeholder content will be used.

---

## 10. Context Preservation Notes

> [!NOTE]
> **For model continuity**: If this conversation hits token limits, the next model should:
> 1. Read this implementation plan artifact
> 2. Check the file structure in `/home/kvnishkdhiman/Documents/Projects/portfolio/`
> 3. Continue from the next unchecked phase in Section 8
> 4. The design system (colors, fonts, sizing) is fully specified in Section 2
> 5. The antigravity effect implementation is detailed in Section 3
> 6. All component specs are in Section 6

---

## 11. Reference Screenshots Analysis

From the user's provided screenshots:
1. **Google Antigravity**: Floating confetti/elements drifting across screen — we adapt this to floating words/letters
2. **Rohan Joshi edits**: Grayscale portrait with vertical crop, blue (#4F5DFF-like) silhouette offset behind, large overlapping typography — this is exactly the portrait treatment we implement
3. The typography is bold, condensed, overlapping the portrait — our hero section mirrors this

---
