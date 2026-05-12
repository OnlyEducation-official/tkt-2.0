Use this as your **master prompt for Codex**:

````md
Act as a senior frontend developer with strong experience in building modern landing pages using Next.js, React, Tailwind CSS, and component-based architecture.

I am creating a landing page website. There is no backend available for this project, so everything should be frontend-only. Do not create API routes, database connections, authentication logic, admin panels, or backend services.

Your task is to create a clean, scalable, and well-organized frontend folder structure where every section of the landing page is separated into reusable components.

## Main Goal

Build a professional landing page with a clean structure, reusable components, responsive layout, and maintainable code.

The website should be easy to extend in the future. Each section should be placed in its own component file instead of writing everything inside one page file.

---

## Recommended Folder Structure

Create the project structure like this:

```txt
src/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   │
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── CTASection.tsx
│   │   └── ContactSection.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── Container.tsx
│   │   ├── Card.tsx
│   │   └── Badge.tsx
│   │
│   └── common/
│       ├── Logo.tsx
│       ├── SocialLinks.tsx
│       └── ScrollToTop.tsx
│
├── data/
│   ├── navLinks.ts
│   ├── services.ts
│   ├── features.ts
│   ├── testimonials.ts
│   └── gallery.ts
│
├── lib/
│   └── utils.ts
│
├── constants/
│   └── siteConfig.ts
│
└── assets/
    ├── images/
    └── icons/
````

---

## Page Structure

The main `page.tsx` file should only import and arrange the landing page sections.

Example:

```tsx
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </main>
  );
}
```

The `page.tsx` file should not contain heavy UI code. It should only combine sections.

---

## Component Rules

Each landing page section must be created as a separate component.

For example:

```txt
HeroSection.tsx
AboutSection.tsx
ServicesSection.tsx
FeaturesSection.tsx
GallerySection.tsx
TestimonialsSection.tsx
CTASection.tsx
ContactSection.tsx
```

Each section should have:

* Clear component name
* Responsive design
* Proper spacing
* Semantic HTML
* Reusable UI elements
* Clean Tailwind classes
* No unnecessary logic

---

## Data Management

Since there is no backend, all repeated content should be stored inside the `data/` folder.

For example:

```ts
export const services = [
  {
    title: "Service One",
    description: "Short description of the service.",
    icon: "IconName",
  },
  {
    title: "Service Two",
    description: "Short description of the service.",
    icon: "IconName",
  },
];
```

Use `.map()` to render repeated cards instead of hardcoding every item inside the component.

---

## Design Requirements

The landing page should look modern, clean, and premium.

Use:

* Proper spacing
* Responsive layout
* Clear typography hierarchy
* Mobile-first design
* Smooth hover states
* Clean cards
* Consistent section padding
* Consistent button styling
* Accessible color contrast
* Reusable container width

Use a common `Container` component for consistent alignment.

Example:

```tsx
export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
```

---

## Do’s

* Create reusable components.
* Keep every section in a separate file.
* Use clean and readable code.
* Use TypeScript properly.
* Use semantic HTML tags like `section`, `header`, `footer`, `main`, `nav`.
* Keep data inside the `data/` folder.
* Use responsive Tailwind classes.
* Use consistent spacing across sections.
* Use reusable UI components like `Button`, `Card`, `Container`, and `SectionHeading`.
* Make the website mobile-friendly.
* Add hover effects where needed.
* Use accessible alt text for images.
* Keep the design visually balanced.
* Keep the code scalable for future changes.

---

## Don’ts

* Do not create backend code.
* Do not create API routes.
* Do not add database logic.
* Do not add authentication.
* Do not write all sections inside `page.tsx`.
* Do not hardcode repeated card data directly inside components.
* Do not create messy or deeply nested components unnecessarily.
* Do not use inline styles unless absolutely necessary.
* Do not use random spacing values everywhere.
* Do not ignore mobile responsiveness.
* Do not add unused files or unnecessary packages.
* Do not create one large component for the whole landing page.
* Do not mix business data, layout code, and reusable UI code in one file.
* Do not use placeholder backend form submission.
* Do not add fake loading states for backend operations.

---

## Coding Style

Follow this coding style:

* Use functional components.
* Use named and default exports consistently.
* Keep component files small and focused.
* Use meaningful variable names.
* Keep reusable static content in `data/`.
* Use `siteConfig.ts` for common brand information.

Example:

```ts
export const siteConfig = {
  name: "Brand Name",
  description: "Short brand description",
  phone: "+91 0000000000",
  email: "hello@example.com",
  address: "Your location here",
};
```

---

## Final Expected Output

Create a complete frontend-only landing page structure with separated components.

The final code should include:

* Proper folder structure
* Clean `page.tsx`
* Separate section components
* Reusable UI components
* Static data files
* Responsive design
* No backend logic
* No API integration
* No database connection
* Clean and production-ready frontend code

Build the project in a way that another developer can easily understand, maintain, and extend.

```
```
