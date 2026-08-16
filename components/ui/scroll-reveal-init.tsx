"use client";

import { useEffect } from "react";

/**
 * Renders nothing — just wires up scroll-triggered reveal for any element
 * marked `data-reveal`. Only activates (adds "js-reveal" to <html>) when JS
 * has run and prefers-reduced-motion allows it, so content stays fully
 * visible with no JS and with reduced motion.
 */
export default function ScrollRevealInit() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    document.documentElement.classList.add("js-reveal");

    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
