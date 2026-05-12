Here is the **shorter, structure-focused version** for Codex, with the review cards using **infinite horizontal scroll**. 

````md id="735epz"
# Component 8: Guest Reviews / Testimonials Section
## Website: The Kerala Table
## Component Name: GuestReviewsSection

Act as a senior frontend developer and UI/UX designer.

Create a premium guest reviews section for **The Kerala Table**, a South Indian restaurant rooted in Kerala culture, authentic food, warm hospitality, and premium dining.

This section should use **infinite horizontal scrolling review cards**.

The section should feel:

- Premium
- Trust-building
- Editorial
- Calm
- Cultural
- Restaurant-focused
- Warm and authentic

---

## 1. Section Purpose

This section should display customer reviews in a refined and elegant way.

The purpose is to build trust by showing that guests love The Kerala Table for:

- Authentic Kerala food
- Warm hospitality
- Homely dining experience
- Traditional flavours
- Premium ambience
- Family-friendly comfort
- Credible customer feedback

This section should not look like a basic testimonial slider.

It should feel like a premium editorial review section.

---

## 2. Main Layout Structure

Create a vertical section with:

1. Small centered label
2. Large editorial heading
3. Infinite horizontal review card scroll
4. Bottom overall rating summary

Basic structure:

```txt
------------------------------------------------------------
|                                                          |
|                     GUEST NOTES                          |
|                                                          |
|              What Our Guests Say                         |
|                                                          |
|   [Review Card] [Review Card] [Review Card] [Review Card] |
|          Infinite horizontal scrolling cards              |
|                                                          |
|              4.4 ★★★★★ Overall Rating                    |
|              Based on 1,00+ verified guest reviews        |
|                                                          |
------------------------------------------------------------
````

---

## 3. Section Background and Mood

Use a warm off-white / ivory background.

Do not use pure white.

Recommended mood:

* Soft
* Premium
* Editorial
* Clean
* Warm
* Restaurant-friendly

Suggested colors:

```css
--section-bg: #f3f1e8;
--card-bg: #fbfaf4;
--kerala-green: #214f2a;
--muted-green: #456b45;
--warm-gold: #b8a14a;
--copper-brown: #a7653f;
--body-text: #6f7169;
--muted-text: #aaa79c;
--divider: #ddd8c8;
```

---

## 4. Header Structure

### Small Label

Text:

GUEST NOTES

Style:

* Uppercase
* Center aligned
* Small font size
* Wide letter spacing
* Muted gold color
* Horizontal line on both sides

Visual style:

```txt
──── GUEST NOTES ────
```

Purpose:

* Creates premium editorial introduction
* Makes the section feel refined and intentional

---

### Main Heading

Text:

What Our Guests Say

Special styling:

* “What Our Guests” should use Kerala green
* “Say” should use copper-brown
* “Say” should be italic serif

Style:

* Large editorial serif font
* Center aligned
* Premium restaurant feel
* Strong hierarchy
* Large spacing below heading

The heading should feel elegant, not corporate.

---

## 5. Review Cards Area

Use an infinite horizontal scrolling layout.

Structure:

* Full-width carousel wrapper
* Overflow hidden
* Inside it, create a flex track
* Cards move continuously from right to left
* Duplicate review data to make the loop seamless

Carousel behavior:

* Infinite horizontal scroll
* Smooth movement
* Slow speed
* Seamless loop
* Cards partially visible at left and right edges
* Pause animation on hover

Recommended animation speed:

* 35s to 45s per full loop
* Direction: right to left
* Motion should feel calm and premium

---

## 6. Review Card Design

Each review card should feel like an elegant note card.

Card style:

* Width around 380px to 420px on desktop
* Warm card background
* Minimal border
* Very soft shadow or no shadow
* Slightly squared editorial corners
* Spacious padding
* No heavy glassmorphism
* No modern app-style rounded card look

Card internal structure:

```txt
------------------------------------------------
| ★★★★★                                      “  |
|                                              |
| Review text                                  |
| Review text                                  |
| Review text                                  |
|                                              |
| -------------------------------------------- |
| Avatar  Name             Review Platform     |
|         City                                  |
------------------------------------------------
```

Each card should include:

* Star rating
* Subtle quote mark
* Review text
* Divider line
* Customer avatar
* Customer name
* Customer city
* Review platform

---

## 7. Star Rating

Use five gold stars.

Text:

★★★★★

Style:

* Small size
* Gold color
* Slight letter spacing
* Placed at the top-left of each card

The stars should support trust without looking loud.

---

## 8. Quote Mark

Add a large decorative quote mark at the top-right of each card.

Style:

* Large serif quote mark
* Very light beige/gold opacity
* Decorative only
* Should not compete with the review text

The quote mark should make the card feel editorial.

---

## 9. Review Text

Review text should be:

* Short
* Emotional
* Specific
* Food-focused
* Hospitality-focused
* Easy to read

Style:

* Medium-small font size
* Relaxed line height
* Soft body text color
* Max width inside card
* Not too dark, not too faint

Avoid long reviews that make the cards uneven or crowded.

---

## 10. Customer Details Row

Bottom row should include:

Left side:

* Small circular avatar
* Customer name
* Customer city

Right side:

* Review platform name

Suggested platform names:

* Google Reviews
* Zomato
* Swiggy Dineout

Avatar style:

* Small circular image
* Soft border
* Neutral background
* Not too large

Name style:

* Serif or semi-serif
* Kerala green
* Medium weight

City and platform style:

* Small uppercase
* Wide letter spacing
* Muted text color

---

## 11. Suggested Review Topics

Use reviews around:

* Fish Pottichoru
* Kerala Sadya
* Appam and stew
* Warm service
* Family dining
* Authentic Kerala taste
* Homely experience
* Premium ambience

Example review directions:

1. Guest praises Fish Pottichoru and authentic spice balance.
2. Guest says Sadya felt like home outside Kerala.
3. Guest praises ambience and South Indian hospitality.
4. Guest remembers appam and stew as comforting.
5. Guest says every dish felt honest, rooted, and warm.

---

## 12. Infinite Scroll Requirements

The review cards must scroll infinitely.

Implementation direction:

* Create an array of review cards.
* Duplicate the array inside the carousel track.
* Use CSS keyframes or Framer Motion animation.
* Track should move horizontally from `0` to `-50%`.
* Loop should be seamless.
* Keep card gap consistent.
* Pause animation when user hovers over the carousel/card area.

Important:

* Do not make the carousel too fast.
* Do not snap cards aggressively.
* Do not use heavy slider controls unless requested.
* Infinite scroll should feel smooth and premium.

---

## 13. Hover Interaction

On card hover:

* Pause infinite scroll
* Card lifts slightly upward
* Card brightness increases subtly
* Very soft shadow appears
* Transition should be smooth

Hover movement:

* Around 4px to 6px upward only

Avoid:

* Large scale effects
* Rotation
* Flashy shadows
* Aggressive animations

---

## 14. Bottom Rating Summary

Add a centered rating summary below the carousel.

Content:

```txt
4.4 ★★★★★ Overall Rating
Based on 1,00+ verified guest reviews
across Google, Zomato & Swiggy Dineout
```

Desktop layout:

* Horizontal row
* Rating number on left
* Stars and label in center
* Review count text on right
* Small vertical divider between rating and count

Mobile layout:

* Stack vertically
* Hide vertical divider
* Center align all text

Style:

* Rating number in Kerala green
* Stars in gold
* Label in muted uppercase text
* Review count in soft body text

The rating summary should build credibility but not overpower the review cards.

---

## 15. Spacing Guidelines

Section spacing:

* Desktop top padding: 95px to 110px
* Desktop bottom padding: 80px to 95px
* Tablet padding: around 80px top and bottom
* Mobile padding: around 64px top and bottom

Header spacing:

* Label to heading: around 28px
* Heading to cards: around 60px to 70px

Card spacing:

* Gap between cards: 28px to 32px
* Card padding: 38px to 40px desktop
* Mobile card padding: around 28px

Rating summary spacing:

* Carousel to rating summary: around 60px

---

## 16. Responsive Behavior

Desktop:

* Show 3 to 4 cards visible
* Side cards can be partially visible
* Heading should be large
* Rating summary horizontal

Tablet:

* Reduce heading size
* Reduce card width
* Keep horizontal infinite scroll
* Rating summary can remain horizontal if space allows

Mobile:

* Keep infinite horizontal scroll
* Card width around 300px to 320px
* Heading size reduced
* Rating summary stacks vertically
* Text centered
* Avoid large avatars
* Keep cards readable

Mobile structure:

```txt
-----------------------------
|        GUEST NOTES         |
|   What Our Guests Say      |
|                             |
|      [Review Card]          |
|   Infinite horizontal scroll|
|                             |
|          4.4                |
|        ★★★★★               |
|      OVERALL RATING         |
| Based on verified reviews   |
-----------------------------
```

---

## 17. Typography Direction

Use elegant editorial typography.

Recommended:

* Heading font: Cormorant Garamond, Playfair Display, or Libre Baskerville
* Body font: Inter, Manrope, Lora, or similar readable font

Typography should feel:

* Cultural
* Premium
* Editorial
* Calm
* Readable

Do not use too many fonts.
Maximum two font families.

---

## 18. Important Factors

* Infinite scroll is the main interaction of this section.
* The carousel must loop smoothly without visible jumps.
* Duplicate review cards to create a seamless loop.
* Pause scroll on hover for better readability.
* Cards should be spacious and editorial, not app-like.
* Use warm ivory background, not pure white.
* Use Kerala green as the main typography color.
* Use gold only for stars, dividers, and small accents.
* Use copper-brown only for the highlighted word “Say”.
* Keep reviews short and specific.
* Keep rating summary clean and credible.
* Use real HTML text, not text inside images.
* Do not use React Virtuoso because this is not a long virtualized list.
* Avoid heavy slider libraries unless absolutely required.

---

## 19. Accessibility Requirements

Do:

* Use semantic section structure.
* Use one clear h2 heading.
* Keep text contrast readable.
* Add meaningful alt text for avatars if real images are used.
* Use aria-hidden for decorative quote marks.
* Ensure review text remains readable while moving.
* Pause animation on hover.
* Consider reduced-motion users.

Do not:

* Make text move too fast.
* Put important text inside images.
* Use low-contrast body text.
* Make card content too small.
* Use motion that prevents reading.

---

## 20. Performance Requirements

Do:

* Use lightweight CSS animation or Framer Motion.
* Duplicate review data for seamless scroll.
* Use optimized avatar images if used.
* Keep cards text-based.
* Avoid loading many large customer photos.
* Keep animation GPU-friendly using transform.

Do not:

* Use React Virtuoso.
* Use heavy carousel libraries unnecessarily.
* Animate layout properties like left or margin.
* Use too many shadows.
* Load large images for every review card.

---

## 21. Do’s

* Use warm ivory background.
* Keep heading large and elegant.
* Use Kerala green for primary text.
* Highlight “Say” in copper-brown italic serif.
* Use gold stars and decorative lines.
* Keep review cards clean and spacious.
* Use horizontal infinite scrolling.
* Pause carousel on hover.
* Keep animation slow and smooth.
* Keep customer names readable.
* Keep platform names small and uppercase.
* Add an overall rating summary.

---

## 22. Don’ts

* Do not use bright white background.
* Do not use heavy shadows.
* Do not add too many colors.
* Do not make cards overly rounded like app cards.
* Do not use neon green or bright orange.
* Do not overcrowd review cards.
* Do not make carousel too fast.
* Do not add large customer photos.
* Do not make rating summary too large.
* Do not use generic testimonial styling.
* Do not add slider arrows unless requested.
* Do not break the premium Kerala restaurant identity.

---

## 23. Final Expected Output

Codex should create a clean component named:

GuestReviewsSection

The component should include:

* Warm ivory full-width section
* Centered label and editorial heading
* Infinite horizontal scrolling review cards
* Review cards with stars, quote mark, review text, avatar, name, city, and platform
* Pause-on-hover interaction
* Bottom overall rating summary
* Framer Motion or CSS animation
* Tailwind CSS styling
* shadcn-compatible structure
* Accessible HTML
* Responsive layout
* Production-ready component

---

## Final Visual Direction

The final section should feel like a refined guest notes section for a premium Kerala restaurant.

It should communicate:

Guests trust the food.
Guests remember the hospitality.
Guests feel the warmth of Kerala.
The Kerala Table offers authentic dining with credibility and care.

```
```
