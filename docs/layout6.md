Here is the **shorter, structure-focused version** for Codex, based on your uploaded Founder Vision section. 

````md id="228zkx"
# Component 7: Founder Vision / Heart Behind The Table Section
## Website: The Kerala Table
## Component Name: FounderVisionSection

Act as a senior frontend developer and UI/UX designer.

Create a premium storytelling section for **The Kerala Table**, a South Indian restaurant rooted in Kerala culture, identity, integrity, and authentic hospitality.

This section should introduce the founder’s vision and the emotional story behind the restaurant.

The design should feel:

- Premium
- Cultural
- Editorial
- Warm
- Authentic
- Founder-led
- Kerala-rooted
- Restaurant-focused

---

## 1. Section Purpose

This section should communicate the heart behind The Kerala Table.

It should not look like a normal “About Us” block.

The visitor should understand:

- Why the restaurant exists
- What inspired the founder
- How Kerala culture shaped the restaurant
- Why the food feels personal and authentic
- What values guide the dining experience

The section should feel emotional, elegant, and meaningful.

---

## 2. Layout Structure

Use a two-column editorial layout.

Left side:

- Large founder portrait image
- Premium magazine-style visual
- Clean and minimal image treatment

Right side:

- Small uppercase label
- Large editorial heading
- Founder story paragraphs
- Quote block
- Author line

Basic structure:

