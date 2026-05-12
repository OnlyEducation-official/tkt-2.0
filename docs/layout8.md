Here is the **shorter, structure-focused version** for Codex, based on your uploaded Reservation / Visit Us CTA section. 

````md id="8o9ynp"
# Component 9: Reservation / Visit Us CTA Section
## Website: The Kerala Table
## Component Name: ReservationCTASection

Act as a senior frontend developer and UI/UX designer.

Create a premium reservation and visit-us section for **The Kerala Table**, a South Indian restaurant rooted in Kerala culture, authentic hospitality, and premium dining.

This section should encourage visitors to reserve a table, call the restaurant, or visit the location.

The design should feel:

- Cinematic
- Premium
- Warm
- Kerala-inspired
- Conversion-focused
- Elegant
- Restaurant-focused

---

## 1. Section Purpose

This section should work as a strong final call-to-action.

It should communicate:

- Visit The Kerala Table
- Reserve a table easily
- Understand location, timings, and contact details
- Feel the warmth of Kerala hospitality
- Experience a premium restaurant atmosphere

The section should feel inviting, not sales-heavy.

---

## 2. Layout Structure

Use a full-width cinematic background section.

Structure:

1. Full background restaurant interior image
2. Dark Kerala-green overlay
3. Left-aligned content block
4. Small label
5. Large editorial heading
6. Short reservation paragraph
7. Location, hours, and contact details
8. Call-to-reserve button

Basic layout:

