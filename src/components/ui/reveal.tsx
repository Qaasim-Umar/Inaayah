"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

import { cn } from "@/lib/cn";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || reducedMotion.matches || !("IntersectionObserver" in window)) return;

    // Keep server-rendered content visible until progressive enhancement is ready.
    if (element.getBoundingClientRect().top <= window.innerHeight) return;
    element.dataset.reveal = "pending";
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.dataset.reveal = "visible";
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    observer.observe(element);

    function showForReducedMotion() {
      if (reducedMotion.matches && element) {
        element.dataset.reveal = "visible";
        observer.disconnect();
      }
    }
    reducedMotion.addEventListener("change", showForReducedMotion);
    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", showForReducedMotion);
      delete element.dataset.reveal;
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
