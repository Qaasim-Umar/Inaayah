import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-brand text-brand-foreground hover:bg-brand-hover active:bg-brand-pressed",
  accent:
    "bg-sky text-accent-foreground hover:bg-brand-soft-strong active:bg-brand-soft",
  secondary:
    "border border-border bg-surface text-foreground hover:bg-surface-muted active:bg-muted",
  ghost: "text-brand hover:bg-brand-soft active:bg-brand-soft-strong",
  text: "text-brand decoration-brand/35 underline underline-offset-8 hover:decoration-brand active:text-brand-pressed",
  "text-light": "text-brand-foreground decoration-brand-foreground/40 underline underline-offset-8 hover:decoration-brand-foreground active:text-sky",
  "outline-light":
    "border border-brand-foreground/35 bg-brand-foreground/10 text-brand-foreground hover:bg-brand-foreground/15 active:bg-brand-foreground/20",
} as const;

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: keyof typeof variants;
};

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "motion-button inline-flex min-h-12 items-center justify-center gap-3 text-sm font-extrabold transition-[background-color,color,border-color,text-decoration-color,transform,box-shadow] duration-200",
        variant === "text" || variant === "text-light"
          ? "py-3"
          : "rounded-xl px-5 py-3",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus/35",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
