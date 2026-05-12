"use client";

import { CookingPot, CupSoda, Leaf, UsersRound } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { sadyaDetails } from "@/data/site";

const iconMap = {
  Leaf,
  CookingPot,
  CupSoda,
  UsersRound
};

export default function SadyaExperienceSection() {
  return (
    <section id="sadya" className="section-pad bg-[#f6eedc] text-[#241208]">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative min-h-[390px] overflow-hidden rounded-2xl shadow-2xl shadow-[#2a1207]/25 md:min-h-[520px] lg:min-h-[620px]"
          >
            <Image
              src="/images/sadya-veg.jpeg"
              alt="Traditional Kerala sadya served on a banana leaf"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[center_42%] transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#130b06]/85 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="rounded-full bg-brand-yellow px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#1b0f08]">
                Traditional Feast
              </span>
              <h3 className="mt-4 text-3xl font-bold text-[#fff7e8]">
                Kerala Sadya
              </h3>
              <p className="mt-1 text-sm font-medium text-[#ffe9c7]">
                Banana Leaf Meal
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9a6a1e]">
              Signature Kerala Experience
            </p>
            <h2 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              The Sadya Experience
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#5d4a3b] md:text-lg">
              A traditional Kerala sadya is more than a meal. It is a
              celebration of balance, hospitality, and togetherness. Served on a
              banana leaf, every item has its own place, flavour, and purpose.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {sadyaDetails.map((detail, index) => {
                const Icon = iconMap[detail.icon as keyof typeof iconMap];

                return (
                  <motion.div
                    key={detail.label}
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      ease: "easeOut",
                      delay: 0.16 + index * 0.06
                    }}
                    className="flex items-center gap-3 rounded-2xl border border-[#d9c79d] bg-white/45 p-4 shadow-sm"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#214f2a]/10 text-[#214f2a]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold">{detail.label}</span>
                  </motion.div>
                );
              })}
            </div>

            <Button asChild size="lg" className="mt-9 bg-[#241208] text-[#fff7e8] hover:bg-[#3a1a0b]">
              <Link href="#menu">Explore Menu</Link>
            </Button>
            <p className="mt-4 text-sm text-[#6f5c48]">
              Crafted for festive meals, family tables, and slow Sunday lunches.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
