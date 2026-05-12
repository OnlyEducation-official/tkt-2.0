import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Kerala Table | Authentic Kerala Dining in Navi Mumbai",
  description:
    "A premium Kerala-inspired South Indian restaurant experience in Vashi, Navi Mumbai, rooted in banana-leaf dining, warm hospitality, and coastal flavors."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
