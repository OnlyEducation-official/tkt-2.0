# Component: Dining Experience / Ambience Section
## Website: The Kerala Table
## Component Name: DiningExperienceSection

Act as a senior frontend developer and UI/UX designer.

Create a premium ambience section for a South Indian restaurant portfolio website named **The Kerala Table**.

This section should explain how customers will feel when they visit the restaurant. It should focus on family dining, Kerala hospitality, cultural ambience, comfort, and a premium yet homely experience.

---

## 1. Section Purpose

This section should show that The Kerala Table is not only about food, but also about the complete dining experience.

The visitor should feel that the restaurant is:

- Warm
- Welcoming
- Family-friendly
- Cultural
- Comfortable
- Premium but homely
- Rooted in Kerala hospitality

This section should make users imagine themselves sitting inside the restaurant with family, enjoying authentic Kerala food in a calm and beautiful ambience.

---

## 2. Layout Structure

Create a section with:

- Centered heading
- Short supporting paragraph
- Three ambience cards
- One wide restaurant interior image below the cards

Basic layout:

------------------------------------------------
|                                              |
|      A Dining Experience Rooted in Kerala     |
|                                              |
|   Short paragraph about ambience & service    |
|                                              |
|   Card 1        Card 2        Card 3          |
|   Family        Cultural      Warm            |
|   Dining        Ambience      Service         |
|                                              |
|   Wide Restaurant Interior Image              |
|                                              |
------------------------------------------------

---

## 3. Header Structure

### Eyebrow Text

Text:

Kerala Hospitality

Purpose:

- Introduces the emotional and cultural tone of the section
- Connects the ambience with Kerala’s tradition of welcoming guests

Style:

- Small uppercase text
- Gold color
- Wide letter spacing
- Center aligned

---

### Main Heading

Text:

A Dining Experience Rooted in Kerala

Purpose:

- Main section title
- Should clearly communicate ambience, culture, and comfort

Style:

- Large font size
- Warm cream or deep brown depending on background
- Bold font weight
- Center aligned
- Tight line height

---

### Description

Suggested text:

Step into a space where traditional South Indian warmth meets modern comfort — designed for families, conversations, celebrations, and soulful Kerala meals.

Purpose:

- Briefly explain the dining experience
- Make the visitor emotionally connect with the space
- Keep it short and elegant

Style:

- Center aligned
- Medium paragraph size
- Relaxed line height
- Max width around 720px
- Soft opacity for premium feel

---

## 4. Card Structure

Create 3 cards.

Card topics:

1. Family Dining
2. Cultural Ambience
3. Warm Service

Desktop layout:

- 3 columns
- 1 row
- Equal card width
- Balanced spacing

Tablet layout:

- 2 columns if space allows
- Third card can move to next row

Mobile layout:

- 1 column
- 3 stacked cards

Each card should include:

- Icon or small image
- Title
- Short description
- Subtle hover effect

---

## 5. Card Content Direction

### Card 1: Family Dining

Explain that the space is comfortable for families, group meals, celebrations, and relaxed dining.

Suggested text:

A comfortable setting for family lunches, festive meals, weekend gatherings, and meaningful conversations around authentic Kerala food.

---

### Card 2: Cultural Ambience

Explain that the interiors should reflect Kerala’s identity through warm tones, traditional details, food culture, and subtle South Indian design elements.

Suggested text:

Inspired by Kerala’s traditional warmth, the ambience blends cultural details, earthy tones, and a calm dining atmosphere.

---

### Card 3: Warm Service

Explain that hospitality is a major part of Kerala dining and every guest should feel welcomed.

Suggested text:

From the first welcome to the final serving, every detail is built around care, comfort, and South Indian hospitality.

---

## 6. Card Design Direction

Each card should feel:

- Warm
- Premium
- Calm
- Restaurant-focused
- Slightly cultural
- Not too corporate

Card styling:

- Rounded corners
- Soft border
- Warm background
- Subtle shadow
- Comfortable padding
- Icon placed at top
- Title below icon
- Description below title

Hover behavior:

- Card moves slightly upward
- Border becomes warmer/golden
- Icon background glows softly
- Shadow becomes slightly deeper

Avoid aggressive hover animation.

---

## 7. Icon Direction

Use Lucide React icons.

Suggested icon mapping:

- Family Dining: UsersRound or UtensilsCrossed
- Cultural Ambience: Landmark, Sparkles, or Lamp
- Warm Service: HeartHandshake or HandPlatter
- Interior Image CTA/visual cue: Image or MapPin if needed

Icon style:

- Gold or deep brown color
- Rounded square icon container
- Soft gold transparent background
- Medium size
- Should support the card message without overpowering the design

---

## 8. Wide Interior Image Structure

Below the cards, add one wide restaurant ambience image.

Image purpose:

- Show the actual or imagined restaurant atmosphere
- Make the section more visual and immersive
- Create trust and emotional connection

Image should show:

- Restaurant seating
- Warm lighting
- Family-friendly space
- South Indian/Kerala-inspired ambience
- Premium but homely interiors

Image container:

- Full width inside main container
- Large horizontal rectangle
- Rounded corners
- Overflow hidden
- Soft shadow
- Optional dark warm overlay
- Optional small label at bottom-left

Suggested image label:

Inside The Kerala Table  
Warm. Cultural. Homely.

Image style:

- Object-cover
- Center aligned
- Slight hover zoom
- Should not look overly filtered
- Should feel realistic and premium

