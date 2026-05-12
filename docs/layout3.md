# Component 3: Signature Dish Highlight Section
## Website: The Kerala Table
## Section Name: The Sadya Experience

Act as a senior frontend developer and UI/UX designer.

Create a premium two-column section for a South Indian restaurant portfolio website named **The Kerala Table**.

This section should highlight one powerful Kerala food experience: **Kerala Sadya**.

The output should focus on component structure, layout, spacing, design direction, responsiveness, important UI factors, do’s, and don’ts.

---

## 1. Section Purpose

This section should present Kerala Sadya as a premium cultural dining experience.

It should not look like a simple menu card.

The section must communicate that Sadya is:

- Traditional
- Cultural
- Family-friendly
- Premium
- Memorable
- Connected with Kerala hospitality
- Served with meaning, balance, and togetherness

---

## 2. Layout Structure

Use a two-column layout on desktop.

Left side:

- Large Kerala Sadya image
- Banana leaf meal visual
- Optional overlay label
- Optional small premium badge

Right side:

- Eyebrow text
- Main heading
- Short cultural description
- Four detail points
- CTA button
- Optional small supporting line

Basic structure:

------------------------------------------------
|                                              |
|   Large Dish Image       |  Dish Details      |
|                          |                    |
|   Kerala Sadya           |  The Sadya         |
|   Banana Leaf Meal       |  Experience        |
|                          |                    |
|                          |  Description       |
|                          |  Detail Points     |
|                          |                    |
|                          |  [Explore Menu]    |
|                                              |
------------------------------------------------

---

## 3. Content Hierarchy

### Eyebrow Text

Signature Kerala Experience

Purpose:

- Creates premium positioning
- Introduces the section before the main heading

Style:

- Small uppercase text
- Gold color
- Wide letter spacing
- Left aligned on desktop

---

### Main Heading

The Sadya Experience

Purpose:

- Main section title
- Should feel bold, editorial, and premium

Style:

- Large font size
- Deep brown color
- Strong font weight
- Tight line height

---

### Description

A traditional Kerala sadya is more than a meal. It is a celebration of balance, hospitality, and togetherness. Served on a banana leaf, every item has its own place, flavour, and purpose.

Purpose:

- Explain cultural value
- Keep it emotional but not too long
- Make the food experience meaningful

Style:

- Medium paragraph size
- Relaxed line height
- Deep brown with soft opacity
- Maximum width around 560px

---

## 4. Detail Points

Use four small detail points below the description.

Detail points:

- Banana Leaf Serving
- Traditional Kerala Curries
- Sweet Payasam Finish
- Perfect for Family Dining

Layout:

- Desktop: 2 columns
- Mobile: 1 column
- Each point should appear as a small premium chip/card

Each detail point should include:

- Small icon
- Short label
- Soft background
- Rounded corners
- Light border
- Balanced spacing

Suggested icons from Lucide React:

- Leaf
- CookingPot
- CupSoda
- UsersRound
- HeartHandshake
- ArrowRight for CTA

---

## 5. Image Structure

The left image should be the emotional anchor of the section.

Image content:

- Kerala Sadya
- Banana leaf
- Rice
- Curries
- Pickles
- Papadam
- Payasam
- Traditional Kerala meal arrangement

Image container:

- Large height on desktop
- Rounded corners
- Overflow hidden
- Soft premium shadow
- Slight hover zoom
- Bottom gradient overlay for readability

Image label:

Kerala Sadya  
Banana Leaf Meal

Optional badge:

Traditional Feast

The label should sit at the bottom-left of the image and must not dominate the visual.

---

## 6. Visual Style

The section should feel like:

- Premium food editorial layout
- Warm Kerala cultural storytelling
- Traditional but modern
- Clean and spacious
- Restaurant-focused
- Elegant and memorable

Recommended color direction:

- Background: warm cream
- Heading: deep brown
- CTA: deep brown with cream text
- Accent: Kerala gold
- Decorative glow: soft green or soft gold
- Paragraph: brown with opacity

Suggested palette:

--tkt-dark: #130B06;
--tkt-brown: #2A1207;
--tkt-card-brown: #3A1A0B;
--tkt-gold: #D8A84E;
--tkt-deep-gold: #B98222;
--tkt-cream: #FFF7E8;
--tkt-leaf-green: #1F4D2B;

---

## 7. Spacing and Sizing

Section spacing:

- Desktop: 120px top and bottom
- Tablet: 96px top and bottom
- Mobile: 72px top and bottom

Container:

- Max width around 1280px
- Desktop padding: 40px
- Tablet padding: 32px
- Mobile padding: 24px

Grid gap:

- Desktop: 64px between image and content
- Tablet/mobile: 48px vertical gap

Image height:

- Desktop: around 620px
- Tablet: around 520px
- Mobile: around 380px to 420px

---

## 8. Responsive Behavior

Desktop:

- Two-column layout
- Image on left
- Content on right
- Detail points in 2-column grid

Tablet:

- Can shift to single column
- Image first
- Content below
- Keep spacing comfortable

Mobile:

- Single-column layout
- Image first
- Content below
- Detail points stacked
- CTA can become full width
- Text should remain readable
- Avoid cramped spacing

---

## 9. Animation Direction

Use Framer Motion only for subtle entrance animations.

Recommended animation:

- Image fades in from left
- Content fades in from right
- Detail points fade up one by one
- CTA appears after content

Animation should be:

- Slow
- Smooth
- Elegant
- Not distracting

Avoid aggressive bounce, heavy parallax, or too many animated elements.

---

## 10. Important Factors

- The section should visually contrast with the previous dark section.
- Use warm cream background to make this section feel fresh and premium.
- The image must be high-quality and Kerala-specific.
- The content should explain culture, not just ingredients.
- The CTA should be clearly visible.
- Use real HTML text, not text inside images.
- Maintain strong contrast for readability.
- Use `next/image` for performance.
- Keep the component lightweight.
- Do not use React Virtuoso for this section.
- Do not mix Framer Motion and React Spring for the same animation.

---

## 11. Do’s

- Make Sadya feel premium and culturally important.
- Use a large, realistic Kerala Sadya image.
- Keep the layout clean and editorial.
- Use warm Kerala-inspired colors.
- Maintain strong spacing between image and content.
- Use subtle animation.
- Keep text readable on all screen sizes.
- Use meaningful icons only where needed.
- Make the CTA easy to notice.
- Use responsive layout rules properly.
- Use semantic section structure.
- Add meaningful alt text for the food image.

---

## 12. Don’ts

- Do not make it look like a normal food menu card.
- Do not overcrowd the right side with too much text.
- Do not use generic non-Kerala food images.
- Do not use cartoon-style visuals.
- Do not use bright neon colors.
- Do not overuse icons.
- Do not add too many animations.
- Do not make the image too small.
- Do not use heavy background patterns.
- Do not reduce text contrast.
- Do not place important information only inside the image.
- Do not break visual continuity with the rest of the website.

---

## 13. Final Expected Output

Codex should create a clean component named:

SadyaExperienceSection

The component should include:

- Responsive two-column layout
- Large Kerala Sadya image block
- Cultural content section
- Detail point chips
- CTA button
- Subtle Framer Motion animation
- Tailwind CSS styling
- shadcn/ui Button usage
- Lucide React icons
- Accessible and production-ready structure

---

## Final Visual Direction

The final section should feel like a premium feature story about Kerala Sadya.

Large food imagery on one side.  
Meaningful cultural explanation on the other.  
Warm, traditional, elegant, and memorable.