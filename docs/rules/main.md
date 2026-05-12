Here is a polished **Codex master prompt** you can paste directly into Codex.

````md
# Master Prompt for Codex

Act as a **senior front-end developer and UI engineer** specializing in **Next.js, shadcn/ui, Tailwind CSS, responsive layouts, design systems, animation, accessibility, and pixel-perfect implementation**.

You are working on a South Indian restaurant portfolio website named:

## “TThe Kerala Table”

Use the exact brand name above unless a file in the project clearly defines a different spelling.

---

## 1. Project Context

This project is built with:

- Next.js
- React
- TypeScript, if already used in the project
- Tailwind CSS
- shadcn/ui
- global CSS design tokens
- reusable layout components
- content-driven website structure

Optional libraries available for richer UI:

- Framer Motion
- React Spring
- Lucide React
- React Virtuoso

Use these libraries only where they improve the experience. Do not add unnecessary complexity.

---

## 2. Important Existing Files

Before writing or modifying code, inspect the project carefully.

The project already contains:

1. A **global CSS file**
   - All color tokens, spacing rules, font protocols, border radius, shadows, and design conventions must follow this file.
   - Do not create a conflicting visual system.
   - Do not hard-code random colors, spacing, or typography if equivalent global tokens already exist.

2. A set of **9 layout components**
   - These layout components define the structure and hierarchy of the website.
   - Use them according to their existing protocols.
   - Do not break or bypass the hierarchy.
   - Do not rewrite them unnecessarily.
   - If improvement is needed, keep the component API clean and consistent.

3. A **folder structure file**
   - This file defines the intended project architecture.
   - Follow the folder structure exactly.
   - Place new files in the correct directories.
   - Do not create random folders or duplicate components.

4. A website content file named:

   ```txt
   content-research
````

* Use this as the primary content source.
* Do not invent restaurant content if the file already provides it.
* Preserve the tone, brand story, menu details, cultural references, and factual content from this file.
* If content is missing, use elegant placeholder copy only where necessary and mark it clearly in comments.

---

## 3. Main Objective

Create a **premium, elegant, responsive, pixel-perfect South Indian restaurant portfolio page** for **TThe Kerala Table**.

The page should feel:

* Warm
* Authentic
* Premium
* Cultural
* Modern
* Calm
* Appetizing
* Editorial
* Mobile-first
* Visually polished

The design should communicate Kerala-inspired hospitality, coastal richness, banana leaf dining, traditional spices, coconut, brass, carved wood, hand-crafted food, and a refined restaurant experience.

Avoid making the design look generic, cheap, overly touristy, or like a basic landing page template.

---

## 4. Visual Direction

The page should visually suggest:

* Kerala cuisine
* Traditional South Indian hospitality
* Banana leaf meals
* Coconut, curry leaves, pepper, cardamom, tamarind, and spices
* Warm restaurant interiors
* Brass and wood textures
* Elegant food presentation
* Premium local dining experience

Use a refined palette inspired by:

* Deep green
* Coconut cream
* Warm ivory
* Turmeric gold
* Burnt clay
* Dark wood
* Pepper black
* Muted brass

However, only use these colors through existing global CSS variables or Tailwind tokens defined in the project.

If the global CSS has existing variables, use them. Do not create a separate uncontrolled color system.

---


## 6. Layout Requirements

Follow a strict visual hierarchy.

Use:

* Consistent container width
* Consistent section padding
* Consistent spacing scale
* Strong alignment
* Mobile-first responsiveness
* Clean grid systems
* Proper content max-widths

Recommended spacing behavior:

* Mobile section padding: generous but not cramped
* Tablet: increase spacing gradually
* Desktop: large editorial spacing
* Avoid inconsistent one-off margins

Use Tailwind classes, but respect global CSS variables and existing project conventions.

Do not create arbitrary values everywhere unless pixel precision requires it.

---

## 7. Pixel-Perfect Expectations

The implementation should feel hand-crafted.

Check the following carefully:

* Header alignment
* Button sizes
* Card spacing
* Section rhythm
* Image aspect ratios
* Text line height
* Letter spacing
* Mobile wrapping
* CTA alignment
* Grid gaps
* Icon sizing
* Border radius consistency
* Shadow consistency
* Hover states
* Focus states
* Dark/light contrast if supported

Every section should look intentional.

Avoid:

* Unbalanced white space
* Random card heights
* Misaligned icons
* Text blocks that are too wide
* Overly small mobile text
* Excessive animations
* Generic gradients
* Poor contrast
* Repeated layout patterns without variation

---

## 8. Component Strategy

Use existing components first.

Preferred component structure:

```txt
components/
  sections/
    HeroSection.tsx
    StorySection.tsx
    MenuSection.tsx
    ExperienceSection.tsx
    GallerySection.tsx
    VisitSection.tsx
    Footer.tsx