---

## 9. Visual Style

The section can use either a warm cream background or a dark brown background.

Recommended option:

Use a dark warm brown background if this section follows a lighter food section.  
Use a warm cream background if it follows a dark section.

Color mood:

- Deep brown
- Warm cream
- Kerala gold
- Soft green accents
- White opacity text

Suggested palette:

--tkt-dark: #130B06;
--tkt-brown: #2A1207;
--tkt-card-brown: #241208;
--tkt-gold: #D8A84E;
--tkt-gold-light: #F0BC5E;
--tkt-cream: #FFF7E8;
--tkt-leaf-green: #1F4D2B;

---

## 10. Spacing and Sizing

Section spacing:

- Desktop: 120px top and bottom
- Tablet: 90px to 100px top and bottom
- Mobile: 72px top and bottom

Container:

- Max width around 1280px
- Desktop side padding: 40px
- Tablet side padding: 32px
- Mobile side padding: 24px

Header spacing:

- Eyebrow to heading: 16px
- Heading to description: 20px
- Description to cards: 56px to 64px

Card spacing:

- Desktop card gap: 24px to 28px
- Mobile card gap: 18px to 22px

Interior image spacing:

- Cards to image: 48px to 64px
- Image height desktop: 480px to 560px
- Image height tablet: 420px to 480px
- Image height mobile: 300px to 360px

---

## 11. Animation Direction

Use Framer Motion for subtle scroll-based animations.

Header animation:

- Eyebrow fades up
- Heading fades up
- Description fades up

Card animation:

- Cards fade up one by one
- Use slight stagger delay
- Keep motion soft and elegant

Image animation:

- Wide image fades up after cards
- Optional slow hover zoom on image

Animation should feel:

- Smooth
- Premium
- Calm
- Natural

Avoid:

- Fast bounce
- Heavy parallax
- Continuous movement
- Too many animated decorative elements

---

## 12. Important Factors

- This section should sell the feeling of dining at The Kerala Table.
- It should not only describe interiors; it should communicate emotion and hospitality.
- Cards should be short, clean, and easy to scan.
- The wide image is important because it visually proves the ambience.
- Maintain strong spacing between header, cards, and image.
- Keep the design consistent with the hero and culture sections.
- Use real HTML text, not text embedded inside images.
- Use optimized images with `next/image`.
- Use Framer Motion only where it improves experience.
- Do not use React Virtuoso because this section has very limited content.
- Avoid over-designing the section with too many patterns or icons.

---

## 13. Responsive Behavior

Desktop:

- Centered heading
- 3-card grid
- Wide image below cards
- Spacious layout

Tablet:

- 2-card grid or stacked grid depending on available width
- Wide image remains below cards
- Reduce image height slightly

Mobile:

- Single-column layout
- Cards stacked one by one
- Wide image below cards
- Keep text readable
- Maintain 24px side padding
- Avoid very tall image cropping
- CTA or labels should not overlap important image areas

---

## 14. Accessibility Requirements

Do:

- Use semantic section structure.
- Use one clear h2 heading.
- Keep text readable with strong contrast.
- Add meaningful alt text for restaurant interior image.
- Add aria-hidden to decorative icons.
- Make hover effects optional, not required for understanding.
- Keep font sizes readable on mobile.

Do not:

- Put important information only inside the image.
- Use low contrast text over image.
- Use tiny labels.
- Remove keyboard focus styles from interactive elements.
- Use motion that affects readability.

---

## 15. Performance Requirements

Do:

- Use `next/image` for the wide interior image.
- Use optimized WebP or AVIF image format.
- Keep image size reasonable.
- Use Lucide icons only.
- Use CSS gradients instead of heavy background textures.
- Use Framer Motion only for entrance animations.

Do not:

- Load multiple large ambience images unless required.
- Use video background in this section.
- Use React Virtuoso.
- Combine Framer Motion and React Spring for the same animation.
- Add unnecessary scroll effects.

---

## 16. Do’s

- Make the section feel warm and premium.
- Show the emotional side of dining.
- Highlight family-friendly comfort.
- Connect ambience with Kerala culture.
- Use clean icon cards.
- Add one strong wide interior image.
- Keep card descriptions short and meaningful.
- Use soft gold accents.
- Maintain consistent spacing.
- Make the section responsive.
- Keep the design restaurant-focused.

---

## 17. Don’ts

- Do not make it look like a hotel brochure.
- Do not make it look like a generic cafe section.
- Do not overcrowd the cards.
- Do not use too many icons.
- Do not use random cultural decorations.
- Do not use neon or overly bright colors.
- Do not use cartoon-style visuals.
- Do not make the image too small.
- Do not use heavy patterns behind text.
- Do not add too much text.
- Do not break visual continuity with the rest of the website.

---

## 18. Final Expected Output

Codex should create a clean component named:

DiningExperienceSection

The component should include:

- Centered section heading
- Short ambience-focused description
- Three responsive ambience cards
- Wide restaurant interior image
- Lucide React icons
- Framer Motion entrance animations
- Tailwind CSS styling
- shadcn-compatible structure
- Accessible HTML
- Production-ready responsive layout

---

## Final Visual Direction

The final section should feel like a warm invitation into The Kerala Table.

It should communicate:

A family-friendly restaurant.  
A culturally rooted ambience.  
Warm South Indian hospitality.  
A premium yet homely dining experience.