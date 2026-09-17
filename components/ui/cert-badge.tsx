import type { Certification } from "@/lib/certifications";
import { cn } from "@/lib/utils";

const SIZE = {
  sm: { tile: "h-10 w-10", icon: "h-4 w-4" },
  md: { tile: "h-14 w-14", icon: "h-6 w-6" },
  lg: { tile: "h-16 w-16", icon: "h-7 w-7" },
} as const;

/**
 * The site's own seal for a license/certification: no third-party logo
 * exists that we can legitimately reproduce (see lib/certifications.ts for
 * why), so this is a solid-colour icon tile in our own brand language
 * instead. `tone="orange"` for light backgrounds, `tone="outline"` (a
 * translucent bordered tile) for the dark/orange footer panel where a
 * solid orange tile would disappear against the panel's own fill.
 */
export default function CertBadge({
  cert,
  size = "md",
  tone = "orange",
  className,
}: {
  cert: Certification;
  size?: keyof typeof SIZE;
  tone?: "orange" | "outline";
  className?: string;
}) {
  const Icon = cert.icon;
  const { tile, icon } = SIZE[size];

  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center",
        tile,
        tone === "orange"
          ? "bg-mvcb-orange"
          : "border border-white/30 bg-white/10",
        className,
      )}
      aria-hidden="true"
    >
      <Icon className={cn(icon, "text-white")} />
    </span>
  );
}
