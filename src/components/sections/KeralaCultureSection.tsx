"use client";

import { Flame, HeartHandshake, Leaf, Soup, UtensilsCrossed, Waves } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cultureCards } from "@/data/site";

const iconMap = {
  Leaf,
  Soup,
  Flame,
  UtensilsCrossed,
  HeartHandshake,
  Waves
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.65,
      ease: "easeOut" as const
    }
  })
};

export default function KeralaCultureSection() {
  return (
    <section
      id="culture"
      className="section-pad relative overflow-hidden bg-background"
    >
      <div
        className="absolute left-1/2 top-0 h-80 w-[38rem] -translate-x-1/2 rounded-full bg-primary/16 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <SectionHeading
            eyebrow="Kerala Food Culture"
            title="What Makes Kerala Dining Special?"
            description="Kerala dining is a soulful blend of tradition, ingredients, hospitality, and community, where every meal carries the warmth of home and the richness of culture."
          />
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {cultureCards.map((card, index) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];

            return (
              <motion.article
                key={card.title}
                custom={index}
                variants={cardVariants}
                initial={false}
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="group rounded-2xl border border-border bg-card/78 p-6 shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-brand-yellow/45 hover:bg-[#241208]/90 md:p-7"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-yellow/12 text-brand-yellow transition group-hover:bg-brand-yellow/20">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground transition group-hover:text-brand-yellow">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {card.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
