# The Kerala Table — Dark Website Theme Guide

## 1. Theme Name

**TKT Dark Heritage Theme**

This theme is designed for a dark restaurant website inspired by The Kerala Table logo. The visual direction should feel premium, cultural, warm, and food-focused while staying clean and modern for a Next.js + shadcn/ui + Tailwind project.

The website background must remain dark. Green is the primary brand color. Red, orange, yellow, and lime should be used only as controlled accent colors because they are strong colors from the logo.

---

## 2. Logo Color Analysis

The logo contains these major colors:

| Role | Color Name | Hex | HSL | Usage |
|---|---:|---:|---:|---|
| Main logo green | Kerala Deep Green | `#095C02` | `115 96% 18%` | Primary brand color, CTA buttons, active states |
| Bright logo green | Kathakali Lime | `#84D804` | `84 96% 43%` | Focus ring, highlights, small decorative details |
| Logo red | Ritual Red | `#A30409` | `358 95% 33%` | Special alerts, festive highlights, limited-use accent |
| Logo orange | Flame Orange | `#F74102` | `15 98% 49%` | Food CTA accents, offer badges, hover warmth |
| Logo yellow | Festival Yellow | `#F4DB0B` | `54 91% 50%` | Offer labels, small icons, festive emphasis |
| Logo white | Ivory White | `#FBFCFB` | `120 14% 99%` | Logo text, high-contrast text, icon color |
| Logo black | True Black | `#000000` | `0 0% 0%` | Logo internal contrast, deep background reference |

### Fixed Logo Rule

The logo colors must not be changed. Always keep the original logo colors intact. The website theme should support the logo instead of recoloring it.

Use the logo preferably on:

- Deep dark green-black background
- Plain black background
- Dark card/surface background

Avoid placing the logo on:

- Bright green backgrounds
- Red/orange/yellow backgrounds
- Busy food images without a dark overlay
- White or light backgrounds unless a specific light-version logo is created

---

## 3. Theme Personality

The design should communicate:

- **Authentic Kerala dining** through deep green and traditional warm accents
- **Premium restaurant feel** through dark backgrounds, soft borders, and spacious layouts
- **Food warmth** through small touches of orange, yellow, and red
- **Modern usability** through strong contrast, clean typography, and clear CTA hierarchy

Recommended design keywords:

`dark`, `premium`, `heritage`, `Kerala`, `warm`, `cultural`, `restaurant`, `minimal`, `clean`, `festive accents`.

---

## 4. Semantic Color System

Use semantic variables instead of hardcoding raw hex colors in components.

| CSS Variable | Hex Reference | Purpose |
|---|---:|---|
| `--background` | `#030604` | Main website background |
| `--foreground` | `#F4F7F1` | Main text color |
| `--card` | `#0B1209` | Cards, sections, content blocks |
| `--card-foreground` | `#F4F7F1` | Text inside cards |
| `--popover` | `#0D160A` | Dropdowns, menus, modals |
| `--popover-foreground` | `#F4F7F1` | Text inside popovers |
| `--primary` | `#095C02` | Main green CTA and active state |
| `--primary-foreground` | `#FFFFFF` | Text on primary buttons |
| `--secondary` | `#14250F` | Secondary buttons and dark green surfaces |
| `--secondary-foreground` | `#EAFBE3` | Text on secondary surfaces |
| `--muted` | `#10170E` | Muted sections and subtle backgrounds |
| `--muted-foreground` | `#9AA891` | Secondary text |
| `--accent` | `#F74102` | Orange accent for food/offers |
| `--accent-foreground` | `#FFF7ED` | Text on accent backgrounds |
| `--destructive` | `#E5230B` | Error and destructive actions |
| `--destructive-foreground` | `#FFFFFF` | Text on destructive color |
| `--border` | `#20351A` | Borders and dividers |
| `--input` | `#243D1D` | Input border/background details |
| `--ring` | `#84D804` | Focus ring and accessibility highlight |

---

## 5. Brand Color Variables

Use these custom brand variables when you need logo-specific colors outside shadcn semantic colors.

