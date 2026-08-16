import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { ArrowRepeat, ArrowRight } from "react-bootstrap-icons";

import { cn } from "@/lib/utils";

/**
 * The site's single clickable. Buttons and links are the same thing visually,
 * so they're the same component — pass `href` and it renders a link, omit it
 * and it renders a `<button>`.
 *
 * Element chosen from the props:
 *   href="/about"            → next/link
 *   href="https://…"         → <a target="_blank"> + rel + a screen-reader note
 *   href="tel:…" / "mailto:" → plain <a>, no new tab
 *   no href                  → <button type={type}>
 *   disabled or loading      → always <button disabled>, even with an href, so
 *                              a dead control can't be navigated by keyboard
 *
 * Shape follows the reference theme: hard rectangles, uppercase label, and —
 * with `withArrow` — a divider and a square arrow cell on the trailing edge.
 */

type Variant = "primary" | "secondary" | "ghost" | "inline";
type Size = "sm" | "md" | "lg";
type Tone = "light" | "dark";

type ActionProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  /** `dark` = sitting on a black/navy/orange surface. */
  tone?: Tone;
  /** Trailing arrow. On primary/secondary it gets its own divided cell. */
  withArrow?: boolean;
  loading?: boolean;
  loadingLabel?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  /** Square, label-less control. `aria-label` is required with it. */
  iconOnly?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  "aria-label"?: string;
  "aria-expanded"?: boolean;
};

const BASE =
  "group/action inline-flex items-stretch font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mvcb-orange disabled:pointer-events-none disabled:opacity-50";

const VARIANTS: Record<Variant, Record<Tone, string>> = {
  primary: {
    light: "bg-mvcb-orange text-white hover:bg-mvcb-black",
    dark: "bg-mvcb-orange text-white hover:bg-white hover:text-mvcb-black",
  },
  secondary: {
    light:
      "border border-mvcb-black/20 text-mvcb-black hover:border-mvcb-black hover:bg-mvcb-black hover:text-white",
    dark: "border border-white/30 text-white hover:bg-white hover:text-mvcb-black",
  },
  ghost: {
    light: "text-mvcb-black hover:bg-mvcb-cream",
    dark: "text-white hover:bg-white/10",
  },
  inline: {
    light: "text-mvcb-black hover:text-mvcb-orange",
    dark: "text-white hover:text-mvcb-orange",
  },
};

/** Divider between the label cell and the arrow cell, per variant/tone. */
const DIVIDERS: Record<Variant, Record<Tone, string>> = {
  primary: {
    light: "border-white/30",
    dark: "border-white/30",
  },
  secondary: {
    light: "border-mvcb-black/20 group-hover/action:border-white/30",
    dark: "border-white/30 group-hover/action:border-mvcb-black/20",
  },
  ghost: { light: "border-mvcb-line", dark: "border-white/30" },
  inline: { light: "border-transparent", dark: "border-transparent" },
};

const LABEL_PAD: Record<Size, string> = {
  sm: "h-10 px-4 text-xs tracking-[0.08em]",
  md: "h-12 px-6 text-xs tracking-[0.1em]",
  lg: "h-14 px-8 text-sm tracking-[0.1em]",
};

const ARROW_CELL: Record<Size, string> = {
  sm: "w-10",
  md: "w-12",
  lg: "w-14",
};

const ICON_ONLY: Record<Size, string> = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-14 w-14",
};

const ICON: Record<Size, string> = {
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-4 w-4",
};

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

function isSameDocument(href: string) {
  return /^(tel:|mailto:|sms:)/.test(href);
}

export default function Action({
  children,
  href,
  variant = "primary",
  size = "md",
  tone = "light",
  withArrow = false,
  loading = false,
  loadingLabel = "Working",
  disabled = false,
  fullWidth = false,
  iconOnly = false,
  type = "button",
  className,
  onClick,
  ...aria
}: ActionProps) {
  const inline = variant === "inline";

  const classes = cn(
    BASE,
    VARIANTS[variant][tone],
    inline
      ? "items-center gap-3 text-sm tracking-normal uppercase"
      : iconOnly
        ? cn("items-center justify-center", ICON_ONLY[size])
        : "uppercase",
    fullWidth && "w-full",
    className,
  );

  const arrowCell =
    withArrow && !inline && !iconOnly ? (
      <span
        aria-hidden="true"
        className={cn(
          "flex shrink-0 items-center justify-center border-l",
          ARROW_CELL[size],
          DIVIDERS[variant][tone],
        )}
      >
        <ArrowRight className={ICON[size]} />
      </span>
    ) : null;

  const body = iconOnly ? (
    children
  ) : inline ? (
    <>
      {loading ? (
        <ArrowRepeat
          className={cn(ICON[size], "animate-spin")}
          aria-hidden="true"
        />
      ) : null}
      {loading ? loadingLabel : children}
      {withArrow && !loading ? (
        <ArrowRight
          className={cn(
            ICON[size],
            "transition-transform group-hover/action:translate-x-1",
          )}
          aria-hidden="true"
        />
      ) : null}
    </>
  ) : (
    <>
      <span
        className={cn(
          "flex flex-1 items-center justify-center gap-2 whitespace-nowrap",
          LABEL_PAD[size],
        )}
      >
        {loading ? (
          <ArrowRepeat
            className={cn(ICON[size], "animate-spin")}
            aria-hidden="true"
          />
        ) : null}
        {loading ? loadingLabel : children}
      </span>
      {arrowCell}
    </>
  );

  // A disabled or in-flight control is never navigable, whatever href says.
  if (!href || disabled || loading) {
    return (
      <button
        type={type}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        onClick={onClick}
        className={classes}
        {...aria}
      >
        {body}
      </button>
    );
  }

  if (isExternal(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={classes}
        {...aria}
      >
        {body}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  if (isSameDocument(href)) {
    return (
      <a href={href} onClick={onClick} className={classes} {...aria}>
        {body}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={classes} {...aria}>
      {body}
    </Link>
  );
}
