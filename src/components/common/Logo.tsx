import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  compact?: boolean;
};

export default function Logo({ className, compact = false }: LogoProps) {
  return (
    <Link
      href="#home"
      aria-label="The Kerala Table home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span className="grid h-11 w-11 place-items-center rounded-full border border-brand-yellow/30 bg-secondary text-sm font-extrabold text-brand-yellow shadow-inner shadow-black/25 transition-colors group-hover:border-brand-yellow/70">
        TKT
      </span>
      <span
        className={cn(
          "font-display text-[1.35rem] font-medium leading-[0.95] tracking-wide text-foreground",
          compact && "text-lg"
        )}
      >
        The Kerala
        <br />
        Table
      </span>
    </Link>
  );
}
