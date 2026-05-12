# Updated Requirement: Infinite Scroll with Dual Featured Center Cards

## Component 4: Dish Cards Infinite Scroll

## Website: The Kerala Table

---

## Concept

Create a premium horizontal infinite-scroll dish card section where **all dish cards move smoothly**, but the **middle 2 cards remain visually larger** than the side cards.

This will create a strong “featured spotlight” effect, where the user’s focus naturally goes to the center dishes.

---

## Layout Structure

```txt
------------------------------------------------
|                                              |
|          Signature Dishes of Kerala           |
|                                              |
|   [Small]   [Small]   [Large] [Large]   [Small] [Small]
|                       Center Focus            |
|                                              |
|        Smooth Infinite Horizontal Scroll      |
|                                              |
------------------------------------------------
```

---

## Visual Behaviour

The carousel should scroll horizontally in an infinite loop.

At any point, the **2 cards closest to the center of the viewport** should appear larger.

All other cards on the left and right should remain slightly smaller.

The center 2 cards should look like featured dishes, while the side cards should look like supporting dishes.

---

## Card Size Rules

### Center 2 Featured Cards

```txt
Width: Larger
Height: Taller
Scale: 1.08 to 1.15
Opacity: 100%
Shadow: Stronger
Border: Subtle glowing border
Position: Slightly lifted upward
```

### Side Cards

```txt
Width: Smaller
Height: Normal
Scale: 0.88 to 0.95
Opacity: 70% to 85%
Shadow: Soft
Border: Minimal or none
Position: Normal
```

---

## Card Structure

Each dish card should contain only:

```txt
--------------------------
|                        |
|      Dish Image        |
|                        |
|      Dish Name         |
|      Short Tagline     |
--------------------------
```

Example:

```txt
--------------------------
|                        |
|      Sadya Image       |
|                        |
|      Kerala Sadya      |
|      Traditional Meal  |
--------------------------
```

---

## Suggested Card Content

### Card 1

**Kerala Sadya**
Traditional Meal

### Card 2

**Appam & Stew**
Soft & Comforting

### Card 3

**Puttu Kadala**
Classic Breakfast

### Card 4

**Kerala Parotta**
Layered & Flaky

### Card 5

**Meen Curry**
Coastal Favourite

### Card 6

**Payasam**
Sweet Kerala Finish

### Card 7

**Avial**
Balanced Veg Curry

### Card 8

**Filter Coffee**
South Indian Classic

---

## Detailed Layout Requirement

The section should have a dark Kerala-inspired background.

The top area should contain a small label, main heading, and short paragraph.

```txt
Small Label: Our Dishes

Heading:
Signature Dishes of Kerala

Description:
From festive sadya to comforting appam and stew, every dish at The Kerala Table carries the warmth, culture, and identity of Kerala.
```

Below the text, place the infinite horizontal carousel.

The carousel should be centered inside the section and should take full width.

The middle part of the carousel should visually feel like the main focus area.

---

## Animation Requirement

The carousel should scroll smoothly and continuously.

The scroll should not feel fast or distracting.

Recommended speed: slow to medium.

The animation should feel premium, calm, and elegant.

On hover:

```txt
Pause the carousel
Slightly zoom the hovered card
Increase brightness of dish name
Show stronger shadow
```

---

## Center Focus Logic

The carousel should detect which cards are currently near the center of the screen.

The **2 cards nearest to the center** should receive the featured style.

Featured style means:

```txt
Bigger card size
Higher opacity
Stronger shadow
Slight upward movement
Clearer dish name
Subtle golden or green border glow
```

All remaining cards should automatically return to the smaller style.

---

## Visual Style

Use a premium South Indian restaurant look.

### Suggested Colors

```txt
Background: Deep charcoal / dark brown
Primary Accent: Kerala green
Secondary Accent: Warm gold
Text: Soft white
Muted Text: Warm beige
Card Background: Dark brown / near-black
Border: Subtle golden-green tone
```

### Suggested Design Feel

The section should feel:

```txt
Premium
Cultural
Warm
Elegant
Restaurant-focused
Kerala-inspired
```

---

## Responsive Behaviour

### Desktop

Show 5 to 6 cards visible at once.

The middle 2 cards should be larger.

```txt
[Small] [Small] [Large] [Large] [Small] [Small]
```

### Tablet

Show 3 to 4 cards visible at once.

The middle 2 cards can still be larger.

```txt
[Small] [Large] [Large] [Small]
```

### Mobile

Show 1 large center card and parts of side cards.

Since mobile width is limited, only the single card closest to the center can become larger.

```txt
[partial small] [Large] [partial small]
```

---

## Do’s

Use high-quality dish images.

Keep dish names short and readable.

Use smooth infinite horizontal scrolling.

Make the middle 2 cards clearly larger than the others.

Use soft shadows, rounded corners, and warm highlights.

Pause carousel movement on hover.

Keep the design elegant and not too crowded.

Use consistent image aspect ratio for all cards.

---

## Don’ts

Do not make all cards the same size.

Do not make the scroll too fast.

Do not add long descriptions inside the cards.

Do not use too many buttons in this section.

Do not stretch or crop food images badly.

Do not use harsh neon effects.

Do not make the center cards too large on mobile.

---

## Final Component Requirement Summary

Create an infinite horizontal dish carousel for **The Kerala Table** where dishes scroll smoothly across the section. The carousel should have a premium center-focus effect where the **middle 2 cards are larger, brighter, slightly lifted, and more highlighted**, while the side cards remain smaller and softer. Each card should display a dish image, dish name, and a short tagline. The overall design should feel elegant, cultural, warm, and rooted in Kerala’s food identity.
