"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { heroImages } from "@/data/site";

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.22
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" as const }
  }
};

export default function KeralaTableHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  const activeImage = heroImages[activeIndex];

  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden bg-background"
      aria-label="The Kerala Table hero"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeImage.src}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: 1, scale: reduceMotion ? 1 : 1.08 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.35, ease: "easeOut" },
            scale: { duration: 7.5, ease: "easeOut" }
          }}
        >
          <Image
            src={activeImage.src}
            alt=""
            fill
            priority={activeIndex === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/58" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-[#2a1207]/90" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(216,168,78,0.16), rgba(3,6,4,0.82) 68%)"
        }}
      />

      <motion.div
        variants={contentVariants}
        initial={false}
        animate="visible"
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-5xl translate-y-[-3%] flex-col items-center justify-center px-5 text-center"
      >
        <motion.p
          variants={itemVariants}
          className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-brand-yellow/85 sm:text-sm"
        >
          Authentic Kerala Dining
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="max-w-5xl text-balance text-5xl font-extrabold leading-none tracking-[0.08em] text-[#fff7e8] sm:text-6xl sm:tracking-[0.12em] md:text-7xl lg:text-8xl"
        >
          THE KERALA TABLE
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="gold-line mt-6 h-px w-28"
          aria-hidden="true"
        />

        <motion.h2
          variants={itemVariants}
          className="mt-7 text-2xl font-medium text-[#ffe9c7] sm:text-3xl md:text-4xl"
        >
          Experience Kerala on a Banana Leaf
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/82 sm:text-lg md:text-xl"
        >
          Traditional recipes, soulful flavours, and the warmth of South Indian
          hospitality served fresh at The Kerala Table.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
        >
          <Button asChild size="lg" variant="gold" className="w-full sm:w-auto">
            <Link href="#reservation">Reserve a Table</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full border-white/35 bg-white/5 text-white backdrop-blur hover:bg-white hover:text-[#1b0f08] sm:w-auto"
          >
            <Link href="#menu">Explore Menu</Link>
          </Button>
        </motion.div>
      </motion.div>

      <Link
        href="#culture"
        aria-label="Scroll to Kerala food culture section"
        className="absolute bottom-7 left-1/2 z-10 grid -translate-x-1/2 place-items-center gap-2 text-xs uppercase tracking-[0.24em] text-white/62 transition hover:text-brand-yellow"
      >
        <span>Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
      </Link>
    </section>
  );
}
