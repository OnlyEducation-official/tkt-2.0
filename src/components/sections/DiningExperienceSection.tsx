"use client";

import { HeartHandshake, Sparkles, UsersRound } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ambienceCards } from "@/data/site";

const iconMap = {
  UsersRound,
  Sparkles,
  HeartHandshake
};

export default function DiningExperienceSection() {
  return (
    <section id="ambience" className="section-pad bg-background">
      <Container>
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.72, ease: "easeOut" }}
        >
          <SectionHeading
            eyebrow="Kerala Hospitality"
            title="A Dining Experience Rooted in Kerala"
            description="Step into a space where traditional South Indian warmth meets modern comfort, designed for families, conversations, celebrations, and soulful Kerala meals."
          />
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {ambienceCards.map((card, index) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];

            return (
              <motion.article
                key={card.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.62,
                  ease: "easeOut",
                  delay: index * 0.08
                }}
                className="group rounded-2xl border border-border bg-card/86 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-brand-yellow/45 md:p-7"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-yellow/12 text-brand-yellow transition group-hover:bg-brand-yellow/20">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {card.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="group relative mt-14 min-h-[310px] overflow-hidden rounded-2xl shadow-2xl shadow-black/35 md:min-h-[470px] lg:min-h-[540px]"
        >
          <Image
            src="/images/restaurant-dining-green.jpg"
            alt="The Kerala Table dining room with warm lighting and green seating"
            fill
            sizes="100vw"
            className="object-cover transition duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 max-w-sm">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-yellow">
              Inside The Kerala Table
            </p>
            <p className="mt-3 text-2xl font-bold text-foreground">
              Warm. Cultural. Homely.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
