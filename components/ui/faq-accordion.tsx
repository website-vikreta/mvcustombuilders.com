"use client";

import { useId, useState } from "react";
import { ChevronDown } from "react-bootstrap-icons";

import { cn } from "@/lib/utils";

export type FaqItem = { question: string; answer: string };

/**
 * One question open at a time. Height is animated with a CSS grid-rows
 * trick (0fr -> 1fr) instead of measuring scrollHeight in JS, so it works
 * for any answer length with no ResizeObserver.
 */
export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="border-t border-mvcb-line">
      {items.map((item, index) => {
        const open = openIndex === index;
        const questionId = `${baseId}-q${index}`;
        const panelId = `${baseId}-a${index}`;

        return (
          <div key={item.question} className="border-b border-mvcb-line">
            <h3>
              <button
                type="button"
                id={questionId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-extrabold text-mvcb-black transition-colors hover:text-mvcb-orange sm:text-lg"
              >
                {item.question}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-mvcb-orange transition-transform motion-reduce:transition-none",
                    open && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={questionId}
              className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
