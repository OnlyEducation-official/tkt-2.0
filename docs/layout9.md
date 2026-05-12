# Component 10: Premium Footer Section

## Pixel-Perfect Prompt for Codex

## Website: The Kerala Table

Create a premium footer section for **The Kerala Table**, an Indian restaurant website rooted in Kerala culture, identity, integrity, and authentic South Indian hospitality.

This footer should visually match the reference image: deep dark green background, elegant serif logo text, soft ivory body text, muted gold highlights, rounded reservation platform cards, clean navigation links, location details, order buttons, and a minimal bottom copyright bar.

---

# Section Purpose

The footer should work as the final website section where users can quickly access:

```txt
Restaurant identity
Short brand description
Social media links
Reservation platforms
Website navigation
Restaurant address
Opening hours
Website/contact link
Online ordering buttons
Copyright information
```

The design should feel:

```txt
Premium
Minimal
Cultural
Warm
Editorial
Kerala-inspired
Restaurant-focused
```

---

# Main Layout Structure

```txt
------------------------------------------------------------
| Logo + About       Reserve a Table     Explore     Find Us |
| Social Icons       Platform Cards      Links       Address |
|                                                           |
|                                                           |
| --------------------------------------------------------- |
| © 2026 The Kerala Table             Crafted with warmth... |
------------------------------------------------------------
```

---

# Main Section Container

```txt
Width: 100%
Background: deep dark green / near black
Color: soft ivory
Padding-top: 72px to 86px
Padding-bottom: 28px
Position: relative
Overflow: hidden
```

Use a dark background similar to the reference.

```css
--footer-bg: #111b13;
--footer-bg-deep: #0d160f;
--kerala-green: #214f2a;
--ivory: #f4f1df;
--muted-ivory: #c9cabc;
--muted-text: #7f857b;
--antique-gold: #b8a64a;
--border-muted: rgba(244, 241, 223, 0.12);
--card-bg: rgba(255, 255, 255, 0.035);
--card-border: rgba(244, 241, 223, 0.14);
```

---

# Inner Footer Wrapper

```txt
Max-width: 1240px
Width: 100%
Margin: 0 auto
Padding-left/right: 24px
```

Main content should use a 4-column grid.

```txt
Display: grid
Grid-template-columns: 1.4fr 1.2fr 0.8fr 1.35fr
Column-gap: 76px to 96px
Align-items: flex-start
```

---

# Column 1: Brand Identity

## Logo Area

Place the restaurant logo/title at the top-left.

```txt
The Kerala
Table
```

### Logo Styling

```txt
Font-family: elegant serif
Font-size: 28px to 32px
Line-height: 0.92
Font-weight: 500
Color: soft ivory
Letter-spacing: 0.5px
Margin-bottom: 28px
```

The text should break into two lines exactly like:

```txt
The Kerala
Table
```

If using an actual logo image, keep it around:

```txt
Width: 150px to 170px
Height: auto
Object-fit: contain
```

---

## Brand Description

Text:

```txt
Authentic Kerala cuisine in the heart of Navi Mumbai. Banana-leaf feasts, hand-ground masalas, and the warmth of God's Own Country — served daily.
```

### Description Styling

```txt
Max-width: 290px
Font-size: 14px to 15px
Line-height: 2
Color: muted ivory
Font-weight: 400
Margin-bottom: 32px
```

---

## Social Icons

Add 3 small social icons horizontally.

Suggested icons:

```txt
Instagram
Facebook
Website / Link
```

### Social Icon Row

```txt
Display: flex
Align-items: center
Gap: 22px
```

### Icon Styling

```txt
Width: 17px
Height: 17px
Color: muted-text
Opacity: 0.75
Cursor: pointer
Transition: all 250ms ease
```

### Icon Hover

```txt
Color: antique-gold
Opacity: 1
Transform: translateY(-2px)
```

---

# Column 2: Reserve a Table

## Column Heading

```txt
RESERVE A TABLE
```

### Heading Styling