```css
--brand-logo-black: 0 0% 0%;
--brand-logo-green: 115 96% 18%;
--brand-logo-lime: 84 96% 43%;
--brand-logo-red: 358 95% 33%;
--brand-logo-orange: 15 98% 49%;
--brand-logo-yellow: 54 91% 50%;
--brand-logo-white: 120 14% 99%;

--brand-green-hover: 117 91% 25%;
--brand-green-soft: 115 61% 14%;
--brand-green-border: 107 34% 15%;
--brand-dark-surface: 114 45% 4%;
```

---

## 6. Ready-to-Use `globals.css` Theme Variables

Use this in `app/globals.css` or `src/app/globals.css` depending on your Next.js folder structure.

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

:root {
  color-scheme: dark;

  /* Base */
  --background: 140 33% 2%;
  --foreground: 90 27% 96%;

  /* Surfaces */
  --card: 107 33% 5%;
  --card-foreground: 90 27% 96%;
  --popover: 105 38% 6%;
  --popover-foreground: 90 27% 96%;

  /* Brand */
  --primary: 115 96% 18%;
  --primary-foreground: 0 0% 100%;
  --secondary: 106 42% 10%;
  --secondary-foreground: 101 75% 94%;

  /* Supporting UI */
  --muted: 107 24% 7%;
  --muted-foreground: 97 12% 61%;
  --accent: 15 98% 49%;
  --accent-foreground: 33 100% 96%;
  --destructive: 7 91% 47%;
  --destructive-foreground: 0 0% 100%;

  /* Form + borders */
  --border: 107 34% 15%;
  --input: 107 36% 18%;
  --ring: 84 96% 43%;

  /* Radius */
  --radius: 0.875rem;

  /* Charts */
  --chart-1: 115 96% 18%;
  --chart-2: 84 96% 43%;
  --chart-3: 15 98% 49%;
  --chart-4: 54 91% 50%;
  --chart-5: 358 95% 33%;

  /* Sidebar */
  --sidebar: 114 45% 4%;
  --sidebar-foreground: 90 27% 96%;
  --sidebar-primary: 115 96% 18%;
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 106 42% 10%;
  --sidebar-accent-foreground: 101 75% 94%;
  --sidebar-border: 107 34% 15%;
  --sidebar-ring: 84 96% 43%;

  /* Fixed logo palette */
  --brand-logo-black: 0 0% 0%;
  --brand-logo-green: 115 96% 18%;
  --brand-logo-lime: 84 96% 43%;
  --brand-logo-red: 358 95% 33%;
  --brand-logo-orange: 15 98% 49%;
  --brand-logo-yellow: 54 91% 50%;
  --brand-logo-white: 120 14% 99%;

  /* Extra brand support */
  --brand-green-hover: 117 91% 25%;
  --brand-green-soft: 115 61% 14%;
  --brand-green-border: 107 34% 15%;
  --brand-dark-surface: 114 45% 4%;
}

.dark {
  color-scheme: dark;

  --background: 140 33% 2%;
  --foreground: 90 27% 96%;

  --card: 107 33% 5%;
  --card-foreground: 90 27% 96%;
  --popover: 105 38% 6%;
  --popover-foreground: 90 27% 96%;

  --primary: 115 96% 18%;
  --primary-foreground: 0 0% 100%;
  --secondary: 106 42% 10%;
  --secondary-foreground: 101 75% 94%;

  --muted: 107 24% 7%;
  --muted-foreground: 97 12% 61%;
  --accent: 15 98% 49%;
  --accent-foreground: 33 100% 96%;
  --destructive: 7 91% 47%;
  --destructive-foreground: 0 0% 100%;

  --border: 107 34% 15%;
  --input: 107 36% 18%;
  --ring: 84 96% 43%;

  --chart-1: 115 96% 18%;
  --chart-2: 84 96% 43%;
  --chart-3: 15 98% 49%;
  --chart-4: 54 91% 50%;
  --chart-5: 358 95% 33%;

  --sidebar: 114 45% 4%;
  --sidebar-foreground: 90 27% 96%;
  --sidebar-primary: 115 96% 18%;
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 106 42% 10%;
  --sidebar-accent-foreground: 101 75% 94%;
  --sidebar-border: 107 34% 15%;
  --sidebar-ring: 84 96% 43%;
}

