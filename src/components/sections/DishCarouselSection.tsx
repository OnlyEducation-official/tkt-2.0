"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { dishCards } from "@/data/site";
import { cn } from "@/lib/utils";

export default function DishCarouselSection() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const [featuredCards, setFeaturedCards] = useState<Set<number>>(new Set());
  const renderedCards = useMemo(() => [...dishCards, ...dishCards], []);

  useEffect(() => {
    let raf = 0;
    let lastUpdate = 0;

    const updateFeaturedCards = (time: number) => {
      if (time - lastUpdate > 180 && wrapperRef.current) {
        const wrapperRect = wrapperRef.current.getBoundingClientRect();
        const center = wrapperRect.left + wrapperRect.width / 2;
        const featureCount = window.innerWidth < 640 ? 1 : 2;

        const nearest = cardRefs.current
          .map((card, index) => {
            if (!card) return null;
            const rect = card.getBoundingClientRect();

            return {
              index,
              distance: Math.abs(rect.left + rect.width / 2 - center)
            };
          })
          .filter((item): item is { index: number; distance: number } => Boolean(item))
          .sort((a, b) => a.distance - b.distance)
          .slice(0, featureCount)
          .map((item) => item.index);

        setFeaturedCards(new Set(nearest));
        lastUpdate = time;
      }

      raf = window.requestAnimationFrame(updateFeaturedCards);
    };

    raf = window.requestAnimationFrame(updateFeaturedCards);

    return () => window.cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="menu" className="section-pad overflow-hidden bg-[#090d08]">
      <Container>
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeading
            eyebrow="Our Dishes"
            title="Signature Dishes of Kerala"
            description="From festive sadya to comforting appam and stew, every dish at The Kerala Table carries the warmth, culture, and identity of Kerala."
          />
        </motion.div>
      </Container>

      <div
        ref={wrapperRef}
        className="pause-on-hover relative mt-14 w-full overflow-hidden py-10"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#090d08] to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#090d08] to-transparent md:w-40" />

        <div className="animate-dish-scroll flex w-max gap-5 px-5 will-change-transform md:gap-7">
          {renderedCards.map((dish, index) => {
            const isFeatured = featuredCards.has(index);

            return (
              <article
                key={`${dish.name}-${index}`}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                className={cn(
                  "group relative w-[245px] shrink-0 overflow-hidden rounded-2xl border bg-card shadow-xl transition duration-500 md:w-[280px]",
                  isFeatured
                    ? "-translate-y-4 scale-[1.08] border-brand-yellow/55 opacity-100 shadow-2xl shadow-brand-yellow/10"
                    : "scale-[0.92] border-border/70 opacity-75"
                )}
              >
                <div className="relative h-[305px] overflow-hidden md:h-[350px]">
                  <Image
                    src={dish.image}
                    alt={`${dish.name} at The Kerala Table`}
                    fill
                    sizes="280px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/18 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3
                    className={cn(
                      "text-xl font-bold text-foreground transition",
                      isFeatured && "text-brand-yellow"
                    )}
                  >
                    {dish.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#ffe9c7]/80">
                    {dish.tagline}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
