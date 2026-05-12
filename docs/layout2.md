# Component 2: Kerala Culture / Identity Section
## Website: The Kerala Table
## Component Name: KeralaCultureSection

Act as a senior frontend developer and UI/UX designer.

Create a premium cultural identity section for a South Indian restaurant portfolio website named **The Kerala Table**.

This section should come immediately after the hero section.

The output should focus only on structure, layout, design direction, responsiveness, important factors, do’s, and don’ts.

---

## 1. Section Purpose

This section should explain that **The Kerala Table is not only a restaurant**, but a place that represents Kerala’s:

- Food culture
- Dining traditions
- Hospitality
- Community values
- Coastal identity
- Home-style flavours

The section should educate visitors about what makes Kerala dining special.

It should feel informative, warm, cultural, and premium.

---

## 2. Main Layout Structure

Create a section with:

- Small eyebrow text at the top
- Large centered heading
- Short supporting description
- Six-card grid below the heading area

Basic layout:

------------------------------------------------
|                                              |
|        KERALA FOOD CULTURE                   |
|                                              |
|      What Makes Kerala Dining Special?       |
|                                              |
|   Short paragraph about Kerala dining        |
|                                              |
|   Card 1        Card 2        Card 3         |
|   Card 4        Card 5        Card 6         |
|                                              |
------------------------------------------------

---

## 3. Header Structure

### Eyebrow Text

Text:

Kerala Food Culture

Purpose:

- Introduces the theme
- Creates a premium cultural tone

Style:

- Small uppercase text
- Gold color
- Wide letter spacing
- Center aligned

---

### Main Heading

Text:

What Makes Kerala Dining Special?

Purpose:

- Main section title
- Should clearly communicate the educational value of the section

Style:

- Large font size
- Warm cream color
- Bold font weight
- Center aligned
- Tight line height

---

### Description

Text:

Kerala dining is a soulful blend of tradition, ingredients, hospitality, and community — where every meal carries the warmth of home and the richness of culture.

Purpose:

- Briefly explain the section
- Make the visitor understand that Kerala food is connected with emotion, culture, and hospitality

Style:

- Center aligned
- Medium size
- Soft white opacity
- Relaxed line height
- Max width around 700px to 760px

---

## 4. Card Grid Structure

Create 6 cards.

Card topics:

1. Banana Leaf Tradition
2. Coconut-Rich Flavours
3. Spices with Balance
4. Sadya Culture
5. Home-Style Hospitality
6. Coastal Influence

Desktop layout:

- 3 columns
- 2 rows
- Large spacing between cards

Tablet layout:

- 2 columns
- 3 rows

Mobile layout:

- 1 column
- 6 rows

Each card should include:

- Icon
- Title
- Short description
- Optional subtle hover glow

---

## 5. Card Content Direction

### Card 1: Banana Leaf Tradition

Explain that meals served on banana leaves represent purity, freshness, and traditional Kerala dining.

### Card 2: Coconut-Rich Flavours

Explain how coconut is used in curries, chutneys, stews, and desserts, giving Kerala food its signature softness and depth.

### Card 3: Spices with Balance

Explain that Kerala cuisine uses spices carefully to create flavour without overpowering the natural taste of food.

### Card 4: Sadya Culture

Explain that sadya is not just a meal, but a celebration of festivals, togetherness, and hospitality.

### Card 5: Home-Style Hospitality

Explain that Kerala dining is built around warmth, care, and making every guest feel welcomed.

### Card 6: Coastal Influence

Explain Kerala’s coastal identity through seafood, curry leaves, tamarind, coconut milk, and fresh local flavours.

---

## 6. Card Design Direction

Each card should feel:

- Premium
- Warm
- Cultural
- Slightly glass-like
- Modern but not corporate
- Rich but readable

Card styling:

- Warm dark brown background
- Soft gold border
- Large rounded corners
- Spacious padding
- Subtle shadow
- Light backdrop blur
- Smooth hover effect

Hover behavior:

- Card moves slightly upward
- Border becomes more golden
- Icon background glows softly
- Card background becomes slightly warmer
- Title can shift subtly toward gold

Avoid harsh hover effects.

---

## 7. Icon Direction

Use Lucide React icons.

Suggested icon mapping:

- Banana Leaf Tradition: Leaf
- Coconut-Rich Flavours: CookingPot or Soup
- Spices with Balance: Sparkles or Flame
- Sadya Culture: UtensilsCrossed
- Home-Style Hospitality: HeartHandshake
- Coastal Influence: Waves

Icon style:

- Gold color
- Placed inside rounded square container
- Soft gold transparent background
- Medium icon size
- Should support the card topic, not overpower it

---

## 8. Visual Style

The section should continue the visual language of the hero section.

Recommended mood:

- Dark premium Kerala-inspired background
- Warm gold highlights
- Cream text
- Brown card surfaces
- Subtle green glow as cultural accent

Suggested palette:

