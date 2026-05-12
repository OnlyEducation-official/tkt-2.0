"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import Logo from "@/components/common/Logo";
import SocialLinks from "@/components/common/SocialLinks";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/constants/siteConfig";
import { exploreLinks } from "@/data/site";

const columnVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const, delay: index * 0.08 }
  })
};

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#0d160f] px-5 py-16 text-[#f4f1df] md:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_1.15fr_0.8fr_1.35fr] lg:gap-16">
          <motion.div
            custom={0}
            variants={columnVariants}
            initial={false}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Logo />
            <p className="mt-7 max-w-sm text-sm leading-8 text-[#c9cabc]">
              {siteConfig.description}
            </p>
            <SocialLinks className="mt-7" />
          </motion.div>

          <motion.div
            custom={1}
            variants={columnVariants}
            initial={false}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <FooterHeading>Reserve a Table</FooterHeading>
            <div className="grid gap-4">
              {siteConfig.reservationPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href="#reservation"
                  className="group flex max-w-xs items-center gap-4 rounded-2xl border border-white/14 bg-white/[0.035] p-4 transition hover:-translate-y-1 hover:border-brand-yellow/45 hover:bg-white/[0.06]"
                >
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#f4f1df] text-sm font-black text-[#214f2a]">
                    {platform.name.slice(0, 2).toUpperCase()}
                  </span>
                  <span>
                    <span className="block font-semibold text-[#c9cabc] transition group-hover:text-brand-yellow">
                      {platform.name}
                    </span>
                    <span className="text-xs uppercase tracking-[0.22em] text-[#7f857b]">
                      {platform.label}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            custom={2}
            variants={columnVariants}
            initial={false}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <FooterHeading line={false}>Explore</FooterHeading>
            <nav className="grid gap-6" aria-label="Footer navigation">
              {exploreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#c9cabc] transition hover:translate-x-1 hover:text-brand-yellow"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          <motion.div
            custom={3}
            variants={columnVariants}
            initial={false}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <FooterHeading line={false}>Find Us</FooterHeading>
            <address className="max-w-sm not-italic text-sm leading-8 text-[#c9cabc]">
              {siteConfig.address}
            </address>
            <div className="my-6 h-px w-11 bg-white/12" />
            <p className="text-sm leading-8 text-[#c9cabc]">{siteConfig.hours}</p>
            <a
              href={siteConfig.website}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block text-sm font-semibold text-brand-yellow transition hover:text-[#f4f1df]"
            >
              {siteConfig.websiteLabel}
            </a>

            <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.28em] text-[#7f857b]">
              Order Online
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {siteConfig.orderPlatforms.map((platform) => (
                <Button
                  key={platform.name}
                  asChild
                  size="sm"
                  variant="outline"
                  className="h-9 border-white/14 px-5 text-[10px] uppercase tracking-[0.22em] text-[#7f857b] hover:border-brand-yellow hover:text-brand-yellow"
                >
                  <a href={platform.href} target="_blank" rel="noreferrer">
                    {platform.name}
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-16 border-t border-white/12 pt-7">
          <div className="flex flex-col gap-3 text-xs text-[#7f857b] md:flex-row md:items-center md:justify-between">
            <p>&copy; 2026 The Kerala Table. All rights reserved.</p>
            <p>Crafted with the warmth of Kerala</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({
  children,
  line = true
}: {
  children: React.ReactNode;
  line?: boolean;
}) {
  return (
    <div className="mb-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#7f857b]">
      {line ? <span className="h-px w-9 bg-brand-yellow/60" aria-hidden="true" /> : null}
      {children}
    </div>
  );
}
