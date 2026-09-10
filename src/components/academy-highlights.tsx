"use client";

import { Pause, Play } from "lucide-react";
import { useState } from "react";

const highlights = [
  { value: "A complete journey", label: "Early Years to Secondary" },
  { value: "Rooted in the Qur’an", label: "Focused two year Tahfiz" },
  { value: "A place to belong", label: "Day and boarding school" },
  { value: "Iwo, Osun State", label: "Learning with purpose" },
] as const;

function HighlightItems({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="academy-ticker-group" aria-hidden={duplicate || undefined}>
      {highlights.map(({ value, label }) => (
        <div key={value} className="academy-ticker-item">
          <span className="academy-ticker-separator" aria-hidden="true" />
          <span className="academy-ticker-copy">
            <strong className="font-display text-base font-semibold leading-none text-brand-foreground sm:text-lg">
              {value}
            </strong>
            <span className="border-l border-brand-foreground/25 pl-2.5 text-[0.65rem] font-extrabold uppercase tracking-[0.11em] text-brand-foreground/70 sm:text-xs">
              {label}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

export function AcademyHighlights() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      aria-labelledby="academy-highlights-title"
      className="academy-ticker-shell relative mt-8 overflow-hidden border-y border-brand-foreground/15 bg-brand text-brand-foreground sm:mt-10"
    >
      <h2 id="academy-highlights-title" className="sr-only">
        The Academy at a glance
      </h2>
      <div className="academy-ticker-window">
        <div
          id="academy-highlights-track"
          className="academy-ticker-track"
          data-paused={isPaused}
        >
          <HighlightItems />
          <HighlightItems duplicate />
        </div>
      </div>
      <button
        type="button"
        onClick={() => setIsPaused((paused) => !paused)}
        aria-controls="academy-highlights-track"
        aria-label={isPaused ? "Resume Academy highlights" : "Pause Academy highlights"}
        title={isPaused ? "Resume Academy highlights" : "Pause Academy highlights"}
        className="academy-ticker-toggle"
      >
        {isPaused ? (
          <Play aria-hidden="true" className="size-4" fill="currentColor" />
        ) : (
          <Pause aria-hidden="true" className="size-4" fill="currentColor" />
        )}
      </button>
    </section>
  );
}
