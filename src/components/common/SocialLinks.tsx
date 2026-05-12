import { Camera, Globe2, MessageCircle } from "lucide-react";

import { siteConfig } from "@/constants/siteConfig";
import { cn } from "@/lib/utils";

const iconMap = {
  Instagram: Camera,
  Facebook: MessageCircle,
  Website: Globe2
};

type SocialLinksProps = {
  className?: string;
};

export default function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-5", className)}>
      {siteConfig.socials.map((social) => {
        const Icon = iconMap[social.name as keyof typeof iconMap] ?? Globe2;

        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
            className="text-muted-foreground transition hover:-translate-y-0.5 hover:text-brand-yellow"
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