```txt
Font-size: 10px
Letter-spacing: 3px
Text-transform: uppercase
Color: muted-text
Font-weight: 700
Margin-bottom: 28px
Display: flex
Align-items: center
Gap: 12px
```

Add a small horizontal gold line before the heading.

```txt
Line width: 34px
Height: 1px
Background: antique-gold
Opacity: 0.65
```

---

## Reservation Platform Cards

Create 3 rounded cards stacked vertically.

```txt
[Dineout]
[EazyDiner]
[District]
```

### Card Layout

```txt
Width: 245px to 270px
Height: 78px to 84px
Border-radius: 18px
Border: 1px solid card-border
Background: card-bg
Display: flex
Align-items: center
Gap: 18px
Padding: 0 18px
Margin-bottom: 16px
Cursor: pointer
Transition: all 300ms ease
```

### Card Hover

```txt
Background: rgba(255, 255, 255, 0.06)
Border-color: rgba(184, 166, 74, 0.45)
Transform: translateY(-3px)
```

---

## Platform Logo Box

Each card should contain a small rounded square logo box.

```txt
Width: 56px
Height: 56px
Border-radius: 14px
Background: #f4f1df
Display: flex
Align-items: center
Justify-content: center
Flex-shrink: 0
```

Inside the box, place the platform logo or placeholder.

```txt
Logo width: 30px to 36px
Height: auto
Object-fit: contain
```

---

## Platform Name

```txt
Dineout
EazyDiner
District
```

### Text Styling

```txt
Font-size: 15px to 16px
Font-weight: 600
Color: muted ivory
```

---

# Column 3: Explore

## Column Heading

```txt
EXPLORE
```

### Heading Styling

```txt
Font-size: 10px
Letter-spacing: 3px
Text-transform: uppercase
Color: muted-text
Font-weight: 700
Margin-bottom: 34px
```

## Navigation Links

Links:

```txt
Our Story
Menu
Ambience
Reservations
```

### Link Styling

```txt
Display: flex
Flex-direction: column
Gap: 28px
Font-size: 15px
Color: muted ivory
Font-weight: 400
Text-decoration: none
Transition: all 250ms ease
```

### Link Hover

```txt
Color: antique-gold
Transform: translateX(4px)
```

---

# Column 4: Find Us

## Column Heading

```txt
FIND US
```

### Heading Styling

```txt
Font-size: 10px
Letter-spacing: 3px
Text-transform: uppercase
Color: muted-text
Font-weight: 700
Margin-bottom: 34px
```

---

## Address Text

```txt
First Floor, Palm Beach Galleria
Mall, 109 & 110, Plot No. 17, Sector
19D, Vashi, Navi Mumbai,
Maharashtra 400703
```

### Address Styling

```txt
Max-width: 320px
Font-size: 15px
Line-height: 2
Color: muted ivory
Font-weight: 400
Margin-bottom: 28px
```

---

## Small Divider

Add a subtle horizontal line after address.

```txt
Width: 42px
Height: 1px
Background: border-muted
Margin: 26px 0
```

---

## Timing Text

```txt
Mon – Sun
12–4 PM, 7 PM–12 AM
```

### Timing Styling

```txt
Font-size: 15px
Line-height: 2
Color: muted ivory
Margin-bottom: 28px
```

---

## Website Link

```txt
thekeralatable.com
```

### Website Link Styling

```txt
Font-size: 15px
Color: antique-gold
Font-weight: 500
Text-decoration: none
Display: inline-block
Margin-bottom: 40px
```

### Hover

```txt
Color: ivory
```

---

## Order Online

Add label:

```txt
ORDER ONLINE
```

### Label Styling

```txt
Font-size: 10px
Letter-spacing: 3px
Text-transform: uppercase
Color: muted-text
Font-weight: 700
Margin-bottom: 18px
```

---

## Order Buttons

Buttons:

```txt
ZOMATO
SWIGGY
```

### Button Row

```txt
Display: flex
Gap: 12px
Align-items: center
```

### Button Styling