```txt
------------------------------------------------------------
|                                                          |
|        Founder Image                  Text Content        |
|                                                          |
|        Large portrait image           Small label         |
|        left aligned                   Main heading        |
|                                       Paragraphs          |
|                                       Quote block         |
|                                                          |
------------------------------------------------------------
````

---

## 3. Desktop Layout

Section:

* Full width
* Minimum height around 850px
* Deep Kerala green background
* Content vertically centered
* Top and bottom padding around 80px to 100px

Inner wrapper:

* Max width around 1200px to 1280px
* Two-column grid
* Left column: around 48%
* Right column: around 52%
* Column gap: 80px to 100px
* Align items center

---

## 4. Left Image Area

Use one large portrait image of the founder.

Image style:

* Large vertical portrait
* Editorial magazine feel
* Clean edges
* Minimal or no border radius
* No heavy shadow
* No card-style treatment
* Object-fit cover
* Object-position center

Recommended image size:

* Width: 100%
* Max width: around 500px
* Height: around 660px to 680px on desktop

The image should feel premium, serious, and founder-led.

Avoid making the image too small or decorative.

---

## 5. Right Content Area

The right side should contain the emotional founder story.

Content order:

1. Small label
2. Main heading
3. Story paragraphs
4. Quote block
5. Founder author line

The content should have a maximum width around 560px to 570px.

---

## 6. Top Label

Text:

THE HEART BEHIND THE TABLE

Structure:

* Small horizontal line
* Uppercase label text

Style:

* Font size around 11px to 12px
* Letter spacing around 3px to 4px
* Uppercase
* Muted gold color
* Font weight 600
* Horizontal line before text
* Line width around 34px to 40px

Purpose:

* Creates an editorial opening
* Makes the section feel premium
* Introduces the emotional story

---

## 7. Main Heading

Heading should be split into two visual lines:

```txt
Ranjit's
Vision
```

### “Ranjit's” Style

* Elegant serif or italic serif
* Font size around 64px to 76px on desktop
* Italic style
* Font weight around 400
* Warm antique gold color
* Line height around 0.95

### “Vision” Style

* Elegant serif
* Font size around 68px to 82px on desktop
* Font weight around 500
* Soft ivory / warm white color
* Line height around 1
* Slight margin top

The heading should feel large, calm, premium, and editorial.

---

## 8. Body Text

Use three short paragraphs.

Suggested story direction:

* Founder was born and raised in Kerala
* Childhood memories of home cooking and family meals
* Experience across professional kitchens
* Returning to Kerala roots through food philosophy
* Restaurant built around memory, ingredients, process, and warmth

Text style:

* Font size around 16px to 17px
* Line height around 1.75
* Muted mint-white or soft beige-white color
* Font weight 400
* Paragraph gap around 24px
* Max width around 560px

The body should feel emotional, but not dramatic.

Keep it grounded, refined, and authentic.

---

## 9. Quote Block

Place a quote below the paragraphs.

Suggested quote:

“A dish without memory is just food. We cook to keep Kerala alive at every table.”

Quote block style:

* Margin top around 36px
* Padding left around 24px
* Left border: 1px solid muted gold
* Max width around 570px

Quote text style:

* Elegant serif or italic serif
* Font size around 22px to 26px
* Line height around 1.5
* Italic
* Soft ivory color

Author text:

— RANJIT, FOUNDER

Author style:

* Font size around 11px
* Letter spacing around 2.5px
* Uppercase
* Warm gold color
* Font weight 600
* Margin top around 12px

---

## 10. Visual Style

Use a deep Kerala-inspired premium palette.

Suggested colors:

```css
--section-bg: #123f1f;
--section-bg-deep: #0f351a;
--gold: #b59a3b;
--gold-muted: #9e8734;
--ivory: #f5f1df;
--body-text: #c8d7c5;
--muted-text: #aebfae;
```

Color usage:

* Background: deep Kerala green
* Heading highlight: antique gold
* Main heading text: ivory
* Body text: muted mint-white
* Label and quote border: muted gold
* Quote text: ivory

Avoid bright neon green or flashy gold.

---

## 11. Typography Direction

Typography should feel classic, editorial, and readable.

Recommended font direction:

* Heading: Playfair Display, Cormorant Garamond, or Libre Baskerville
* Body: Inter, Lora, Manrope, or a clean readable font

Typography should create contrast between:

* Emotional founder heading
* Clean readable story text
* Elegant quote block

Do not use more than two font families.

---

## 12. Spacing Guidelines

Use spacious editorial spacing.

Recommended spacing:

* Label to heading: around 32px
* Heading to paragraphs: around 34px
* Paragraph gap: around 24px
* Paragraphs to quote: around 36px
* Column gap: around 90px
* Section padding: around 90px top and bottom

The section should breathe. Do not compress the content.

---

## 13. Responsive Behavior

### Tablet

* Change grid to one column
* Image first, content second
* Max image height around 560px
* Section padding around 72px 32px
* Text max width around 680px
* Reduce heading size by around 15%

### Mobile

* Single-column layout
* Image on top
* Text below image
* Padding around 56px 20px
* Image height around 420px to 460px
* “Ranjit's” font size around 48px
* “Vision” font size around 54px
* Body font size around 15px
* Quote font size around 20px

Mobile structure:

```txt
--------------------------------
|                              |
| Founder Image                |
|                              |
| THE HEART BEHIND THE TABLE   |
| Ranjit's                     |
| Vision                       |
| Paragraphs                   |
| Quote                        |
|                              |
--------------------------------
```

---

## 14. Animation Direction

Use subtle Framer Motion animations only.

Animation flow:

1. Image fades in with slight scale from 1.04 to 1
2. Label fades upward
3. Heading fades upward with slight stagger
4. Paragraphs fade upward
5. Quote fades in last

Animation style:

* Duration around 0.8s to 1.1s
* Ease out
* Small stagger delay around 0.12s
* Motion should feel soft and premium

Avoid:

* Fast bounce
* Heavy parallax
* Continuous animation
* Flashy transitions

---

## 15. Important Factors

* The section should feel founder-led, not generic.
* The image must be large and editorial.
* The dark green background is essential to the identity.
* Gold should be used only as an accent.
* The quote should become the emotional anchor.
* Body text should remain readable on dark background.
* The layout should feel spacious and premium.
* Do not add CTA buttons unless specifically required.
* Do not add icon cards in this section.
* Use real HTML text, not text inside images.
* Keep the story authentic and connected to Kerala food culture.

---

## 16. Do’s

* Keep the layout spacious and premium.
* Use a deep Kerala green background.
* Use antique gold only for emphasis.
* Keep the founder image large and elegant.
* Use strong typography hierarchy.
* Make the quote visually memorable.
* Maintain high readability on dark background.
* Keep the content emotionally connected to Kerala food culture.
* Use subtle editorial animation.
* Make the mobile layout clean and readable.

---

## 17. Don’ts

* Do not use a white background.
* Do not make the image small.
* Do not use too many cards or icons.
* Do not add multiple buttons in this section.
* Do not use neon green or bright gold.
* Do not overcrowd the text.
* Do not use generic restaurant copy.
* Do not make the section look like a normal About Us block.
* Do not add heavy borders or shadows around the image.
* Do not use cartoon-style or casual visuals.

---

## 18. Final Expected Output

Codex should create a clean component named:

FounderVisionSection

The component should include:

* Full-width deep green section
* Two-column editorial layout
* Large founder portrait image
* Right-side founder story content
* Split heading: Ranjit's Vision
* Three short story paragraphs
* Elegant quote block
* Muted gold accents
* Responsive mobile layout
* Framer Motion entrance animations
* Tailwind CSS styling
* Accessible HTML structure
* Production-ready section design

---

## Final Visual Direction

The final section should feel like a premium founder-story feature from an editorial magazine.

It should communicate:

A founder’s emotional connection to Kerala.
A restaurant built on memory, culture, and hospitality.
A deep respect for ingredients and traditional cooking.
A premium yet personal vision behind The Kerala Table.

```
```
