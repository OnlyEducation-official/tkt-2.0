"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { reviewHighlights } from "@/data/site";

const renderedNotes = [...reviewHighlights, ...reviewHighlights];

export default function GuestReviewsSection() {
  return (
    <section className="overflow-hidden bg-[#f3f1e8] py-16 text-[#214f2a] md:py-24">
      <Container>
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#b8a14a]">
            <span className="hidden h-px w-10 bg-[#b8a14a]/60 sm:block" />
            Guest Notes
            <span className="hidden h-px w-10 bg-[#b8a14a]/60 sm:block" />
          </div>
          <h2 className="mt-7 text-4xl font-bold leading-tight md:text-6xl">
            What Our Guests{" "}
            <span className="font-display italic text-[#a7653f]">Notice</span>
          </h2>
        </motion.div>
      </Container>

      <div className="pause-on-hover relative mt-14 overflow-hidden py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#f3f1e8] to-transparent md:w-36" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#f3f1e8] to-transparent md:w-36" />
        <div className="animate-review-scroll flex w-max gap-7 px-5 will-change-transform">
          {renderedNotes.map((note, index) => (
            <article
              key={`${note.title}-${index}`}
              className="group relative w-[310px] shrink-0 rounded-2xl border border-[#ddd8c8] bg-[#fbfaf4] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#214f2a]/10 md:w-[405px] md:p-9"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-[#b8a14a]" aria-label="Highlighted note">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span
                  className="font-display text-6xl leading-none text-[#ddd8c8]"
                  aria-hidden="true"
                >
                  &quot;
                </span>
              </div>
              <p className="mt-6 min-h-28 text-[15px] leading-7 text-[#6f7169]">
                {note.text}
              </p>
              <div className="mt-7 border-t border-[#ddd8c8] pt-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-[#ddd8c8] bg-[#f3f1e8] text-xs font-bold text-[#214f2a]">
                      {note.title
                        .split(" ")
                        .map((part) => part[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-[#214f2a]">
                        {note.title}
                      </h3>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#aaa79c]">
                        {note.source}
                      </p>
                    </div>
                  </div>
                  <span className="hidden text-[10px] font-bold uppercase tracking-[0.22em] text-[#aaa79c] sm:inline">
                    TKT
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Container>
        <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-[#ddd8c8] bg-[#fbfaf4]/70 px-6 py-6 text-center md:flex-row md:justify-center md:gap-8">
          <p className="font-display text-3xl font-bold text-[#214f2a]">
            Guest feedback themes
          </p>
          <span className="hidden h-10 w-px bg-[#ddd8c8] md:block" />
          <p className="max-w-md text-sm leading-6 text-[#6f7169]">
            Food, service, ambience, and homely Kerala warmth are surfaced here
            as editorial highlights, without hardcoding unverified ratings.
          </p>
        </div>
      </Container>
    </section>
  );
}