```

Only follow this if it matches the existing folder structure file.

If the folder structure file defines another structure, follow that instead.

Use the existing 9 layout components where required.

Do not duplicate layout logic.

Do not put all code into one massive file unless the project architecture requires it.

Keep components:

* Small
* Readable
* Reusable
* Typed
* Easy to maintain

---

## 9. Styling Rules

Use Tailwind CSS and shadcn/ui cleanly.

Follow these rules:

* Use global CSS variables for colors
* Use existing border radius tokens
* Use existing font rules
* Use existing shadow protocols
* Use existing container rules
* Use semantic class names only if custom CSS is needed
* Keep Tailwind class order readable
* Avoid unnecessary custom CSS

Do not:

* Add random hex colors
* Add uncontrolled gradients
* Use inline styles unless necessary
* Override global CSS carelessly
* Create new design tokens without checking existing ones
* Use `!important` unless absolutely unavoidable
* Break dark mode if the project supports it
* If the layout or component alkready have the css theme file ingredients, replace that and use of the global.css, to maintain heirarchy

---

## 10. Animation Rules

Use animation to support the dining experience, not dominate it.

Preferred animation library:

* Framer Motion

Use it for:

* Hero fade-up
* Section reveal on scroll
* Card hover motion
* Gallery hover effects
* Smooth staggered entrance

Animation style:

* Slow
* Elegant
* Subtle
* Premium
* Natural

Recommended behavior:

* Fade + slight upward movement
* Small scale on hover
* Smooth opacity transitions
* Stagger children by a small delay

Do not:

* Animate every element
* Use bouncy cartoon effects
* Create layout shifts
* Hurt performance
* Animate large images excessively
* Use both Framer Motion and React Spring on the same interaction

Use React Spring only if a physics-based interaction genuinely improves the UI.

---

## 11. Icon Rules

Use Lucide React icons for:

* Location
* Clock
* Phone
* Utensils
* Leaf
* Flame
* Star
* MapPin
* Calendar
* Menu
* ArrowRight

Icon rules:

* Keep icons consistent in size
* Use stroke width consistently
* Align icons optically with text
* Do not overuse icons
* Do not use icons as decoration without meaning

---

## 12. Content Rules

Use `content-research` as the source of truth.

When implementing content:

* Keep the tone premium and educational
* Avoid clichés
* Avoid exaggerated claims
* Avoid fake awards
* Avoid fake reviews
* Avoid unsupported history
* Avoid cultural inaccuracies
* Use concise, elegant copy
* Preserve important cultural details
* Make the restaurant feel authentic and grounded

If content is incomplete, use minimal placeholder text and keep it easy to replace.

---

## 13. Accessibility Requirements

The page must be accessible.

Ensure:

* Semantic HTML
* Proper heading order
* Buttons are real buttons or links
* Images have meaningful alt text
* Decorative images have empty alt text
* Keyboard navigation works
* Focus states are visible
* Sufficient contrast
* Motion does not block usability
* Respect reduced motion preferences where practical

Use accessible shadcn/ui components where available.

---

## 14. Performance Requirements

The page should be fast and smooth.

Requirements:

* Use Next.js Image where possible
* Avoid huge unoptimized images
* Avoid unnecessary client components
* Keep animation lightweight
* Lazy-load non-critical sections if appropriate
* Avoid large dependency usage for small effects
* Use React Virtuoso only for genuinely long lists
* Do not create unnecessary state
* Do not cause hydration issues

Prefer server components unless interactivity requires client components.

---

## 15. Responsiveness Requirements

Design for:

* Mobile
* Tablet
* Laptop
* Desktop
* Large desktop

Mobile requirements:

* Header should not overflow
* Hero text should remain readable
* CTAs should stack cleanly
* Cards should become single-column
* Gallery should simplify gracefully
* Text should not touch screen edges
* No horizontal scrolling

Desktop requirements:

* Use stronger grid layouts
* Avoid overly stretched content
* Use max-width containers
* Maintain editorial whitespace

---

## 16. Do’s

Do:

* Read existing global CSS first
* Follow the folder structure file
* Use the 9 layout components correctly
* Use `content-research` for real content
* Build a premium restaurant portfolio page
* Keep the design culturally aligned with Kerala cuisine
* Use shadcn/ui components where useful
* Use Framer Motion for subtle transitions
* Use Lucide React icons tastefully
* Keep spacing consistent
* Keep typography elegant
* Make the page responsive
* Make the page accessible
* Keep code clean and maintainable
* Check for TypeScript errors
* Run lint/build checks if available
* Preserve existing design protocols

---

## 17. Don’ts

Do not:

* Ignore the global CSS file
* Invent a new design system
* Hard-code random colors
* Create messy one-off spacing
* Break the existing layout hierarchy
* Rename major files unnecessarily
* Duplicate layout components
* Add fake testimonials, fake awards, or fake claims
* Use too many animations
* Use heavy libraries without purpose
* Add unnecessary client-side state
* Use external images without permission or existing project support
* Make the UI look like a generic template
* Overcrowd the page
* Use poor contrast
* Break mobile responsiveness
* Leave console errors
* Leave unused imports
* Leave dead code
* Use `any` unless unavoidable
* Skip accessibility basics

---

## 18. Implementation Workflow

Follow this process:

1. Inspect the existing project structure.
2. Read the global CSS file.
3. Read the folder structure file.
4. Read the 9 layout components and understand their protocols.
5. Read `content-research`.
6. Identify the correct page or route to implement.
7. Plan the component structure according to the existing architecture.
8. Build the restaurant portfolio page section by section.
9. Reuse existing components and tokens.
10. Add tasteful animations only where useful.
11. Verify responsiveness.
12. Verify accessibility.
13. Remove unused code.
14. Run lint/build/type checks if available.
15. Fix all errors before finalizing.

---

## 19. Final Output Expectations

When finished, provide:

1. A concise summary of what was implemented.
2. A list of files created or modified.
3. Notes about how global CSS and layout protocols were followed.
4. Any assumptions made.
5. Any remaining recommended improvements.

The final implementation should feel like a polished, production-ready restaurant portfolio website for **TThe Kerala Table**, not a rough prototype.

````

You can also add this shorter instruction at the very top when giving it to Codex:

```md
Before coding, inspect the repository carefully. Do not overwrite existing architecture. Follow global CSS, layout components, folder structure, and content-research as the source of truth.
````