@theme inline {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));

  --color-card: hsl(var(--card));
  --color-card-foreground: hsl(var(--card-foreground));
  --color-popover: hsl(var(--popover));
  --color-popover-foreground: hsl(var(--popover-foreground));

  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));

  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));
  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));
  --color-destructive: hsl(var(--destructive));
  --color-destructive-foreground: hsl(var(--destructive-foreground));

  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));

  --color-chart-1: hsl(var(--chart-1));
  --color-chart-2: hsl(var(--chart-2));
  --color-chart-3: hsl(var(--chart-3));
  --color-chart-4: hsl(var(--chart-4));
  --color-chart-5: hsl(var(--chart-5));

  --color-sidebar: hsl(var(--sidebar));
  --color-sidebar-foreground: hsl(var(--sidebar-foreground));
  --color-sidebar-primary: hsl(var(--sidebar-primary));
  --color-sidebar-primary-foreground: hsl(var(--sidebar-primary-foreground));
  --color-sidebar-accent: hsl(var(--sidebar-accent));
  --color-sidebar-accent-foreground: hsl(var(--sidebar-accent-foreground));
  --color-sidebar-border: hsl(var(--sidebar-border));
  --color-sidebar-ring: hsl(var(--sidebar-ring));

  --color-brand-black: hsl(var(--brand-logo-black));
  --color-brand-green: hsl(var(--brand-logo-green));
  --color-brand-lime: hsl(var(--brand-logo-lime));
  --color-brand-red: hsl(var(--brand-logo-red));
  --color-brand-orange: hsl(var(--brand-logo-orange));
  --color-brand-yellow: hsl(var(--brand-logo-yellow));
  --color-brand-white: hsl(var(--brand-logo-white));

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  html {
    @apply dark;
  }

  body {
    @apply bg-background text-foreground antialiased;
  }

  ::selection {
    background: hsl(var(--brand-logo-lime) / 0.28);
    color: hsl(var(--foreground));
  }
}
```

---

## 7. Optional Tailwind v3 `tailwind.config.ts` Colors

If the project uses Tailwind v3 instead of Tailwind v4, add or merge this inside `theme.extend.colors`.

```ts
colors: {
  border: "hsl(var(--border))",
  input: "hsl(var(--input))",
  ring: "hsl(var(--ring))",
  background: "hsl(var(--background))",
  foreground: "hsl(var(--foreground))",
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },
  secondary: {
    DEFAULT: "hsl(var(--secondary))",
    foreground: "hsl(var(--secondary-foreground))",
  },
  destructive: {
    DEFAULT: "hsl(var(--destructive))",
    foreground: "hsl(var(--destructive-foreground))",
  },
  muted: {
    DEFAULT: "hsl(var(--muted))",
    foreground: "hsl(var(--muted-foreground))",
  },
  accent: {
    DEFAULT: "hsl(var(--accent))",
    foreground: "hsl(var(--accent-foreground))",
  },
  popover: {
    DEFAULT: "hsl(var(--popover))",
    foreground: "hsl(var(--popover-foreground))",
  },
  card: {
    DEFAULT: "hsl(var(--card))",
    foreground: "hsl(var(--card-foreground))",
  },
  brand: {
    black: "hsl(var(--brand-logo-black))",
    green: "hsl(var(--brand-logo-green))",
    lime: "hsl(var(--brand-logo-lime))",
    red: "hsl(var(--brand-logo-red))",
    orange: "hsl(var(--brand-logo-orange))",
    yellow: "hsl(var(--brand-logo-yellow))",
    white: "hsl(var(--brand-logo-white))",
  },
}
```

---

## 8. Component Usage Guidelines

### Primary CTA

Use for important actions such as:

- Book a Table
- Reserve Now
- View Menu
- Order Online
- Call Restaurant

Recommended style:

```tsx
<Button className="bg-primary text-primary-foreground hover:bg-[hsl(var(--brand-green-hover))]">
  Book Your Table