--tkt-dark: #130B06;
--tkt-brown: #2A1207;
--tkt-card-brown: #241208;
--tkt-gold: #D8A84E;
--tkt-gold-light: #F0BC5E;
--tkt-cream: #FFF7E8;
--tkt-muted-cream: #FFE9C7;
--tkt-leaf-green: #1F4D2B;

Color usage:

- Background: deep dark brown
- Cards: warm brown
- Headings: cream
- Icons and dividers: gold
- Descriptions: white with opacity
- Decorative glow: subtle green or gold

---

## 9. Spacing and Sizing

Section spacing:

- Desktop: 120px top and bottom
- Tablet: around 90px top and bottom
- Mobile: around 72px top and bottom

Container:

- Max width around 1280px
- Desktop horizontal padding: 40px
- Tablet horizontal padding: 32px
- Mobile horizontal padding: 24px

Header spacing:

- Eyebrow to heading: 16px
- Heading to description: 20px
- Description to cards: 56px to 64px

Card spacing:

- Desktop gap: 24px to 28px
- Mobile gap: 18px to 22px

---

## 10. Animation Direction

Use Framer Motion for subtle scroll entrance animations.

Header animation:

- Eyebrow fades up
- Heading fades up
- Description fades up

Card animation:

- Cards fade up one by one
- Use slight stagger delay
- Keep animation smooth and slow

Animation should feel:

- Elegant
- Premium
- Calm
- Non-distracting

Avoid:

- Fast bounce
- Heavy parallax
- Too many moving elements
- Repeating infinite animations

---

## 11. Important Factors

- This section should educate users quickly.
- The section must not look like a generic SaaS feature grid.
- The card content should be short and meaningful.
- Use a consistent card structure for all 6 cards.
- Maintain strong contrast between text and background.
- Keep icons decorative and supportive.
- Use real HTML text, not images for content.
- Use Framer Motion only where it improves experience.
- Use a data array for cards instead of hardcoding repeated markup.
- Use CSS gradients instead of heavy background images.
- Do not use React Virtuoso because only 6 cards are required.
- Maintain visual continuity with the hero section.

---

## 12. Responsive Behavior

Desktop:

- Centered heading area
- 3-column card grid
- Spacious cards
- Large heading

Tablet:

- 2-column card grid
- Slightly reduced heading size
- Comfortable spacing

Mobile:

- 1-column card grid
- Compact but readable cards
- Heading should not overflow
- Icons should remain visible but not too large
- Description should stay readable
- Maintain 24px side padding

---

## 13. Accessibility Requirements

Do:

- Use semantic section structure.
- Use one clear h2 heading.
- Keep all content as readable HTML text.
- Maintain strong color contrast.
- Add aria-hidden to decorative icons.
- Ensure hover effects are not required to understand content.
- Keep font sizes readable on mobile.

Do not:

- Put important information only inside icons.
- Use low-contrast gold for long text.
- Use tiny paragraph text.
- Make animations affect readability.
- Remove keyboard focus states from interactive elements if added.

---

## 14. Performance Requirements

Do:

- Keep the section lightweight.
- Use Lucide icons only.
- Use CSS gradients for background depth.
- Use Framer Motion only for entrance animation.
- Store card content in a clean data array.

Do not:

- Use large image assets in this section unless specifically required.
- Use React Virtuoso.
- Combine Framer Motion and React Spring for the same animation.
- Add unnecessary scroll effects.
- Add heavy background textures.

---

## 15. Do’s

- Keep the section informative and premium.
- Maintain Kerala-inspired warmth.
- Use a dark cultural background.
- Make cards visually rich but readable.
- Keep spacing consistent.
- Use clean topic-based icons.
- Use short, meaningful card descriptions.
- Add subtle hover effects.
- Make the grid responsive.
- Keep visual continuity with the hero section.
- Use gold accents carefully.

---

## 16. Don’ts

- Do not make it look like a generic feature grid.
- Do not overcrowd the cards.
- Do not use long paragraphs inside cards.
- Do not use random food icons.
- Do not use neon colors.
- Do not use cartoon-style graphics.
- Do not make the background too busy.
- Do not reduce text readability.
- Do not use excessive animations.
- Do not make cards too small.
- Do not use React Virtuoso here.
- Do not break the premium restaurant identity.

---

## 17. Final Expected Output

Codex should create a clean component named:

KeralaCultureSection

The component should include:

- Centered heading area
- Premium dark Kerala-inspired background
- Six-card responsive grid
- Lucide React icons
- Framer Motion scroll animations
- Tailwind CSS styling
- shadcn-compatible structure
- Accessible HTML structure
- Production-ready responsive design

---

## Final Visual Direction

The final section should feel like a premium cultural storytelling block.

It should explain why Kerala dining is special through clean cards, warm colors, meaningful icons, and elegant spacing.

The mood should be:

Warm.  
Cultural.  
Premium.  
Informative.  
Authentic to Kerala dining.