import type { ReactNode } from "react";
import { Bricks } from "react-bootstrap-icons";

import { cn } from "@/lib/utils";

/**
 * Page rhythm, in one place. Every section on every page uses these, so the
 * vertical spacing and the horizontal container are identical site-wide and
 * every page shares one rhythm.
 */

/** Vertical padding for every full-width section. No exceptions. */
export const SECTION_Y = "py-16 md:py-24";

/** The content container. */
export const CONTAINER = "mx-auto max-w-6xl px-8 sm:px-12 lg:px-16";

/** Gap between a section heading block and the content under it. */
export const CONTENT_GAP = "mt-12 md:mt-16";

/** Gap between items in any grid. */
export const GRID_GAP = "gap-6";

/**
 * Sections are transparent so the column rules stay visible behind them the
 * whole way down the page. Tone comes from the cards and panels *inside* a
 * section — a full-bleed fill would black out the lines for its entire height.
 */
const PANEL = {
  light: "",
  dark: "bg-mvcb-black px-8 py-12 sm:px-12 md:px-16 md:py-20",
  navy: "bg-mvcb-navy px-8 py-12 sm:px-12 md:px-16 md:py-20",
  orange: "bg-mvcb-orange px-8 py-10 sm:px-12 md:px-16 md:py-14",
} as const;

export function Section({
  id,
  tone = "light",
  className,
  children,
}: {
  id?: string;
  tone?: keyof typeof PANEL;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn(SECTION_Y, className)}>
      <div className={cn(CONTAINER, PANEL[tone])}>{children}</div>
    </section>
  );
}

/**
 * Small lowercase orange label with a mark, sitting above a heading.
 * Lowercase and specific ("proof in every project"), never a shouty uppercase
 * category name — that's the difference between this and a stock eyebrow.
 */
export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2 text-sm font-semibold",
        tone === "dark" ? "text-white" : "text-mvcb-orange",
        className,
      )}
    >
      <Bricks
        className="h-4 w-4 shrink-0 text-mvcb-orange"
        aria-hidden="true"
      />
      {children}
    </p>
  );
}

/** Heading block: eyebrow, uppercase headline, optional intro. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const isDark = tone === "dark";

  return (
    <div className={cn("max-w-2xl", className)} data-reveal>
      {eyebrow ? (
        <Eyebrow tone={isDark ? "dark" : "light"}>{eyebrow}</Eyebrow>
      ) : null}
      <h2
        className={cn(
          "mt-4 text-3xl leading-[1.05] font-extrabold tracking-[-0.02em] uppercase md:text-5xl",
          isDark ? "text-white" : "text-mvcb-black",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            isDark ? "text-neutral-300" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
