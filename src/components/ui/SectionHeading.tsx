import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  inverse = true,
  className
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "mx-0 text-left",
        className
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-yellow/80">
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl",
          inverse ? "text-foreground" : "text-[#241208]"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mx-auto mt-5 max-w-2xl text-base leading-7 md:text-lg",
            align === "left" && "mx-0",
            inverse ? "text-muted-foreground" : "text-[#5d4a3b]"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
