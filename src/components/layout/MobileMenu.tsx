"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";

import Logo from "@/components/common/Logo";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/constants/siteConfig";
import { navLinks } from "@/data/site";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.24 }}
          className="absolute inset-x-4 top-20 z-50 rounded-2xl border border-border bg-card/95 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl lg:hidden"
        >
          <div className="mb-5 flex items-center justify-between">
            <Logo compact />
            <span className="rounded-full bg-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-yellow/80">
              Vashi
            </span>
          </div>
          <nav aria-label="Mobile navigation" className="grid gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button asChild className="mt-5 w-full">
            <a href={`tel:${siteConfig.reservationPhone}`} onClick={onClose}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call to Reserve
            </a>
          </Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
