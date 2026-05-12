"use client";

import { Clock, Globe2, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/constants/siteConfig";

const details = [
  {
    icon: MapPin,
    label: "Location",
    text: siteConfig.address
  },
  {
    icon: Clock,
    label: "Hours",
    text: siteConfig.hours
  },
  {
    icon: Globe2,
    label: "Contact",
    text: siteConfig.websiteLabel
  }
];

export default function ReservationCTASection() {
  return (
    <section
      id="reservation"
      className="relative min-h-[760px] overflow-hidden bg-[#0e1a12]"
    >
      <Image
        src="/images/restaurant-ambience-warm.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#071009]/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071009] via-[#123f1f]/88 to-[#123f1f]/28" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071009] via-transparent to-black/25" />

      <Container className="relative z-10 flex min-h-[760px] items-center py-20">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.28em] text-brand-yellow/78">
            <span className="h-px w-10 bg-brand-yellow/65" aria-hidden="true" />
            Reserve Your Table
          </div>

          <h2 className="mt-10 font-display text-5xl leading-[0.98] text-[#f4f1df] md:text-7xl lg:text-8xl">
            Join Us at{" "}
            <span className="block italic text-brand-yellow/86">The Table</span>
          </h2>

          <p className="mt-9 max-w-xl text-base leading-8 text-[#d8d8ca] md:text-lg">
            Whether it is a quiet dinner for two, a family celebration, or a
            corporate gathering, The Kerala Table welcomes you with the warmth
            of God&apos;s Own Country.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {details.map((detail, index) => {
              const Icon = detail.icon;

              return (
                <motion.div
                  key={detail.label}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut",
                    delay: 0.12 + index * 0.07
                  }}
                  className="border-t border-white/18 pt-5"
                >
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-brand-yellow/72">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {detail.label}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#f4f1df]/86">
                    {detail.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="mt-12 border-[#f4f1df]/45 text-[#f4f1df] hover:border-brand-yellow hover:bg-brand-yellow hover:text-[#0e1a12]"
          >
            <a
              href={`tel:${siteConfig.reservationPhone}`}
              aria-label={`Call The Kerala Table at ${siteConfig.displayPhone}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call to Reserve
            </a>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