```txt
------------------------------------------------------------
|                                                          |
|  Background Restaurant Interior Image                     |
|  Dark Kerala Green Overlay                                |
|                                                          |
|       ─ RESERVE YOUR TABLE                                |
|                                                          |
|       Join Us at The                                     |
|       Table                                              |
|                                                          |
|       Short reservation paragraph                         |
|                                                          |
|       Location        Hours          Contact              |
|                                                          |
|       [Call to Reserve]                                  |
|                                                          |
------------------------------------------------------------
````

---

## 3. Main Section Structure

Section requirements:

* Full width
* Minimum height around 760px to 820px on desktop
* Position relative
* Overflow hidden
* Content vertically centered
* Background image should cover the full section
* Background image should be muted with dark overlays

The section should feel like a cinematic restaurant invitation.

---

## 4. Background Image Direction

Use a restaurant interior image as the full background.

Image should show:

* Restaurant ambience
* Warm lighting
* Premium seating
* Kerala-inspired interior mood
* Comfortable dining atmosphere

Image style:

* Full section background
* Object-cover
* Object-position center/right
* Slightly visible on the right side
* Muted by overlay for readability

Avoid using a bright or distracting background image.

---

## 5. Overlay Direction

Use a dark Kerala-green overlay for strong readability.

Overlay should include:

* Full dark overlay
* Left-to-right gradient
* Subtle green tint
* Stronger darkness behind text area
* Slightly lighter visibility toward the right where the image appears

Purpose:

* Keep text readable
* Add cinematic depth
* Create Kerala green identity
* Make the image feel premium, not loud

---

## 6. Content Wrapper

Content should be left aligned.

Wrapper direction:

* Max width around 1180px to 1240px
* Centered horizontally within the page
* Inner content width around 560px to 620px
* Padding around 100px vertical on desktop
* Keep enough left/right padding for responsiveness

Do not center-align the full content on desktop.

---

## 7. Top Label

Text:

RESERVE YOUR TABLE

Structure:

* Small horizontal line
* Uppercase label text

Style:

* Small font size
* Wide letter spacing
* Muted antique gold color
* Font weight 600
* Left aligned
* Spacious gap before heading

Purpose:

* Creates premium editorial introduction
* Clearly signals the CTA section

---

## 8. Main Heading

Heading text:

```txt
Join Us at The
Table
```

Styling direction:

* Large editorial serif font
* Soft ivory color
* “The Table” should be italic and antique gold
* Strong premium hierarchy
* Left aligned
* Large line height but not too loose

The heading should feel elegant and memorable.

Avoid making the heading look like a regular marketing banner.

---

## 9. Description Text

Suggested text:

Whether it’s a quiet dinner for two, a family celebration, or a corporate gathering — The Kerala Table welcomes you with the warmth of God’s Own Country.

Style:

* Medium paragraph size
* Relaxed line height
* Soft ivory / muted white color
* Maximum width around 560px
* Short and readable

Purpose:

* Emotionally invite the user
* Mention different dining use cases
* Connect reservation with hospitality

---

## 10. Info Details Row

Add three information blocks:

1. Location
2. Hours
3. Contact

Desktop layout:

* 3 columns
* Location can be slightly wider
* Proper gap between details

Tablet layout:

* 2 columns
* Location may span full width if needed

Mobile layout:

* 1 column
* Details stacked vertically

Each block should contain:

* Small uppercase label
* Detail text below

---

## 11. Suggested Info Content

### Location

First Floor, Palm Beach Galleria Mall, 109 & 110, Plot No. 17, Sector 19D, Vashi, Navi Mumbai, Maharashtra 400703

### Hours

Monday – Sunday
12–4 PM, 7 PM–12 AM

### Contact

thekeralatable.com

Optional: Add phone number if available.

---

## 12. Info Text Styling

Detail labels:

* Small uppercase
* Wide letter spacing
* Antique gold color
* Bold weight

Detail text:

* Small to medium size
* Soft ivory color
* Relaxed line height
* Easy to read

The details should feel structured and clean, not crowded.

---

## 13. CTA Button

Button text:

CALL TO RESERVE

Button structure:

* Optional phone icon before text
* Rounded pill button
* Outline style by default
* Ivory border
* Ivory text
* Transparent background

Hover behavior:

* Antique gold background
* Deep green text
* Antique gold border
* Slight upward movement

The button should be visible but elegant.

Avoid adding multiple CTA buttons in this section.

---

## 14. Visual Style

Use a dark cinematic Kerala palette.

Suggested colors:

```css id="oc468g"
--section-bg: #0e1a12;
--deep-green: #123f1f;
--overlay-green: #153f20;
--kerala-green: #214f2a;
--antique-gold: #c4b64b;
--muted-gold: #a99b3f;
--ivory: #f4f1df;
--muted-ivory: #d8d8ca;
--soft-white: #ededdf;
--border-light: rgba(244, 241, 223, 0.35);
```

Color usage:

* Background overlay: deep green / near black
* Heading: ivory
* Highlight text: antique gold
* Labels: muted gold
* Body: muted ivory
* Button border: soft ivory
* Button hover: antique gold

---

## 15. Spacing Guidelines

Desktop:

* Section min-height: around 780px
* Vertical padding: around 100px
* Label to heading: around 42px
* Heading to paragraph: around 44px
* Paragraph to details: around 48px
* Details to button: around 52px

Tablet:

* Padding: around 90px 32px
* Heading size reduced
* Details row becomes 2 columns

Mobile:

* Padding: around 72px 20px
* Heading size reduced
* Details stacked
* Button can be full width or natural width
* Keep strong spacing between detail blocks

---

## 16. Responsive Behavior

Desktop:

* Content left aligned
* Large heading
* 3-column details row
* Background image visible mostly on right
* Button below details

Tablet:

* Content width 100%
* Max width around 650px
* Heading reduced
* Details row changes to 2 columns

Mobile:

* Single-column structure
* Background image darker for readability
* Heading around 48px to 56px
* Details stacked vertically
* Button full width or centered naturally
* Keep content readable and uncrowded

Mobile layout:

```txt
-----------------------------
| ─ RESERVE YOUR TABLE       |
|                             |
| Join Us at The             |
| Table                      |
|                             |
| Short paragraph             |
|                             |
| LOCATION                    |
| Address                     |
|                             |
| HOURS                       |
| Timings                     |
|                             |
| CONTACT                     |
| Website / Phone             |
|                             |
| [Call to Reserve]           |
-----------------------------
```

---

## 17. Animation Direction

Use subtle Framer Motion animations.

Animation flow:

1. Label fades upward
2. Heading fades in slowly
3. Paragraph fades in after heading
4. Info blocks fade up with stagger
5. CTA button fades in last
6. Background image can have very slow zoom

Animation style:

* Elegant
* Slow
* Smooth
* Minimal

Avoid:

* Fast bounce
* Heavy parallax
* Flashy text animation
* Too many moving objects

---

## 18. Important Factors

* This section should convert users without feeling pushy.
* Text readability is the highest priority.
* Background image must be visible but muted.
* The left side must have stronger overlay darkness.
* Keep the content left-aligned on desktop.
* Use only one main CTA button.
* Use location, hours, and contact information clearly.
* The heading should feel editorial and premium.
* Use warm ivory text instead of pure white.
* Use antique gold only for emphasis.
* Do not use cards inside this section.
* Do not use React Virtuoso.
* Use `next/image` if using a background image component.
* Keep the section lightweight and responsive.

---

## 19. Accessibility Requirements

Do:

* Use semantic section structure.
* Use one clear h2 heading.
* Keep strong contrast between text and background.
* Make the CTA button keyboard accessible.
* Use readable font sizes on mobile.
* Add accessible label for the call button.
* Keep important text as real HTML text.

Do not:

* Put reservation details inside the background image.
* Use low contrast text over the image.
* Make the button too small.
* Remove focus states.
* Use motion that affects readability.

---

## 20. Performance Requirements

Do:

* Use optimized background image.
* Use WebP or AVIF if possible.
* Use `next/image` for image handling if practical.
* Keep overlays as CSS gradients.
* Animate transform/opacity only.
* Keep the section lightweight.

Do not:

* Use video background.
* Use multiple heavy background images.
* Use large uncompressed images.
* Use heavy animation libraries unnecessarily.
* Use React Virtuoso.

---

## 21. Do’s

* Use a dark cinematic Kerala-green overlay.
* Keep the content left-aligned and spacious.
* Make the heading large and editorial.
* Highlight “The Table” in italic antique gold.
* Keep the restaurant image visible but muted.
* Show location, hours, and contact details clearly.
* Use one clean rounded outline CTA button.
* Maintain strong contrast for readability.
* Use warm ivory text, not pure white.
* Keep the design conversion-focused but elegant.

---

## 22. Don’ts

* Do not make the background image too bright.
* Do not center-align the whole section on desktop.
* Do not use too many buttons.
* Do not add cards inside this section.
* Do not use neon green or bright yellow.
* Do not make text too small.
* Do not overload the section with long copy.
* Do not use heavy shadows or glassmorphism.
* Do not make the CTA look like a generic ecommerce button.
* Do not break the premium Kerala restaurant identity.

---

## 23. Final Expected Output

Codex should create a clean component named:

ReservationCTASection

The component should include:

* Full-width cinematic reservation section
* Restaurant interior background image
* Dark Kerala-green overlays
* Left-aligned editorial content
* Label: Reserve Your Table
* Heading: Join Us at The Table
* Short reservation paragraph
* Location, hours, and contact details
* Rounded call-to-reserve button
* Subtle Framer Motion animations
* Tailwind CSS styling
* shadcn-compatible structure
* Accessible HTML
* Production-ready responsive layout

---

## Final Visual Direction

The final section should feel like a cinematic invitation to visit The Kerala Table.

It should communicate:

Reserve your table.
Experience Kerala hospitality.
Visit a warm and premium restaurant space.
Enjoy authentic South Indian dining with comfort and care.

```
```
