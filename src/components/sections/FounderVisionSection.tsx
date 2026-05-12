"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { founderStory } from "@/data/site";

export default function FounderVisionSection() {
  return (
    <section id="story" className="bg-[#123f1f] py-16 md:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.48fr_0.52fr] lg:gap-20">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative mx-auto h-[440px] w-full max-w-[500px] overflow-hidden md:h-[560px] lg:h-[680px]"
          >
            <Image
              src="/images/ranjit-founder.jpg"
              alt="Ranjit, founder of The Kerala Table"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-center"
            />
          </motion.div>

          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.28em] text-brand-yellow/72">
              <span className="h-px w-10 bg-brand-yellow/60" aria-hidden="true" />
              The Heart Behind The Table
            </div>

            <h2 className="mt-8 font-display leading-none">
              <span className="block text-5xl italic text-brand-yellow/86 md:text-6xl lg:text-7xl">
                Ranjit&apos;s
              </span>
              <span className="mt-2 block text-6xl text-[#f5f1df] md:text-7xl lg:text-8xl">
                Vision
              </span>
            </h2>

            <div className="mt-8 space-y-5 text-[15px] leading-8 text-[#c8d7c5] md:text-base">
              {founderStory.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <blockquote className="mt-9 border-l border-brand-yellow/55 pl-6">
              <p className="font-display text-2xl italic leading-relaxed text-[#f5f1df] md:text-[1.7rem]">
                &quot;A dish without memory is just food. We cook to keep Kerala
                alive at every table.&quot;
              </p>
              <footer className="mt-4 text-[11px] font-bold uppercase tracking-[0.24em] text-brand-yellow/80">
                Ranjit, Founder
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
