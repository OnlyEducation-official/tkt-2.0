Below is a ready-to-use **MD master prompt** you can give to Codex.

# Component Name

```tsx
KeralaTableHero
````

Suggested file location:

```txt
src/components/sections/KeralaTableHero.tsx
```

---

# Hero Section Concept

## Idea: Cinematic Kerala Food Hero

Create a full-screen cover section with a large background image of authentic Kerala food served on a banana leaf.

The background image should slowly zoom in using a soft cinematic effect.

After a few seconds, the background image should fade smoothly into another Kerala-related image such as:

* Kerala Sadya on banana leaf
* Appam with stew
* Puttu and kadala curry
* Filter coffee
* Restaurant ambience
* Traditional Kerala dining setup
* Warm kitchen / serving moment

The background transition should feel calm, luxurious, and natural.

---

# Layout Structure

The hero section should take the full viewport height.

```txt
------------------------------------------------
|                                              |
|   Full background Kerala food/culture image   |
|   with dark warm overlay                      |
|                                              |
|        THE KERALA TABLE                       |
|        Authentic Taste of Kerala              |
|        Served with Culture, Warmth & Soul     |
|                                              |
|        [Reserve a Table] [Explore Menu]       |
|                                              |
------------------------------------------------
```

---

# Section Dimensions

```txt
Width: 100%
Height: 100vh
Minimum Height: 720px on desktop
Mobile Height: 100svh
Position: relative
Overflow: hidden
```

Use:

```tsx
<section className="relative min-h-screen w-full overflow-hidden">
```

For mobile viewport handling, use:

```css
min-h-[100svh]
```

---

# Background Image Layer

The background should be placed absolutely behind all content.

## Background Requirements

* Image must cover the full section.
* Image should never stretch or distort.
* Use `object-cover`.
* Use `object-center`.
* The image should slowly zoom in.
* Image transition should be smooth.
* The background should support multiple images.

Recommended implementation:

* Store image URLs in an array.
* Use state to change image every 5–7 seconds.
* Use Framer Motion for fade and zoom transition.
* Use `AnimatePresence` for smooth image replacement.

Example image array structure:

```tsx
const heroImages = [
  "/images/kerala-sadya.jpg",
  "/images/appam-stew.jpg",
  "/images/filter-coffee.jpg",
  "/images/restaurant-ambience.jpg",
];
```

---

# Background Animation

Each image should animate like this:

```txt
Initial: scale(1)
Animate: scale(1.08)
Duration: 6 to 8 seconds
Transition: easeOut
```

The image fade transition should be soft:

```txt
Opacity from 0 to 1
Exit opacity from 1 to 0
Transition duration: 1.2s to 1.5s
```

The animation should feel cinematic, not fast or distracting.

---

# Overlay Layer

Add a dark warm overlay above the background image.

The overlay should make the text readable while keeping the food image visible.

Use a layered overlay approach:

## Overlay 1: Full Dark Warm Overlay

```tsx
absolute inset-0 bg-black/55
```

## Overlay 2: Warm Gradient Overlay

Add a warm Kerala-inspired gradient:

```tsx
absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-[#2a1207]/80
```

## Overlay 3: Left / Center Focus Gradient

Optional but recommended:

```tsx
absolute inset-0 bg-radial-gradient
```

If using Tailwind only, create a custom utility or use inline style:

```tsx
style={{
  background:
    "radial-gradient(circle at center, rgba(120,60,20,0.18), rgba(0,0,0,0.75))",
}}
```

The overlay should create depth and premium contrast.

---

# Content Container

The content should be center-aligned and placed slightly above the vertical center.

## Desktop Placement

```txt
Horizontal: center
Vertical: around 45% from top
Max width: 900px
Text alignment: center
Padding: 24px
```

Use:

```tsx
<div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
```

To place slightly above center:

```tsx
className="translate-y-[-5%]"
```

---

# Text Content

## Main Heading

Text:

```txt
THE KERALA TABLE
```

Design:

```txt
Font size desktop: 72px to 96px
Font size tablet: 56px to 72px
Font size mobile: 42px to 52px
Font weight: 700 or 800
Letter spacing: wide
Line height: tight
Color: warm white / ivory
```

Suggested Tailwind:

```tsx
text-5xl sm:text-6xl md:text-7xl lg:text-8xl
font-bold
tracking-[0.14em]
text-[#FFF7E8]
leading-none
```

Important:

* The heading should look premium.
* Do not make it too decorative.
* Use spacing and scale to create luxury.
* The brand name should be exactly: `THE KERALA TABLE`.

---

## Eyebrow Text

Place a small cultural label above the main heading.

Text option:

```txt
Authentic Kerala Dining
```

Design:

```txt
Small uppercase text
Letter spaced
Warm gold color
Subtle border or divider line
```

Suggested Tailwind:

```tsx
mb-5 text-xs sm:text-sm uppercase tracking-[0.35em] text-[#D8A84E]
```

Optional with small horizontal lines on both sides:

```txt
—— Authentic Kerala Dining ——
```

---

## Subheading

Text:

```txt
Experience Kerala on a Banana Leaf
```

Design:

```txt
Font size desktop: 28px to 36px
Font size mobile: 20px to 26px
Font weight: 500 or 600
Color: warm cream
Margin top: 24px
```

Suggested Tailwind:

```tsx
mt-6 text-2xl sm:text-3xl md:text-4xl font-medium text-[#FFE9C7]
```

---

## Description

Text:

```txt
Traditional recipes, soulful flavours, and the warmth of South Indian hospitality — served fresh at The Kerala Table.
```

Design:

```txt
Max width: 680px
Font size desktop: 18px to 20px
Font size mobile: 15px to 16px
Line height: relaxed
Color: soft cream / muted white
Margin top: 18px
```

Suggested Tailwind:

```tsx
mx-auto mt-5 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-white/82
```

---

# CTA Buttons

Add two call-to-action buttons below the description.

## Button 1

Text:

```txt
Reserve a Table
```

Purpose:

Primary CTA.

Design:

```txt
Background: Kerala gold / warm saffron
Text: deep brown / near black
Border radius: full
Padding: large
Font weight: 600
Hover: slight scale + darker gold
```

Suggested Tailwind:

```tsx
rounded-full bg-[#D8A84E] px-8 py-4 text-sm sm:text-base font-semibold text-[#1B0F08] shadow-lg transition-all hover:scale-[1.03] hover:bg-[#F0BC5E]
```

---

## Button 2

Text:

```txt
Explore Menu
```

Purpose:

Secondary CTA.

Design:

```txt
Transparent background
Border: warm cream / white opacity
Text: warm white
Hover: white background with dark text
```

Suggested Tailwind:

```tsx
rounded-full border border-white/35 px-8 py-4 text-sm sm:text-base font-semibold text-white backdrop-blur-sm transition-all hover:scale-[1.03] hover:bg-white hover:text-[#1B0F08]
```

---

# CTA Layout

Desktop:

```txt
Buttons aligned horizontally
Gap: 16px
Margin top: 36px
```

Mobile:

```txt
Buttons stacked vertically or wrapped
Width: full or auto
```

Suggested Tailwind:

```tsx
mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row
```

For mobile button width:

```tsx
w-full sm:w-auto
```

---

# Decorative Cultural Elements

Add subtle Kerala-inspired decorative elements without making the design cluttered.

Optional elements:

## 1. Banana Leaf Silhouette

Add a soft banana leaf illustration or blurred shape near the bottom corner.

```txt
Position: bottom left or bottom right
Opacity: 8% to 15%
Color: deep green
Should not distract from text
```

## 2. Thin Gold Divider

Add a small gold divider under the heading or eyebrow text.

```txt
Width: 80px
Height: 1px
Background: #D8A84E
Opacity: 70%
```

## 3. Scroll Indicator

At the bottom center, add a subtle scroll indicator.

Text:

```txt
Scroll
```

or icon:

Use Lucide React `ChevronDown`.

Animation:

```txt
Slow bounce
Opacity 60%
```

Suggested position:

```tsx
absolute bottom-8 left-1/2 z-10 -translate-x-1/2
```

---

# Animation Guidelines

Use Framer Motion for:

## Text Entrance

The content should animate in when the page loads.

Animation sequence:

1. Eyebrow fades up first.
2. Main heading fades up second.
3. Subheading fades up third.
4. Description fades up fourth.
5. Buttons fade up last.

Animation style:

```txt
Initial: opacity 0, y 24
Animate: opacity 1, y 0
Duration: 0.7s to 1s
Ease: easeOut
Stagger: 0.12s
```

Use parent-child variants for clean animation.

---

# Motion Rules

Do:

* Use slow, elegant animation.
* Use subtle fade and upward motion.
* Keep transitions smooth.
* Make background zoom very slow.
* Respect reduced motion preferences if possible.

Do not:

* Use fast bounce effects.
* Use too many moving elements.
* Add aggressive parallax.
* Add random floating icons.
* Use overdone animation that distracts from food and brand identity.

---

# Color Palette

The hero should use a Kerala-inspired premium palette.

## Primary Colors

```css
--tkt-dark: #130B06;
--tkt-brown: #2A1207;
--tkt-gold: #D8A84E;
--tkt-gold-light: #F0BC5E;
--tkt-cream: #FFF7E8;
--tkt-muted-cream: #FFE9C7;
--tkt-leaf-green: #1F4D2B;
--tkt-deep-green: #0E2A18;
```

## Usage

```txt
Dark brown / black: overlay and depth
Gold: CTA, highlights, dividers
Cream: main text
Muted cream: description and secondary text
Green: subtle cultural accent only
```

---

# Typography Direction

Use a clean, premium typography system.

Recommended:

* Heading: elegant serif or high-quality display font if available
* Body: clean sans-serif

If custom fonts are not available, use Tailwind defaults but create hierarchy using size, weight, spacing, and color.

Typography should feel:

```txt
Premium
Readable
Cultural
Elegant
Not overly decorative
```

Avoid using too many fonts.

Maximum font families:

```txt
2 fonts only
```

---

# Responsive Behaviour

## Desktop

```txt
Hero height: 100vh
Heading large and cinematic
Buttons horizontal
Text max-width centered
```

## Tablet

```txt
Reduce heading size
Keep text centered
Maintain comfortable spacing
```

## Mobile

```txt
Hero height: 100svh
Heading should not overflow
Letter spacing should reduce slightly if needed
Buttons should stack
Description should be shorter width
Padding left/right: 20px to 24px
```

Suggested mobile heading:

```tsx
text-4xl sm:text-5xl
tracking-[0.08em] sm:tracking-[0.14em]
```

---

# Accessibility Requirements

The hero must follow good accessibility practices.

Do:

* Use semantic `<section>`.
* Use one clear `<h1>`.
* Buttons must be keyboard accessible.
* Use proper contrast between text and background.
* Background images should be decorative if they do not provide meaningful content.
* Add `aria-label` to CTA links if needed.
* Ensure focus states are visible.

Do not:

* Put important text inside images.
* Use low contrast text.
* Use animation that causes readability issues.
* Remove keyboard focus outlines completely.

---

# Performance Requirements

Use optimized images.

If using Next.js Image:

```tsx
import Image from "next/image";
```

Recommended:

* Use `priority` for the first hero image.
* Use responsive image sizes.
* Avoid huge uncompressed images.
* Use WebP or AVIF format.
* Keep overlay separate from image.
* Avoid heavy animation on many elements.

Do not:

* Use video background for this component unless specifically requested.
* Load too many large images at once.
* Use unnecessary animation libraries together.

---

# Suggested Component Structure

```txt
KeralaTableHero
│
├── HeroBackgroundSlider
│   ├── Background image array
│   ├── Active image state
│   ├── Auto-change interval
│   └── Framer Motion fade + zoom animation
│
├── HeroOverlay
│   ├── Dark overlay
│   ├── Warm gradient overlay
│   └── Radial focus overlay
│
├── HeroContent
│   ├── Eyebrow text
│   ├── Main heading
│   ├── Gold divider
│   ├── Subheading
│   ├── Description
│   └── CTA buttons
│
└── ScrollIndicator
    ├── ChevronDown icon
    └── Slow bounce animation
```

---

# Suggested JSX Structure

```tsx
<section className="relative min-h-[100svh] w-full overflow-hidden bg-[#130B06]">
  <HeroBackgroundSlider />

  <div className="absolute inset-0 bg-black/55" />
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-[#2A1207]/85" />

  <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-5xl translate-y-[-5%] flex-col items-center justify-center px-6 text-center">
    <motion.p>
      Authentic Kerala Dining
    </motion.p>

    <motion.h1>
      THE KERALA TABLE
    </motion.h1>

    <motion.div />

    <motion.h2>
      Experience Kerala on a Banana Leaf
    </motion.h2>

    <motion.p>
      Traditional recipes, soulful flavours, and the warmth of South Indian hospitality — served fresh at The Kerala Table.
    </motion.p>

    <motion.div>
      <Button>Reserve a Table</Button>
      <Button variant="outline">Explore Menu</Button>
    </motion.div>
  </div>

  <ScrollIndicator />
</section>
```

---

# Visual Feel Reference

The final design should feel like:

```txt
A warm evening Kerala dining experience.
A banana leaf meal under soft golden light.
A premium cultural restaurant, not a fast-food brand.
Elegant, emotional, authentic, and cinematic.
```

---

# Do’s

* Keep the hero visually rich but clean.
* Use Kerala food and culture as the main visual identity.
* Maintain strong text readability.
* Use warm overlays.
* Use slow cinematic image zoom.
* Use elegant Framer Motion transitions.
* Keep CTA buttons clear and premium.
* Make the layout fully responsive.
* Use shadcn/ui Button component where suitable.
* Use Lucide icons only if they improve clarity.

---

# Don’ts

* Do not make the design look like a generic cafe website.
* Do not use too many bright colors.
* Do not overuse icons.
* Do not use random South Indian stereotypes.
* Do not use cartoon visuals.
* Do not make text hard to read over the background.
* Do not add excessive animations.
* Do not use low-quality food images.
* Do not place important content too close to the edges.
* Do not make the CTA buttons too small.
* Do not use more than two font families.
* Do not add unnecessary sections inside the hero.

---

# Final Expected Output from Codex

Codex should generate:

1. A clean React / Next.js component.
2. TypeScript-safe code.
3. Tailwind CSS-based styling.
4. shadcn/ui Button usage.
5. Framer Motion animations.
6. Responsive layout.
7. Background image slider with slow zoom and fade transition.
8. Accessible semantic structure.
9. Premium Kerala-inspired visual treatment.

The final component should be ready to place inside a Next.js landing page.

```