</Button>
```

### Secondary CTA

Use for less important actions such as:

- Explore Menu
- Know More
- View Gallery

```tsx
<Button variant="secondary">
  Explore Menu
</Button>
```

### Offer Badge

Use orange/yellow only for small promotional highlights.

```tsx
<span className="rounded-full bg-brand-orange px-3 py-1 text-sm font-semibold text-accent-foreground">
  Weekend Special
</span>
```

### Card Style

```tsx
<Card className="border-border bg-card text-card-foreground shadow-lg shadow-black/20">
  <CardContent className="p-6">
    {/* content */}
  </CardContent>
</Card>
```

### Image Overlay

Food images should use a dark overlay so text remains readable.

```tsx
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
```

---

## 9. Typography Direction

Use typography that feels elegant and readable.

Recommended style:

- Headings: bold, premium, spacious
- Body text: clean and readable
- Buttons: medium or semibold
- Small labels: uppercase with letter spacing only when needed

Suggested Tailwind classes:

```tsx
<h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
  Authentic Kerala Dining Experience
</h1>

<p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
  Traditional flavours, warm hospitality, and a dining experience rooted in Kerala culture.
</p>
```

---

## 10. Spacing and Layout Rules

Use a spacious dark layout. Avoid cramped sections.

Recommended:

- Page sections: `py-16 md:py-24`
- Cards: `p-5 md:p-6`
- Border radius: `rounded-2xl`
- Shadows: subtle black shadows only
- Borders: use `border-border`
- Main max width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

Example section wrapper:

```tsx
<section className="bg-background py-16 md:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* section content */}
  </div>
</section>
```

---

## 11. Do's

- Use deep dark backgrounds as the main foundation.
- Use logo green as the primary CTA color.
- Use orange, yellow, and red only for small highlights, offers, or festive elements.
- Use lime green for focus rings, active states, and tiny decorative details.
- Keep enough contrast between text and background.
- Use dark overlays on food images when placing text above them.
- Keep the original logo colors unchanged.
- Use semantic shadcn variables instead of hardcoded colors in components.
- Keep the design premium, clean, and culturally warm.
- Use borders and shadows subtly; the theme should not look flashy.

---

## 12. Don'ts

- Do not use white as the main website background.
- Do not recolor the logo.
- Do not use red, orange, and yellow together in large blocks.
- Do not place green text on dark green backgrounds without contrast.
- Do not use too many gradients in one section.
- Do not make every button orange or yellow; primary CTAs should remain green.
- Do not use pure black cards everywhere; use layered dark green surfaces.
- Do not place the logo on noisy images without a dark overlay.
- Do not use low-contrast grey text for important information.
- Do not mix unrelated color palettes such as blue, purple, or neon pink.

---

## 13. Recommended Color Usage Ratio

Use this ratio across the website:

| Color Group | Percentage | Usage |
|---|---:|---|
| Dark background and surfaces | 70% | Main website foundation |
| Green brand colors | 20% | CTA, navigation, active states |
| Orange/yellow/red accents | 7% | Food warmth, offers, highlights |
| White/ivory text | 3% | Text, logo contrast, icons |

This keeps the website dark and premium while still reflecting the complete logo palette.

---

## 14. Recommended UI Mapping

| UI Element | Recommended Color |
|---|---|
| Body background | `bg-background` |
| Header background | `bg-background/90 backdrop-blur` |
| Main CTA | `bg-primary text-primary-foreground` |
| CTA hover | `hover:bg-[hsl(var(--brand-green-hover))]` |
| Secondary button | `bg-secondary text-secondary-foreground` |
| Offer badge | `bg-brand-orange text-accent-foreground` |
| Festive label | `bg-brand-yellow text-black` |
| Error state | `bg-destructive text-destructive-foreground` |
| Card | `bg-card border-border` |
| Input | `border-input bg-background` |
| Focus ring | `ring-ring` |
| Muted text | `text-muted-foreground` |

---

## 15. Final Design Principle

The website should feel like a premium Kerala dining experience at night: dark, elegant, warm, culturally rooted, and easy to navigate.

The logo should remain the strongest visual identity. The theme should quietly support it through dark surfaces, green CTAs, and controlled festive accents.