```txt
Height: 36px
Padding: 0 22px
Border-radius: 999px
Border: 1px solid border-muted
Background: transparent
Color: muted-text
Font-size: 10px
Letter-spacing: 2.4px
Text-transform: uppercase
Font-weight: 700
Transition: all 250ms ease
```

### Button Hover

```txt
Border-color: antique-gold
Color: antique-gold
Transform: translateY(-2px)
```

---

# Bottom Footer Bar

Add a horizontal divider across the footer before the copyright area.

```txt
Width: 100%
Height: 1px
Background: border-muted
Margin-top: 90px
Margin-bottom: 28px
```

## Bottom Row Layout

```txt
Display: flex
Align-items: center
Justify-content: space-between
Gap: 24px
```

Left text:

```txt
© 2026 The Kerala Table. All rights reserved.
```

Right text:

```txt
Crafted with the warmth of Kerala
```

### Bottom Text Styling

```txt
Font-size: 12px
Color: muted-text
Font-weight: 400
```

---

# Desktop Spacing Reference

```txt
Footer top padding: 78px
Main grid column gap: 80px
Logo to paragraph gap: 26px
Paragraph to icons gap: 28px
Column heading to content gap: 28px to 34px
Reservation card gap: 16px
Explore link gap: 28px
Bottom divider top margin: 90px
Bottom bar height: around 40px
```

---

# Responsive Behaviour

## Tablet

```txt
Grid-template-columns: 1fr 1fr
Row-gap: 64px
Column-gap: 48px
Padding-left/right: 32px
Footer top padding: 70px
```

Suggested tablet layout:

```txt
------------------------------------------------
| Brand Identity       Reserve a Table          |
| Explore              Find Us                  |
------------------------------------------------
```

---

## Mobile

```txt
Grid-template-columns: 1fr
Row-gap: 52px
Padding-left/right: 20px
Padding-top: 60px
Padding-bottom: 28px
```

Mobile layout:

```txt
--------------------------------
| The Kerala Table              |
| Short description             |
| Social icons                  |
|                                |
| RESERVE A TABLE               |
| Platform cards                |
|                                |
| EXPLORE                       |
| Links                         |
|                                |
| FIND US                       |
| Address, hours, website       |
| Order buttons                 |
|                                |
| Copyright                     |
--------------------------------
```

### Mobile Adjustments

```txt
Logo font-size: 28px
Description max-width: 100%
Reservation cards width: 100%
Reservation cards max-width: 320px
Explore links gap: 22px
Bottom row: flex-direction column
Bottom row text-align: left or center
Align bottom text to start on mobile
```

---

# Animation Suggestions

Use subtle animations only.

```txt
Footer columns: fade in upward
Reservation cards: stagger fade in
Social icons: soft hover lift
Links: subtle hover translate
Order buttons: hover lift
```

Recommended timing:

```txt
Duration: 0.7s to 0.9s
Ease: easeOut
Stagger delay: 0.08s
```

Avoid heavy animation because footer should feel stable and elegant.

---

# Do’s

```txt
Use a deep dark green background.
Keep the footer spacious and premium.
Use serif typography for the logo.
Use muted ivory for readable text.
Use antique gold only for highlights.
Keep reservation cards clean and rounded.
Use clear column headings with uppercase letter spacing.
Maintain proper spacing between columns.
Use subtle hover effects.
Keep the bottom copyright bar minimal.
```

---

# Don’ts

```txt
Do not use a bright footer background.
Do not overcrowd the footer with too many links.
Do not use heavy shadows or glassmorphism.
Do not make reservation cards too colorful.
Do not use neon green or bright yellow.
Do not make the logo too large.
Do not use large social icons.
Do not add unnecessary images in the footer.
Do not make the copyright area bulky.
```

---

# Final Component Summary

Create a premium footer for **The Kerala Table** using a dark Kerala-green background, elegant serif branding, short restaurant description, social icons, reservation platform cards, navigation links, location details, opening hours, website link, and order online buttons. The footer should feel minimal, cultural, refined, and aligned with the restaurant’s identity of authentic Kerala hospitality.
